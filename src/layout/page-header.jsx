import React from 'react';
import cx from 'classnames';
import { PageHeader as BaseComponent } from '@ant-design/pro-components';

import * as css from './page-header.module.css';

export function PageHeader(props) {
  const { className, ...restProps } = props;
  return <BaseComponent {...restProps} className={cx(css.root, className)} />;
}
