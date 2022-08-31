import React from "react";
import ContactsList from "./Phonebook/ContactsList/ContactsList";
import Form from "./Phonebook/Form/Form";
// import { nanoid } from 'nanoid/non-secure'
import css from './Phonebook.module.css'

// export const App = () => {
//   const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) ?? []);
//   const [filter, setFilter] = useState('');

//   useEffect(() => {
//     window.localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);

//   const changeFilter = (event) => {
//     setFilter(event.currentTarget.value);
//   }


//     contacts.find(contact =>
//     contact.name.toLowerCase() === data.name.toLowerCase()) ?
//     alert(`${data.name} is already in contacts`) :
//     setContacts([...contacts, newContact]);
//   }

//   const deleteContact = (contactId) => {
//     setContacts(prevState => prevState.filter(contact => contact.id !== contactId));
//   }

//   const normalizedFilter = filter.toLowerCase();
//   const visibleContacts = contacts.filter(contact => {
//     return contact.name.toLowerCase().includes(normalizedFilter);
//   });

//   return (
//       <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//         <div className={css.container}>
//             <Form onSubmit={formSubmitHandler} />
//             <ContactsList title="Contacts" contacts={visibleContacts} onDeleteContact={deleteContact}>
//                 <Filter onChange={changeFilter} type="text" value={filter} name="filter" title="" pattern="" />
//             </ContactsList>
//           </div>
//       </div>
//   );
// }

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