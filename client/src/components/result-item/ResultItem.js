import React from 'react';
import PropTypes from 'prop-types';
import MovieItem from './MovieItem';
import TvItem from './TvItem';
import VideoItem from './VideoItem';
import { getVerbFromItemType } from '../../utils';
import '../../css/Result.css'

const ResultItem = (props) => {
    const { item, itemType } = props;
    const verb = getVerbFromItemType(itemType);

    return (
        <div className="item-container">
            <p className="result-hero-text-container">
                You should {verb}&nbsp;
                <u>
                    {item.title}
                </u>!
            </p>
            {itemType === 'movies' && <MovieItem item={item} />}
            {itemType === 'tv-shows' && <TvItem item={item} />}
            {itemType === 'videos' && <VideoItem item={item} />}
        </div>
    );
}

ResultItem.propTypes = {
    item: PropTypes.object,
    itemType: PropTypes.string,
};

export default ResultItem;