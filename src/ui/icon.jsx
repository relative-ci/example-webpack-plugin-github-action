import React from 'react';
import { Calendar } from 'react-feather';
import cx from 'classnames';

import * as css from './icon.module.css';

const glyphs = {
  calendar: Calendar,
};

export function Icon(props) {
  const { className = '', glyph, ...restProps } = props;
  const BaseComponent = glyphs[glyph];

  return <BaseComponent className={cx(css.root, className)} size={16} {...restProps} />;
}
