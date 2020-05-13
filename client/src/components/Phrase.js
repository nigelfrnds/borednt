import React from 'react';

import '../css/Phrase.css';
import Slider from './Slider';

const Phrase = props => {
    return (
        <div className = "phrase">
            <div id = "start">What Should I </div>
            <Slider className = 'slider'/>
        </div>
    );
}

export default Phrase;