import React from 'react';
import './undoButton.css';

export const UndoButton = (props) => {
  const { handleUndoButton } = props;
  return (
    <div>
      <button onClick={handleUndoButton} className="undo-button">
        Undo
      </button>
    </div>
  );
};
