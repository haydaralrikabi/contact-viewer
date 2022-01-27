import { useRef } from "react";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./ContactForm.module.css";

const ContactForm = (props) => {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();
  const avatarInputRef = useRef();
  const birthdayInputRef = useRef();

  const editContact = Object.keys(props.contactDetails).length !== 0;

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredAvatar = avatarInputRef.current.value;
    const enteredBirthday = birthdayInputRef.current.value;

    const payload = {
      name: enteredName,
      email: enteredEmail,
      phone: enteredPhone,
      avatar: enteredAvatar,
      birthday: enteredBirthday,
    };

    if (editContact) {
      payload.id = props.contactDetails.id;
    }

    props.onaddContact(payload);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitFormHandler}>
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            ref={nameInputRef}
            defaultValue={editContact ? props.contactDetails.name : ""}
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            ref={emailInputRef}
            defaultValue={editContact ? props.contactDetails.email : ""}
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            ref={phoneInputRef}
            defaultValue={editContact ? props.contactDetails.phone : ""}
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="avatar">Avatar URL</label>
          <input
            type="text"
            id="avatar"
            ref={avatarInputRef}
            defaultValue={editContact ? props.contactDetails.avatar : ""}
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="birthday">Birthday</label>
          <input
            type="date"
            id="birthday"
            ref={birthdayInputRef}
            defaultValue={editContact ? props.contactDetails.birthday : ""}
          />
        </div>

        <div className={classes.actions}>
          <button className="btn">
            {editContact ? "Save Changes" : "Add Contact"}
          </button>
        </div>
      </form>
    </Card>
  );
};

export default ContactForm;
