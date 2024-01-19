import React from "react";

import "../styles/Skills.scss";

export default function Skills() {
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
                Javascript, Typescript, Python, HTML, CSS, SQL, YAML, Bash
              </li>
            </ul>
            <h3 className="subtitle">Frameworks/Libraries</h3>
            <ul>
              <li>
                React, React-Query, Redux, Node, Flask, Marshmallow, Axios,
                Highcharts, AG-Grid, MapBox, SASS
              </li>
            </ul>
            <h3 className="subtitle">Testing</h3>
            <ul>
              <li>
                React Testing Library, Jest, Cypress, Storybook, Mocha/Chai
              </li>
            </ul>
            <h3 className="subtitle">Systems/Databases</h3>
            <ul>
              <li>
                AWS, CircleCI, Docker, MariaDB, PostgreSQL, SQL, SQLAlchemy,
                Sentry, GIT, BitBucket
              </li>
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
                <h3>Clir Renewables Inc.</h3>
                <h4>
                  Intermediate Software Developer
                  <br />
                  January 2023 - January 2024
                </h4>
                <ul>
                  <li>
                    Optimized python web server APIs, reducing energy event data
                    request wait times up to 75%
                  </li>
                  <li>
                    Utilized React Query to enhance CRUD operations on RESTful
                    APIs, improving data interactions and optimizing state
                    management for better application performance
                  </li>
                  <li>
                    Maintained and monitored nightly end-to-end testing,
                    achieving a noteworthy milestone by establishing a 160-day
                    consecutive passing streak — a company record
                  </li>
                  <li>
                    Maintained and monitored nightly end-to-end testing,
                    achieving a noteworthy milestone by establishing a 160-day
                    consecutive passing streak — a company record
                  </li>
                  <li>
                    Overhauled app-wide navigation to align precisely with
                    design team specifications, creating intuitive and
                    captivating user interfaces that elevate the overall
                    experience for customers
                  </li>
                  <li>
                    Engaged in collaborative sessions to conceptualize, plan,
                    and construct new features. Worked closely with team members
                    and product managers to identify user needs and align
                    development goals
                  </li>
                  <li>
                    Facilitated effective code review practices, upheld
                    high-quality version control, and engaged in impactful pair
                    programming to elevate code quality and foster collaborative
                    development
                  </li>
                  <li>
                    Mentored developers and co-ops in planning, designing, and
                    accomplishing projects and goals
                  </li>
                </ul>

                <h4 style={{ marginTop: "2rem" }}>
                  Junior Software Developer
                  <br />
                  May 2021 - January 2023
                </h4>

                <ul>
                  <li>
                    Integrated Google Analytics to track and interpret user
                    engagement metrics on newly developed features, enabling
                    data-driven decisions to improve the overall user experience
                  </li>
                  <li>
                    Oversaw the smooth transition of critical dependency
                    updates, including the migration from MUI 4 to MUI 5,
                    contributing to a notable improvement in the application's
                    functionality
                  </li>
                  <li>
                    Regularly performed firefighting duties, swiftly addressing
                    unforeseen issues and bugs to ensure continuous system
                    stability
                  </li>
                  <li>
                    Worked together to create company-wide Diversity & Inclusion
                    surveys as an engaged committee member, gathering crucial
                    insights to shape and implement impactful programs
                  </li>
                  <li>
                    Collaborated with the Sustainability Committee, achieving a
                    reduction in waste from office lunch takeouts
                  </li>
                </ul>
              </div>
              <div className="job">
                <h3>The Soma Gallery</h3>
                <h4>
                  Assistant Manager
                  <br />
                  April 2014 - March 2020
                </h4>
                <ul>
                  <li>Sales of art, literature and antiquities</li>
                  <li>Trained and supervised staff</li>
                  <li>Managed inventory & payroll</li>
                </ul>
              </div>
              <div className="job">
                <h3>Greater Vancouver Interactive Arts Society</h3>
                <h4>
                  Grants Committee Member Volunteer
                  <br />
                  August 2014 - August 2016
                </h4>
                <ul>
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
}
