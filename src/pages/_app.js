import React from 'react';

import Layout from '../components/layout';

import 'react-awesome-slider/dist/styles.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import '../styles/app.scss';

// Font Awesome Configuration - https://stackoverflow.com/questions/44752189/how-to-add-font-awesome-to-next-js-project
config.autoAddCss = false;
library.add(faHome);

export default ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);
