import React from "react";
import "../styles/Projects.scss";
import ProjectItem from "./ProjectItem";
import images from "../helpers/images";

const Projects = () => {
  return (
    <>
      <section className="projects">
        <h1>Projects</h1>
        <div className="projects-container">
          <hr className="divider" />

          <ProjectItem
            link={"https://github.com/davemgj84/haiku"}
            icon={"fas fa-pen-fancy"}
            title={"Haiku"}
            description={
              "A small but fun front-end app, that will allows the user to click a button and read a Haiku. Every click will bring up a new Haiku."
            }
            techStack={"Tech Stack: React, Sass"}
            image={images.haiku}
            placeholder={images.haikuLow}
          />

          <ProjectItem
            link={"https://github.com/davemgj84/theFilmAwards"}
            icon={"fas fa-film"}
            title={"Film Awards"}
            description={
              "An app that allows users to search the Open Movie Database (OMDb API), for their favourite films and nominate up to 5 films for an award."
            }
            techStack={"Tech Stack: React, Sass, Axios"}
            image={images.theFilmAwards}
            placeholder={images.theFilmAwardsLow}
          />

          <ProjectItem
            link={"https://github.com/davemgj84/sapphire"}
            icon={"fas fa-gamepad"}
            title={"Sapphire"}
            description={
              "An interactive story based choose your own adventure game."
            }
            techStack={
              "Tech Stack: React, React-Spring, Phaser, Axios, Express, Node, PSQL"
            }
            image={images.sapphire}
            placeholder={images.sapphireLow}
          />

          <ProjectItem
            link={"https://github.com/davemgj84/scheduler"}
            icon={"far fa-calendar-alt"}
            title={"Scheduler"}
            description={
              "Scheduler is single-page app that allows students to book appointments with interviewers."
            }
            techStack={"Tech Stack: React, Sass, and Axios"}
            image={images.scheduler}
            placeholder={images.schedulerLow}
          />

          <ProjectItem
            link={"https://github.com/davemgj84/wiki-maps"}
            icon={"fas fa-map-marker-alt"}
            title={"Wiki-Maps"}
            description={
              "An interactive map where users can create personal maps of favourite locations, using the Google Maps API."
            }
            techStack={"Tech Stack: Express, Node, EJS, PG, Sass"}
            image={images.wikiMaps}
            placeholder={images.wikiMapsLow}
          />

          <ProjectItem
            link={"https://github.com/davemgj84/tweeter"}
            icon={"fas fa-retweet"}
            title={"Tweeter"}
            description={"Tweeter is a simple, single-page Twitter clone."}
            techStack={
              "Tech Stack: HTML, CSS, JS, jQuery, Node, Express, MongoDB"
            }
            image={images.tweeter}
            placeholder={images.tweeterLow}
          />
        </div>
      </section>
    </>
  );
};

export default Projects;
