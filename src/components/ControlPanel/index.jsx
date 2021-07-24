import PropTypes from 'prop-types';
import React from 'react';
import './style.scss';

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
      <button
        className={`btn btn__stop btn__start ${started && 'btn--active'}`}
        onClick={started ? onStop : onStart}
      >
        {started ? 'Stop' : 'Start'}
      </button>
      <button onClick={onReset} className="btn btn__reset">
        Reset
      </button>
    </div>
  );
}

export default ControlPanel;
