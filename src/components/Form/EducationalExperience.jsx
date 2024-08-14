import { useState } from "react";

export default function EducationalExperience() {
  return (
    <div className="container">
      <form action="#">
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
      </form>
    </div>
  );
}
