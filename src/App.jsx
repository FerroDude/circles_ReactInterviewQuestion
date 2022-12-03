import { Circle } from './components/circle/circle';
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
  return (
    <div onClick={handleClick} className="App">
      {circles.map((circle) => {
        return <Circle key={circle} circle={circle} />;
      })}
    </div>
  );
};

export default App;
