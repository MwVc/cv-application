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
        <div className="container d-flex flex-row">
          <div className="inner-div flex-fill p-3 w-25">
            <section id="general-information">
              <Form person={person} setPerson={setPerson} />
            </section>
          </div>
          <div className="inner-div flex-fill p-3">
            <div className="page" data-size="A4">
              <div className="box">
                <div className="left-panel"></div>
                <div className="right-panel"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
