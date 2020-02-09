export let contacts = [
  {
    id: "1",
    name: "aqib",
    contact: "0312-0046554"
  },
  {
    id: "2",
    name: "shehzad",
    contact: "0301-7614142"
  },
  {
    id: "3",
    name: "shehzad",
    contact: "0301-7614142"
  },
  {
    id: "4",
    name: "shehzad",
    contact: "0301-7614142"
  },
  {
    id: "5",
    name: "shehzad",
    contact: "0301-7614142"
  },
  {
    id: "6",
    name: "shehzad",
    contact: "0301-7614142"
  }
];

export function getContacts() {
  return contacts;
}

export function getContact(id) {
  return contacts.find(m => m.id === id);
}

export function addContacts(obj = {}) {
  contacts.push(obj);
  return contacts;
}
export function DeleteContact(id) {
  contacts = contacts.filter(m => m.id !== id);
  return contacts;
}

export function addContact(obj = {}, id) {
  contacts = contacts.map(contact => {
    if (contact.id === id) {
      // change
      return {
        ...contact,
        ...obj
      };
    }
    return contact;
  });
  return contacts;
}
