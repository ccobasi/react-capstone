import { PropTypes } from 'prop-types';

const Detail = ({ executive }) => {
  const {
    title, pay, name, gender, yearBorn,
  } = executive;

  return (
    <ul className="Detail-Container">
      <li>
        <h2>Title</h2>
        <p>{title}</p>
      </li>
      <li>
        <h2>Name</h2>
        <p>{name}</p>
      </li>
      <li>
        <h2>Gender</h2>
        <p>{gender}</p>
      </li>
      <li>
        <h2>Salary</h2>
        <p>{pay}</p>
      </li>
      <li>
        <h2>DOB</h2>
        <p>{yearBorn}</p>
      </li>
    </ul>
  );
};

Detail.propTypes = {
  title: PropTypes.any,
  pay: PropTypes.any,
  name: PropTypes.any,
  gender: PropTypes.any,
  yearBorn: PropTypes.any,
}.isRequired;

export default Detail;
