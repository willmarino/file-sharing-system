import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const createErrorsComponent = (errors, inProp) => {
  return <TransitionGroup>
    <ul className='errors-list'>
      {errors.map((error, idx) => (
        <CSSTransition key={idx} classNames='errors-transition' in={inProp} timeout={1000}>
          <li><p>{error}</p></li>
        </CSSTransition>
      ))}
    </ul>
  </TransitionGroup>
}

export default createErrorsComponent;