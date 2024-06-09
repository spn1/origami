import React from 'react';

const defaultImage = { imgSrc: 'https://bulma.io/images/placeholders/64x64.png' };

export default ({ side = defaultImage, head = {}, children }) => {
  const { imgSrc } = side;
  const { title, titleExtra, subtitle } = head;

  return (
    <article className='media'>
      <figure className='media-left is-hidden-touch'>
        <p className='image is-64x64'>
          <img src={imgSrc} />
        </p>
      </figure>
      <div className='media-content'>
        <div className='content'>
          <h2 className='subtitle has-text-info mb-0'>{title}<span className='is-pulled-right'>{titleExtra}</span></h2>
          <h2 className='subtitle is-4 mt-1'>{subtitle}</h2>
          {children}
        </div>
      </div>
    </article>
  );
};
