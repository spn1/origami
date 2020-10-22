import React from 'react';

export default ({ sideContent, mainContent, children }) => {
  const { imgSrc } = sideContent;
  // const { mainContentBody } = mainContent;

  console.log(imgSrc);

  return (
    <article className='media'>
      <figure className='media-left is-hidden-touch'>
        <p className='image is-64x64'>
          <img src={imgSrc} />
        </p>
      </figure>
      <div className='media-content'>
        <div className='content'>
          {children}
        </div>
      </div>
    </article>
  );
};
