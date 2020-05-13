import React from 'react';

import '../css/Phrase.css';
import Slider from './Slider';

const Phrase = props => {
    return (
        <div className = "phrase">
            <div id = "start"><p id="start-words">What Should I</p> </div>
            <Slider className = 'slider'/>
        </div>
    );
}

export default Phrase;