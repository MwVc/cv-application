import { useState } from "react";
import Form from "./components/Form/Form";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  return (
    <>
      <div className="container">
        <div className="container vh-100 d-flex flex-row">
          <div className="inner-div flex-fill p-3">
            <section id="general-information">
              <Form person={person} setPerson={setPerson} />
            </section>
          </div>
          <div className="inner-div flex-fill p-3"></div>
        </div>
      </div>
    </>
  );
}

export default App;
