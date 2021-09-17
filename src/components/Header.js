import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../scss/style.scss';
import { FaAngleLeft, FaMicrophone, FaCog } from 'react-icons/fa';

const Header = () => {
  const home = useSelector((state) => state.executive.home);

  return (
    <div className="NavBar-Container">
      <Heading home={home} />
    </div>
  );
};

/* eslint-disable react/prop-types */
const Heading = ({ home }) => {
  if (!home) {
    return (
      <div className="Header-Container">
        <p>2021</p>
        <p className="Header-Title">Top Executives</p>
        <div>
          <i className="Mic"><FaMicrophone /></i>
          <i><FaCog /></i>
        </div>
      </div>
    );
  }
  return (
    <div className="Header-Container">
      <p>
        <NavLink to="/">
          <FaAngleLeft />
        </NavLink>
      </p>
      <p>Details</p>
      <div>
        <i className="Mic"><FaMicrophone /></i>
        <i><FaCog /></i>
      </div>
    </div>
  );
};

export default Header;
