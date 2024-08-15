import { useState } from "react";

export default function EducationalExperience({
  educationalExperience,
  setEducationalExperience,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("I am handling Submit");
    console.log(educationalExperience);
  }

  function handleChange(event) {
    const { value, name } = event.target;
    setEducationalExperience({ ...educationalExperience, [name]: value });
    console.log(educationalExperience);
  }

  return (
    <div className="container">
      <form action="#" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="institution">Name of Institution:</label>
          <input
            type="text"
            className="form-control"
            required={true}
            onChange={handleChange}
            name="institution"
            id="institution"
            value={educationalExperience.institution}
          />
        </div>
        <div className="form-group">
          <label htmlFor="qualification">Qualification:</label>
          <input
            type="text"
            className="form-control"
            required={true}
            onChange={handleChange}
            name="qualification"
            id="qualification"
            value={educationalExperience.qualification}
          />
        </div>
        <div className="form-group">
          <label htmlFor="start-year">Start Year</label>
          <input
            type="number"
            className="form-control"
            onChange={handleChange}
            required={true}
            name="startYear"
            id="start-year"
            value={educationalExperience.startYear}
          />
        </div>
        <div className="form-group">
          <label htmlFor="end-year">End Year</label>
          <input
            type="number"
            className="form-control"
            onChange={handleChange}
            name="endYear"
            id="end-year"
            value={educationalExperience.endYear}
          />
        </div>
        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-primary w-45">
            Submit
          </button>
          <button
            className="btn btn-info w-45"
            type="button"
            onClick={() => console.log("submitting")}
            disabled={true}
          >
            Edit
          </button>
        </div>
      </form>
    </div>
  );
}
