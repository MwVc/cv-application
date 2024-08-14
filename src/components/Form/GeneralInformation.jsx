import { useState } from "react";

export default function GeneralInformation() {
  const [generalInformation, setGeneralInformation] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    country: "",
    linkedIn: "",
  });

  function handleSubmit() {}
  function handleEdit() {}

  return (
    <div className="container">
      <form action="#" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            className="form-control"
            required={true}
            // onChange={handlePerson}
            name="firstName"
            id="firstName"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            className="form-control"
            required={true}
            // onChange={handlePerson}
            name="lastName"
            id="lastName"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email adress:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            required={true}
            // onChange={handlePerson}
            name="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="linked-in">LinkedIn:</label>
          <input
            type="text"
            className="form-control"
            id="linked-in"
            // onChange={handlePerson}
            name="linked-in"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            name="phone"
            // onChange={handlePerson}
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            className="form-control"
            id="country"
            name="country"
            // onChange={handlePerson}
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            // onChange={handlePerson}
          />
        </div>

        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-primary w-45">
            Submit
          </button>
          <button
            className="btn btn-info w-45"
            onClick={handleEdit}
            type="button"
          >
            Edit
          </button>
        </div>
      </form>
    </div>
  );
}
