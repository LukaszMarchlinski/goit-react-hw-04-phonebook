import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <label_contact>
    Find contacts by name
    <input type="filter" name="filter" value={value} onChange={onChange} />
  </label_contact>
);

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
}