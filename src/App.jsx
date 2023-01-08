import { Circle } from './components/circle/circle';
import { UndoButton } from './components/undoButton/undoButton';
import { RedoButton } from './components/redoButton/redoButton';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [circles, setCircles] = useState([]);

  const handleClick = (e) => {
    const { clientX, clientY } = e;
    const circle = {
      x: clientX,
      y: clientY
    };
    setCircles([...circles, circle]);
  };

  const handleUndoButton = () => {
    const newCircles = circles.filter(
      (circle, index) => index !== circles.length - 1
    );
    setCircles(newCircles);
  };

  return (
    <>
      <UndoButton circles={circles} handleUndoButton={handleUndoButton} />
      <RedoButton circles={circles} />

      <div onClick={handleClick} className="App">
        {circles.map((circle) => {
          return <Circle key={Math.random()} circle={circle} />;
        })}
      </div>
    </>
  );
};

export default App;
