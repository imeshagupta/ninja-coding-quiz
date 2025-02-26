import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <Link to="/quiz">
        <button
          className="btn btn-dark fs-4 rounded-4 fw-bold p-3"
          style={{ color: "#f4b2c7", border: "2px solid #f4b2c7" }}
        >
          Start Quiz
        </button>
      </Link>
    </div>
  );
};

export default Home;
