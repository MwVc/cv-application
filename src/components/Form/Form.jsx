import GeneralInformation from "./GeneralInformation";
import EducationalExperience from "./EducationalExperience";
import PracticalExperience from "./PracticalExperience";
import Accordion from "react-bootstrap/Accordion";
import { AccordionBody } from "react-bootstrap";

export default function Form() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>General Information</Accordion.Header>
        <Accordion.Body>
          <GeneralInformation />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Educational Experience</Accordion.Header>
        <Accordion.Body>
          <EducationalExperience />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Practical Experience</Accordion.Header>
        <Accordion.Body>
          <PracticalExperience />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
