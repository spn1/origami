import React from 'react';

import Layout from '../components/layout';

import '../styles/app.scss';

export default ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);
