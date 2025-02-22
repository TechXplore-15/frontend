import { Loading } from '@/components/ui/loading';
import { lazy, Suspense } from 'react';

const LazyMySubscriptionsPage = lazy(
  () => import('../components/my-subscriptions-page'),
);

export const MySubscriptionsView: React.FC = () => (
  <Suspense fallback={<Loading />}>
    <LazyMySubscriptionsPage />
  </Suspense>
);
