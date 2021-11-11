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

const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch(deleteContact(id)),
});

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  deleteContact: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
