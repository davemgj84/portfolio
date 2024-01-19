import { NavLink } from "react-router-dom";

export default function NavItem(props) {
  const { link, onHandleNavigation, title } = props;

  return (
    <li>
      <NavLink
        style={({ isActive }) => ({
          backgroundColor: isActive ? "rgba(92, 111, 133, 0.7)" : "",
          color: isActive ? "#ffffff" : "#d9dcdf",
        })}
        onClick={onHandleNavigation}
        to={link}
      >
        {title}
      </NavLink>
    </li>
  );
}
