import React, { Fragment } from 'react';
import PageHead from '../components/page-head';

const headerProps = {
  title: '404 - Page not found',
  description: 'This page does not exist'
};

export default () => {
  return (
    <Fragment>
      <PageHead {...headerProps} />
      <section className='section has-text-centered'>
        <div className='container'>
          <h1 className='title is-1'>404 - Page not found</h1>
          <h2 className='subtitle is-3'>This page hasn't been created yet, but here is a picture of my dog:</h2>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          <img src='/images/merry-1.jpg' />
        </div>
      </section>
    </Fragment>
  );
};
