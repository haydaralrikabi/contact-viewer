import ContactItem from "./ContactItem";
import classes from "./ContactList.module.css";

const ContactList = (props) => {
  return (
    <ul className={classes.list}>
      {props.contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          avatar={contact.avatar}
        />
      ))}
    </ul>
  );
};

export default ContactList;
