import { useState } from "react";

export default function EducationalExperience({ person, setPerson }) {
  function handleEducation(event) {
    const { name, value, type } = event.target;
    console.log(name, value, type);
  }

  return (
    <div className="container">
      <form action="#">
        <div className="form-group">
          <label htmlFor="institution">Name of Institution:</label>
          <input
            type="text"
            className="form-control"
            required={true}
            onChange={handleEducation}
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
            onChange={handleEducation}
            name="qualification"
            id="qualification"
          />
        </div>
      </form>
    </div>
  );
}
