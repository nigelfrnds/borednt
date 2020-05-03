import React from 'react';
import '../css/Phrase.css';
import Slider from './Slider';

const Phrase = props => {
    return (
        <div class = "phrase">
            <div id = "start">What Should I </div>
            <Slider />
            <div>
                ?
            </div>
        </div>
    );
}

export default Phrase;