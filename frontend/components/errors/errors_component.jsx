import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const createErrorsComponent = (errors, inProp) => {
  return <ul className='errors-list'>
    <TransitionGroup>
      {errors.map((error, idx) => (
        <CSSTransition key={idx} classNames='errors-transition' in={inProp} timeout={1500}>
          <li><p>{error}</p></li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  </ul>
}

export default createErrorsComponent;