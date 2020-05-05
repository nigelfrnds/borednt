import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRandomMovie } from '../actions/api-actions';

class ResultsPage extends Component {
    componentDidMount = async () => {
        const { getRandomMovie } = this.props;
        getRandomMovie();
    }

    render() {
        const { isFetching, result, error } = this.props;
        return (
            <div>
                {error && <div style={{ color: 'red'}}>An error occurred.</div>}
                {isFetching && <div>...loading</div>}
                {result && (
                    <div>
                        {result.title}
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = ({ apiReducer }) => ({
    isFetching: apiReducer.isFetching,
    error: apiReducer.error,
    result: apiReducer.result
});

const mapDispatchToProps = (dispatch) => ({
    getRandomMovie: () => dispatch(getRandomMovie())
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultsPage);