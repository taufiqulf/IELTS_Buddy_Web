import React, { useRef, useState } from "react";
import { quiz } from "./quiz.js";

const ListeningQuiz = () => {
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(quiz[index]);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);

  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);

  let option_array = [Option1, Option2, Option3, Option4];

  const checkAns = (e, ans) => {
    if (lock === false) {
      if (question.ans === ans) {
        e.target.classList.add("correct");
        setLock(true);
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.add("incorrect");
        setLock(true);
        option_array[question.ans - 1].current.classList.add("correct");
      }
    }
  };

  const next = () => {
    if (lock === true) {
      if (index === quiz.length - 1) {
        setResult(true);
        return 0;
      }
      setIndex(++index);
      setQuestion(quiz[index]);
      setLock(false);
      option_array.map((option) => {
        option.current.classList.remove("correct");
        option.current.classList.remove("incorrect");
        return null;
      });
    }
  };

  const reset = () => {
    setIndex(0);
    setQuestion(quiz[0]);
    setScore(0);
    setLock(false);
    setResult(false);
  };

  return (
    <div className="max-w-screen mt-20">
      <div className="md:px-12 p-4 flex space-x-10 flex items-center justify-center">
        <div>
          <audio controls src="./listening.mp3" type="audio/mp3">
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
      <div className="quiz-container">
        {result ? (
          <></>
        ) : (
          <>
            <h2 className="md:px-12 p-4 flex space-x-10 flex items-center justify-center">
              {index + 1}. {question.question}
            </h2>
            <ul>
              <li
                ref={Option1}
                onClick={(e) => {
                  checkAns(e, 1);
                }}>
                {question.option1}
              </li>
              <li
                ref={Option2}
                onClick={(e) => {
                  checkAns(e, 2);
                }}>
                {question.option2}
              </li>
              <li
                ref={Option3}
                onClick={(e) => {
                  checkAns(e, 3);
                }}>
                {question.option3}
              </li>
              <li
                ref={Option4}
                onClick={(e) => {
                  checkAns(e, 4);
                }}>
                {question.option4}
              </li>
            </ul>
            <button onClick={next} className="btnPrimary">
              Next
            </button>
            <div>
              {index + 1} of {quiz.length} questions
            </div>
          </>
        )}
        {result ? (
          <>
            <h2>
              You Scored {score} out of {quiz.length}
            </h2>
            <button onClick={reset} className="btnPrimary">
              Reset
            </button>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ListeningQuiz;
