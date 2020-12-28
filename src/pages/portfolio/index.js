import React, { Fragment } from 'react';
import PageHead from '../../components/page-head';

const headerProps = {
  title: 'Portfolio',
  description: 'A portfolio of some of the software-related work I\'ve done in the past'
};

export default () => {
  return (
    <Fragment>
      <PageHead {...headerProps} />

      <section className='section is-medium'>
        <div className='container'>
          <h1 className='title has-text-centered'>Portfolio</h1>
          <p className='subtitle has-text-centered'>View a selection of the projects I have done in the past, both in my personal time or at university.</p>
        </div>
      </section>

      <div className='hero is-dark is-bold'>
        <div className='hero-body'>
          <section className='section'>
            <div className='container is-max-fullhd'>
              <div className='columns is-desktop is-variable is-8'>
                <div className='column'>
                  <img src='/images/merry-1.jpg' />
                </div>
                <div className='column'>
                  <h1 className='title has-text-light'>Finger Fort</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus urna duis convallis convallis tellus. Lectus mauris ultrices eros in. Et sollicitudin ac orci phasellus egestas tellus. Urna neque viverra justo nec. Posuere lorem ipsum dolor sit. Justo donec enim diam vulputate ut pharetra sit amet. Et molestie ac feugiat sed lectus vestibulum. Pretium quam vulputate dignissim suspendisse in est ante in nibh. Consequat semper viverra nam libero justo laoreet sit amet cursus. Ut consequat semper viverra nam. Interdum varius sit amet mattis vulputate enim. Mauris vitae ultricies leo integer.</p>
                  <p>Quis risus sed vulputate odio ut enim. Hac habitasse platea dictumst quisque sagittis purus sit. Venenatis cras sed felis eget velit aliquet. Eget mi proin sed libero enim sed faucibus.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className='hero is-light is-bold'>
        <div className='hero-body'>
          <section className='section'>
            <div className='container is-max-fullhd'>
              <div className='columns is-desktop is-variable is-8'>
                <div className='column'>
                  <h1 className='title'>Passive Structured Light</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus urna duis convallis convallis tellus. Lectus mauris ultrices eros in. Et sollicitudin ac orci phasellus egestas tellus. Urna neque viverra justo nec. Posuere lorem ipsum dolor sit. Justo donec enim diam vulputate ut pharetra sit amet. Et molestie ac feugiat sed lectus vestibulum. Pretium quam vulputate dignissim suspendisse in est ante in nibh. Consequat semper viverra nam libero justo laoreet sit amet cursus. Ut consequat semper viverra nam. Interdum varius sit amet mattis vulputate enim. Mauris vitae ultricies leo integer.</p>
                  <p>Quis risus sed vulputate odio ut enim. Hac habitasse platea dictumst quisque sagittis purus sit. Venenatis cras sed felis eget velit aliquet. Eget mi proin sed libero enim sed faucibus.</p>
                </div>
                <div className='column'>
                  <img src='/images/merry-1.jpg' />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className='hero is-dark is-bold'>
        <div className='hero-body'>
          <section className='section'>
            <div className='container is-max-fullhd'>
              <div className='columns is-desktop is-variable is-8'>
                <div className='column'>
                  <img src='/images/merry-1.jpg' />
                </div>
                <div className='column'>
                  <h1 className='title has-text-light'>Finger Fort</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus urna duis convallis convallis tellus. Lectus mauris ultrices eros in. Et sollicitudin ac orci phasellus egestas tellus. Urna neque viverra justo nec. Posuere lorem ipsum dolor sit. Justo donec enim diam vulputate ut pharetra sit amet. Et molestie ac feugiat sed lectus vestibulum. Pretium quam vulputate dignissim suspendisse in est ante in nibh. Consequat semper viverra nam libero justo laoreet sit amet cursus. Ut consequat semper viverra nam. Interdum varius sit amet mattis vulputate enim. Mauris vitae ultricies leo integer.</p>
                  <p>Quis risus sed vulputate odio ut enim. Hac habitasse platea dictumst quisque sagittis purus sit. Venenatis cras sed felis eget velit aliquet. Eget mi proin sed libero enim sed faucibus.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className='hero is-light is-bold'>
        <div className='hero-body'>
          <section className='section'>
            <div className='container is-max-fullhd'>
              <div className='columns is-desktop is-variable is-8'>
                <div className='column'>
                  <h1 className='title'>Finger Fort</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus urna duis convallis convallis tellus. Lectus mauris ultrices eros in. Et sollicitudin ac orci phasellus egestas tellus. Urna neque viverra justo nec. Posuere lorem ipsum dolor sit. Justo donec enim diam vulputate ut pharetra sit amet. Et molestie ac feugiat sed lectus vestibulum. Pretium quam vulputate dignissim suspendisse in est ante in nibh. Consequat semper viverra nam libero justo laoreet sit amet cursus. Ut consequat semper viverra nam. Interdum varius sit amet mattis vulputate enim. Mauris vitae ultricies leo integer.</p>
                  <p>Quis risus sed vulputate odio ut enim. Hac habitasse platea dictumst quisque sagittis purus sit. Venenatis cras sed felis eget velit aliquet. Eget mi proin sed libero enim sed faucibus.</p>
                </div>
                <div className='column'>
                  <img src='/images/merry-1.jpg' />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Fragment>
  );
};
