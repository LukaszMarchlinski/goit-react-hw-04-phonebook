import { usePhonebook } from 'providers/PhonebookProvider';

const Filter = () => {
const { handleFilter } = usePhonebook();

return (
  <label_contact>
    Find contacts by name
    <input type="filter" name="filter" onChange={handleFilter} />
  </label_contact>
)};

export default Filter;