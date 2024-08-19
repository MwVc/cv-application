import { useState } from "react";

export default function GeneralInformation({
  generalInformation,
  setGeneralInformation,
  submittedGeneralInformation,
  setSubmittedGeneralInformation,
}) {
  function handleChange(event) {
    const { value, name } = event.target;
    setGeneralInformation({ ...generalInformation, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const data = generalInformation;
    setSubmittedGeneralInformation(data);
    setGeneralInformation({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      city: "",
      country: "",
      profession: "",
      aboutMe: "",
    });
  }

  function handleEdit() {
    setGeneralInformation(submittedGeneralInformation);
    setSubmittedGeneralInformation(null);
  }

  return (
    <div className="container">
      <form action="#" onSubmit={handleSubmit} method="POST">
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            className="form-control"
            required={true}
            value={generalInformation.firstName}
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
            value={generalInformation.lastName}
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
            value={generalInformation.email}
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="profession">Profession:</label>
          <input
            type="text"
            className="form-control"
            id="profession"
            value={generalInformation.linkedIn}
            name="profession"
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
            value={generalInformation.phone}
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
            value={generalInformation.country}
            onChange={handleChange}
            required={true}
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            value={generalInformation.city}
            onChange={handleChange}
            required={true}
          />
        </div>
        <div className="form-group">
          <label htmlFor="about-me">About Me</label>
          <textarea
            className="form-control"
            rows={4}
            type="text"
            onChange={handleChange}
            required={true}
            name="aboutMe"
            id="about-me"
            value={generalInformation.aboutMe}
          />
        </div>

        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-primary w-45">
            Submit
          </button>
          <button
            className="btn btn-info w-45"
            type="button"
            onClick={handleEdit}
            disabled={!submittedGeneralInformation}
          >
            Edit
          </button>
        </div>
      </form>
    </div>
  );
}
