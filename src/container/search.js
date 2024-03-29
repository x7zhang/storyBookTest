import React from 'react';
import SearchBar from '../components/searchBar';
import DisplayResults from '../components/displayResults';
import { connect } from 'react-redux';
import { getResult } from '../store/redux';
import PropTypes from 'prop-types';


const SearchContainer = ({onGetResult, faq}) => {
    const event = {
        onGetResult
    }
    if (faq.length === 0) {
        return (
            <div>
                No Matching question.
            </div>
        );
    }
    return (
        <div>
          <SearchBar {...event}/>
          <DisplayResults freq={faq}/>
        </div>
    );
};

SearchContainer.prototype = {
    onGetResult: PropTypes.func.isRequired,
    faq: PropTypes.object.isRequired,

}

export default connect(
    ({faq}) => ({
        faq: faq
    }),
    dispatch => ({
        onGetResult: keys => dispatch(getResult(keys))
    })
)(SearchContainer);