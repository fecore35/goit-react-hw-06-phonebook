import s from "./Filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/contacts/contacts-action";

function Filter({ handlerChange }) {
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <section className={s.container}>
      <label>
        Find contact by name
        <input
          type="text"
          className={s.input}
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          value={filter}
          onChange={(e) => dispatch(changeFilter(e.target.value))}
        />
      </label>
    </section>
  );
}

export default Filter;
