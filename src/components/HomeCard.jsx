import { PropTypes } from "prop-types";

export default function HomeCard({ navigate, isLoading }) {
  return (
    <div className="container">
      <h1>
        Welcome to MELs
        <span className="color-text"> QUIZ </span>
      </h1>
      <p>Test your knowledge of the world with this quiz. Enjoy!</p>
      <div className="content">
        <h3>Instructions</h3>
        <ol>
          <li>You will be presented with 10 true/false questions.</li>
          <li>Select your answer for each question.</li>
          <li>You need to answer at least 5 questions correctly to pass.</li>
          <li>To start the game click on the get started button</li>
        </ol>
        <div className="row">
          {isLoading ? (
            <button
              onClick={() => navigate()}
              className="btn btn-outline-success button"
            >
              start game
            </button>
          ) : (
            <button
              onClick={() => navigate()}
              className="btn btn-outline-success button-disabled"
            >
              start game
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

HomeCard.propTypes = {
  navigate: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};
