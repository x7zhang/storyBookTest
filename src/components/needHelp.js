import React from 'react';

const NeedHelp = ({ user: { username }, onArchiveTask, onPinTask }) => {
    return (
        <div className='sp-g-search_welcome'>
          <h1>Hi {username}, How can we help you?</h1>
        </div>
    );
};

export default NeedHelp;