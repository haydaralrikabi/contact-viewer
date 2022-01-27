import { Link } from "react-router-dom";

import classes from "./NoContactsFound.module.css";

const NoContactsFound = () => {
  return (
    <div className={classes.nocontacts}>
      <p>No contacts found!</p>
      <Link className="btn" to="/new-contact">
        Add a Contact
      </Link>
    </div>
  );
};

export default NoContactsFound;
