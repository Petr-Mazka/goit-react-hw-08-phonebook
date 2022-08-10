import React, { useState, useEffect } from "react";
import ContactsList from "./Phonebook/ContactsList/ContactsList";
import Filter from "./Phonebook/Filter/Filter";
import Form from "./Phonebook/Form/Form";
import { nanoid } from 'nanoid/non-secure'
import css from './Phonebook.module.css'

// export class App extends Component {

//     state = {
//         contacts: [
//         { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//         { id: 'id-12', name: 'Rosie Simponb', number: '459-12-54' },
//         { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//         { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//         { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],
//         filter: ''
//     }
    
//     componentDidUpdate(prevProps, prevState) {
//       if (prevState.contacts !== this.state.contacts) {
//           localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//       }
//     }
  
//     componentDidMount() {
//       const contacts = localStorage.getItem('contacts');
//       if (contacts) {
//         this.setState({ contacts: JSON.parse(contacts) });
//       }
//     }

//     changeFilter = (event) => {
//         this.setState({
//             filter: event.currentTarget.value
//         })
//     }

//     formSubmitHandler = data => {

//         const newContact = {
//             id: nanoid(),
//             name: data.name,
//             number: data.number
//         }

//         this.state.contacts.find(contact =>
//             contact.name.toLowerCase() === data.name.toLowerCase()) ?
//             alert(`${data.name} is already in contacts`) :
//             this.setState({
//                 contacts: [...this.state.contacts, newContact]
//             })
//     }

//       deleteContact = contactId => {
//         this.setState(prevState => ({
//         contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//         }));
//       };

//     render() {
//         const normalizedFilter = this.state.filter.toLowerCase();
//         const visibleContacts = this.state.contacts.filter(contact => {
//             return contact.name.toLowerCase().includes(normalizedFilter);
//         })
//       return (
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
//             <Form onSubmit={this.formSubmitHandler} />
//             <ContactsList title="Contacts" contacts={visibleContacts} onDeleteContact={this.deleteContact}>
//                 <Filter onChange={this.changeFilter} type="text" value={this.state.filter} name="filter" title="" pattern="" />
//             </ContactsList>
//           </div>
//       </div>
//     );
//   }
// }

export const App = () => {
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) ?? []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const changeFilter = (event) => {
    setFilter(event.currentTarget.value);
  }

  const formSubmitHandler = (data) => {
    const newContact = {
      id: nanoid(),
      name: data.name,
      number: data.number
    }

    contacts.find(contact =>
    contact.name.toLowerCase() === data.name.toLowerCase()) ?
    alert(`${data.name} is already in contacts`) :
    setContacts([...contacts, newContact]);
  }

  const deleteContact = (contactId) => {
    setContacts(prevState => prevState.filter(contact => contact.id !== contactId));
  }

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(normalizedFilter);
  });

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
            <Form onSubmit={formSubmitHandler} />
            <ContactsList title="Contacts" contacts={visibleContacts} onDeleteContact={deleteContact}>
                <Filter onChange={changeFilter} type="text" value={filter} name="filter" title="" pattern="" />
            </ContactsList>
          </div>
      </div>
  );
}