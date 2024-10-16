import { useState } from "react";
import Form from "./components/Form/Form";
import Resume from "./components/Resume/Resume";
import DownloadPDF from "./components/Utilities/DownloadPDF";
import "./App.css";

function App() {
  const [generalInformation, setGeneralInformation] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    country: "",
    profession: "",
    aboutMe: "",
  });

  const [submittedGeneralInformation, setSubmittedGeneralInformation] =
    useState(null);

  const [educationalExperience, setEducationalExperience] = useState({
    institution: "",
    qualification: "",
    startYear: "",
    endYear: "",
  });

  const [submittedEducationalExperience, setSubmittedEducationalExperience] =
    useState([]);

  const [practicalExperience, setPracticalExperience] = useState({
    skill: "",
    yearsOfExperience: "",
  });

  const [submittedPracticalExperience, setSubmittedPracticalExperience] =
    useState([]);

  const [workExperience, setWorkExperience] = useState({
    jobTitle: "",
    jobDescription: "",
    companyName: "",
    startDate: "",
    endDate: "",
  });

  const [submittedWorkExperience, setSubmittedWorkExperience] = useState([]);

  const [project, setProject] = useState({
    projectName: "",
    projectDescription: "",
  });

  const [submittedProjects, setSubmittedProjects] = useState([]);

  return (
    <>
      <div className="container">
        <div className="container d-flex flex-row">
          <div className="inner-div flex-fill p-3 w-25">
            <section id="general-information" className="d-flex flex-column">
              <Form
                generalInformation={generalInformation}
                setGeneralInformation={setGeneralInformation}
                submittedGeneralInformation={submittedGeneralInformation}
                setSubmittedGeneralInformation={setSubmittedGeneralInformation}
                educationalExperience={educationalExperience}
                setEducationalExperience={setEducationalExperience}
                submittedEducationalExperience={submittedEducationalExperience}
                setSubmittedEducationalExperience={
                  setSubmittedEducationalExperience
                }
                practicalExperience={practicalExperience}
                setPracticalExperience={setPracticalExperience}
                submittedPracticalExperience={submittedPracticalExperience}
                setSubmittedPracticalExperience={
                  setSubmittedPracticalExperience
                }
                workExperience={workExperience}
                setWorkExperience={setWorkExperience}
                submittedWorkExperience={submittedWorkExperience}
                setSubmittedWorkExperience={setSubmittedWorkExperience}
                project={project}
                setProject={setProject}
                submittedProjects={submittedProjects}
                setSubmittedProjects={setSubmittedProjects}
              />
              <DownloadPDF />
            </section>
          </div>
          <div className="inner-div flex-fill p-3">
            <Resume
              submittedGeneralInformation={submittedGeneralInformation}
              submittedEducationalExperience={submittedEducationalExperience}
              submittedPracticalExperience={submittedPracticalExperience}
              submittedWorkExperience={submittedWorkExperience}
              submittedProjects={submittedProjects}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
