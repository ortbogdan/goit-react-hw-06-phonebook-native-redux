import {  } from "../../redux/actions";
import { connect } from "react-redux";
import { deleteContact } from "../../redux/actions";
const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ name, id, number }) => (
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
   contacts: state.contacts.items
})

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => 
    dispatch(deleteContact(id))
  
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList)