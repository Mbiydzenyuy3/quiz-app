import { PropTypes } from "prop-types";

export default function QuestionCard({
  next,
  question,
  number,
  totalQuestion,
  time,
}) {
  return (
    <div className="question-params">
      <div className="question-details">
        <div className="question-timer">
          <h3>
            Question{" "}
            <span>
              {number}/{totalQuestion}
            </span>
          </h3>
          <h3> Timer: {time} </h3>
        </div>
        <div className="question-category">
          <div className="category-div">
            <h4>
              category : <span>{question?.category}</span>
            </h4>
          </div>
          <div className="difficulty-level">
            <h4>
              difficulty : <span> {question?.difficulty} </span>
            </h4>
          </div>
        </div>
        <div className="question-div">
          <h3 className="question">{question?.question}</h3>
        </div>
        <div className="buttons">
          <div className="btn-next-true">
            <button
              onClick={() => next(question, "True")}
              className="btn btn-outline-success button"
            >
              {" "}
              True{" "}
            </button>
          </div>
          <div className="btn-next-false">
            <button
              onClick={() => next(question, "False")}
              className="btn btn-outline-danger button "
            >
              {" "}
              False
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

QuestionCard.propTypes = {
  next: PropTypes.func.isRequired,
  question: PropTypes.object,
  number: PropTypes.number,
  totalQuestion: PropTypes.number,
  time: PropTypes.number,
};
