const About = () => {
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <div
        className="p-4 w-100"
        style={{
          maxWidth: "600px",
          backgroundColor: "#f4b2c6",
          border: "4px solid rgb(41, 4, 106)",
          borderRadius: "10px",
        }}
      >
        <h1 className="text-dark text-center fw-bold border-bottom border-dark pb-2">
          About
        </h1>

        <p className="fs-5">
          <strong>Ninja Coding Quiz</strong> is a thoughtfully designed quiz
          featuring 10 engaging coding multiple-choice questions that blend
          learning with entertainment.
        </p>

        <p className="fs-5">
          Participants are required to select the correct answers, and upon
          completion, a score is generated on the result page.
        </p>

        <h3>Key Features</h3>
        <ul style={{ fontSize: "18px" }}>
          <li>
            <strong>Instant Results:</strong> Get your score immediately after
            completing the quiz.
          </li>
          <li>
            <strong>User-Friendly Interface:</strong> A clean and responsive
            design for a smooth experience.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
