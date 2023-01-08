import { Circle } from './components/circle/circle';
import { UndoButton } from './components/undoButton/undoButton';
import { RedoButton } from './components/redoButton/redoButton';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [circles, setCircles] = useState([]);
  const [redoCircles, setRedoCircles] = useState([]);

  const handleClick = (e) => {
    const { clientX, clientY } = e;
    const circle = {
      x: clientX,
      y: clientY
    };
    setCircles([...circles, circle]);
    console.log(circles);
  };

  const handleUndoButton = () => {
    const newCircles = circles.filter(
      (circle, index) => index !== circles.length - 1
    );
    const redoCircle = circles[circles.length - 1];
    setRedoCircles([...redoCircles, redoCircle]);
    setCircles(newCircles);
  };

  const handleRedoButton = () => {
    const lastRedoCircle = redoCircles[redoCircles.length - 1];
    const newRedoCircles = redoCircles.filter(
      (redoCircle, index) => index !== redoCircles.length - 1
    );

    setRedoCircles(newRedoCircles);
    setCircles([...circles, lastRedoCircle]);
    console.log(circles);
  };
  return (
    <>
      <UndoButton circles={circles} handleUndoButton={handleUndoButton} />
      <RedoButton
        redoCircles={redoCircles}
        handleRedoButton={handleRedoButton}
      />

      <div onClick={handleClick} className="App">
        {circles.map((circle) => {
          return <Circle key={Math.random()} circle={circle} />;
        })}
      </div>
    </>
  );
};

export default App;
