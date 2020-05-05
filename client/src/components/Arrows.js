import React from "react";
import '../css/Arrows.css';

const Arrows = (props) => {
	return (
		<div id='arrows'> 
			<div>
				<i className="fas fa-chevron-up"></i>
			</div>
			<div>
				<i className="fas fa-chevron-down"></i>
			</div>
		</div>
	);
};

export default Arrows;
