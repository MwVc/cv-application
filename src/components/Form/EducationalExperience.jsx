import { useState } from "react";

export default function EducationalExperience({
  educationalExperience,
  setEducationalExperience,
  submittedEducationalExperience,
  setSubmittedEducationalExperience,
}) {
  function handleChange(event) {
    const { value, name } = event.target;
    setEducationalExperience({ ...educationalExperience, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    setSubmittedEducationalExperience(() => {
      if (submittedEducationalExperience.length < 3) {
        return [...submittedEducationalExperience, educationalExperience];
      } else {
        return submittedEducationalExperience;
      }
    });

    setEducationalExperience({
      institution: "",
      qualification: "",
      startYear: "",
      endYear: "",
    });
  }

  function handleDelete() {
    const copyArr = [...submittedEducationalExperience];
    console.log(copyArr);
    copyArr.splice(-1);
    setSubmittedEducationalExperience(copyArr);
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
            required={false}
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
            disabled={submittedEducationalExperience.length === 0}
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
}
