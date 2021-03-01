import React from "react";
import "../styles/Projects.scss";
import ProjectItem from "./ProjectItem";
import images from "../helpers/images";

const Projects = () => {
  const {
    weather,
    weatherLow,
    haiku,
    haikuLow,
    theFilmAwards,
    theFilmAwardsLow,
    sapphire,
    sapphireLow,
    scheduler,
    schedulerLow,
    wikiMaps,
    wikiMapsLow,
    tweeter,
    tweeterLow,
  } = images;

  return (
    <>
      <section className="projects">
        <h1>Projects</h1>
        <div className="projects-container">
          <hr className="divider" />

          <ProjectItem
            link={"https://github.com/davemgj84/weather"}
            icon={"fas fa-cloud-sun"}
            title={"Weather"}
            description={
              "A simple Front-End Weather Application. Using the OpenWeather API, it provides real time weather data to the user."
            }
            techStack={"React, Scss, and Axios"}
            image={weather}
            placeholder={weatherLow}
          />

          <ProjectItem
            link={"https://github.com/davemgj84/haiku"}
            icon={"fas fa-pen-fancy"}
            title={"Haiku"}
            description={
              "A small but fun Front-End application, that will allows the user to click a button and read a Haiku. Every click will bring up a new Haiku."
            }
            techStack={"React & Scss"}
            image={haiku}
            placeholder={haikuLow}
          />

          <ProjectItem
            link={"https://github.com/davemgj84/theFilmAwards"}
            icon={"fas fa-film"}
            title={"Film Awards"}
            description={
              "An app that allows users to search the Open Movie Database (OMDb API), for their favourite films and nominate up to 5 films for an award."
            }
            techStack={"React, Scss & Axios"}
            image={theFilmAwards}
            placeholder={theFilmAwardsLow}
          />

          <ProjectItem
            link={"https://github.com/davemgj84/sapphire"}
            icon={"fas fa-gamepad"}
            title={"Sapphire"}
            description={
              "An interactive story based choose your own adventure game."
            }
            techStack={
              "React, React-Spring, Phaser, Axios, Express, Node & PSQL"
            }
            image={sapphire}
            placeholder={sapphireLow}
          />

          <ProjectItem
            link={"https://github.com/davemgj84/scheduler"}
            icon={"far fa-calendar-alt"}
            title={"Scheduler"}
            description={
              "Scheduler is single-page app that allows students to book appointments with interviewers."
            }
            techStack={"React, Scss & Axios"}
            image={scheduler}
            placeholder={schedulerLow}
          />

          <ProjectItem
            link={"https://github.com/davemgj84/wiki-maps"}
            icon={"fas fa-map-marker-alt"}
            title={"Wiki-Maps"}
            description={
              "An interactive map where users can create personal maps of favourite locations, using the Google Maps API."
            }
            techStack={"Express, Node, EJS, PG & Scss"}
            image={wikiMaps}
            placeholder={wikiMapsLow}
          />

          <ProjectItem
            link={"https://github.com/davemgj84/tweeter"}
            icon={"fas fa-retweet"}
            title={"Tweeter"}
            description={"Tweeter is a simple, single-page Twitter clone."}
            techStack={"HTML, CSS, JS, jQuery, Node, Express & MongoDB"}
            image={tweeter}
            placeholder={tweeterLow}
          />
        </div>
      </section>
    </>
  );
};

export default Projects;
