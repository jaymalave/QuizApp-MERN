import React, { useEffect, useState } from "react";
import { getLeaderboard } from "../api/getLeaderboard";
import { getQuestions } from "../api/getQuestions";
import { updateScore } from "../api/updateScore";
import SignOut from "../components/SIgnOut";

export const QuizScreen = (props) => {
  useEffect(() => {
    getLeaderboard().then((response) => {
      console.log(response);
    });
  });

  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
    {
      questionText: "Who is the highest rated chess player in the world?",
      answerOptions: [
        { answerText: "Magnus Carlsen", isCorrect: true },
        { answerText: "Fabiano Caruana", isCorrect: false },
        { answerText: "Anish Giri", isCorrect: false },
        { answerText: "Daniil Dubov", isCorrect: false },
      ],
    },
    {
      questionText: "Who owns Starbucks in India?",
      answerOptions: [
        { answerText: "Reliance", isCorrect: false },
        { answerText: "HCL", isCorrect: false },
        { answerText: "Tata", isCorrect: true },
        { answerText: "Adani Enterprises", isCorrect: false },
      ],
    },
    {
      questionText: "How many World cups have Australia won till date?",
      answerOptions: [
        { answerText: "4", isCorrect: false },
        { answerText: "5", isCorrect: true },
        { answerText: "3", isCorrect: false },
        { answerText: "6", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [test, setTest] = useState("");

  const handleQuestions = async () => {
    const response = await getQuestions();
    console.log(response.message);
    setTest(response.message);
  };

  const handleScore = async (sc) => {
    const response = await updateScore(sc);
    console.log(response, "from backend");
  };

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      console.log(score + 1);
      handleScore(score + 1);
      setShowScore(true);
    }
  };
  return (
    <div className="d-flex justify-content-around">
      <div>
        <h1 className="onboard-text">Hi {props.name}!</h1>
        <div className="app">
          {showScore ? (
            <div className="score-section">
              You scored {score} out of {questions.length}
            </div>
          ) : (
            <>
              <div className="question-section">
                <div className="question-count">
                  <span>Question {currentQuestion + 1}</span>/{questions.length}
                </div>
                <div className="question-text">
                  {questions[currentQuestion].questionText}
                </div>
              </div>
              <div className="answer-section">
                {questions[currentQuestion].answerOptions.map(
                  (answerOption) => (
                    <button
                      onClick={() =>
                        handleAnswerOptionClick(answerOption.isCorrect)
                      }
                    >
                      {answerOption.answerText}
                    </button>
                  )
                )}
              </div>
            </>
          )}
        </div>
        <div className="sign-out-holder">
          <SignOut />
        </div>
      </div>
    </div>
  );
};
