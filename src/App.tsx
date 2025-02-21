import { appRouter } from '@/routes/router';
import React from 'react';
import { RouterProvider } from 'react-router';

export const App: React.FC = () => <RouterProvider router={appRouter} />;
