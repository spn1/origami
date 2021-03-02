import React, { Fragment } from 'react';
import PageHead from '../../components/page-head';
import Card from '../../components/card';
import Media from '../../components/media';

import { data } from '../../data/about-data';

const headerProps = {
  title: 'About Me',
  description: 'About me! (Basically a CV / LinkedIn Profile)'
};

export default () => {
  const { aside: { avatar, skills, interests }, main: { profile }, experience } = data;

  return (
    <Fragment>
      <PageHead {...headerProps} />
      <div className='container p-3'>

        <div className='columns'>
          <div className='column is-one-quarter-desktop is-one-third'>
            <Card noPadding>
              <img src={avatar.imgPath} />
              <div className='px-4 pb-4'>
                <h1 className='title is-3'>{avatar.title}</h1>
                <hr className='my-3' />
                <h2 className='subtitle my-3 is-5'>
                  {avatar.degree}
                </h2>
                <h2 className='subtitle  is-5'>{avatar.career}</h2>
              </div>
            </Card>

            <Card>
              <h1 className='title mb-3'>Skills</h1>
              <hr className='my-3' />
              {Object.keys(skills).map((skill) => {
                return (
                  <Fragment key={skill}>
                    <h2 className='subtitle my-3 has-text-info'>{skill}</h2>
                    <ul>
                      {skills[skill].map((entry, index) => {
                      return (<li key={index}>{entry}</li>);
                    })}
                    </ul>
                  </Fragment>
                );
              })}
            </Card>

            <Card>
              <h1 className='title mb-3'>Interests</h1>
              <hr className='my-3' />
              {Object.keys(interests).map((interest) => {
                return (
                  <Fragment key={interest}>
                    <h2 className='subtitle my-3 has-text-info'>{interest}</h2>
                    <ul>
                      {interests[interest].map((entry, index) => {
                      return (<li key={index}>{entry}</li>);
                    })}
                    </ul>
                  </Fragment>
                );
              })}
            </Card>
          </div>

          <div className='column is-three-quarters-desktop is-two-thirds'>
            <Card>
              <div className='content'>
                <h1 className='title'>Profile</h1>
                <hr />
                {profile.map((paragraph, index) => {
                  return (<p key={index}>{paragraph}</p>);
                })}
              </div>
            </Card>

            <Card>
              <h1 className='title'>Experience</h1>
              <hr />
              {experience.map((job, index) => {
                return (
                  <Media key={index} side={{ imgSrc: job.iconPath }} head={{title: job.title, titleExtra: job.aside, subtitle: job.employer}}>
                    <ul>
                      {job.roles.map((role, index) => ( <li key={index}>{role}</li>))}
                    </ul>
                  </Media>
                );
              })}
            </Card>
          </div>
        </div>
      </div>
    </Fragment >
  );
};
