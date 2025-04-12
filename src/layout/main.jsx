import React from 'react';
import cx from 'classnames';

import * as css from './main.module.css';

export function Main(props) {
  const { className, ...restProps } = props;
  return (
    <div className={cx(css.root, className)} {...restProps} />
  );
}
