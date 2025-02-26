import { Link } from "react-router-dom";

const Result = ({ score }) => {
  const scoreResult = () => {
    if (score === 10) {
      return <p>Wohoo! Impressive🥳</p>;
    } else if (score === 9 || score === 8) {
      return <p>Happy!😊</p>;
    } else if (score === 7 || score === 6) {
      return <p>Good!😇</p>;
    } else if (score === 5 || score === 4) {
      return <p>You Passed! 😃</p>;
    } else if (score === 3 || score === 2) {
      return <p>Poor! 😕</p>;
    } else if (score === 1) {
      return <p>Sad! 😓</p>;
    } else if (score === 0) {
      return <p>Bad Luck!💔Try Again.</p>;
    }
  };

  return (
    <div>
      <div
        className="container d-flex justify-content-center align-items-center flex-column"
        style={{ minHeight: "80vh" }}
      >
        <h1 className=" fw-bold mb-2 pb-3" style={{ color: "rgb(61, 3, 39)" }}>
          Your Score: {score}
        </h1>
        <p
          className="mb-2 fw-bold text-center fs-3"
          style={{ color: "rgb(61, 3, 39)" }}
        >
          {scoreResult(score)}
        </p>
        <div className="text-center">
          <Link to="/">
            <button
              className="btn px-4 fs-3 text-center my-2 "
              style={{ backgroundColor: "rgb(61, 3, 39)", color: "white" }}
            >
              Go Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Result;
