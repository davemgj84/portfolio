import React from "react";
import { Link } from "react-router-dom";
import ProgressiveImage from "react-progressive-graceful-image";
import "../styles/Home.scss";
import profile from "../assets/profile.jpg";
import profileLow from "../assets/profileLow.jpg";

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="container">
          <div>
            {/* <ProgressiveImage src={profile} placeholder={profileLow}>
              {(src) => <img className="profile-image" src={src} alt="David" />}
            </ProgressiveImage> */}
            <img className="profile-image" src={profile} alt="David" />
          </div>
          <div className="bio">
            <h1>David Jardine</h1>
            <p className="bio-text">
              I am a Full Stack Junior Web Developer with a background as an
              artist. I offer many perspectives and modes of thinking with my
              diverse background. I have always loved creating and building
              interactive projects and collaborating with a team. I enjoy
              critical thinking, problem solving, and creativity in my work. I
              recently finished the Web Development Bootcamp at Lighthouse Labs
              and am eager to begin my journey as a developer. Check out my{" "}
              <Link to={"/projects"}>projects</Link> and{" "}
              <Link to={"/contact"}>contact</Link> me today!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
