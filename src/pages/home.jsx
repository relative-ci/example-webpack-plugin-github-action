import React from 'react';
import { Link } from 'react-router-dom';
import { Divider } from 'antd';

import { PageHeader } from '../layout/page-header';
import { Main } from '../layout/main';
import { RepoList } from '../components/repo-list';

export function HomePage() {
  return (
    <>
      <PageHeader title="Latest examples" />
      <Main>
        <RepoList limit={5} />
        <Divider />
        <Link to="/repos">
          View all
        </Link>
      </Main>
    </>
  );
}
