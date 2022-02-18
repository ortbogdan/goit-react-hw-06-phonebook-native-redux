import {  } from "../../redux/actions";
import { connect } from "react-redux";
import { deleteContact } from "../../redux/actions";
const ContactsList = ({ contacts, query, onDeleteContact }) => {
  const filteredContacts = () => {
     return contacts.filter((contact) => contact.name.toLowerCase().includes(query))
  }
  return (
    <ul>
      {(query === '' ? contacts : filteredContacts()).map(({ name, id, number }) => (
      <li key={id}>
        {name}:<span>{number}</span>
      <button onClick={() => onDeleteContact(id)}>
        Delete
      </button>
      </li>
      ))}
    </ul>
  );
};

const mapStateToProps = state => ({
  contacts: state.contacts.items,
  query: state.contacts.filter
})

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => 
    dispatch(deleteContact(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList)