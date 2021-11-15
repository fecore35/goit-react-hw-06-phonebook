import { useDispatch, useSelector } from "react-redux";
import { IoCloseCircleSharp } from "react-icons/io5";
import s from "./ContactList.module.css";
import { deleteContact } from "../../redux/contacts/contacts-action";

const getVisibleContacts = (contacts, filter) => {
  const search = filter.toUpperCase();
  return contacts.filter((contact) =>
    contact.name.toUpperCase().includes(search)
  );
};

function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);
  const visibleContacts = getVisibleContacts(contacts, filter);
  const dispatch = useDispatch();

  return (
    <ul className={s.list}>
      {visibleContacts &&
        visibleContacts.map(({ id, name, number }) => {
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
                  dispatch(deleteContact(e.currentTarget.dataset.id));
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

export default ContactList;
