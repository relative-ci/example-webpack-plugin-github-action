import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';

import { HomePage } from './pages/home';
import { RepoDetailsPage } from './pages/repo-details';
import { ReposPage } from './pages/repos';
import { AboutPage } from './pages/about';
import { NotFoundPage } from './pages/not-found';

import { Header } from './components/header';
import { Footer } from './components/footer';
import * as css from './app.module.css';

export function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <div className={css.contentContainer}>
          <Layout.Content className={css.content}>
            <Routes>
              <Route path="/repos/:owner/:repo" element={<RepoDetailsPage />} />
              <Route path="/repos/" element={<ReposPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Layout.Content>
        </div>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
}
