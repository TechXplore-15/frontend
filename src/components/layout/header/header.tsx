import { ThemeToggler } from '@/components/layout/header/components/theme-toggler';
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className='text-sm bg-primary'>
      <nav className='sticky z-[100] h-10 w-full text-sm transition-all md:pl-2 mx-auto flex items-center justify-center'>
        <ul className='flex items-center justify-center gap-5'>
          <li>
            <ThemeToggler />
          </li>
        </ul>
      </nav>
    </header>
  );
};
