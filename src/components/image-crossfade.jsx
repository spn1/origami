import React, { useState, useEffect } from 'react';
import { useTransition, animated, config } from 'react-spring';

const ImageCrossfade = ({ images, interval = 2000, classNames }) => {
  const [index, setIndex] = useState(0);
  const transitions = useTransition(images[index], item => item, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  });

  useEffect(() => void setInterval(() => setIndex(state => (state + 1) % images.length), interval), []);

  return transitions.map(({ item, props, key }) => (
    <animated.img
      key={key}
      src={item}
      className={`${classNames}`}
      style={{ ...props, }}
      />
  ));
};

export default ImageCrossfade;
