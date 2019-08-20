import React, { useState, useEffect } from 'react';
import './App.scss';
import HomeSide from './Components/HomeSide/HomeSide';

const App = () => {
  const [mouseX, setMouseX] = useState(null);
  const [side, setSide] = useState(null);
  const [renderedPage, setRenderedPage] = useState(null);
  const onMove = e => {
    setMouseX(e.pageX);
  };
  useEffect(() => {
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
        title="Full stack web developer"
        onSelect={val => {
          setRenderedPage(val);
          setSide('left');
        }}
      />
      <HomeSide
        renderSide="right"
        mouseX={mouseX}
        lockedSide={side}
        title="UI UX Designer"
        onSelect={val => {
          setRenderedPage(val);
          setSide('right');
        }}
      />
    </div>
  );
};

export default App;
