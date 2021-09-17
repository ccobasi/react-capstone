import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Detail from './Detail';
import { fetchExecutive, detailPageSuccess } from '../redux/executives';

/* eslint-disable react/prop-types */
const Details = ({ match }) => {
  const executives = useSelector((state) => state.executive.executive);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (executives.length === 0) {
      dispatch(fetchExecutive());
    }
    dispatch(detailPageSuccess(true));
  }, []);

  const executive = executives.find(
    (executive) => executive.title.toString() === match.params.title.toString(),
  );

  if (executives.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="Header-Container">
        <div className="Header-Name">
          <h2>{executive.name.toUpperCase()}</h2>
          <p>
            {executive.title}
            {' '}
            <br />
            {' '}
            Portfolio
          </p>
        </div>
      </div>
      <div className="All-Stats">
        <h3 className="Currency-Stats">Details By Gender</h3>
        <Detail executive={executive} />
      </div>
    </div>
  );
};

export default Details;
