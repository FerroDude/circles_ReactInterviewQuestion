import React from 'react';
import './redoButton.css';

export const RedoButton = (props) => {
  const { redoCircles, handleRedoButton } = props;
  return (
    <div>
      <button
        onClick={handleRedoButton}
        disabled={redoCircles.length === 0}
        className="redo-button"
      >
        Redo
      </button>
    </div>
  );
};
