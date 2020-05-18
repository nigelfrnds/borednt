import React from "react";
import PropTypes from "prop-types";
import MovieItem from "./MovieItem";
import TvItem from "./TvItem";
import VideoItem from "./VideoItem";
import MusicItem from "./MusicItem";
import GameItem from "./GameItem";
import DrinkItem from './DrinkItem';
import { getVerbFromItemType } from "../../utils";
import "../../css/Result.css";


const ResultItem = (props) => {
	const { item, itemType } = props;
	const verb = getVerbFromItemType(itemType);

	const pronoun = itemType === 'drinks' ? ' Some': '';

	return (
			<div className="item-container">
				<div className="result-hero-text-container">
					You Should {verb}{pronoun}&nbsp;
					<u>{item.title}</u>!
				</div>
				{itemType === "movies" && <MovieItem item={item} />}
				{itemType === "tv-shows" && <TvItem item={item} />}
				{itemType === "videos" && <VideoItem item={item} />}
				{itemType === "music" && <MusicItem item={item} />}
				{itemType === "games" && <GameItem item={item} />}
				{itemType === "drinks" && <DrinkItem item={item} />}
			</div>
	);
};

ResultItem.propTypes = {
	item: PropTypes.object,
	itemType: PropTypes.string,
};

export default ResultItem;
