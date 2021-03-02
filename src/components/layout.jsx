import React, { Fragment } from 'react';
import Head from 'next/head';
import Scripts from './scripts';
import Header from './header';
import Footer from './footer';

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
      <meta charSet='utf-8' />
      <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
      <Scripts />
    </Head>
    <Header />
    {children}
    <Footer />
  </Fragment>
);
