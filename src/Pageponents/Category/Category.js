import React from 'react';
import './styles.scss';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Category = ({ children, side }) => {
  return (
    <React.Fragment>
      <TransitionGroup component={null}>
        {side && (
          <CSSTransition classNames="dialog" timeout={300}>
            <div className={`Category_${side}`} />
          </CSSTransition>
        )}
      </TransitionGroup>
    </React.Fragment>
  );
};

export default Category;
