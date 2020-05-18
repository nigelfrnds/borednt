import React from 'react';
import '../../css/Result.css';
import { Rate } from 'antd'

const GameItem = ({ item }) => {
    return (
        <div className="item-info">
            <div className="item-text-container">
                <div className="item-description">
                    <Rate allowHalf defaultValue={item.rating} disabled />
                </div>
                <div className="item-stores">
                    <div style={{ fontSize: '20px' }}>Available On:</div>
                    {item.stores.map(store => (
                        <a 
                            key={store.name}
                            href={store.url}
                            target='_blank'
                            rel='noreferrer noopener'
                        >
                            {store.name}<br/>
                        </a>
                    ))}
                </div>
            </div>
            <div className = 'image-container'>
                <img className="item-image" src={item.img_url} />
            </div>
        </div>
    );
};

export default GameItem;