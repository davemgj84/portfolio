import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../styles/Projects.scss";
import haiku from "../assets/haiku.jpg";
import haikuLow from "../assets/haikuLow.jpg";
import theFilmAwards from "../assets/theFilmAwards.png";
import theFilmAwardsLow from "../assets/theFilmAwardsLow.jpg";
import sapphire from "../assets/sapphire.jpg";
import sapphireLow from "../assets/sapphireLow.jpg";
import scheduler from "../assets/scheduler.jpg";
import schedulerLow from "../assets/schedulerLow.jpg";
import wikiMaps from "../assets/wikiMaps.jpg";
import wikiMapsLow from "../assets/wikiMapsLow.jpg";
import tweeter from "../assets/tweeter.jpg";
import tweeterLow from "../assets/tweeterLow.jpg";

const Projects = () => {
  return (
    <>
      <section className="projects">
        <h1>Projects</h1>
        <div className="projects-container">
          <div className="divider"></div>

          <div className="project-block">
            <div className="name-desc">
              <h2>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/davemgj84/haiku"
                >
                  <i className="fas fa-pen-fancy"></i>
                  Haiku
                </a>
              </h2>
              <ul>
                <li>
                  A small but fun little front-end app that will allow a user to
                  click a button and read a Haiku. Every click will bring up a
                  new Haiku.
                </li>
                <li>Tech Stack: React, Sass</li>
              </ul>
            </div>
            <LazyLoadImage
              className="thumbnail"
              alt="Haiku App"
              src={haiku}
              effect="blur"
              placeholderSrc={haikuLow}
            />
          </div>
          <div className="divider"></div>

          <div className="project-block">
            <div className="name-desc">
              <h2>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/davemgj84/theFilmAwards"
                >
                  <i className="fas fa-film"></i>
                  Film Awards
                </a>
              </h2>
              <ul>
                <li>
                  An app that allows users to search the Open Movie Database
                  (OMDB), for their favourite films and nominate up to 5 films
                  for an award.
                </li>
                <li>Tech Stack: React, Sass, Axios</li>
              </ul>
            </div>
            <LazyLoadImage
              className="thumbnail"
              alt="The Film Awards"
              src={theFilmAwards}
              effect="blur"
              placeholderSrc={theFilmAwardsLow}
            />
          </div>
          <div className="divider"></div>

          <div className="project-block">
            <div className="name-desc">
              <h2>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/davemgj84/sapphire"
                >
                  <i className="fas fa-gamepad"></i>
                  Sapphire
                </a>
              </h2>
              <ul>
                <li>
                  An interactive story based choose your own adventure game
                </li>
                <li>
                  Tech Stack: React, React-Spring, Phaser, Axios, Express, Node,
                  PSQL
                </li>
              </ul>
            </div>
            <LazyLoadImage
              className="thumbnail"
              alt="Sapphire"
              src={sapphire}
              effect="blur"
              placeholderSrc={sapphireLow}
            />
          </div>
          <hr className="divider" />

          <div className="project-block">
            <div className="name-desc">
              <h2>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/davemgj84/scheduler"
                >
                  <i className="far fa-calendar-alt"></i>
                  Scheduler
                </a>
              </h2>
              <ul>
                <li>
                  Scheduler is single-page app that allows students to book
                  appointments with interviewers
                </li>

                <li>Tech Stack: React, Sass, and Axios</li>
              </ul>
            </div>
            <LazyLoadImage
              className="thumbnail"
              alt="Scheduler"
              src={scheduler}
              effect="blur"
              placeholderSrc={schedulerLow}
            />
          </div>
          <hr className="divider" />

          <div className="project-block">
            <div className="name-desc">
              <h2>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/davemgj84/wiki-maps"
                >
                  <i className="fas fa-map-marker-alt"></i>
                  Wiki-Maps
                </a>
              </h2>
              <ul>
                <li>
                  An interactive map where users can create personal maps of
                  favourite locations, using the Google Maps API
                </li>
                <li>Tech Stack: Express, Node, EJS, PG, Sass</li>
              </ul>
            </div>
            <LazyLoadImage
              className="thumbnail"
              alt="Wiki-Maps"
              src={wikiMaps}
              effect="blur"
              placeholderSrc={wikiMapsLow}
            />
          </div>
          <hr className="divider" />

          <div className="project-block">
            <div className="name-desc">
              <h2>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/davemgj84/tweeter"
                >
                  <i className="fas fa-retweet"></i>
                  Tweeter
                </a>
              </h2>
              <ul>
                <li>Tweeter is a simple, single-page Twitter clone</li>
                <li>
                  Tech Stack: HTML, CSS, JS, jQuery, Node, Express, MongoDB
                </li>
              </ul>
            </div>
            <LazyLoadImage
              className="thumbnail"
              alt="Tweeter"
              src={tweeter}
              effect="blur"
              placeholderSrc={tweeterLow}
            />
          </div>
          <hr className="divider" />
        </div>
      </section>
    </>
  );
};

export default Projects;
