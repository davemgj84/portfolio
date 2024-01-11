import React from "react";

import "../styles/Skills.scss";

const Skills = () => {
  return (
    <>
      <div className="skills-container">
        <section className="skills">
          <h2>Professional Skills</h2>
          <h3 className="main">Software Development</h3>
          <div className="info">
            <h3 className="subtitle">Languages</h3>
            <ul>
              <li>
                Javascript, Typescript, Python, Ruby, HTML, CSS, Bash, SQL, YAML
              </li>
            </ul>
            <h3 className="subtitle">Frameworks/Libraries</h3>
            <ul>
              <li>
                React, Node, React-Query, Redux, Marshmallow, Flask, Axios, MUI,
                Emotion, Highcharts, AG-Grid, MapBox, Styled-Components, Phaser,
                Ajax, jQuery, Bootstrap, Rails, Express, SASS, Google Analytics,
                BitBucket, Sentry, GIT, Docker, Cron
              </li>
            </ul>
            <h3 className="subtitle">Testing</h3>
            <ul>
              <li>
                React Testing Library, Jest, Storybook, Cypress, Mocha/Chai
              </li>
            </ul>
            <h3 className="subtitle">Systems/Databases</h3>
            <ul>
              <li>AWS, CircleCI, MariaDB, PostgreSQL, SQL, SQLAlchemy</li>
            </ul>
          </div>
          <hr className="h-divider" />
          <h3 className="secondary">Other Skills</h3>
          <div className="secondary-container">
            <h3 className="subtitle">Software</h3>
            <ul>
              <li>Photoshop, Illustrator, InDesign, Figma</li>
            </ul>
            <h3 className="subtitle">Fine Art</h3>
            <ul>
              <li>Art History, Design, Painting, Sculpture</li>
            </ul>
          </div>
        </section>
        <hr className="h-divider" />
        <section className="education-experience">
          <section className="education">
            <h2>Education</h2>
            <div className="education-container">
              <div>
                <h3 className="school">Lighthouse Labs</h3>
                <h4 className="credentials">Web Development Diploma</h4>
                <h4 className="date">November 2020</h4>
              </div>
              <div>
                <h3 className="school">Langara College</h3>
                <h4 className="credentials">Fine Arts Diploma</h4>
                <h4 className="date">June 2019</h4>
              </div>
            </div>
          </section>
          <hr className="h-divider" />
          <section className="experience">
            <h2>Experience</h2>
            <div className="experience-container">
              <div className="job">
                <h3>Work</h3>
                <h4>Clir Renewables Inc.</h4>
                <ul>
                  <li>
                    Software Developer
                    <ol>
                      <li>Intermediate - January 2023 - January 2024</li>
                      <li>Junior - May 2021 - January 2023</li>
                    </ol>
                  </li>

                  <li>
                    Contributed to the creation of renewable energy optimization
                    and reporting software for wind and solar farms
                  </li>
                  <li>Typescript/React Front-end</li>
                  <li>Python Webserver</li>
                  <li>React Testing Library and Cypress</li>
                  <li>Continuous Deployment via CircleCI and AWS</li>
                  <li>
                    Maintained and improved the performance of existing software
                    functionality
                  </li>
                  <li>
                    Designed, developed, implemented and tested new full-stack
                    software features
                  </li>
                  <li>
                    Worked closely with colleagues to help meet the team’s
                    objectives and goals
                  </li>
                  <li>
                    Recommended and implemented improvements to existing
                    software programs and processes
                  </li>
                  <li>
                    Mentored and supported developers within the team and across
                    the department
                  </li>
                  <li>Diversity & Inclusion Committee member</li>
                  <li> Sustainability Committee member</li>
                </ul>
              </div>
              <div className="job">
                <h3>Work</h3>
                <h4>The Soma Gallery</h4>
                <ul>
                  <li>Assistant Manager - April 2014 - March 2020</li>
                  <li>Sales of art, literature and antiquities</li>
                  <li>Trained and supervised staff</li>
                  <li>Managed inventory & payroll</li>
                </ul>
              </div>
              <div className="job">
                <h3>Volunteer</h3>
                <h4>Greater Vancouver Interactive Arts Society</h4>
                <ul>
                  <li>Grants Committee Member - August 2014 - August 2016</li>
                  <li>Collaborated with committee to award art grants</li>
                  <li>Helped artists to fulfil grant requirements</li>
                </ul>
              </div>
            </div>
          </section>
        </section>
      </div>
    </>
  );
};

export default Skills;
