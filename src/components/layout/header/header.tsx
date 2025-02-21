import { ThemeToggler } from '@/components/layout/header/components/theme-toggler';
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header>
      <nav className='sticky z-[100] h-9 w-full bg-foreground py-0 pl-1 pr-0 text-sm transition-all md:pl-2'>
        <ul className='flex h-full items-center gap-5'>
          <li>
            <ThemeToggler />
          </li>
        </ul>
      </nav>
    </header>
  );
};
