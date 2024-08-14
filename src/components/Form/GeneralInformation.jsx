import { useState } from "react";

export default function GeneralInformation() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    country: "",
    linkedIn: "",
  });

  const [submittedData, setSubmittedData] = useState("");

  function handleChange(event) {
    const { value, name } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmittedData(formData);
    console.log(submittedData);
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
            value={formData.firstName}
            name="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            className="form-control"
            required={true}
            value={formData.lastName}
            name="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email adress:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            required={true}
            value={formData.email}
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="linked-in">LinkedIn:</label>
          <input
            type="text"
            className="form-control"
            id="linked-in"
            value={formData.linkedIn}
            name="linkedIn"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            className="form-control"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>

        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-primary w-45">
            Submit
          </button>
          <button className="btn btn-info w-45" type="button">
            Edit
          </button>
        </div>
      </form>
    </div>
  );
}
