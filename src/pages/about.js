import React, { Fragment } from 'react';
import PageHead from '../components/page-head';

const headerProps = {
  title: 'About Me',
  description: 'About me! (Basically a CV / LinkedIn Profile)'
};

export default () => {
  return (
    <Fragment>
      <PageHead {...headerProps} />
      <div className='container about pt-5'>

        <div className='columns red'>
          <div className='column is-one-quarter blue'>
            <div className='box'>
              <h1 className='title'>Spencer Newton</h1>
              <hr />
            </div>
            <div className='box'>
              <h1 className='title'>Skills</h1>
              <hr />
            </div>
            <div className='box'>
              <h1 className='title'>Interests</h1>
              <hr />
            </div>
          </div>
          <div className='column is-three-quarters green'>
            <div className='box'>
              <h1 className='title'>Profile</h1>
              <hr />
            </div>
            <div className='box'>
              <h1 className='title'>Experience</h1>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
