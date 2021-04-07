import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Nav.scss";

const Nav = () => {
  const [navActive, setNavActive] = useState(false);

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
        <ul className={navActive ? "nav-active nav-links" : "nav-links"}>
          <li>
            <NavLink
              activeStyle={{
                backgroundColor: "rgba(92, 111, 133, 0.7)",
                color: "#ffffff",
              }}
              onClick={() => setNavActive((prev) => !prev)}
              to={"/home"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={{
                backgroundColor: "rgba(92, 111, 133, 0.7)",
                color: "#ffffff",
              }}
              onClick={() => setNavActive((prev) => !prev)}
              to={"/skills"}
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={{
                backgroundColor: "rgba(92, 111, 133, 0.7)",
                color: "#ffffff",
              }}
              onClick={() => setNavActive((prev) => !prev)}
              to={"/projects"}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={{
                backgroundColor: "rgba(92, 111, 133, 0.7)",
                color: "#ffffff",
              }}
              onClick={() => setNavActive((prev) => !prev)}
              to={"/contact"}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div
          onClick={() => setNavActive((prev) => !prev)}
          className={navActive ? "burger toggle" : "burger"}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
