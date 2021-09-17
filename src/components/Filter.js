import { PropTypes } from 'prop-types';

const Filter = ({ handleSelection }) => (
  <select onChange={(e) => handleSelection(e)} className="Filter">
    <option value="all">All</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
  </select>
);

Filter.propTypes = {
  title: PropTypes.any,
  pay: PropTypes.any,
  name: PropTypes.any,
  gender: PropTypes.any,
  yearBorn: PropTypes.any,
}.isRequired;

export default Filter;
