import React from 'react';
import PropTypes from 'prop-types';

Session.propTypes = {
  decrementSession: PropTypes.func,
  incrementSession: PropTypes.func,
  sessionLength: PropTypes.number,
};

function Session(props) {

  return (
    <div className="session-container">

    </div>
  );
}

export default Session;
