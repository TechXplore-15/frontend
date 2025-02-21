import { PageContainer } from '@/components/layout/containers/page-container';
import { Header } from '@/components/layout/header/header';
import { Main } from '@/components/layout/main/main';
import React from 'react';
import { Outlet } from 'react-router';

export const Layout: React.FC = () => {
  return (
    <div>
      <Header />
      <Main>
        <PageContainer>
          <Outlet />
        </PageContainer>
      </Main>
    </div>
  );
};
