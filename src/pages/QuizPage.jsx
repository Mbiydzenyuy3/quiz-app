import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useQuiz } from "../context/QuizContext";

export default function QuizPage({ onQuizComplete }) {
  const { questions, fetchQuestions } = useQuiz();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  useEffect(() => {
    fetchQuestions();
  });

  function handleAnswer(answer) {
    const newUserAnswers = [...userAnswers, answer];
    setUserAnswers(newUserAnswers);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onQuizComplete(newUserAnswers);
    }
  }

  return (
    <div>
      <div className="main-wrapper">
        <div className="question-container">
          <div className="question-item">
            <h2>Question {currentQuestion + 1}</h2>
            <p>{questions[currentQuestion].question}</p>
          </div>
          <div className="buttons">
            <button className="answer-btn" onClick={() => handleAnswer(true)}>
              True
            </button>
            <button className="answer-btn" onClick={() => handleAnswer(false)}>
              False
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

QuizPage.propTypes = {
  onQuizComplete: PropTypes.func,
  timePerQuestion: PropTypes.number,
};
