import React from 'react';
import { Transition } from 'react-transition-group';

export default ({ images, interval, in: inProp }) => {
    return (
      <Transition in={inProp} timeout={500}>
        {state => (
          <div>
            <img src='images/react-icon.svg' />
          </div>
            )}
      </Transition>
    );
};
