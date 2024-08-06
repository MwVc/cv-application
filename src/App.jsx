import { useState } from "react";
import GeneralInformationForm from "./components/general-information-form/GeneralInformationForm";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="container vh-100 d-flex flex-row">
          <div className="inner-div flex-fill p-3">
            <section id="general-information">
              <GeneralInformationForm />
            </section>
          </div>
          <div className="inner-div flex-fill p-3"></div>
        </div>
      </div>
    </>
  );
}

export default App;
