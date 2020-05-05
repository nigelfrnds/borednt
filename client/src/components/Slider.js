import React from 'react';
import {connnect} from 'react-redux';


import '../css/Slider.css';

class Slider extends React.Component{
    state = {
        currSlide: "slide1",
        prevSlide: "slide4",
        nextSlide: "slide2"
    }
    


    renderList(){
        console.log(this.state.currSlide,this.state.prevSlide,this.state.nextSlide )
        return(
            <div id = 'scrollList'>
                <div className = 'nonSelected' id = "prev">
                    {slides[this.state.prevSlide].word}
                </div>
                <div id = "curr">
                    {slides[this.state.currSlide].word}
                </div>
                <div className = 'nonSelected' id = "next">
                    {slides[this.state.nextSlide].word}                
                </div>
            </div>
        );
    }

    render(){
        return(
           <div id = "main">
                {this.renderList()}
                
                
           </div>
        )
    }
}

export default Slider;

var slides = {
    'slide1': {
        id: 0,
        word: "Watch",
        prev: 'slide4',
        next: 'slide2'
    },
    'slide2': {
        id: 1,
        word: "Listen To",
        prev: 'slide1',
        next: 'slide3'
    },
    'slide3': {
        id: 2,
        word: "Eat",
        prev: 'slide2',
        next: 'slide4'
    },
    'slide4': {
        id: 3,
        word: "Play",
        prev: 'slide3',
        next: 'slide1'
    }
}