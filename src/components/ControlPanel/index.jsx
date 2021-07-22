import PropTypes from 'prop-types';
import React from 'react';

ControlPanel.propTypes = {
  started: PropTypes.bool,
  onStop: PropTypes.func,
  onStart: PropTypes.func,
  onReset: PropTypes.func,
};

function ControlPanel(props) {
  const { started, onStop, onReset, onStart } = props;

  return (
    <div className="control_panel">
      <button id="start_stop" onClick={started ? onStop : onStart}>
        Start/Stop
      </button>
      <button onClick={onReset} id="reset">
        Reset
      </button>
    </div>
  );
}

export default ControlPanel;
