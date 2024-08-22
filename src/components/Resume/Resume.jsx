import "./Resume.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Resume({
  submittedGeneralInformation,
  submittedEducationalExperience,
  submittedPracticalExperience,
  submittedWorkExperience,
}) {
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
                  {submittedGeneralInformation &&
                    submittedGeneralInformation.phone}
                </p>
                <p>
                  <i className="bi bi-envelope contact-icon"></i>
                  <a
                    href="https://mail.google.com/mail/u/0/#inbox"
                    target="_blank"
                  >
                    {submittedGeneralInformation &&
                      submittedGeneralInformation.email}
                  </a>
                </p>
                <p>
                  <i className="bi bi-geo-alt-fill contact-icon"></i>
                  {submittedGeneralInformation &&
                    `${submittedGeneralInformation.city}, ${submittedGeneralInformation.country}`}
                </p>
                <p className="last-pararaph-no-margin-bottom">
                  <i className="bi bi-person-workspace"></i>
                  {submittedGeneralInformation &&
                    submittedGeneralInformation.linkedIn}
                </p>
              </div>
            </div>
            <div className="item bottom-line-separator">
              <h2>SKILLS</h2>
              <div className="small-text">
                {submittedPracticalExperience.length === 0 ? (
                  <div>
                    <div className="skill">
                      <div>
                        <span>Skill 1</span>
                      </div>
                      <div className="years-of-experience">
                        <span className="align-right">#</span>
                        <span className="align-left">Years</span>
                      </div>
                    </div>
                    <div className="skill">
                      <div>
                        <span>Skill 1</span>
                      </div>
                      <div className="years-of-experience">
                        <span className="align-right">#</span>
                        <span className="align-left">Years</span>
                      </div>
                    </div>
                    <div className="skill">
                      <div>
                        <span>Skill 1</span>
                      </div>
                      <div className="years-of-experience">
                        <span className="align-right">#</span>
                        <span className="align-left">Years</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  submittedPracticalExperience.map((object, index) => {
                    return (
                      <div className="skill" key={index}>
                        <div>
                          <span>{object.skill}</span>
                        </div>
                        <div className="years-of-experience">
                          <span className="align-right">
                            {object.yearsOfExperience}
                          </span>
                          <span className="align-left">
                            {object.yearsOfExperience < 1
                              ? ""
                              : object.yearsOfExperience === 1
                              ? "Year"
                              : "Years"}
                          </span>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
            <div className="item">
              <h2>EDUCATION</h2>
              {submittedEducationalExperience &&
                submittedEducationalExperience.map((object, index) => (
                  <div className="smallText" key={index}>
                    <p className="bolded white">{object.qualification}</p>
                    <p>{object.institution}</p>
                    <p>
                      {object.startYear} - {object.endYear}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="right-panel">
          <div>
            <h1>
              {submittedGeneralInformation
                ? `${submittedGeneralInformation.firstName} ${submittedGeneralInformation.lastName}`
                : "Your Name"}
            </h1>
            <div className="small-text">
              <h3>
                {submittedGeneralInformation &&
                submittedGeneralInformation.profession
                  ? submittedGeneralInformation.profession
                  : "Profession"}
              </h3>
            </div>
          </div>
          <div>
            <h2>About Me</h2>
            <div className="small-text">
              <p>
                {submittedGeneralInformation
                  ? submittedGeneralInformation.aboutMe
                  : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod obcaecati fugiat in dignissimos error, quo, natus ipsam ipsum numquam iure placeat voluptatum iusto laudantium nesciunt nihil sit pariatur modi sunt ullam accusantium porro! Necessitatibus maxime, sunt reprehenderit autem dolore corrupti, accusantium deleniti maiores ipsam, aspernatur repellendus mollitia illo recusandae odit."}
              </p>
            </div>
          </div>
          <div className="work-experience">
            <h2>Work Experience</h2>
            <ul>
              {submittedWorkExperience.length === 0 ? (
                <div>
                  <li>
                    <div className="job-position">
                      <span className="bolded">Digital Marketing Expert</span>
                      <span>Nov 2020 - Sept 2021</span>
                    </div>
                    <div className="project-name bolded">
                      <span>Company name</span>
                      <p className="work-description">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quod obcaecati fugiat in dignissimos error, quo,
                        natus ipsam ipsum numquam iure placeat voluptatum iusto
                        laudantium nesciunt nihil sit pariatur modi sunt ullam
                        accusantium porro! Necessitatibus maxime, sunt
                        reprehenderit autem dolore corrupti, accusantium
                        deleniti maiores ipsam, aspernatur repellendus mollitia
                        illo recusandae odit.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="job-position">
                      <span className="bolded">Lidar Annotation</span>
                      <span>2016 - 2018</span>
                    </div>
                    <div className="project-name bolded">
                      <span>Company name</span>
                      <p className="work-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Exercitationem nemo itaque dignissimos voluptates sunt
                        quidem molestiae ut maiores? Exercitationem fugiat nobis
                        eaque dolorum expedita distinctio dolores nulla deserunt
                        rerum. Consectetur ea ad debitis corporis voluptatum
                        tenetur voluptas accusamus suscipit aut soluta
                        necessitatibus quaerat enim possimus ratione ullam in
                        magni, quos perspiciatis hic incidunt fugit vero rem
                        obcaecati? Totam hic maiores laudantium iusto magnam,
                        sed accusantium adipisci! Nesciunt, sit. Nobis, vel!
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="job-position">
                      <span className="bolded">Lidar Annotation</span>
                      <span>2016 - 2018</span>
                    </div>
                    <div className="project-name bolded">
                      <span>Company name</span>
                      <p className="work-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Exercitationem nemo itaque dignissimos voluptates sunt
                        quidem molestiae ut maiores? Exercitationem fugiat nobis
                        eaque dolorum expedita distinctio dolores nulla deserunt
                        rerum. Consectetur ea ad debitis corporis voluptatum
                        tenetur voluptas accusamus suscipit aut soluta
                        necessitatibus quaerat enim possimus ratione ullam in
                        magni, quos perspiciatis hic incidunt fugit vero rem
                        obcaecati? Totam hic maiores laudantium iusto magnam,
                        sed accusantium adipisci! Nesciunt, sit. Nobis, vel!
                      </p>
                    </div>
                  </li>
                </div>
              ) : (
                submittedWorkExperience.map((object, index) => (
                  <li key={index}>
                    <div className="job-position">
                      <span className="bolded">{object.jobTitle}</span>
                      <span>{`${object.startDate} - ${object.endDate}`}</span>
                    </div>
                    <div className="project-name bolded">
                      <span>{object.companyName}</span>
                      <p className="work-description">
                        {object.jobDescription}
                      </p>
                    </div>
                  </li>
                ))
              )}
            </ul>
          </div>
          <div className="work-experience">
            <h2>Projects</h2>
            <ul>
              <li>
                <div>
                  <div className="project-name bolded">
                    <span className="bolded">Weather App</span>
                    <p className="work-description">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quam quod ipsa laborum, nesciunt molestias eveniet
                      exercitationem. Beatae debitis, aperiam, ullam itaque id
                      architecto officia at eos, commodi aliquam molestias qui?
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <div className="project-name bolded">
                    <span className="bolded">Restaurant Page</span>
                    <p className="work-description">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quam quod ipsa laborum, nesciunt molestias eveniet
                      exercitationem. Beatae debitis, aperiam, ullam itaque id
                      architecto officia at eos, commodi aliquam molestias qui?
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <div className="project-name bolded">
                    <span className="bolded">CV Application</span>
                    <p className="work-description">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quam quod ipsa laborum, nesciunt molestias eveniet
                      exercitationem. Beatae debitis, aperiam, ullam itaque id
                      architecto officia at eos, commodi aliquam molestias qui?
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
