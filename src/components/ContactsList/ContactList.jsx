import {  } from "../../redux/actions";
import { connect } from "react-redux";
import { deleteContact } from "../../redux/actions";
import { Contacts, ContactItem } from "./ContactList.styled";
const ContactsList = ({ contacts, query, onDeleteContact }) => {
  const filteredContacts = () => {
     return contacts.filter((contact) => contact.name.toLowerCase().includes(query))
  }
  return (
    <Contacts>
      {(query === '' ? contacts : filteredContacts()).map(({ name, id, number }) => (
      <ContactItem key={id}>
        {name}:<span>{number}</span>
      <button onClick={() => onDeleteContact(id)}>
        Delete
      </button>
      </ContactItem>
      ))}
    </Contacts>
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