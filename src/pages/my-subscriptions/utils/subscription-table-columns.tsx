import type { Subscription } from '@/api/types';
import { type ColumnDef } from '@tanstack/react-table';
import { CheckCircle2, ChevronRight, XCircle } from 'lucide-react';

export const subscriptionTableColumns: ColumnDef<Subscription>[] = [
  {
    accessorKey: 'subscriptionName',
    header: 'გამოწერა',
    cell: ({ row }) => (
      <span className='text-sm font-medium text-foreground'>
        {row.getValue('subscriber_name')}
      </span>
    ),
  },
  {
    accessorKey: 'accNumber',
    header: 'ანგარიშის ნომერი',
    cell: ({ row }) => (
      <span className='text-sm text-muted-foreground'>
        {row.getValue('subscriber_account')}
      </span>
    ),
  },
  {
    accessorKey: 'status',
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
    accessorKey: 'actions',
    header: '',
    cell: () => <ChevronRight className='size-4' />,
  },
];
