import { Layout } from '@/components/layout/layout';
import { HomeView } from '@/pages/home/views/home-view';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router';

export const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<HomeView />} />
    </Route>,
  ),
);
