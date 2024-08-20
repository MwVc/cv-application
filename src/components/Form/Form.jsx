import GeneralInformation from "./GeneralInformation";
import EducationalExperience from "./EducationalExperience";
import PracticalExperience from "./PracticalExperience";
import WorkExperience from "./WorkExperience";
import Accordion from "react-bootstrap/Accordion";

export default function Form({
  generalInformation,
  submittedGeneralInformation,
  setGeneralInformation,
  setSubmittedGeneralInformation,
  educationalExperience,
  setEducationalExperience,
  submittedEducationalExperience,
  setSubmittedEducationalExperience,
  practicalExperience,
  setPracticalExperience,
  submittedPracticalExperience,
  setSubmittedPracticalExperience,
  workExperience,
  setWorkExperience,
  submittedWorkExperience,
  setSubmittedWorkExperience,
}) {
  return (
    <Accordion defaultActiveKey={["0"]} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>General Information</Accordion.Header>
        <Accordion.Body>
          <GeneralInformation
            generalInformation={generalInformation}
            setGeneralInformation={setGeneralInformation}
            submittedGeneralInformation={submittedGeneralInformation}
            setSubmittedGeneralInformation={setSubmittedGeneralInformation}
          />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Educational Experience</Accordion.Header>
        <Accordion.Body>
          <EducationalExperience
            educationalExperience={educationalExperience}
            setEducationalExperience={setEducationalExperience}
            submittedEducationalExperience={submittedEducationalExperience}
            setSubmittedEducationalExperience={
              setSubmittedEducationalExperience
            }
          />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Practical Experience</Accordion.Header>
        <Accordion.Body>
          <PracticalExperience
            practicalExperience={practicalExperience}
            setPracticalExperience={setPracticalExperience}
            submittedPracticalExperience={submittedPracticalExperience}
            setSubmittedPracticalExperience={setSubmittedPracticalExperience}
          />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Work Experience</Accordion.Header>
        <Accordion.Body>
          <WorkExperience
            workExperience={workExperience}
            setWorkExperience={setWorkExperience}
            submittedWorkExperience={submittedWorkExperience}
            setSubmittedWorkExperience={setSubmittedWorkExperience}
          />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
