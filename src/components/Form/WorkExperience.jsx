export default function WorkExperience({
  workExperience,
  setWorkExperience,
  submittedWorkExperience,
  setSubmittedWorkExperience,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    setSubmittedWorkExperience([...submittedWorkExperience, workExperience]);
    setWorkExperience({
      jobTitle: "",
      jobDescription: "",
      companyName: "",
      startDate: "",
      endDate: "",
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setWorkExperience({ ...workExperience, [name]: value });
  }

  function handleDelete() {
    const copyArr = [...submittedWorkExperience];
    copyArr.splice(-1);
    setSubmittedWorkExperience(copyArr);
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
            rows={6}
            className="form-control"
            onChange={handleChange}
            required={true}
            value={workExperience.jobDescription}
            placeholder="e.g  Responsible for overseeing the development of tunneling machines that are faster, safer, and more efficient than anything that came before. Also tasked with preventing these machines from accidentally digging up ancient artifacts or causing traffic jams."
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="start-date">Sarted:</label>
          <input
            type="text"
            name="startDate"
            id="start-date"
            className="form-control"
            onChange={handleChange}
            required={true}
            value={workExperience.startDate}
            placeholder="e.g Nov 1640 "
          />
        </div>
        <div className="form-group">
          <label htmlFor="end-date">Ended:</label>
          <input
            type="text"
            name="endDate"
            id="end-date"
            className="form-control"
            onChange={handleChange}
            required={true}
            value={workExperience.endDate}
            placeholder="e.g Present"
          />
        </div>
        <div className="d-flex justify-content-between">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={submittedWorkExperience.length === 3}
          >
            Submit
          </button>
          <button
            type="button"
            className="btn btn-info"
            onClick={handleDelete}
            disabled={submittedWorkExperience.length === 0}
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
}
