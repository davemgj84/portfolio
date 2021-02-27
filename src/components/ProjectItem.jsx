import React from "react";
import "../styles/ProjectItem.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
            <li>{props.techStack}</li>
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
