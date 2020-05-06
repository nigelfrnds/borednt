import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRandomItem } from '../actions/api-actions';
import { getItemTypeFromRoute } from '../utils';
import ResultItem from '../components/result-item/ResultItem';
import '../css/Result.css';

class ResultsPage extends Component {
    componentDidMount = async () => {
        const { getRandomItem, location } = this.props;
        // type of item: movies, tv-shows, videos, etc.
        const itemType = getItemTypeFromRoute(location.pathname);
        getRandomItem(itemType);
    }

    render() {
        const { isFetching, result, error, location } = this.props;
        return (
            <div className="result-page-container">
                {error && <div className="result-error-msg">An error occurred.</div>}
                {isFetching && <div>...loading</div>}
                {result && (
                    <ResultItem
                        item={result}
                        itemType={getItemTypeFromRoute(location.pathname)}
                    />
                )}
            </div>
        );
    }
}

const mapStateToProps = ({ apiReducer }) => ({
    isFetching: apiReducer.isFetching,
    itemType: apiReducer.result.itemType,
    result: apiReducer.result.data,
    error: apiReducer.error,
});

const mapDispatchToProps = (dispatch) => ({
    getRandomItem: (itemType) => dispatch(getRandomItem(itemType))
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultsPage);