import React from "react";
import "../styles/Projects.scss";
import sapphire from "../assets/sapphire.png";
import scheduler from "../assets/scheduler.png";
import wikiMaps from "../assets/wikiMaps.png";
import tweeter from "../assets/tweeter.png";

const Projects = () => {
  return (
    <>
      <section className="projects">
        <h1>Projects</h1>
        <div className="container">
          <section className="top-two">
            <div className="divider"></div>

            <div className="project-block">
              <div className="name-desc">
                <h2>
                  <i class="fas fa-gamepad"></i>{" "}
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
                    React, React-Spring, Phaser, Axios, Express, Node, PSQL
                  </li>
                </ul>
              </div>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/davemgj84/sapphire"
              >
                <img className="thumbnail" src={sapphire} alt="Sapphire" />
              </a>
            </div>
            <div className="divider"></div>
            <div className="project-block">
              <div className="name-desc">
                <h2>
                  <i class="far fa-calendar-alt"></i>
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
                  <li>Axios and React</li>
                </ul>
              </div>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/davemgj84/scheduler"
              >
                <img className="thumbnail" src={scheduler} alt="Scheduler" />
              </a>
            </div>
          </section>
          <section className="bottom-two">
            <div className="divider"></div>

            <div className="project-block">
              <div className="name-desc">
                <h2>
                  <i class="fas fa-map-marker-alt"></i>
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
                  <li>Express, Node, EJS, PG, Sass</li>
                </ul>
              </div>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/davemgj84/wiki-maps"
              >
                <img className="thumbnail" src={wikiMaps} alt="Wiki-Maps" />
              </a>
            </div>
            <div className="divider"></div>

            <div className="project-block">
              <div className="name-desc">
                <h2>
                  <i class="fas fa-retweet"></i>
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
                  <li>HTML, CSS, JS, jQuery, Node, Express, MongoDB</li>
                </ul>
              </div>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/davemgj84/tweeter"
              >
                <img className="thumbnail" src={tweeter} alt="Tweeter" />
              </a>
            </div>
            <div className="divider"></div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Projects;
