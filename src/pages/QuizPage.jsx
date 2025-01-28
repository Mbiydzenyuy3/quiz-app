
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

export default function QuizPage({
  questions,
  fetchQuestions,
  onQuizComplete,
  timePerQuestion = 30,
}) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(timePerQuestion);

  useEffect(() => {
    if (questions.length === 0) {
      fetchQuestions();
    }
  }, [questions, fetchQuestions]);

 

  function handleAnswer(answer) {
    const newUserAnswers = [...userAnswers, answer];
    setUserAnswers(newUserAnswers);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(timePerQuestion);
    } else {
      onQuizComplete(newUserAnswers);
    }
  }

  if (questions.length === 0) return <div>Loading...</div>;

  return (
    <div>
      <div className="main-wrapper">
        <div className="question-container">
          <div className="question-item">
            <h2>Question {currentQuestion + 1}</h2>
            <p>{questions[currentQuestion].question}</p>
            <p className="timer">Time left: {timeLeft}s</p>
          </div>
          <div className="buttons">
            <button className="answer-btn" onClick={() => handleAnswer("True")}>
              True
            </button>
            <button
              className="answer-btn"
              onClick={() => handleAnswer("False")}
            >
              False
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

QuizPage.propTypes = {
  questions: PropTypes.array.isRequired,
  fetchQuestions: PropTypes.func.isRequired,
  onQuizComplete: PropTypes.func.isRequired,
  timePerQuestion: PropTypes.number,
};
