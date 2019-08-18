import React from 'react';
import './styles.scss';

const PageSide = ({ children, lockedSide, side, mouseX, title }) => {
  const calcWidth = () => {
    const calcWidthRight = () =>
      lockedSide ? 0.9 * window.innerWidth : window.innerWidth - (window.innerWidth * 0.9 - mouseX);
    const calcWidthLeft = () =>
      lockedSide ? 0.9 * window.innerWidth : window.innerWidth - mouseX * 0.9;
    return side === 'left' ? calcWidthLeft() : calcWidthRight();
  };

  const calcOpacity = () => {
    if (lockedSide) {
      return side === lockedSide ? 1 : 0.1;
    }
    const calcRightOpacity = () =>
      Math.round(
        (100 * (window.innerWidth - (window.innerWidth * 0.9 - mouseX))) / (2 * window.innerWidth),
      ) / 100;
    const calcLeftOpacity = () =>
      Math.round(100 * ((window.innerWidth - mouseX * 0.9) / (2 * window.innerWidth))) / 100;
    return side === 'left' ? calcLeftOpacity() : calcRightOpacity();
  };

  return (
    <div className="PageSide" style={{ width: calcWidth(), opacity: calcOpacity() }}>
      <div className="PageSide_inner">
        <h1 className="Homeleft_title" style={{ opacity: calcOpacity() }}>
          {title}
        </h1>
        {children}
      </div>
    </div>
  );
};
export default PageSide;

// side: left or right / required
