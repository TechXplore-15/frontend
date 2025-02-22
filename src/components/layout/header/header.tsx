import { ThemeToggler } from '@/components/layout/header/components/theme-toggler';
import {
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
  Tooltip,
} from '@/components/ui/tooltip';
import { PATHS } from '@/routes/enums';
import { House, UserCheck } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

export const Header: React.FC = () => {
  return (
    <header className='text-sm bg-primary'>
      <nav className='sticky z-[100] h-10 w-full text-sm transition-all md:pl-2 mx-auto flex items-center justify-center'>
        <ul className='flex items-center justify-center gap-5'>
          <li>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link to={PATHS.HOME} className='flex items-center'>
                    <House className='size-[1.2rem] text-white hover:text-gray-900' />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>მთავარი</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li>

          <li>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    to={PATHS.MY_SUBSCRIPTIONS}
                    className='flex items-center'
                  >
                    <UserCheck className='size-[1.2rem] text-white hover:text-gray-900' />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>ჩემი გამოწერები</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li>

          <li>
            <ThemeToggler />
          </li>
        </ul>
      </nav>
    </header>
  );
};
