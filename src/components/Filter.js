/* eslint-disable react/prop-types */
const Filter = ({ handleSelection }) => (
  <select onChange={(e) => handleSelection(e)} className="Filter">
    <option value="all">All</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
  </select>
);

export default Filter;
