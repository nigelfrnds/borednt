import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRandomItem, clearResult } from '../actions/api-actions';
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

    componentWillUnmount() {
        const { clearResult } = this.props;
        clearResult();
    }

    render() {
        const { isFetching, result, error, location } = this.props;
        const shouldRenderResult = !isFetching && result;
        return (
            <div className="result-page-container">
                {error && <div className="result-error-msg">An error occurred.</div>}
                {isFetching && <div>...loading</div>}
                {shouldRenderResult && (
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
    getRandomItem: (itemType) => dispatch(getRandomItem(itemType)),
    clearResult: () => dispatch(clearResult())
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultsPage);