import React from 'react';
import { useSelector } from 'react-redux';
import '../App.css';

const ExecutiveComponent = () => {
    const executives = useSelector((state) => state.data);
    const renderList = executives.map((executive) => {
        const {title, name,  gender, titleSince } = executive;
        return (
            <div className="four column wide" key={id}>
                <div className="ui link cards">
                    <div className="cards">
                        <div className="image"><img src={image} alt={title} /></div>
                        <div className="content">
                            <div className="header">
                               {title}
                            </div>
                            <div className="meta price">${price}</div>
                            <div className="meta">{category}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    return <>{renderList} </>
}

export default ExecutiveComponent;
