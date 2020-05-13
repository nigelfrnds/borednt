import React from "react";
import PropTypes from "prop-types";
import MovieItem from "./MovieItem";
import TvItem from "./TvItem";
import VideoItem from "./VideoItem";
import MusicItem from "./MusicItem";
import { getVerbFromItemType } from "../../utils";
import "../../css/Result.css";

const ResultItem = (props) => {
	const { item, itemType } = props;
	const verb = getVerbFromItemType(itemType);

	return (
			<div className="item-container">
				<div className="result-hero-text-container">
					You Should {verb}&nbsp;
					<u>{item.title}</u>!
				</div>
				{itemType === "movies" && <MovieItem item={item} />}
				{itemType === "tv-shows" && <TvItem item={item} />}
				{itemType === "videos" && <VideoItem item={item} />}
				{itemType === "music" && <MusicItem item={item} />}
			</div>
	);
};

ResultItem.propTypes = {
	item: PropTypes.object,
	itemType: PropTypes.string,
};

export default ResultItem;
