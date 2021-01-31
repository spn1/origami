import React, { Fragment } from 'react';
import PageHead from '../../components/page-head';
import HeroSection from '../../components/hero-section';
import portfolioData from './portfolio-sections';

const headerProps = {
  title: 'Portfolio',
  description: 'A portfolio of some of the software-related work I\'ve done in the past'
};

export default () => {
  console.log(Object.values(portfolioData));

  return (
    <Fragment>
      <PageHead {...headerProps} />

      <section className='section is-medium'>
        <div className='container'>
          <h1 className='title has-text-centered'>Portfolio</h1>
          <p className='subtitle has-text-centered'>View a selection of the projects I have done in the past, both in my personal time or at university.</p>
        </div>
      </section>

      {Object.values(portfolioData).map(({title, textContent, imagePath}, index) => (
        <HeroSection
          key={index}
          title={title}
          textContent={textContent}
          imagePath={imagePath}
          isLeftAligned={index % 2 === 0}
          isDark={index % 2 === 0}
        />
      ))}

      {/* <div className='hero is-light is-bold'>
        <div className='hero-body'>
          <section className='section'>
            <div className='container is-max-fullhd'>
              <div className='columns is-desktop is-variable is-8'>
                <div className='column content'>
                  <h1 className='title'>Passive Structured Light</h1>
                  <p>This was the topic of my 4th year Major Project (and resulting disseration). The application that I wrote for this was done in C++ using OpenCV.</p>
                  <p>Structured Light is a technique used to create 3D models of an environment by projecting a pattern of lights (eg laser stripes) onto it using a projector, and then analysing images of the resulting scene. Because we know the pattern of lights, the dimensions of the scene in the image can be derived by looking at how the pattern deforms around the objects in the scene.</p>
                  <p>This project was focused on a similar technique, but instead of lasers, sunlight could be used to project a pattern of spots onto a scene by reflecting it off of an array of mirrors. This would be advantageous in some areas for use with planetary landers when compared to other techniques. For example, it would require less power than using a projector or stereo vision (see dissertation for an analysis) and could required less bulky equipment.</p>
                </div>
                <div className='column'>
                  <figure className='image'>
                    <img className='has-border-radius-small' src='/images/psl-screenshot.png' />
                  </figure>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className='hero is-dark is-bold'>
        <div className='hero-body'>
          <section className='section'>
            <div className='container is-max-fullhd'>
              <div className='columns is-desktop is-variable is-8'>
                <div className='column container'>
                  <figure className='image'>
                    <img className='has-border-radius-small' src='/images/triple-triad-1.png' />
                  </figure>
                </div>
                <div className='column content'>
                  <h1 className='title has-text-light'>Triple Triad</h1>
                  <p>This was the first project I did in a game-creation tool called Unity, that I did during the Summer of 2014 between my 3rd and 4th years at university. The game is remake of the card mini-game from Final Fantasy 8 - Triple Triad. Since it was my first Unity project, I chose a game with set rules so that I could focus on the development and learning process, instead of the design of the game (rules, ui, balance, etc).</p>
                  <p>It is played by drawing a hand of 5 cards (that represent different monsters in the orignal game), each of which has a 'power' value corresponding to each face of the card. Cards are played onto a 3 x 3 grid, and when a card is placed next to another card belonging to the opponent, those cards 'attack' each other by comparing their adjacent power values. If an attacking card has a higher power value than the defending card, the defending card is captured by the attacker and from then on belongs to that player. This continues untill all the grid slots have been filled, and whomever controls the most cards (including cards in their hand) at this point wins the match.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className='hero is-light is-bold'>
        <div className='hero-body'>
          <section className='section'>
            <div className='container is-max-fullhd'>
              <div className='columns is-desktop is-centered is-variable is-8'>
                <div className='column content'>
                  <h1 className='title'>8-Puzzle Solver</h1>
                  <p>This was an Artificial Intelligence project I did for University. The goal of the project was to develop a program to find the solution to an 8-puzzle game, when given a start state and an end state.</p>
                  <p>The 8-puzzle game consists of a 3x3 grid where all the sections except one contains a tile with a number on it (from 1 to 8). The tiles can be moved left / right / up / down to an empty section. The goal of the game is to move the tiles from the arrangement they begin in to a specified goal state, after which the puzzle is considered complete. To solve this with a program, I implemented a few different solution-finding algorithms, with different heuristics of varying degrees of 'intelligence'. After implementing the algorirthms and heuristics, I analysed the performance of each and composed a report detailing which ones were more performant.</p>
                </div>
                <div className='column'>
                  <figure className='has-border-radius-small image'>
                    <img src='/images/8-puzzle-1.png' />
                  </figure>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div> */}
    </Fragment>
  );
};
