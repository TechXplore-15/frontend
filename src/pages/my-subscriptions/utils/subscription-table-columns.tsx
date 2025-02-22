import { Button } from '@/components/ui/button';
import type { Subscription } from '@/api/types';
import { type ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, CheckCircle2, XCircle } from 'lucide-react';

export const subscriptionTableColumns: ColumnDef<Subscription>[] = [
  {
    accessorKey: 'subscriptionName',
    header: 'გამოწერა',
    cell: ({ row }) => (
      <span className='text-sm font-medium text-foreground'>
        {row.getValue('subscriptionName')}
      </span>
    ),
  },
  {
    accessorKey: 'accNumber',
    header: 'ანგარიშის ნომერი',
    cell: ({ row }) => (
      <span className='text-sm text-muted-foreground'>
        {row.getValue('accNumber')}
      </span>
    ),
  },
  {
    accessorKey: 'status',
    header: 'სტატუსი',
    cell: ({ row }) => {
      const isActive = row.getValue('status');
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
    accessorKey: 'activeDate',
    header: ({ column }) => (
      <Button
        variant='ghost'
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        აქტიურია
        <ArrowUpDown className='ml-2 h-4 w-4' />
      </Button>
    ),
    cell: ({ row }) => (
      <span className='whitespace-nowrap text-xs text-muted-foreground'>
        {new Date(row.getValue('activeDate')).toLocaleDateString('ka-GE')}
      </span>
    ),
  },
];
