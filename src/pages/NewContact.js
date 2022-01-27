import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ContactForm from "../components/contacts/ContactForm";
import useHttp from "../hooks/use-http";
import { addContact } from "../lib/api";

const NewContact = () => {
  const { sendRequest, status } = useHttp(addContact);
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "completed") {
      navigate("/");
    }
  }, [status, navigate]);

  const addContactHandler = (contactData) => {
    sendRequest(contactData);
  };

  return (
    <ContactForm
      isLoading={status === "pending"}
      onaddContact={addContactHandler}
      contactDetails={{}}
    />
  );
};

export default NewContact;
