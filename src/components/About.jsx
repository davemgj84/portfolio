import React from "react";
import "../styles/About.scss";
import profile from "../assets/profile.png";

const About = () => {
  return (
    <>
      <section className="about">
        <div>
          <img className="profile-image" src={profile} alt="Handsome Man" />
        </div>
        <div className="bio">
          <h1>David Jardine</h1>
          <p className="bio-text">
            I am a Full stack junior web developer with a background as an
            artist. I offer many perspectives and modes of thinking with my
            diverse background. I have always loved creating and building
            interactive projects and collaborating with a team. I enjoy critical
            thinking, problem solving, and creativity in my work. I recently
            finished the Web Development Bootcamp at Lighthouse Labs and am
            eager to begin my journey as a developer.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
