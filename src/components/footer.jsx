import React from 'react';
import { Layout, Typography } from 'antd';

import { SocialLinks } from './social-links';
import * as css from './footer.module.css';

export function Footer() {
  return (
    <Layout.Footer className={css.root}>
      <Typography.Text type="secondary">
        <a href="https://relative-ci.com">RelativeCI</a>
        &nbsp;
        exemple web application
      </Typography.Text>
      <SocialLinks className={css.socialLinks} />
    </Layout.Footer>
  );
}
