import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../styles/Home.scss";
import "../../node_modules/react-lazy-load-image-component/src/effects/blur.css";
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
              A Full Stack Web Developer with a background as an artist.
              Offering many perspectives and modes of thinking with my diverse
              experience, I have always loved creating and building interactive
              projects and collaborating with a team. My passion for creativity,
              problem solving and critical thinking stand out in all of the work
              I do and having recently graduated from Lighthouse Labs' Web
              Development Boot Camp, I am eager to begin my journey as a
              developer. Please visit my <Link to={"/projects"}>projects</Link>{" "}
              and <Link to={"/contact"}>contact</Link> me today!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
