import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import "../styles/Nav.scss";

const Nav = () => {
  const [navActive, setNavActive] = useState(false);
  const navItems = [
    {
      title: "Home",
      link: "/home",
    },
    {
      title: "Skills",
      link: "/skills",
    },
    {
      title: "Projects",
      link: "/projects",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ];

  const navLinks = navItems.map((nav, index) => {
    return (
      <NavItem title={nav.title} link={nav.link} setNavActive={setNavActive} />
    );
  });

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
          {navLinks}
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
