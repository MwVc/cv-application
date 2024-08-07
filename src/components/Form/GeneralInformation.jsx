import { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function GeneralInformation() {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  function handlePerson(event) {
    const { name, value, type } = event.target;
    setPerson({ ...person, [name]: value });
    console.log(person);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Event prevented");
  }

  return (
    <div className="container">
      <form action="#" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            className="form-control"
            required={true}
            onChange={handlePerson}
            name="firstName"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email adress:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            required={true}
            onChange={handlePerson}
            name="email"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
