import React from 'react';
import PropTypes from 'prop-types';

const NeedHelp = ({ user: { username }}) => {
    return (
        <div className='sp-g-search_welcome'>
          <h1>Hi {username}, How can we help you?</h1>
        </div>
    );
};

NeedHelp.propTypes = {
  /**Username type */
  username: PropTypes.string.isRequired
};

export default NeedHelp;