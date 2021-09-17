import {
  Link,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { FiArrowRightCircle } from 'react-icons/fi';
import { detailPageSuccess } from '../redux/executives';

const ExecutiveComponent = ({ executive }) => {
  const dispatch = useDispatch();

  const {
    title, pay, name, gender,
  } = executive;

  return (
    <li className="Currency">
      <Link
        key={title}
        to={`/details/${title}`}
        onClick={() => {
          dispatch(detailPageSuccess(true));
        }}
        value={title}
      >
        <div className="Currency-Container">
          <div className="Currency-Picture">
            <FiArrowRightCircle className="Arrow" />
            <div className="Symbol">
              <p>{title}</p>
            </div>
          </div>
          <div className="Currency-Name">
            <h2>{name}</h2>
            <h3>{pay}</h3>
            <p>{gender}</p>
          </div>
        </div>
      </Link>
    </li>
  );
};

ExecutiveComponent.propTypes = {
  title: PropTypes.any,
  pay: PropTypes.any,
  name: PropTypes.any,
  gender: PropTypes.any,
}.isRequired;

export default ExecutiveComponent;
