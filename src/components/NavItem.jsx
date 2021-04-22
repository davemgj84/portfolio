import { NavLink } from "react-router-dom";

const NavItem = (props) => {
  return (
    <li>
      <NavLink
        activeStyle={{
          backgroundColor: "rgba(92, 111, 133, 0.7)",
          color: "#ffffff",
        }}
        onClick={() => props.setNavActive(false)}
        to={props.link}
      >
        {props.title}
      </NavLink>
    </li>
  );
};

export default NavItem;
