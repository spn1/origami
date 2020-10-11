import React, { Fragment } from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import PageHead from '../components/page-head';

const headerProps = {
  title: 'Home',
  description: 'The Homepage!'
};

export default () => {
  return (
    <Fragment>
      <PageHead {...headerProps} />
      <section className='hero is-dark is-fullheight-with-navbar'>
        <div className='hero-body'>
          <div className='container is-max-desktop'>
            <div className='has-text-right'>
              <h1 className='hero-title title'>
                Spencer Newton
              </h1>
            </div>
            <hr className='hero-divider' />
            <div className='hero-content'>
              <div className='columns is-vcentered reverse-columns'>
                <div className='column is-half-tablet is-two-fifths-desktop is-half-mobile'>
                  <img src='images/react-icon.svg' />
                </div>
                <div className='column is-three-fifths-desktop'>
                  <div className='has-text-left'>
                    <p className='has-text-justified-mobile'>👋 Hello there! I&apos;m a Software Developer currently living in Leeds. Feel free to check out the contents of this site, which includes a CV, a portfolio-of-sorts, a blog that I&apos;ll probably never update, and some secret areas you might be able to find ( ͡° ͜ʖ ͡°)</p>
                  </div>
                </div>
              </div>
              <hr className='hero-divider' />
            </div>
          </div>
        </div>
      </section>
      <section className='section is-theme-color-2 py-0'>
        <div className='container is-max-desktop'>
          <div className='columns is-vcentered is-centered'>

            {/* About */}
            <div className='column is-narrow'>
              <div className='card'>
                <div className='card-image'>
                  <figure className='image is-16by9'>
                    <img src='/images/merry-2.jpg' alt='merry' />
                  </figure>
                </div>
                <div className='card-content'>
                  <h1 className='title'>About</h1>
                  <h2 className='subtitle'>
                    aboooooot meeeeeee
                  </h2>
                </div>
              </div>
            </div>

            {/* Portfolio */}
            <div className='column is-narrow has-text-right'>
              <div className='card'>
                <div className='card-image'>
                  <figure className='image is-16by9'>
                    <img src='/images/merry-1.jpg' alt='merry' />
                  </figure>
                </div>
                <div className='card-content'>
                  <h1 className='title'>Portfolio</h1>
                  <h2 className='subtitle'>
                    my stoopid apps
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment >
  );
};
