export default function PracticalExperience({
  practicalExperience,
  setPracticalExperience,
  submittedPracticalExperience,
  setSubmittedPracticalExperience,
}) {
  function handleSubmit(event) {
    event.preventDefault();

    setSubmittedPracticalExperience(() => {
      if (submittedPracticalExperience.length < 3) {
        return [...submittedPracticalExperience, practicalExperience];
      } else {
        return submittedPracticalExperience;
      }
    });
    setPracticalExperience({ skill: "", yearsOfExperience: "" });
  }

  function handleChange(event) {
    const { value, name } = event.target;
    setPracticalExperience({
      ...practicalExperience,
      [name]: name == "yearsOfExperience" ? parseInt(value) : value,
    });
  }

  function handleDelete() {
    const copyArr = [...submittedPracticalExperience];
    copyArr.splice(-1);
    setSubmittedPracticalExperience(copyArr);
    console.log(copyArr);
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
            value={practicalExperience.skill}
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
            value={practicalExperience.yearsOfExperience}
          />
        </div>
        <div className="d-flex justify-content-between">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={submittedPracticalExperience.length === 3}
          >
            Submit
          </button>
          <button
            type="button"
            className="btn btn-info"
            onClick={handleDelete}
            disabled={submittedPracticalExperience.length === 0}
          >
            Delete Skill
          </button>
        </div>
      </form>
    </div>
  );
}
