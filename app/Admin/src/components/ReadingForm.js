import React, { useState, useEffect } from "react";
import axios from 'axios';
import {useAuth0} from '@auth0/auth0-react';

function ReadingForm() {
  const [readingText, setReadingText] = useState('');
  const [questions, setQuestions] = useState([{ 
    question: '', 
    answerType: 'text', 
    correctAnswer: '', 
    alternateAnswers: [], 
    wrongAnswers: Array(4).fill(''), 
    explanation: '' 
  }]);

  const handleReadingTextChange = (e) => {
    setReadingText(e.target.value);
  };

  const handleQuestionFieldChange = (index, field, value) => {
    const updatedQuestions = questions.map((q, i) => i === index ? { ...q, [field]: value } : q);
    setQuestions(updatedQuestions);
  };

  const handleQuestionArrayFieldChange = (index, arrayField, arrayIndex, value) => {
    const updatedQuestions = questions.map((q, i) => {
      if (i === index) {
        const newArray = [...q[arrayField]];
        newArray[arrayIndex] = value;
        return { ...q, [arrayField]: newArray };
      }
      return q;
    });
    setQuestions(updatedQuestions);
  };

  const addQuestion = () => {
    setQuestions([...questions, { 
      question: '', 
      answerType: 'text', 
      correctAnswer: '', 
      alternateAnswers: [], 
      wrongAnswers: Array(4).fill(''), 
      explanation: '' 
    }]);
  };
  const {getAccessTokenSilently} = useAuth0();

  const handleSubmit = async (e) => {
      e.preventDefault();
    
      try {
        const Token = await getAccessTokenSilently({
          authorizationParams: {
            audience: 'localhost:5050/api'
          }
        });

        // Post the reading text to get a document ID
        const textResponse = await axios.post('http://localhost:5050/api/reading/readingText', 
        { Text: readingText },
        { headers: { Authorization: `Bearer ${Token}` } }
        );
        const textId = textResponse.data.documentId; // Assuming the response contains the ID
    
        const answerIDs = [];

        // Post each question
        for (const question of questions) {
          const postData = {
            TextID: textId,
            Question: question.question,
            Explanation: question.explanation,
            TypeFillText: question.answerType === 'text',
            Answer: question.answerType === 'text' 
                      ? [question.correctAnswer, ...question.alternateAnswers]
                      : [question.correctAnswer, ...question.wrongAnswers]
          };
        const answerResponse = await axios.post('http://localhost:5050/api/reading/readingAnswer', 
        postData,
        { headers: { Authorization: `Bearer ${Token}` }}
        );
        if (answerResponse.data.documentId) {
          answerIDs.push(answerResponse.data.documentId);
        } else {
          answerIDs.push(null);
        }
      }

        // Post the reading index
        const indexData = {
          TextID: textId,
          AnswerID: answerIDs
        };
        try {
          await axios.post('http://localhost:5050/api/reading/readingIndex', 
          indexData,
          { headers: { Authorization: `Bearer ${Token}` }});
        } catch (error) {
          console.error('Error with readingIndex:', error.response ? error.response.data : error.message);
        }
    
        console.log('Submission successful');

        // Clear the form
        setShowSuccessPopup(true);
        setTimeout(() => {
          setShowSuccessPopup(false);
          setReadingText('');
          setQuestions([{ 
            question: '', 
            answerType: 'text', 
            correctAnswer: '', 
            alternateAnswers: [], 
            wrongAnswers: Array(4).fill(''), 
            explanation: '' 
          }]);

        }, 3000);
        
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    };

  const [ShowSuccessPopup, setShowSuccessPopup] = useState(false);

  useEffect(() => {
    if (ShowSuccessPopup) {
      const timer = setTimeout(() => {
        setShowSuccessPopup(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [ShowSuccessPopup]);

  const addAlternateAnswer = (index) => {
    const updatedQuestions = questions.map((q, i) => {
      if (i === index) {
        return { ...q, alternateAnswers: [...q.alternateAnswers, ''] };
      }
      return q;
    });
    setQuestions(updatedQuestions);
  };

return (
  <div className="relative">
    {ShowSuccessPopup && (
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-4 rounded shadow-lg animate-opacity">
        Submission Successful!
      </div>
    )}
  <form onSubmit={handleSubmit} className="p-8 bg-white shadow-lg rounded-lg">
      <div className="mb-6">
        <label className="block text-lg font-semibold text-gray-700 mb-2">Reading Text</label>
        <textarea
          value={readingText}
          onChange={handleReadingTextChange}
          className="textarea textarea-bordered w-full h-64"
          placeholder="Insert the reading text here..."
        />
      </div>

    {questions.map((q, index) => (
      <div key={index} className="mb-6 border-b pb-4">
        <label className="block text-lg font-semibold text-gray-700">Question {index + 1}</label>
          <input
            type="text"
            value={q.question}
            onChange={(e) => handleQuestionFieldChange(index, 'question', e.target.value)}
            className="input input-bordered w-full mt-2"
          />
          <div className="mb-4">
            <label className="block text-lg font-semibold text-gray-700">Answer Type</label>
            <select
              value={q.answerType}
              onChange={(e) => handleQuestionFieldChange(index, 'answerType', e.target.value)}
              className="select select-bordered w-full mt-2"
            >
              <option value="text">Short Text</option>
              <option value="multiple">Multiple Choices</option>
            </select>
          </div>
        {q.answerType === 'text' && (
          <div className="mb-6">
          <label htmlFor="answer" className="block text-lg font-semibold text-gray-700">Answer</label>
          <input
            type="text"
            id={`answer-${index}`}
            value={q.correctAnswer}
            onChange={(e) => handleQuestionFieldChange(index, 'correctAnswer', e.target.value)}
            className="input input-bordered w-full mt-2 mb-2"
          />
        {q.alternateAnswers.map((answer, ansIndex) => (
          <input
            key={ansIndex}
            type="text"
            placeholder={`Alternate Answer ${ansIndex + 1}`}
            value={answer}
            onChange={(e) => handleQuestionArrayFieldChange(index, 'alternateAnswers', ansIndex, e.target.value)}
            className="input input-bordered w-full mt-2 mb-2"
          />
        ))}
        <button 
          type="button" 
          onClick={() => addAlternateAnswer(index)} // Pass the current question index
          className="btn btn-outline btn-accent mt-2"
        >
          + Add Alternate Answer
        </button>
      </div>
    )}
        {q.answerType === 'multiple' && (
          <div className="mb-6">
          <label className="block text-lg font-semibold text-gray-700">Correct Answer</label>
          <input
            type="text"
            value={q.correctAnswer}
            onChange={(e) => handleQuestionFieldChange(index, 'correctAnswer', e.target.value)}
            className="input input-bordered w-full mt-2 mb-2"
          />
          {q.wrongAnswers.map((answer, ansIndex) => (
            <input
              key={ansIndex}
              type="text"
              placeholder={`Wrong Answer ${ansIndex + 1}`}
              value={answer}
              onChange={(e) => handleQuestionArrayFieldChange(index, 'wrongAnswers', ansIndex, e.target.value)}
              className="input input-bordered w-full mb-2"
            />
          ))}
        </div>
        )}
        <div className="mb-6">
          <label htmlFor={`explanation-${index}`} className="block text-lg font-semibold text-gray-700">Explanation</label>
          <textarea
            id={`explanation-${index}`}
            value={q.explanation}
            onChange={(e) => handleQuestionFieldChange(index, 'explanation', e.target.value)}
            className="textarea textarea-bordered w-full mt-2 h-32"
          />
        </div>
      </div>
    ))}

    <button type="button" onClick={addQuestion} className="btn btn-outline btn-accent mt-2">
      + Add Question
    </button>

    <button type="submit" className="btn btn-primary w-full mt-4">
      Submit
    </button>
  </form>
</div>
);
}

export default ReadingForm;