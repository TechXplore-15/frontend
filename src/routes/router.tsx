import { Layout } from '@/components/layout/layout';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router';

export const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<HomeView />} />
      <Route path='*' element={<NotFound />} />
    </Route>,
  ),
);
