import React, { Fragment } from 'react';
import Head from 'next/head';
import Scripts from './scripts';
import Header from './header';
import Footer from './Footer';

const metaTitle = 'Portfolio | Spencer Newton';

export default ({ children }) => (
  <Fragment>
    <Head>
      <title>{metaTitle}</title>
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
    <Header />
    {children}
    <Footer />
  </Fragment>
);
