import React from "react";
import { connnect } from "react-redux";
import Arrows from "./Arrows";

import "../css/Slider.css";

class Slider extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			curr: SLIDES[1],
			prev: SLIDES[SLIDES[1].prev],
			next: SLIDES[SLIDES[1].next]
		};
	}

	onClickDown = () => {
        var newCurrID = this.state.curr.prev;
        var newPrevID = SLIDES[newCurrID].prev;
        var newNextID = SLIDES[newCurrID].next;
		this.setState({
			curr: SLIDES[newCurrID],
			prev: SLIDES[newPrevID],
			next: SLIDES[newNextID]
        });
        
	};

	onClickUp = () => {
        var newCurrID = this.state.curr.next;
        var newPrevID = SLIDES[newCurrID].prev;
        var newNextID = SLIDES[newCurrID].next;
		this.setState({
			curr: SLIDES[newCurrID],
			prev: SLIDES[newPrevID],
			next: SLIDES[newNextID]
        });
	};

	onSubmit = () => {
		console.log(this.state.currSlide);
		return this.state.currSlide;
	};

    renderWord(object){
        return object.word
    }

	renderList() {
		return (
			<div id="scrollWrapper">
				<div id="scrollList">
					<div className="nonSelected" id="prev">
						{this.renderWord(this.state.prev)}
					</div>
					<div id="curr">
                        {this.renderWord(this.state.curr)}
                    </div>
					<div className="nonSelected" id="next">
						{this.renderWord(this.state.next)}
					</div>
				</div>
				<Arrows onClickUp={this.onClickUp} onClickDown={this.onClickDown} />
			</div>
		);
	}

	render() {
		return <div>{this.renderList()}</div>;
	}
}

var SLIDES = {
	1: {
		next: 2,
		prev: 5,
		word: "Eat",
	},
	2: {
		next: 3,
		prev: 1,
		word: "Watch",
	},
	3: {
		next: 4,
		prev: 2,
		word: "Listen To",
	},
	4: {
		next: 5,
		prev: 3,
		word: "Play",
	},
	5: {
		next: 1,
		prev: 4,
		word: "Drink",
	},
};

export default Slider;
