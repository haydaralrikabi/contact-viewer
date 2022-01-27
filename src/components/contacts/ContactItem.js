import { Link } from "react-router-dom";

import classes from "./ContactItem.module.css";

const ContactItem = (props) => {
  return (
    <li className={classes.item}>
      <img src={props.avatar} width="150" />

      <Link className="btn" to={`/${props.id}`}>
        {props.name}
      </Link>
    </li>
  );
};

export default ContactItem;
