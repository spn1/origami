import React from 'react';
import PageHead from '../components/page-head';

import Link from 'next/link';

const headerProps = {
  title: 'About Me',
  description: 'About me! (Basically a CV / LinkedIn Profile)'
};

export default () => {
  return (
    <div className='container'>
      <PageHead {...headerProps} />
      <h1>About</h1>
    </div>
  );
};
