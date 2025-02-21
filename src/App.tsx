import React from 'react';
import { appRouter } from '@/routes/router';
import { RouterProvider } from 'react-router';

export const App: React.FC = () => <RouterProvider router={appRouter} />;
