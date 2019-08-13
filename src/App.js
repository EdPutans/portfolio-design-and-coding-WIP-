import React, {useState, useEffect} from 'react';
import './App.scss';

const App = () => {
  const [mouseX, setMouseX] = useState(null)
  useEffect(() => {
    
    const onMove = e => {
      setMouseX(e.pageX)
    }
    document.addEventListener('mousemove', e => onMove(e),false)
    return () => {
      document.removeEventListener('mousemove', e => onMove(e), false)
    }
  },[])

  return (
    <div className="App">
      <div className="App_left" style={ { width: (window.innerWidth - mouseX * 0.9) }}/>
      <div className="App_right" style={ { width: (window.innerWidth - (window.innerWidth * 0.9 - mouseX ) )}} />
    </div>
  );
}

export default App;
