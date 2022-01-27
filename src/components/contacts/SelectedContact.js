import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import classes from "./SelectedContact.module.css";
import useHttp from "../../hooks/use-http";
import { deleteContact } from "../../lib/api";

const SelectedContact = (props) => {
  const { sendRequest, status } = useHttp(deleteContact);
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "completed") {
      navigate("/");
    }
  }, [status, navigate]);

  const deleteContactHandler = () => {
    sendRequest(props.contact.id);
  };

  return (
    <>
      <div className={classes.card}>
        <img src={props.contact.avatar} width="350" align="top" />

        <div className={classes.details}>
          <div>
            <b>Name:</b> {props.contact.name}
          </div>
          <div>
            <b>Email:</b> {props.contact.email}
          </div>
          <div>
            <b>Phone:</b> {props.contact.phone}
          </div>
          <div>
            <b>Birthday:</b> {props.contact.birthday}
          </div>
        </div>

        <div className={classes.footer}>
          <Link className="btn" to={`/edit/${props.contact.id}`}>
            Edit
          </Link>
          <button
            className={`btn ${classes.delete}`}
            onClick={deleteContactHandler}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default SelectedContact;
