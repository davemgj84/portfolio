import "../../node_modules/react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import React from "react";

import "../styles/Home.scss";
import profile from "../assets/profile.jpg";
import profileLow from "../assets/profileLow.jpg";

export default function Home() {
  return (
    <>
      <section className="home">
        <div className="container">
          <div>
            <LazyLoadImage
              className="profile-image"
              alt={"David"}
              src={profile}
              effect="blur"
              placeholderSrc={profileLow}
            />
          </div>
          <div className="bio">
            <h1>David Jardine</h1>
            <p className="bio-text">
              I am a Full Stack Web Developer with a background as an artist.
              Offering many perspectives and modes of thinking with my diverse
              experience, I have always loved creating and building interactive
              projects and collaborating with a team. My passion for creativity,
              problem solving, and critical thinking has led me to explore this
              amazing field in technology. Currently working as an{" "}
              <strong>Full Stack Engineer at Zapier</strong>, I help create
              software that makes automation work for everyone! Feel free to
              check out my <Link to={"/projects"}>projects</Link> and{" "}
              <Link to={"/contact"}>contact</Link> me today!
              <br />
              <br />
              Please note that many of the projects date back to 2020/2021. I
              have been employed full-time at{" "}
              <strong>Zapier and Clir Renewables Inc.</strong> for the past ~3
              years and have not had much personal time to start new side
              projects.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
