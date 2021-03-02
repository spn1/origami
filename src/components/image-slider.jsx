import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

const AutoplaySlider = withAutoplay(AwesomeSlider);

export default ({ images }) => (
  <AutoplaySlider
    className='hide-loading-bar'
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={3000}
    organicArrows={false}
    bullets={false}
  >
    {images.map((image, index) => <img key={index} src={image} data-src={image}/>)}
  </AutoplaySlider>
    );
