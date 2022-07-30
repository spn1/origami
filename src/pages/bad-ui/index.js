import React, { Fragment } from 'react';

import PageHead from '../../components/page-head';
import Passwordle from '../../components/passwordle';

const headerProps = {
  title: 'Bad UI',
  description: 'The Worst UIs I could think of'
};

export default () => {
  return (
    <Fragment>
      <PageHead {...headerProps} />
      <section className='section page-container'>
        <div className='container'>
          <h1 className='is-size-1'>Passwordle</h1>
          <Passwordle />
        </div>
      </section>
    </Fragment >
  );
};
