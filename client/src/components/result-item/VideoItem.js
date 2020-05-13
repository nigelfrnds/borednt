import React from 'react';
import '../../css/Result.css';

const VideoItem = ({ item }) => {
    return (
        <div className="item-info">
            <a href={item.url} target="_blank" rel="noreferrer noopener">
                <div className='image-container'>
                    <img className="item-image" src={item.img_url} />
                </div>
            </a>
        </div>
    );
};

export default VideoItem;