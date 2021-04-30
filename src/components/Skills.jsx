import React from "react";
import "../styles/Skills.scss";

const Skills = () => {
  return (
    <>
      <div className="skills-container">
        <section className="skills">
          <h2>Professional Skills</h2>
          <h3 className="main">Web Development</h3>
          <div className="info">
            <h3 className="subtitle">Languages</h3>
            <ul>
              <li>Javascript, Typescript, Ruby, HTML, CSS</li>
            </ul>
            <h3 className="subtitle">Frameworks/Libraries</h3>
            <ul>
              <li>
                NodeJS, ReactJS, Phaser, Ajax, Axios, jQuery, Bootstrap, Rails,
                EJS, Express, SASS
              </li>
            </ul>
            <h3 className="subtitle">Testing</h3>
            <ul>
              <li>Jest, Storybook, Cypress, Mocha/Chai</li>
            </ul>
            <h3 className="subtitle">Systems/Databases</h3>
            <ul>
              <li>PostgreSQL, SQL, MongoDB</li>
            </ul>
          </div>
          <hr className="h-divider" />
          <h3 className="secondary">Other Skills</h3>
          <div className="secondary-container">
            <h3 className="subtitle">Software</h3>
            <ul>
              <li>Photoshop, Illustrator, InDesign</li>
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
                  <li>Junior Software Developer - Start Date - May 10th</li>
                  <li>
                    Helping to create renewable energy optimization and
                    reporting software
                  </li>
                  <li>Part of the CX team (Customer Experience)</li>
                </ul>
              </div>
              <div className="job">
                <h3>Work</h3>
                <h4>The Soma Gallery</h4>
                <ul>
                  <li>Assistant Manager - April 2014 - March 2020</li>
                  <li>Sales of art, literature and antiquities</li>
                  <li>Training and supervision of staff</li>
                  <li>Managing inventory & payroll</li>
                </ul>
              </div>
              <div className="job">
                <h3>Volunteer</h3>
                <h4>Greater Vancouver Interactive Arts Society</h4>
                <ul>
                  <li>Grants Committee Member - August 2014 - August 2016</li>
                  <li>Collaboration with committee to award art grants</li>
                  <li>Helping artists to fulfil grant requirements</li>
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
