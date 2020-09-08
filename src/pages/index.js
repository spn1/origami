import React from 'react';
import PageHead from '../components/page-head';

import Link from 'next/link';

const headerProps = {
  title: 'Home',
  description: 'The Homepage!'
};

export default () => {
  return (
    <div className='container is-fluid main'>
      <PageHead {...headerProps} />
      <h1>Home</h1>
      <Link href='/about'><a>About</a></Link>
      <br />
      <Link href='/portfolio'><a>Portfolio</a></Link>
    </div>
  );
};
