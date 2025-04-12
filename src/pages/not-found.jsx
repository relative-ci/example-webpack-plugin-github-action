import React from 'react';
import { useLocation } from 'react-router-dom';

import { PageHeader } from '../layout/page-header';
import { Main } from '../layout/main';
import { NotFound } from '../components/not-found';

export function NotFoundPage() {
  const location = useLocation();

  return (
    <>
      <PageHeader title="Not found" />
      <Main>
        <NotFound location={location} />
      </Main>
    </>
  );
}
