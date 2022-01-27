import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ContactForm from "./ContactForm";
import useHttp from "../../hooks/use-http";
import { editContact } from "../../lib/api";

const EditContactForm = (props) => {
  const { sendRequest, status } = useHttp(editContact);
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "completed") {
      navigate(`/${props.contactDetails.id}`);
    }
  }, [status, navigate]);

  const editContactHandler = (contactData) => {
    sendRequest(contactData);
  };

  return (
    <ContactForm
      isLoading={status === "pending"}
      onaddContact={editContactHandler}
      contactDetails={props.contactDetails}
    />
  );
};

export default EditContactForm;
