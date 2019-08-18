import React, { useState, useEffect } from 'react';
import './App.scss';
import HomeSide from './Components/HomeSide/HomeSide';

const App = () => {
  const [mouseX, setMouseX] = useState(null);
  const [side, setSide] = useState(null);
  useEffect(() => {
    const onMove = e => {
      setMouseX(e.pageX);
    };
    document.addEventListener('mousemove', e => onMove(e), false);
    return () => {
      document.removeEventListener('mousemove', e => onMove(e), false);
    };
  }, []);

  return (
    <div className="App">
      <HomeSide
        renderSide="left"
        mouseX={mouseX}
        lockedSide={side}
        setLeft={() => setSide('left')}
        title="Full stack web developer"
      />
      <HomeSide
        renderSide="right"
        mouseX={mouseX}
        lockedSide={side}
        setRight={() => setSide('right')}
        title="UI UX Designer"
      />
    </div>
  );
};

export default App;
