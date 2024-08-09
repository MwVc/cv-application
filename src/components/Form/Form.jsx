import GeneralInformation from "./GeneralInformation";
import EducationalExperience from "./EducationalExperience";
import PracticalExperience from "./PracticalExperience";

export default function Form({ person, setPerson }) {
  return (
    <div>
      <div>
        <GeneralInformation person={person} setPerson={setPerson} />
      </div>
      <div>
        <EducationalExperience />
      </div>
      <div>
        <PracticalExperience />
      </div>
    </div>
  );
}
