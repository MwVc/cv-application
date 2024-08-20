export default function WorkExperience({
  workExperience,
  setWorkExperince,
  submittedWorkExperience,
  setSubmittedWorkExperience,
}) {
  function handleSubmit() {
    console.log("Submitting Form");
  }
  function handleChange() {
    console.log("Handling change");
  }
  return (
    <div className="container">
      <form action="#" method="POST" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="job-title">Job Title:</label>
          <input
            type="text"
            id="job-title"
            name="jobTitle"
            value={workExperience.jobTitle}
            onChange={handleChange}
            className="form-control"
            required={true}
            placeholder="e.g CTO"
          />
        </div>
        <div className="form-group">
          <label htmlFor="company-name">Company Name:</label>
          <input
            type="text"
            id="company-name"
            name="companyName"
            value={workExperience.companyName}
            onChange={handleChange}
            className="form-control"
            required={true}
            placeholder="e.g The Boring Company"
          />
        </div>
        <div className="form-group">
          <label htmlFor="job-description">Job Description</label>
          <textarea
            name="jobDescription"
            id="job-description"
            rows={3}
            className="form-control"
            onChange={handleChange}
            required={true}
            value={workExperience.jobDescription}
          ></textarea>
        </div>
      </form>
    </div>
  );
}
