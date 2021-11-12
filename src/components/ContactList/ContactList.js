import PropTypes from "prop-types";
import { connect } from "react-redux";
import { IoCloseCircleSharp } from "react-icons/io5";
import s from "./ContactList.module.css";
import { deleteContact } from "../../redux/contacts/contacts-action";

function ContactList({ contacts, onDelete }) {
  return (
    <ul className={s.list}>
      {contacts &&
        contacts.map(({ id, name, number }) => {
          const tel = `tel:` + number.replace(/^(\+)|\D/g, "$1");
          return (
            <li key={id} className={s.item}>
              <p>
                {name}: <a href={tel}>{number}</a>
              </p>
              <button
                className={s.button}
                type="button"
                data-id={id}
                onClick={(e) => {
                  onDelete(e.currentTarget.dataset.id);
                }}
              >
                <IoCloseCircleSharp />
              </button>
            </li>
          );
        })}
    </ul>
  );
}

const getVisibleContacts = (contacts, filter) => {
  const search = filter.toUpperCase();
  return contacts.filter((contact) =>
    contact.name.toUpperCase().includes(search)
  );
};

const mapStateToProps = (state) => ({
  contacts: getVisibleContacts(state.contacts.items, state.contacts.filter),
});

const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch(deleteContact(id)),
});

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  deleteContact: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
