import { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function GeneralInformation() {
  const [person, setPerson] = useState({
    firstname: "",
    lastName: "",
    email: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Event prevented");
  }

  return (
    <div className="container">
      <form action="#" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email adress:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            required={true}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
