import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../styles/Projects.scss";
import sapphire from "../assets/sapphire.jpg";
import scheduler from "../assets/scheduler.jpg";
import wikiMaps from "../assets/wikiMaps.jpg";
import tweeter from "../assets/tweeter.jpg";

const Projects = () => {
  return (
    <>
      <section className="projects">
        <h1>Projects</h1>
        <div className="projects-container">
          <section className="top-two">
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
                    Tech Stack: React, React-Spring, Phaser, Axios, Express,
                    Node, PSQL
                  </li>
                </ul>
              </div>
              <LazyLoadImage
                className="thumbnail"
                alt="Sapphire"
                src={sapphire}
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
              />
            </div>
          </section>
          <section className="bottom-two">
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
              />
            </div>
            <hr className="divider" />
          </section>
        </div>
      </section>
    </>
  );
};

export default Projects;
