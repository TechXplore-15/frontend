import type { Subscription } from '@/api/types';
import { type ColumnDef } from '@tanstack/react-table';
import { CheckCircle2, ChevronRight } from 'lucide-react';

export const columns: ColumnDef<Subscription>[] = [
  {
    accessorKey: 'status',
    header: 'სტატუსი',
    cell: () => <CheckCircle2 className='size-4 text-green-700' />,
  },

  {
    accessorKey: 'subscriber_name',
    header: 'დანიშნულება/დეტალები',
    cell: ({ row }) => (
      <span className='text-sm font-medium text-foreground max-w-[140px] md:max-w-[200px] xl:max-w-[290px] truncate block'>
        {row.getValue('subscriber_name')}
      </span>
    ),
  },

  {
    accessorKey: 'subscriber_account',
    header: 'ანგარიშის ნომერი',
    cell: ({ row }) => (
      <span className='font-mono text-sm text-muted-foreground'>
        {row.getValue('subscriber_account')}
      </span>
    ),
  },

  {
    accessorKey: 'actions',
    header: '',
    cell: () => <ChevronRight className='size-4' />,
  },
];
