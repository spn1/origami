import React, { Fragment } from 'react';
import PageHead from '../../components/page-head';

import Link from 'next/link';

const headerProps = {
  title: 'CSS Playground',
  description: 'CSS Playground'
};

export default () => {
  return (
    <Fragment>
      <PageHead {...headerProps} />
      <section className='hero is-primary is-bold is-fullheight-with-navbar mb-5'>
        <div className='hero-body'>
          <div className='container'>
            <h1 className='title'>Playground | CSS</h1>
            <h2 className='subtitle'>
              Hero subtitle
            </h2>
          </div>
        </div>
      </section>
      <section>
        <div className='container is-fluid'>
          <div id='columns' className='columns'>
            <div className='column'>
              <p>You, a bobsleder!? That I&apos;d like to see!</p>
              <p>Ah, computer dating. It&apos;s like pimping, but you rarely have to use the phrase &quot;upside your head.&quot; I guess because my parents keep telling me to be more ladylike. As though! Are you crazy? I can&apos;t swallow that.</p>
              <p>Well I&apos;da done better, but it&apos;s plum hard pleading a case while awaiting trial for that there incompetence. Come, Comrade Bender! We must take to the streets! I&apos;ve been there. My folks were always on me to groom myself and wear underpants. What am I, the pope?</p>
            </div>
            <div className='column has-text-danger'>
              <p>I wish! It&apos;s a nickel. I wish! It&apos;s a nickel. For example, if you killed your grandfather, you&apos;d cease to exist! Why not indeed! You&apos;ll have all the Slurm you can drink when you&apos;re partying with Slurms McKenzie!</p>
              <p>For one beautiful night I knew what it was like to be a grandmother. Subjugated, yet honored. Morbo will now introduce tonight&apos;s candidates… PUNY HUMAN NUMBER ONE, PUNY HUMAN NUMBER TWO, and Morbo&apos;s good friend, Richard Nixon.</p>
            </div>
            <div className='column'>
              <div id='buttons'>
                <p><a className='button'>Normal Button</a></p>
                <p><a className='button is-primary'>Primary Button</a></p>
                <p><button className='button is-danger is-loading'>Loading Danger</button></p>
              </div>
            </div>
            <div className='column'>
              <div className='is-primary'>
                <p>Shut up and get to the point! Yes, I saw. You were doing well, until everyone died. Pansy. And I&apos;d do it again! And perhaps a third time! But that would be it. It doesn&apos;t look so shiny to me.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment >
  );
};
