import { Layout } from '@/components/layout/layout';
import { HomeView } from '@/pages/home/views/home-view';
import { MySubscriptionsView } from '@/pages/my-subscriptions/views/my-subscriptions-view';
import { PATHS } from '@/routes/enums';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router';

export const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path={PATHS.HOME} element={<Layout />}>
      <Route index element={<HomeView />} />
      <Route path={PATHS.MY_SUBSCRIPTIONS} element={<MySubscriptionsView />} />
    </Route>,
  ),
);
