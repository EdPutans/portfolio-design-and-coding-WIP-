import React from 'react';
import './styles.scss';
import PageSide from '../PageSide/PageSide';
import TextLink from '../TextLink/TextLink';
import Category from '../../Pageponents/Category/Category';

const links = [
  { text: 'Mission', link: 'mission' },
  { text: 'Projects', link: 'projects' },
  { text: 'About me', link: 'about_me' },
  { text: 'Contact', link: 'contact' },
];

const HomeSide = ({ mouseX, lockedSide, renderSide, title, onSelect }) => {
  const calcHeight = () => {
    const leftThreshold = 400;
    const thresholdRatio = 0.5;
    if (renderSide === 'left') {
      if (mouseX > leftThreshold) {
        return leftThreshold - thresholdRatio * mouseX;
      }
      return thresholdRatio * leftThreshold;
    }
    if (mouseX < window.innerWidth - leftThreshold) {
      return leftThreshold - thresholdRatio * (window.innerWidth - mouseX);
    }
    return thresholdRatio * leftThreshold;
  };

  return (
    <PageSide title={title} side={renderSide} lockedSide={lockedSide} mouseX={mouseX}>
      <div className={`Home${renderSide}_list_container`} style={{ bottom: calcHeight() }}>
        <ul className={`Home${renderSide}_list`}>
          {links.map(l => (
            <li className={`Home${renderSide}_list_item`}>
              <TextLink key={l.text} text={l.text} link={l.link} onClick={() => onSelect(l.text)} />
            </li>
          ))}
        </ul>
      </div>
      <Category side={lockedSide} />
    </PageSide>
  );
};

export default HomeSide;
