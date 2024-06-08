import React, { Fragment, useState } from 'react';
import { Transition } from 'react-transition-group';
import PageHead from '../../components/page-head';

const headerProps = {
  title: 'Animations',
  description: 'Animation Practise'
};

const defaultStyle = {
    transition: `color 200ms, opacity 200ms, ease 1s`,
    color: 'red',
    paddingLeft: '10px'
};

const transitionStyles = {
    entering: { color: 'purple' },
    entered: { color: 'red' },
    exiting: { color: 'green' },
    exited: { color: 'blue' }
};

const Animated = ({ in: inProp, children }) => {9;
    return (
      <Transition
        in={inProp}
        timeout={1000}>
        {state => (
          <div style={{
            ...defaultStyle,
            ...transitionStyles[state]
        }}>
            {children}
            I am in {state} state
          </div>
            )}
      </Transition>
    );
};


export default () => {
    const [entered, setEntered] = useState(true);

  return (
    <Fragment>
      <PageHead {...headerProps} />
      <div className='container page-container'>
        <section className='section has-text-centered'>
          <h1 className='title'>Animations</h1>
        </section>
        <section className='section'>
          <Animated in={entered}>
            <button onClick={() => { setEntered(!entered); }}>
              Toggle
            </button>
          </Animated>
        </section>
      </div>
    </Fragment>
  );
};
