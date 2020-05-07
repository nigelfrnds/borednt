import React from 'react';
import '../../css/Result.css';

const MusicItem = ({ item }) => {
    return (
        <div className="item-info">
           
            <div className="item-text-container">
                <div className="item-title">
                    {item.title}
                </div>
                <div className="item-description">
                    {item.albumName}
                </div>
            </div>
            {/* <div className = 'image-container'>
                <img className="item-image" src={item.img_url} />
            </div> */}
        </div>
    );
};

export default MusicItem;