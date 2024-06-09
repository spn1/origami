import React from 'react';
import classnames from 'classnames';

export default ({ children, noPadding }) => {
  const classes = classnames(
    'box card has-text-light',
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
