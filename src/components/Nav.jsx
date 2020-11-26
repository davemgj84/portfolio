import React from "react";
import { Link, NavLink } from "react-router-dom";
import openNav from "../helpers/openNav";
import closeNav from "../helpers/closeNav";
import "../styles/Nav.scss";

const Nav = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <h4>
            <Link to={"/home"}>
              &lt; D<span className="shorten-name">avid</span> J
              <span className="shorten-name">ardine</span> / &gt;
            </Link>
          </h4>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink
              activeStyle={{
                backgroundColor: "#4a5f78",
                color: "#ffffff",
              }}
              onClick={() => closeNav()}
              to={"/home"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={{
                backgroundColor: "#4a5f78",
                color: "#ffffff",
              }}
              onClick={() => closeNav()}
              to={"/skills"}
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={{
                backgroundColor: "#4a5f78",
                color: "#ffffff",
              }}
              onClick={() => closeNav()}
              to={"/projects"}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={{
                backgroundColor: "#4a5f78",
                color: "#ffffff",
              }}
              onClick={() => closeNav()}
              to={"/contact"}
            >
              Contact
            </NavLink>
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
