import { changeFilter } from "../../redux/actions";
import { connect } from "react-redux";
const Filter = ({ onChange, filter }) => {
  return (
    <div>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        type="text"
        name="filter"
        id="filter"
        onChange={onChange}
        value={filter}
      ></input>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    dispatch(changeFilter(e.target.value.trim().toLowerCase()))
  },
});

const mapStateToProps = state => ({
   filter: state.contacts.filter
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);