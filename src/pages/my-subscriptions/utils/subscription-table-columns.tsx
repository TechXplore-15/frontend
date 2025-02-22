import type { Subscription } from '@/api/types';
import { type ColumnDef } from '@tanstack/react-table';
import { CheckCircle2, ChevronRight, XCircle } from 'lucide-react';

export const subscriptionTableColumns: ColumnDef<Subscription>[] = [
  {
    accessorKey: 'subscriber_name',
    header: 'გამოწერა',
    cell: ({ row }) => (
      <span className='text-sm font-medium text-foreground'>
        {row.getValue('subscriber_name')}
      </span>
    ),
  },
  {
    accessorKey: 'subscriber_account',
    header: 'ანგარიშის ნომერი',
    cell: ({ row }) => (
      <span className='text-sm text-muted-foreground'>
        {row.getValue('subscriber_account')}
      </span>
    ),
  },
  {
    accessorKey: 'is_active',
    header: 'სტატუსი',
    cell: ({ row }) => {
      const isActive = row.getValue('is_active');
      return isActive ? (
        <div className='flex items-center text-green-600'>
          <CheckCircle2 className='size-5 mr-1' />
        </div>
      ) : (
        <div className='flex items-center text-red-600'>
          <XCircle className='size-5 mr-1' />
        </div>
      );
    },
  },
  {
    accessorKey: 'end_date',
    header: 'გადახდა თარიღამდე',
    cell: ({ row }) => (
      <span className='whitespace-nowrap text-xs text-muted-foreground'>
        {row.getValue('end_date')}
      </span>
    ),
  },
  {
    accessorKey: 'actions',
    header: '',
    cell: () => <ChevronRight className='size-4' />,
  },
];
