import { useEffect } from "react";

import ContactList from "../components/contacts/ContactList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoContactsFound from "../components/contacts/NoContactsFound";
import useHttp from "../hooks/use-http";
import { getAllContacts } from "../lib/api";

const AllContacts = () => {
  const {
    sendRequest,
    status,
    data: loadedContacts,
    error,
  } = useHttp(getAllContacts, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (
    status === "completed" &&
    (!loadedContacts || loadedContacts.length === 0)
  ) {
    return <NoContactsFound />;
  }

  return <ContactList contacts={loadedContacts} />;
};

export default AllContacts;
