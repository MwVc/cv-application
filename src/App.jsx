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
  });
  const [submittedGeneralInformation, setSubmittedGeneralInformation] =
    useState(null);

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
              />
            </section>
          </div>
          <div className="inner-div flex-fill p-3">
            <Resume submittedGeneralInformation={submittedGeneralInformation} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
