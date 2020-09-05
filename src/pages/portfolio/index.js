import React from 'react';
import PageHead from '../../components/page-head';

import Link from 'next/link';

const headerProps = {
  title: 'Portfolio',
  description: 'A portfolio of some of the software-related work I\'ve done in the past'
};

export default () => {
  return (
    <div className='container'>
      <PageHead {...headerProps} />
      <h1>Portfolio</h1>
      <Link href='/'><a>Home</a></Link>
      <Link href='/about'><a>About</a></Link>
    </div>
  );
};
