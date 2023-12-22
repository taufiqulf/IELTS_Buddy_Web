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
    <div className="flex items-center justify-center my-5">
      <div className="max-w-screen w-full md:mx-10 mx-5 bg-primary text-secondary py-5 md:px-6 px-4 rounded-[35px]">
        <div className="sm:text-2xl text-xl">
          {result ? (
            <></>
          ) : (
            <>
              <h1 className="text-center text-2xl font-bold py-5">Listen To This Audio Below</h1>
              <div className="flex items-center justify-center py-5">
                <audio controls src="./listening.mp3" type="audio/mp3">
                  Your browser does not support the audio element.
                </audio>
              </div>
              <h2 className="font-bold p-4 flex items-center justify-center">{question.question}</h2>
              <div className="flex items-center justify-center">
                <ul className="cursor-pointer">
                  <li
                    className="border border-secondary rounded-[35px] px-5 py-1 mb-5"
                    ref={Option1}
                    onClick={(e) => {
                      checkAns(e, 1);
                    }}>
                    {question.option1}
                  </li>
                  <li
                    className="border border-secondary rounded-[35px] px-5 py-1 mb-5"
                    ref={Option2}
                    onClick={(e) => {
                      checkAns(e, 2);
                    }}>
                    {question.option2}
                  </li>
                  <li
                    className="border border-secondary rounded-[35px] px-5 py-1 mb-5"
                    ref={Option3}
                    onClick={(e) => {
                      checkAns(e, 3);
                    }}>
                    {question.option3}
                  </li>
                  <li
                    className="border border-secondary rounded-[35px] px-5 py-1 mb-5"
                    ref={Option4}
                    onClick={(e) => {
                      checkAns(e, 4);
                    }}>
                    {question.option4}
                  </li>
                </ul>
              </div>
              <div className="flex justify-center items-center pt-2">
                <h2 className="text-xl">
                  {index + 1} of {quiz.length} questions
                </h2>
              </div>
              <div className="flex justify-center items-center pt-2">
                <button onClick={next} className="btnPrimary text-xl">
                  Next
                </button>
              </div>
            </>
          )}
          {result ? (
            <>
              <div className="grid place-items-center space-y-5">
                <h2 className="">
                  You Scored {score} out of {quiz.length}
                </h2>
                <button onClick={reset} className="btnPrimary ">
                  Reset
                </button>
                <h2>Want to explore more?</h2>
                <img src="/logo.png" className="h-[142px]" />
                <a href="/">
                  <button className="btnPrimary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-orange">
                    Try Our Mobile App
                  </button>
                </a>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListeningQuiz;
