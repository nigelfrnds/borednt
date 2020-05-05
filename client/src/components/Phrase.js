import React from 'react';

import '../css/Phrase.css';
import Slider from './Slider';
import Arrows from './Arrows';

const Phrase = props => {
    return (
        <div className = "phrase">
            <div id = "start">What Should I </div>
            <Slider className = 'slider'/>
            <Arrows className = 'controls'/>
        </div>
    );
}

export default Phrase;