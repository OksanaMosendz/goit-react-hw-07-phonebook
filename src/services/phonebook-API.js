const BASE_URL = 'http://localhost:7777';

export async function fetchContacts() {
  const response = await fetch(`${BASE_URL}/contacts`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();
  return data;
}

export async function addContact(contact) {
  const response = await fetch(`${BASE_URL}/contacts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contact),
  });

  const data = await response.json();
  return data;
}

export async function deleteContact(id) {
  await fetch(`${BASE_URL}/contacts/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
