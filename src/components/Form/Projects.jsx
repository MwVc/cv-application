export default function Projects({
  project,
  setProject,
  submittedProjects,
  setSubmittedProjects,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    setSubmittedProjects([...submittedProjects, project]);
    setProject({
      projectName: "",
      projectDescription: "",
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setProject({ ...project, [name]: value });
  }

  function handleDelete() {
    console.log("deleting");
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
        <div className="form-group">
          <label htmlFor="project-description">Project Description</label>
          <textarea
            type="text"
            id="project-description"
            name="projectDescription"
            className="form-control"
            required={true}
            onChange={handleChange}
            placeholder='e.g In this groundbreaking project, I boldly explored the depths of human-computer interaction by teaching a machine to greet the world. Yes, I taught it to say, "Hello, World!" This involved complex tasks like mastering the syntax of a programming language and strategically placing parentheses and semicolons. The project was a resounding success, with the program greeting the world flawlessly every time it was run.'
            rows={9}
          ></textarea>
        </div>
        <div className="d-flex justify-content-between">
          <button
            type="submit"
            className="btn btn-primary w-45"
            disabled={submittedProjects.length === 3}
          >
            Submit
          </button>
          <button
            className="btn btn-info w-45"
            type="button"
            disabled={submittedProjects.length === 0}
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
}
