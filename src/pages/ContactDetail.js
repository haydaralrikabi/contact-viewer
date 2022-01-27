import { useEffect } from "react";
import { useParams } from "react-router-dom";

import SelectedContact from "../components/contacts/SelectedContact";
import useHttp from "../hooks/use-http";
import { getSingleContact } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const ContactDetail = () => {
  const params = useParams();

  const { contactId } = params;

  const {
    sendRequest,
    status,
    data: loadedContact,
    error,
  } = useHttp(getSingleContact, true);

  useEffect(() => {
    sendRequest(contactId);
  }, [sendRequest, contactId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (loadedContact.length === 0) {
    return <p>No contact found!</p>;
  }

  return <SelectedContact contact={loadedContact} />;
};

export default ContactDetail;
