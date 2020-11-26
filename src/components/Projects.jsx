import React from "react";
import ProgressiveImage from "react-progressive-graceful-image";
import "../styles/Projects.scss";
import sapphire from "../assets/sapphire.png";
import sapphireLow from "../assets/sapphireLow.jpg";
import scheduler from "../assets/scheduler.png";
import schedulerLow from "../assets/schedulerLow.jpg";
import wikiMaps from "../assets/wikiMaps.png";
import wikiMapsLow from "../assets/wikiMapsLow.jpg";
import tweeter from "../assets/tweeter.png";
import tweeterLow from "../assets/tweeterLow.jpg";

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
                  <i className="fas fa-gamepad"></i>{" "}
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/davemgj84/sapphire"
                  >
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
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/davemgj84/sapphire"
              >
                <ProgressiveImage src={sapphire} placeholder={sapphireLow}>
                  {(src, loading) => (
                    <img
                      style={{ opacity: loading ? 0.5 : 1 }}
                      className="thumbnail"
                      src={src}
                      alt="Sapphire"
                    />
                  )}
                </ProgressiveImage>
              </a>
            </div>
            <hr className="divider" />

            <div className="project-block">
              <div className="name-desc">
                <h2>
                  <i className="far fa-calendar-alt"></i>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/davemgj84/scheduler"
                  >
                    {" "}
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
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/davemgj84/scheduler"
              >
                <ProgressiveImage src={scheduler} placeholder={schedulerLow}>
                  {(src, loading) => (
                    <img
                      style={{ opacity: loading ? 0.5 : 1 }}
                      className="thumbnail"
                      src={src}
                      alt="Sapphire"
                    />
                  )}
                </ProgressiveImage>
              </a>
            </div>
          </section>
          <section className="bottom-two">
            <hr className="divider" />

            <div className="project-block">
              <div className="name-desc">
                <h2>
                  <i className="fas fa-map-marker-alt"></i>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/davemgj84/wiki-maps"
                  >
                    {" "}
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
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/davemgj84/wiki-maps"
              >
                <ProgressiveImage src={wikiMaps} placeholder={wikiMapsLow}>
                  {(src, loading) => (
                    <img
                      style={{ opacity: loading ? 0.5 : 1 }}
                      className="thumbnail"
                      src={src}
                      alt="Sapphire"
                    />
                  )}
                </ProgressiveImage>
              </a>
            </div>
            <hr className="divider" />

            <div className="project-block">
              <div className="name-desc">
                <h2>
                  <i className="fas fa-retweet"></i>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/davemgj84/tweeter"
                  >
                    {" "}
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
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/davemgj84/tweeter"
              >
                <ProgressiveImage src={tweeter} placeholder={tweeterLow}>
                  {(src, loading) => (
                    <img
                      style={{ opacity: loading ? 0.5 : 1 }}
                      className="thumbnail"
                      src={src}
                      alt="Sapphire"
                    />
                  )}
                </ProgressiveImage>
              </a>
            </div>
            <hr className="divider" />
          </section>
        </div>
      </section>
    </>
  );
};

export default Projects;
