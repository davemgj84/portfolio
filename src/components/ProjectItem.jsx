import "../../node_modules/react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import React from "react";

import "../styles/ProjectItem.scss";

export default function ProjectItem(props) {
  const { desc, icon, image, link, placeholder, tech, title } = props;

  return (
    <>
      <div className="project-block">
        <div className="name-desc">
          <h2>
            <a rel="noreferrer" target="_blank" href={link}>
              <i className={icon}></i>
              {title}
            </a>
          </h2>
          <ul>
            <li>{desc}</li>
            <li>Tech Stack: {tech}</li>
          </ul>
        </div>
        <LazyLoadImage
          className="thumbnail"
          alt={title}
          src={image}
          effect="blur"
          placeholderSrc={placeholder}
        />
      </div>
      <hr className="divider" />
    </>
  );
}
