import React, { type PropsWithChildren } from 'react';

export const PageContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className='w-auto mx-auto'>{children}</div>;
};
