import React from 'react';
import '../../css/Result.css';

const VideoItem = ({ item }) => {
    return (
        <div className="item-info">
           
            <div className="item-text-container">
                <div className="item-title">
                    {item.title}
                </div>
                <div className="item-description">
                    {item.desc}
                </div>
            </div>
            <a href={item.url} target="_blank" rel="noreferrer noopener">
                <img className="item-image" src={item.img_url} />
            </a>
        </div>
    );
};

export default VideoItem;