import { useState } from "react";

export default function EducationalExperience() {
  function handleSubmit() {
    console.log("I am handling Submit");
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
            // onChange={handleEducation}
            name="institution"
            id="institution"
          />
        </div>
        <div className="form-group">
          <label htmlFor="qualification">Qualification:</label>
          <input
            type="text"
            className="form-control"
            required={true}
            // onChange={handleEducation}
            name="qualification"
            id="qualification"
          />
        </div>
        <div className="form-group">
          <label htmlFor="start-year">Start Year</label>
          <input
            type="number"
            className="form-control"
            required={true}
            name="startYear"
            id="start-year"
          />
        </div>
        <div className="form-group">
          <label htmlFor="end-year">End Year</label>
          <input
            type="number"
            className="form-control"
            name="endYear"
            id="end-year"
          />
        </div>
        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-primary w-45">
            Submit
          </button>
          <button
            className="btn btn-info w-45"
            type="button"
            onClick={console.log("submitting")}
            disabled={true}
          >
            Edit
          </button>
        </div>
      </form>
    </div>
  );
}
