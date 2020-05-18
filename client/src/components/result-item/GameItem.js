import React from 'react';
import '../../css/Result.css';
import { Rate } from 'antd'

const GameItem = ({ item }) => {
    return (
        <div className="item-info">
            <div className="item-text-container">
                <div className="item-description">
                    {item.desc}
                    <Rate allowHalf defaultValue={item.rating} />
                </div>
                <div className="item-stores">
                {item.stores.map(store => (
                        <a key={store.name} href={store.url}><br/>{store.name}</a>
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