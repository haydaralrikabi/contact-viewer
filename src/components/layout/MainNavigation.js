import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Contacts Viewer</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to="/"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              All Contacts
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new-contact"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              Add a Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
