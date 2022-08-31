import React from "react";
import ContactsList from "./Phonebook/ContactsList/ContactsList";
import Form from "./Phonebook/Form/Form";
import css from './Phonebook.module.css'

export const App = () => {

  return (
      <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
        <div className={css.container}>
          <Form />
          <ContactsList title="Contacts" />
        </div>
      </div>
  );
}