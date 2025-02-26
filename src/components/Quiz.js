import quizData from "../data/quizData";
import { useState } from "react";
import Result from "./Result";

const Quiz = () => {
  const [currIndex, setCurrIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedAns, setSelectedAns] = useState("");

  const handleOptionChange = (event) => {
    setSelectedAns(event.target.value);
  };

  const handleNext = () => {
    if (!selectedAns) {
      return;
    }
    if (selectedAns === quizData[currIndex].answer) {
      setScore(score + 1);
    }
    if (currIndex < quizData.length - 1) {
      setCurrIndex(currIndex + 1);
      setSelectedAns("");
    } else {
      setQuizCompleted(true);
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{
        minHeight: "80vh",
        backgroundColor: "linear-gradient(#f4b2c7, #31029e)",
      }}
    >
      {quizCompleted ? (
        <Result score={score} />
      ) : (
        <div
          key={currIndex}
          className="card w-75"
          style={{ width: "18rem", background: "transparent", border: "none" }}
        >
          <div className="card-body" style={{ color: "rgb(61, 3, 39)" }}>
            <h2 className="card-title fw-bold">
              Question {quizData[currIndex].id}
            </h2>
            <p className="card-text fs-3">{quizData[currIndex].question}</p>
          </div>
          <div
            className="mx-2 mb-3 p-2 fw-bold fs-4"
            style={{ color: "rgb(61, 3, 39)" }}
          >
            {quizData[currIndex].options.map((option, optIndex) => (
              <div key={optIndex} className="form-check">
                <input
                  className="form-check-input border border-2 border-dark"
                  type="radio"
                  value={option}
                  name={`question-${currIndex}`}
                  id={`option-${currIndex}-${optIndex}`}
                  checked={selectedAns === option}
                  onChange={handleOptionChange}
                />
                <label
                  className="form-check-label"
                  htmlFor={`option-${currIndex}-${optIndex}`}
                >
                  {option}
                </label>
              </div>
            ))}
          </div>
          <div className="card-body">
            <button
              className="btn px-4 fs-3"
              style={{ backgroundColor: "rgb(61, 3, 39)", color: "white" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
