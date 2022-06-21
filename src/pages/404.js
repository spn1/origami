import React, { Fragment } from 'react';
import PageHead from '../components/page-head';
import ImageSlider from '../components/image-slider';

const headerProps = {
  title: '404 - Page not found',
  description: 'Could not find page'
};

const dogImages = [
  '/images/dog-1.jpg',
  '/images/dog-2.jpg',
  '/images/dogs-1.jpg',
  '/images/dog-3.jpg',
  '/images/dog-4.jpg',
  '/images/dogs-2.jpg',
  '/images/dog-5.jpg',
  '/images/dog-6.jpg',
  '/images/dog-7.jpg',
  '/images/dogs-3.jpg'
];

export default () => {
  return (
    <Fragment>
      <PageHead {...headerProps} />
      <section className='section has-text-centered'>
        <div className='container'>
          <h1 className='title is-1'>404 - Page not found</h1>
          <h2 className='subtitle is-3'>This page hasn&apos;t been created yet, but here are some pictures of my family dogs :)</h2>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          <ImageSlider images={dogImages} />
        </div>
      </section>
    </Fragment>
  );
};
