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
        <div className="right-panel">
          <div>
            <h1>John Doe</h1>
            <div className="small-text">
              <h3>Accountant</h3>
            </div>
          </div>
          <div>
            <h2>About Me</h2>
            <div className="small-text">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Maiores ducimus modi nihil, quos hic qui eum dolorem ipsam odit
                amet expedita? Consequuntur sit, alias eveniet, rerum soluta,
                iste quod atque dolore maiores repellendus aut quidem voluptatum
                dolores! Consectetur corporis sit ipsa ipsum exercitationem
                minus qui non, labore asperiores at dolorem.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quisquam, dolor.
              </p>
            </div>
          </div>
          <div className="work-experience">
            <h2>Work Experience</h2>
            <ul>
              <li>
                <div className="job-position">
                  <span className="bolded">Accountant</span>
                  <span>Jun 2014 - Sept 2015</span>
                </div>
                <div className="project-name bolded">
                  <span>Accounting project name | Company name</span>
                </div>
              </li>
              <li>
                <div className="job-position">
                  <span className="bolded">Digital Marketing Expert</span>
                  <span>Nov 2020 - Sept 2021</span>
                </div>
                <div className="project-name bolded">
                  <span>Project Name | Company name</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
