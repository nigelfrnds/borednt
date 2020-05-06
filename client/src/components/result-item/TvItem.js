import React from 'react';
import '../../css/Result.css';

const TvItem = ({ item }) => {
    return (
        <div className="item-info">
            <img className="item-image" src={item.img_url} />
            <div className="item-text-container">
                <div className="item-title">
                    {item.title}
                </div>
                <div className="item-description">
                    {item.desc}
                </div>
            </div>
        </div>
    );
};

export default TvItem;