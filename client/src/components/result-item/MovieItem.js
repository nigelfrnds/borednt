import React from 'react';
import '../../css/Result.css';

const MovieItem = ({ item }) => {
    return (
        <div className="item-info">
            <div className="item-text-container">
                <div className="item-description">
                    {item.desc}
                </div>
            </div>
            <div className = 'image-container'>
                <img className="item-image" src={item.img_url} />
            </div>
        </div>
    );
};

export default MovieItem;