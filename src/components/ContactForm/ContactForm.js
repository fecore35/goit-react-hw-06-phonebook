import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import s from "./ContactForm.module.css";
import { connect } from "react-redux";
import { createContact } from "redux/contacts/contacts-action";

function ContactForm({ contacts, onSave }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handlerChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const onSaveContact = (e) => {
    e.preventDefault();

    const newContactName = e.target.name.value.toUpperCase();
    const knownContactToName = contacts.find(
      ({ name }) => name.toUpperCase() === newContactName
    );

    if (knownContactToName) {
      return alert(`${newContactName} is already in contacts.`);
    }

    const newContact = { id: uuidv4(), name, number };

    setName("");
    setNumber("");

    // ? GlobalState - add new Contact
    onSave(newContact);
  };

  return (
    <form className={s.form} onSubmit={onSaveContact}>
      <label className={s.label}>
        Name
        <input
          type="text"
          className={s.input}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handlerChange}
        />
      </label>

      <label className={s.label}>
        Number
        <input
          type="tel"
          className={s.input}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={handlerChange}
        />
      </label>

      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = (dispatch) => ({
  onSave: (contact) => dispatch(createContact(contact)),
});

ContactForm.propTypes = {
  onSave: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);