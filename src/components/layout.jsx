import React, { Fragment } from 'react';
import Head from 'next/head';
import Scripts from './scripts.jsx';

const metaTitle = 'Portfolio | Spencer Newton';

export default ({ children }) => (
  <Fragment>
    <Head>
      <meta name='author' content='Spencer Newton' />
      <meta name='title' content={metaTitle} />
      <meta name='og:title' content={metaTitle} />
      <meta name='description' content='The Personal Website of Spencer Newton - Portfolio, CV, Playground' />
      <meta name='og:description' content='The Personal Website of Spencer Newton - Portfolio, CV, Playground' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta charset='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <Scripts />
    </Head>
    {children}
  </Fragment>
);
