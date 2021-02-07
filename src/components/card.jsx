import React from 'react';
import classnames from 'classnames';

export default ({ children, noPadding }) => {
  const classes = classnames(
    'box card',
    {
      'p-0': noPadding
    }
  );

  return (
    <div className={classes}>
      {children}
    </div>
  );
};
