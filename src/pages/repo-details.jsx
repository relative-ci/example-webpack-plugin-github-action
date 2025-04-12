import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { PageHeader } from '../layout/page-header';
import { Main } from '../layout/main';
import { RepoDetails } from '../components/repo-details';

export function RepoDetailsPage() {
  const { owner, repo } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <PageHeader title={repo} onBack={() => navigate(-1)} />
      <Main>
        <RepoDetails owner={owner} repo={repo} />
      </Main>
    </>
  );
}
