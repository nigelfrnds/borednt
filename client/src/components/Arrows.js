import React from "react";
import '../css/Arrows.css';

class Arrows extends React.Component {
	
	clickUp(event){
		event.preventDefault();

		this.props.onClickUp();
	}

	clickDown(event){
		event.preventDefault();

		this.props.onClickDown();
	}


	render(){
		return (
			<div id='arrows'> 
				<div>
					<i className="fas fa-chevron-up" id = "upArrow" onClick ={(event) => this.clickDown(event)}></i>
				</div>
				<div>
					<i className="fas fa-chevron-down" id = "downArrow" onClick ={(event) => this.clickUp(event)}></i>
				</div>
				<div className = "mobile-arrows">
					<i className="fas fa-arrow-left" id = "leftArrow" onClick ={(event) => this.clickDown(event)}></i>
					<i className="fas fa-arrow-right" id = "rightArrow" onClick ={(event) => this.clickUp(event)}></i>
				</div>
			</div>
		);
	}
};

export default Arrows;
