import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ExecutiveComponent from './ExecutiveComponent';
import {
  fetchExecutives,
} from '../redux/executive/executives';

const Home = () => {
  const executives = useSelector((state) => state.data.data);
  const executivesStatus = useSelector((state) => state.data.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (executivesStatus === false) {
      dispatch(fetchExecutives());
    }
  }, []);
  /* eslint-disable-next-line */
  console.log('Executives :', executives);

  return (
    <div>
      <ExecutiveComponent />
    </div>
  );
};

export default Home;
