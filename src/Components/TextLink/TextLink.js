import React from 'react';
import './styles.scss';

const TextLink = ({ text, link, onClick }) => {
  return (
    <p
      role="button"
      tabIndex={0}
      onKeyDown={() => {}}
      className="Textlink"
      onClick={() => onClick(link)}
    >
      {text}
    </p>
  );
};

export default TextLink;
