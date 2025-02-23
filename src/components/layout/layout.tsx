import { PageContainer } from '@/components/layout/containers/page-container';
import { Header } from '@/components/layout/header/header';
import { Main } from '@/components/layout/main/main';
import React from 'react';
import { Outlet } from 'react-router';
import { Toaster } from 'sonner';

export const Layout: React.FC = () => {
  return (
    <div>
      <Header />
      <Main>
        <PageContainer>
          <Outlet />
          <Toaster />
        </PageContainer>
      </Main>
    </div>
  );
};
