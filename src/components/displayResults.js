import React from 'react';
import PropTypes from 'prop-types';

const DisplayResults = (freq) => {
    return (
        freq.freq.map((q,idx) => <li key={idx}>{q.title}</li>)
    );
}

DisplayResults.PropTypes = {
    freq: PropTypes.object
};

export default DisplayResults;