import PropTypes from "prop-types";
import s from "./Filter.module.css";
import { connect } from "react-redux";
import { changeFilter } from "../../redux/contacts/contacts-action";

function Filter({ filter, handlerChange }) {
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
          onChange={handlerChange}
        />
      </label>
    </section>
  );
}

const mapStateToProps = (state) => ({
  filter: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  handlerChange: (e) => dispatch(changeFilter(e.target.value)),
});

Filter.propTypes = {
  filter: PropTypes.string,
  handlerChange: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
