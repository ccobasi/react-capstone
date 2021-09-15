import React from 'react';
import { useSelector } from 'react-redux';
import '../App.css';

const ExecutiveComponent = () => {
  const data = useSelector((state) => state.data.data);
  const renderList = data.map((datas) => {
    const {
      id, title, name, gender, titleSince,
    } = datas;
    return (
      <div className="four column wide" key={id}>
        <div className="ui link cards">
          <div className="cards">
            <div className="header">{title}</div>
            <div className="content">
              <div className="title">
                <p>
                  {name}
                </p>

              </div>
              <div className="meta price">{gender}</div>
              <div className="meta">{titleSince}</div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      {renderList}
      {' '}
    </>
  );
};

export default ExecutiveComponent;
