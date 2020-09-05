import React from 'react';
import Head from 'next/head';

export default ({ title, description }) => {
  return (
    <Head>
      {title && <meta name='title' content={title} />}
      {title && <meta name='og:title' content={title} />}
      {description && <meta name='description' content={description} />}
      {description && <meta name='og:description' content={description} />}
    </Head>
  );
};
