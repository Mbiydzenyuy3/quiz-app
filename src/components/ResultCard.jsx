import PropTypes from "prop-types";

export default function ResultCard({ tabResponse, score, star }) {
  return (
    <div>
      <div className="card list">
        <div className="card-header d-flex align-items-center g-1">
          <h3>score : {score} / 10</h3>{" "}
          {score > 5 ? (
            <h3 className="mx-2">You Win</h3>
          ) : (
            <h3 className="mx-2 ">You Lost</h3>
          )}
        </div>
        <div className="card-body">
          <div className="results-container">
            {tabResponse.map((item, index) => (
              <div key={index + 1} className="result-item">
                <div className="result-number">{index + 1}</div>
                <div className="result-content">
                  <div className="result-question">{item.question}</div>
                  <div className="result-answers">
                    <div className="answer correct">
                      <span>Correct:</span> {item.correct_answer}
                    </div>
                    <div className="answer yours">
                      <span>Your answer:</span> {item.yours}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button onClick={() => star()} className="btn btn-play-again">
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
}

ResultCard.propTypes = {
  tabResponse: PropTypes.array,
  score: PropTypes.number.isRequired,
  star: PropTypes.func,
};
