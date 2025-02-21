import { Loading } from '@/components/ui/loading';
import { lazy, Suspense } from 'react';

const LazyHomePage = lazy(() => import('../components/home-page'));

export const HomeView: React.FC = () => (
  <Suspense fallback={<Loading />}>
    <LazyHomePage />
  </Suspense>
);
