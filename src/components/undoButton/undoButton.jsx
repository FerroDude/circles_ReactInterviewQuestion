import React from 'react';
import './undoButton.css';

export const UndoButton = (props) => {
  const { handleUndoButton, circles } = props;
  return (
    <div>
      <button
        disabled={circles.length === 0}
        onClick={handleUndoButton}
        className="undo-button"
      >
        Undo
      </button>
    </div>
  );
};
