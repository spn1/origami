import React, { Fragment } from 'react';
import PageHead from '../../components/page-head';

const headerProps = {
  title: 'Doggos',
  description: 'Pictures of my Dogs'
};

export default () => {
  return (
    <Fragment>
      <PageHead {...headerProps} />
      <section className='section has-text-centered'>
        <div className='container'>
          <h1 className='title'>My Dog :)</h1>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          <img src='/images/merry-1.jpg' />
          <img src='/images/merry-2.jpg' />
        </div>
      </section>
    </Fragment>
  );
};
