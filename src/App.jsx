import { useState } from "react";
import Form from "./components/Form/Form";
import Resume from "./components/Resume/Resume";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="container d-flex flex-row">
          <div className="inner-div flex-fill p-3 w-25">
            <section id="general-information">
              <Form />
            </section>
          </div>
          <div className="inner-div flex-fill p-3">
            <Resume />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
