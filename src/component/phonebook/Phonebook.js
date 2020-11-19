import React, { useState, useEffect } from "react";
import ContactForm from "../contactForm/ContactForm";
import { v4 as uuidv4 } from "uuid";
import Filter from "../filter/Filter";
import ContactList from "../contactList/ContactList";
import style from "./Phonebook.module.css";
import { CSSTransition } from "react-transition-group";

const Phonebook = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const getLocalStorageData = localStorage.getItem("contacts");
    getLocalStorageData && setContacts(JSON.parse(getLocalStorageData));
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addUserContact = (name, number) => {
    const userContact = { name: name, number: number, id: uuidv4() };
    setContacts((prev) => [...prev, userContact]);
  };

  const userFilter = (filter) => {
    setFilter(filter.toLowerCase());
  };

  const findUserContact = () => {
    return contacts.filter((elem) => elem.name.toLowerCase().includes(filter));
  };

  const deleteUserContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div className={style.phonebook_wrapper}>
      <CSSTransition
        in={true}
        timeout={500}
        classNames={style}
        appear={true}
        unmountOnExit
      >
        <h1 className={style.phonebook_title}>Phonebook</h1>
      </CSSTransition>
      <ContactForm addUserContact={addUserContact} contacts={contacts} />

      <h2 className={style.phonebook_titleContact}>Contacts</h2>
      {contacts.length > 1 && <Filter userFilter={userFilter} filter={filter} />}
      <ContactList
        findUserContact={(contacts.length>1)? (findUserContact()) : (contacts)}
        deleteUserContact={deleteUserContact}
      />
    </div>
  );
};

export default Phonebook;
