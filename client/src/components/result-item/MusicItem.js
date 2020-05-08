import React from 'react';
import '../../css/Result.css';

const MusicItem = ({ item }) => {
    return (
        <div className="item-info">
           
            <div className="item-text-container">
                <div className="item-title">
                    <p>By {item.songArtist}</p>
                </div>
                <div className="item-description">
                    Album: {item.albumName}
                </div>
            </div>
            <div className = 'image-container'>
                <img className="item-image" src={item.img_url} />
            </div>
        </div>
    );
};

export default MusicItem;