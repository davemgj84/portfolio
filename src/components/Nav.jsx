import React from "react";
// import { Link } from "react-router-dom";
import navSlide from "../helpers/navSlide";
import "../styles/Nav.scss";

const Nav = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <h4>DJ</h4>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div onClick={() => navSlide()} className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
