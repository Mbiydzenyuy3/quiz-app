import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  const startGame = () => {
    navigate("/quiz");
  };
  return (
    <>
      <div className="container">
        <div className="content">
          <h1>
            Welcome to <span className="color-text"> MELs </span> True or False
            <span className="color-text"> QUIZ </span>
          </h1>
          <p>Take the quiz to stimulate your brain.</p>

          <p>Instructions:</p>
          <ul>
            <li>You will be presented with 10 true/false questions.</li>
            <li>Select your answer for each question.</li>
            <li>You need to answer at least 5 questions correctly to pass.</li>
            <li>To start the game click on the get started button</li>
          </ul>
          <button onClick={startGame}>Get Started</button>
        </div>
      </div>
    </>
  );
}
