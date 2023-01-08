import React from 'react';
import './redoButton.css';

export const RedoButton = (props) => {
  const { circles } = props;
  return (
    <div>
      <button disabled={true} className="redo-button">
        Redo
      </button>
    </div>
  );
};
