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
    setPracticalExperience({ ...practicalExperience, [name]: value });
    console.log(practicalExperience);
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
          />
        </div>
      </form>
    </div>
  );
}
