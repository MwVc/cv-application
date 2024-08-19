export default function PracticalExperience({
  practicalExperience,
  setPracticalExperience,
  submittedPracticalExperience,
  setSubmittedPracticalExperience,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted");
  }

  function handleChange(event) {
    const { value, name } = event.target;
    setPracticalExperience({
      ...practicalExperience,
      [name]: name == "yearsOfExperience" ? parseInt(value) : value,
    });
  }
  return (
    <div className="container">
      <form action="#" method="POST" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="skill">Skill</label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            name="skill"
            id="skill"
          />
        </div>
        <div className="form-group">
          <label htmlFor="years-of-experience">Years of Experience</label>
          <input
            type="number"
            className="form-control"
            id="years-of-experience"
            onChange={handleChange}
            name="yearsOfExperience"
          />
        </div>
      </form>
    </div>
  );
}
