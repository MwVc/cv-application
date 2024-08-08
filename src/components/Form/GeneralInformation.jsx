export default function GeneralInformation({ person, setPerson }) {
  function handlePerson(event) {
    const { name, value, type } = event.target;
    setPerson({ ...person, [name]: value });
    console.log(person);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Event prevented");
  }

  function handleEdit() {
    console.log("Editing CV");
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
            id="firstName"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            className="form-control"
            required={true}
            onChange={handlePerson}
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
            onChange={handlePerson}
            name="email"
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
