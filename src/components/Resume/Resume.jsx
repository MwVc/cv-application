import "./Resume.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Resume({ person }) {
  console.log(person);
  return (
    <div className="page" data-size="A4">
      <div className="box">
        <div className="left-panel">
          <img src="#" alt="Profile Picture" className="display-picture" />
          <div className="details">
            <div className="item bottom-line-separator">
              <h2>CONTACT</h2>
              <div className="small-text">
                <p>
                  <i className="bi bi-telephone contact-icon"></i>
                  +254702150884
                </p>
                <p>
                  <i class="bi bi-envelope contact-icon"></i>
                  <a
                    href="https://mail.google.com/mail/u/0/#inbox"
                    target="_blank"
                  >
                    victormwadime@gmail.com
                  </a>
                </p>
                <p>
                  <i class="bi bi-geo-alt-fill contact-icon"></i>
                  Mombasa, Kenya
                </p>
                <p className="last-pararaph-no-margin-bottom">
                  <i class="bi bi-linkedin contact-icon"></i>
                  linkedIn URL
                </p>
              </div>
            </div>
            <div className="item bottom-line-separator">
              <h2>SKILLS</h2>
              <div className="small-text">
                <div className="skill">
                  <div>
                    <span>Accounting</span>
                  </div>
                  <div className="years-of-experience">
                    <span className="align-right">14</span>
                    <span className="align-left">Years</span>
                  </div>
                </div>
                <div className="skill">
                  <div>
                    <span>Word</span>
                  </div>
                  <div className="years-of-experience">
                    <span className="align-right">3</span>
                    <span className="align-left">Years</span>
                  </div>
                </div>
                <div className="skill">
                  <div>
                    <span>Powerpoint</span>
                  </div>
                  <div className="years-of-experience">
                    <span className="align-right">1</span>
                    <span className="align-left">Year</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <h2>EDUCATION</h2>
              <div className="smallText">
                <p className="bolded white">Bachelor of Economics</p>
                <p>University of Sidney</p>
                <p>2010 - 2014</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right-panel"></div>
      </div>
    </div>
  );
}
