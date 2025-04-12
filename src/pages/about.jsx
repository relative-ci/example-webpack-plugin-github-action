import React from 'react';

import { PageHeader } from '../layout/page-header';
import { Main } from '../layout/main';
import { About } from '../components/about';

export function AboutPage() {
  return (
    <>
      <PageHeader title="About" />
      <Main>
        <About />
      </Main>
    </>
  );
}
