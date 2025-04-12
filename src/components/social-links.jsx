import React from 'react';

import gitHubLogoUrl from '../assets/images/github.svg';
import xLogoUrl from '../assets/images/x.svg';
import * as css from './social-links.module.css';

export function SocialLinks(props) {
  return (
    <div {...props}>
      <a href="https://github.com/relative-ci" title="Visit RelativeCI on GitHub" className={css.item}>
        <img src={gitHubLogoUrl} alt="GitHub" width="16" />
      </a>
      <a href="https://x.com/relative_ci" title="Visit RelativeCI on X.com" className={css.item}>
        <img src={xLogoUrl} alt="X.com" width="16" />
      </a>
    </div>
  );
}
