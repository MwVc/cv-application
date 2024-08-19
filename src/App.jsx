import { useState } from "react";
import Form from "./components/Form/Form";
import Resume from "./components/Resume/Resume";
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
    yearsOfExperience: null,
  });

  const [submittedPracticalExperience, setSubmittedPracticalExperience] =
    useState([]);

  return (
    <>
      <div className="container">
        <div className="container d-flex flex-row">
          <div className="inner-div flex-fill p-3 w-25">
            <section id="general-information">
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
              />
            </section>
          </div>
          <div className="inner-div flex-fill p-3">
            <Resume
              submittedGeneralInformation={submittedGeneralInformation}
              submittedEducationalExperience={submittedEducationalExperience}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
