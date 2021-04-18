import React from "react";
import "../styles/ProjectItem.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../../node_modules/react-lazy-load-image-component/src/effects/blur.css";

const ProjectItem = (props) => {
  return (
    <>
      <div className="project-block">
        <div className="name-desc">
          <h2>
            <a rel="noreferrer" target="_blank" href={props.link}>
              <i className={props.icon}></i>
              {props.title}
            </a>
          </h2>
          <ul>
            <li>{props.description}</li>
            <li>Tech Stack: {props.techStack}</li>
          </ul>
        </div>
        <LazyLoadImage
          className="thumbnail"
          alt={props.title}
          src={props.image}
          effect="blur"
          placeholderSrc={props.placeholder}
        />
      </div>
      <hr className="divider" />
    </>
  );
};

export default ProjectItem;
