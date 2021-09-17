import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ExecutiveComponent from './ExecutiveComponent';
import { fetchExecutive, detailPageSuccess, filterExecutive } from '../redux/executives';
import Filter from './Filter';

function Home() {
  const executives = useSelector((state) => state.executive.executive);
  const filteredExecutives = useSelector((state) => state.executive.filtered);
  const data = useSelector((state) => state.executive.data);
  const executiveStatus = useSelector((state) => state.executive.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (executiveStatus === false) {
      dispatch(fetchExecutive());
    }
    dispatch(detailPageSuccess(false));
  }, []);

  const handleSelection = (e) => {
    dispatch(filterExecutive({ value: e.target.value, data: executives }));
  };

  const renderedItems = filteredExecutives.length === 0
   && data.length === 0 ? executives : filteredExecutives;

  return (
    <div className="Home">
      <div className="Header-Container">
        <div className="Header-Name">
          <h2>Key Executives</h2>
          <p>
            List
          </p>
        </div>
      </div>
      <div>
        <div className="Currency-Stats">
          <h4 className="Currency-Stats1">Filter By Gender</h4>
          <Filter handleSelection={handleSelection} />
        </div>
        {executiveStatus}
        <ul className="Currencies">
          {renderedItems.map((executive) => (
            <ExecutiveComponent key={executive.title} executive={executive} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
