import React, { Fragment } from 'react';
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
        <div className='hero-body has-text-centered'>
          <div className='container'>
            <div className='columns'>
              <div className='column'>
                <h1 className='title'>hello friend</h1>
                <h2 className='subtitle'>
                  how do you do
                </h2>
              </div>
              <div className='column'>
                image here
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
              <h1 className='title'>About</h1>
              <h2 className='subtitle'>
                aboooooot meeeeeee
              </h2>
            </div>

            {/* Portfolio */}
            <div className='column has-text-right'>
              <h1 className='title'>Portfolio</h1>
              <h2 className='subtitle'>
                my stoopid apps
              </h2>
            </div>
          </div>
        </div>
      </section>
    </Fragment >
  );
};
