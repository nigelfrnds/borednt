import React from 'react';
import {connnect} from 'react-redux';


import '../css/Slider.css';

class Slider extends React.Component {
    constructor(props) {
        super(props);
     
        this.state = {
            currSlide: "Eat",
            prevSlide: "Play",
            nextSlide: "Learn"
        };
      }
    
      onClickDown = () => {
        this.setState({ prevSlide: this.state.nextSlide, nextSlide: this.state.currSlide, currSlide: this.state.prevSlide,  })
      };

      onClickUp = () => {
        this.setState({ prevSlide: this.state.currSlide, nextSlide: this.state.prevSlide, currSlide: this.state.nextSlide,  })
      };

      onSubmit = () => {
          console.log(this.state.currSlide)
          return this.state.currSlide;
      }


    renderList() {
        return(
            <div id = 'scrollList'>
                <div className = 'nonSelected' id = "prev">
                    {this.state.prevSlide}
                </div>
                <div id = "curr">
                    {this.state.currSlide}
                </div>
                <div className = 'nonSelected' id = "next">
                    {this.state.nextSlide}                
                </div>
                <ul>
                <button type="button" onClick={this.onClickUp}>
                    Go up
                </button>
                <button type="button" onClick={this.onClickDown}>
                    Go down
                </button>
                <button type="button" onClick={this.onSubmit}>
                    Submit
                </button>
        </ul>
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
