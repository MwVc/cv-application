export default function Projects() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitting the form...");
  }
  function handleChange(event) {
    const { name, value } = event.target;
    console.log(name, value);
  }
  return (
    <div className="container">
      <form action="#" onSubmit={handleSubmit} method="POST">
        <div className="form-group">
          <label htmlFor="project-name">Project Name:</label>
          <input
            type="text"
            id="project-name"
            name="projectName"
            className="form-control"
            required={true}
            onChange={handleChange}
            placeholder="e.g Hello World"
          />
        </div>
      </form>
    </div>
  );
}
