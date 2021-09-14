import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const executives = useSelector((state) => state.data);

  useEffect(() => {
    fetchExecutives();
  }, []);

  console.log("Data :", data);

  return (
    <div>
      <ExecutiveComponent />
    </div>
  );
};

export default Home;
 