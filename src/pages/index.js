import React, { Fragment } from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faFeatherAlt } from '@fortawesome/free-solid-svg-icons';

import PageHead from '../components/page-head';

const headerProps = {
  title: 'Home',
  description: 'The Homepage!'
};

export default () => {
  return (
    <Fragment>
      <PageHead {...headerProps} />
      <section className='hero o-hero is-dark is-fullheight-with-navbar'>
        <div className='hero-body has-text-centered'>
          <div className='container'>
            <div className='columns is-vcentered is-centered is-multiline'>
              <div className='column is-one-third-desktop'>
                <img src='images/react-icon.svg' />
              </div>
              <div className='column has-text-left-tablet has-text-center-mobile is-half-desktop is-two-thirds-tablet pr-5'>
                <div className='content is-medium is-small-mobile'>
                  <h1 className='title'>Spencer Newton</h1>
                  <h2 className='subtitle'>👨🏻‍💻 Software Developer</h2>
                  <p className='has-text-justified-mobile'>👋 Hello there! I&apos;m a Software Developer currently living in Leeds. Feel free to check out the contents of this site, which includes a CV, a portfolio-of-sorts, a blog that I&apos;ll probably never update, and some secret areas you might be able to find ( ͡° ͜ʖ ͡°)</p>
                </div>
              </div>
              <div className='column is-full'>
                <Icon icon={faChevronDown} size='2x' />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section is-primary'>
        <div className='container'>
          <div className='columns'>

            {/* About */}
            <div className='column is-large'>
              <div className='py-6'>
                <h1 className='title'>About</h1>
                <h2 className='subtitle'>
                  aboooooot meeeeeee
                </h2>
              </div>
            </div>

            {/* Portfolio */}
            <div className='column has-text-right'>
              <div className='py-6'>
                <h1 className='title'>Portfolio</h1>
                <h2 className='subtitle'>
                  my stoopid apps
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment >
  );
};
