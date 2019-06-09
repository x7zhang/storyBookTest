import React from 'react';

const DisplayResults = (freq) => {
    console.log('freq11', freq);
    return (
        freq.freq.map((q,idx) => <li key={idx}>{q.title}</li>)
    );
}

export default DisplayResults;