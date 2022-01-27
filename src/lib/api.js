const CONTACTS_DOMAIN =
  "https://61c32f169cfb8f0017a3e9f4.mockapi.io/api/v1/contacts";

export async function getAllContacts() {
  const response = await fetch(`${CONTACTS_DOMAIN}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch contacts.");
  }

  return data;
}

export async function getSingleContact(contactId) {
  const response = await fetch(`${CONTACTS_DOMAIN}/${contactId}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch contact.");
  }

  return data;
}

export async function addContact(contactData) {
  const response = await fetch(`${CONTACTS_DOMAIN}`, {
    method: "POST",
    body: JSON.stringify(contactData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create contact.");
  }

  return null;
}

export async function editContact(contactData) {
  const response = await fetch(`${CONTACTS_DOMAIN}/${contactData.id}`, {
    method: "PUT",
    body: JSON.stringify(contactData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not update contact.");
  }

  return null;
}

export async function deleteContact(contactId) {
  const response = await fetch(`${CONTACTS_DOMAIN}/${contactId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not delete contact.");
  }

  return null;
}
