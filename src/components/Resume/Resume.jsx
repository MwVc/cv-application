import "./Resume.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Resume() {
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
                </p>
                <p>
                  <i className="bi bi-envelope contact-icon"></i>
                  <a
                    href="https://mail.google.com/mail/u/0/#inbox"
                    target="_blank"
                  ></a>
                </p>
                <p>
                  <i className="bi bi-geo-alt-fill contact-icon"></i>
                </p>
                <p className="last-pararaph-no-margin-bottom">
                  <i className="bi bi-linkedin contact-icon"></i>\
                </p>
              </div>
            </div>
            <div className="item bottom-line-separator">
              <h2>SKILLS</h2>
              <div className="small-text">
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
                    <span>Skill 2</span>
                  </div>
                  <div className="years-of-experience">
                    <span className="align-right">#</span>
                    <span className="align-left">Years</span>
                  </div>
                </div>
                <div className="skill">
                  <div>
                    <span>Skill 3</span>
                  </div>
                  <div className="years-of-experience">
                    <span className="align-right">#</span>
                    <span className="align-left">Years</span>
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
                  <span>Project name | Company name</span>
                  <p className="work-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis, ut ipsum consequatur ad fuga, atque repellat
                    tempore quia labore maxime voluptatum, iste molestiae
                    aliquam neque placeat? Doloribus cupiditate repudiandae unde
                    magni ipsam nemo natus vitae incidunt iusto vero rem
                    consectetur, odit hic sit temporibus maxime quae, saepe in
                    aliquam! Nulla?
                  </p>
                </div>
              </li>
              <li>
                <div className="job-position">
                  <span className="bolded">Digital Marketing Expert</span>
                  <span>Nov 2020 - Sept 2021</span>
                </div>
                <div className="project-name bolded">
                  <span>Project Name | Company name</span>
                  <p className="work-description">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quod obcaecati fugiat in dignissimos error, quo, natus ipsam
                    ipsum numquam iure placeat voluptatum iusto laudantium
                    nesciunt nihil sit pariatur modi sunt ullam accusantium
                    porro! Necessitatibus maxime, sunt reprehenderit autem
                    dolore corrupti, accusantium deleniti maiores ipsam,
                    aspernatur repellendus mollitia illo recusandae odit.
                  </p>
                </div>
              </li>
              <li>
                <div className="job-position">
                  <span className="bolded">Lidar Annotation</span>
                  <span>2016 - 2018</span>
                </div>
                <div className="project-name bolded">
                  <span>Project Name | Company name</span>
                  <p className="work-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem nemo itaque dignissimos voluptates sunt
                    quidem molestiae ut maiores? Exercitationem fugiat nobis
                    eaque dolorum expedita distinctio dolores nulla deserunt
                    rerum. Consectetur ea ad debitis corporis voluptatum tenetur
                    voluptas accusamus suscipit aut soluta necessitatibus
                    quaerat enim possimus ratione ullam in magni, quos
                    perspiciatis hic incidunt fugit vero rem obcaecati? Totam
                    hic maiores laudantium iusto magnam, sed accusantium
                    adipisci! Nesciunt, sit. Nobis, vel!
                  </p>
                </div>
              </li>
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
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
