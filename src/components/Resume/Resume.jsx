import "./Resume.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Resume({ person }) {
  console.log(person);
  return (
    <div className="page" data-size="A4">
      <div className="box">
        <div className="left-panel">
          <img src="#" alt="Profile Picture" />
          <div className="details">
            <div className="item bottom-line-separator">
              <h2>CONTACT</h2>
              <div className="small-text">
                <p>
                  <i className="bi bi-telephone"></i>
                  {person.firstName}
                </p>
              </div>
            </div>
            <div className="item bottom-line-separator">
              <h2></h2>
            </div>
            <div className="item">
              <h2>EDUCATION</h2>
            </div>
          </div>
        </div>
        <div className="right-panel"></div>
      </div>
    </div>
  );
}
