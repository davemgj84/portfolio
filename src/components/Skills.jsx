import React from "react";
import "../styles/Skills.scss";

const Skills = () => {
  return (
    <>
      <div className="skills-container">
        <section className="skills">
          <h1>Professional Skills</h1>
          <h3 className="main">Web Development</h3>
          <div className="info">
            <h3 className="subtitle">Languages</h3>
            <p>Javascript, Ruby, HTML, CSS</p>
            <h3 className="subtitle">Frameworks/Libraries</h3>
            <p>
              NodeJS, ReactJS, Phaser, Ajax, Axios, jQuery, Bootstrap, Rails,
              EJS, Express, SASS
            </p>
            <h3 className="subtitle">Testing</h3>
            <p>Jest, Storybook, Cypress, Mocha/Chai Systems/Databases: SQL</p>
          </div>

          <div className="h-divider"></div>

          <h3 className="secondary">Other Skills</h3>
          <div className="secondary-container">
            <h3 className="subtitle">Software</h3>
            <p>Photoshop, Illustrator, InDesign</p>
            <h3 className="subtitle">Fine Art</h3>
            <p>Art History, Design, Painting, Sculpture</p>
          </div>
        </section>
        <div className="h-divider-responsive"></div>
        <div className="v-divider"></div>
        <section className="education-experience">
          <section className="education">
            <h1>Education</h1>
            <div>
              <h3 className="school">Lighthouse Labs</h3>
              <h4 className="credentials">Web Development Diploma</h4>
              <h4 className="date">November 2020</h4>
              <h3 className="school">Langara College</h3>
              <h4 className="credentials">Fine Arts Diploma</h4>
              <h4 className="date">June 2019</h4>
            </div>
          </section>
          <div className="h-divider"></div>
          <section className="experience">
            <h1>Experience</h1>
            <div className="experience-container">
              <div className="job">
                <h3>Assistant Manager</h3>
                <h4>The Soma Gallery | April 2014 - March 2020</h4>
                <p>Sales of art, literature and antiquities</p>
                <p>Training and supervision of staff</p>
                <p>Managing inventory & payroll</p>
              </div>
              <div className="job">
                <h3>Volunteer</h3>
                <h4>Greater Vancouver Interactive Arts Society</h4>
                <p>Grants Committee Member - August 2014 - August 2016</p>
                <p>
                  Working closely with committee members to award art grants
                </p>
                <p>
                  Helping successful artists and makers to fulfil grant
                  requirements
                </p>
              </div>
            </div>
          </section>
        </section>
      </div>
    </>
  );
};

export default Skills;
