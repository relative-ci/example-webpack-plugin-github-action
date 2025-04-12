import React from 'react';

import { PageHeader } from '../layout/page-header';
import { Main } from '../layout/main';
import { RepoList } from '../components/repo-list';

export function ReposPage() {
  return (
    <>
      <PageHeader title="Examples" />
      <Main>
        <RepoList />
      </Main>
    </>
  );
}
