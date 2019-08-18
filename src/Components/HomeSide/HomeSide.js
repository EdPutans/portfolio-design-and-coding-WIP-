import React from 'react';
import './styles.scss';
import PageSide from '../PageSide/PageSide';

const HomeSide = ({ mouseX, lockedSide, renderSide, title }) => {
  const calcHeight = () => {
    const leftThreshold = 300;
    const thresholdRatio = 0.5;
    if (renderSide === 'left') {
      if (mouseX > leftThreshold) {
        return leftThreshold - thresholdRatio * mouseX;
      }
      return thresholdRatio * leftThreshold;
    }
    if (renderSide === 'right') {
      if (mouseX < window.innerWidth - leftThreshold) {
        return leftThreshold - thresholdRatio * (window.innerWidth - mouseX);
      }
      return thresholdRatio * leftThreshold;
    }
  };

  return (
    <PageSide title={title} side={renderSide} lockedSide={lockedSide} mouseX={mouseX}>
      <div className={`Home${renderSide}_list_container`} style={{ bottom: calcHeight() }}>
        <ul className={`Home${renderSide}_list`}>
          <li className={`Home${renderSide}_list_item`}>Mission</li>
          <li className={`Home${renderSide}_list_item`}>Projects</li>
          <li className={`Home${renderSide}_list_item`}>Contact</li>
          <li className={`Home${renderSide}_list_item`}>About me</li>
        </ul>
      </div>
    </PageSide>
  );
};

export default HomeSide;
