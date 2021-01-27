import React from 'react';
import classnames from 'classnames';

export default ({ title, textContent, isLeftAligned, isDark }) => (
  <div className={classnames('hero is-bold', { 'is-dark': isDark })}>
    <div className='hero-body'>
      <section className='section'>
        <div className='container is-max-fullhd'>
          <div className={classnames('columns is-desktop is-variable is-8', { 'row-reverse-columns': isLeftAligned })}>
            <div className='column'>
              <figure className='image'>
                <img className='has-border-radius-small' src='/images/finger-fort-1.png' />
              </figure>
            </div>
            <div className='column content'>
              <h1 className={classnames('title', { 'has-text-light': isDark })}>{title}</h1>
              {textContent.map((text,index) => (<p key={index}>{text}</p>))}
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
);
