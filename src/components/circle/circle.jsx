import React from 'react';
import './circle.css';

export const Circle = (props) => {
  const { x, y } = props.circle;
  const style = {
    left: x - 22,
    top: y - 22
  };
  return <div style={style} className="circle"></div>;
};
