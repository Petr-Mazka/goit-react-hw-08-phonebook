import PropTypes from "prop-types";

const ContactsList = ({ contacts, title, onDeleteContact, children }) => {
    return (
        <>
        <h2>{title}</h2>
        {children}
        <ul>
        {contacts.map(contact => (
            <li key={contact.id}>
            <span>{contact.name}:</span>
            <span>{contact.number}</span>
            <button type="button" onClick={() => onDeleteContact(contact.id)}>Delete</button>
            </li>
        ))}
        </ul>
        </>
    );
}

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired   
        }).isRequired
    ).isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired
}

export default ContactsList;