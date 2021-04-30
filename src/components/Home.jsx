import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../../node_modules/react-lazy-load-image-component/src/effects/blur.css";
import "../styles/Home.scss";
import profile from "../assets/profile.jpg";
import profileLow from "../assets/profileLow.jpg";

const Home = () => {
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
              amazing field in technology. Recently graduating from the
              Lighthouse Labs' Web Development Boot Camp, led me to find a job
              as a Junior Software Developer with Clir Renewables Inc. It feels
              great to be a part of a company that contributes to renewable and
              sustainable energy! Feel free to check out my{" "}
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
