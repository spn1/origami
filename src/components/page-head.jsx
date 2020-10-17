import React from 'react';
import Head from 'next/head';

export default ({ title, description }) => {
  return (
    <Head>
      {title && <meta name='title' content={title} key='title'/>}
      {title && <meta name='og:title' content={title} key='og:title'/>}
      {description && <meta name='description' content={description} key='description'/>}
      {description && <meta name='og:description' content={description} key='og:description'/>}
      <title>{title}</title>
    </Head>
  );
};
