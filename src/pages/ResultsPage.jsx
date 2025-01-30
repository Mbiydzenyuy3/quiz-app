import { useLocation, useNavigate } from "react-router-dom";

export default function ResultsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { questions, userAnswers } = location.state;

  const score = userAnswers.filter(
    (answer, index) => answer === questions[index].correct_answer
  ).length;

  const passed = score >= 5;

  return (
    <div>
      <h1>Quiz Results</h1>
      <h2>Your Score: {score} / 10</h2>
      <p>
        {passed ? "Congratulations! You passed!" : "Sorry, you did not pass."}
      </p>
      <h3>Questions and Answers:</h3>
      <ul>
        {questions.map((q, index) => (
          <li key={index}>
            <p>
              Q{index + 1}: {q.question}
            </p>
            <p>Your answer: {userAnswers[index]}</p>
            <p>Correct answer: {q.correct_answer}</p>
          </li>
        ))}
      </ul>
      <button onClick={() => navigate("/")}>Play Again</button>
    </div>
  );
}
