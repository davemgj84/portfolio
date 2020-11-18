import React from "react";
import { Link } from "react-router-dom";
import openNav from "../helpers/openNav";
import closeNav from "../helpers/closeNav";
import "../styles/Nav.scss";

const Nav = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <h4>
            <Link to={"/about"}>
              <i className="fas fa-code"></i> D<span>avid</span> Jardine
            </Link>
          </h4>
        </div>
        <ul id="menu" className="nav-links">
          <li>
            <Link onClick={() => closeNav()} to={"/about"}>
              About
            </Link>
          </li>
          <li>
            <Link onClick={() => closeNav()} to={"/skills"}>
              Skills
            </Link>
          </li>
          <li>
            <Link onClick={() => closeNav()} to={"/projects"}>
              Projects
            </Link>
          </li>
          <li>
            <Link onClick={() => closeNav()} to={"/contact"}>
              Contact
            </Link>
          </li>
        </ul>
        <div onClick={() => openNav()} className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
