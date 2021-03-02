import React, { Fragment } from 'react';
import PageHead from '../../components/page-head';
import HeroSection from '../../components/hero-section';
import { sections } from '../../data/portfolio-sections';

const headerProps = {
  title: 'Portfolio',
  description: 'A portfolio of some of the software-related work I\'ve done in the past'
};

export default () => {
  return (
    <Fragment>
      <PageHead {...headerProps} />

      <section className='section is-medium'>
        <div className='container'>
          <h1 className='title has-text-centered'>Portfolio</h1>
          <p className='subtitle has-text-centered'>View a selection of the projects I have done in the past, both in my personal time or at university.</p>
        </div>
      </section>

      {Object.values(sections).map(({title, textContent, imagePath}, index) => (
        <HeroSection
          key={index}
          title={title}
          textContent={textContent}
          imagePath={imagePath}
          isLeftAligned={index % 2 === 0}
          isDark={index % 2 === 0}
        />
      ))}
    </Fragment>
  );
};
