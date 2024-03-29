
import { useState } from "react"
import { addContact } from "../../redux/actions";
import { connect } from "react-redux";
import { Form, Input } from "./ContactForm.styled";
const ContactForm = ({onSubmit}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(name, number);
    reset();
  }
  const reset = () => {
    setName('');
    setNumber('');
  }
    return <Form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        id="name"
        onChange={(e) => setName(e.target.value)}
        value={name}
        />
        <label htmlFor="number">Number</label>
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        id="number"
        onChange={(e) => setNumber(e.target.value)}
        value={number}
      />
      <button type="submit">Add contact</button>
    </Form>
}

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) => {
    dispatch(addContact(name, number))
  },
});

export default connect(null, mapDispatchToProps)(ContactForm);