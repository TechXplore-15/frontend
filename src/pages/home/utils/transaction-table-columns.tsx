import { Button } from '@/components/ui/button';
import { type Transaction } from '@/pages/home/components/transacitons/types';
import { type ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, CheckCircle2, ChevronRight } from 'lucide-react';

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: 'status',
    header: 'სტატუსი',
    cell: () => <CheckCircle2 className='size-4 text-green-700' />,
  },
  {
    accessorKey: 'date',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          თარიღი
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => (
      <span className='whitespace-nowrap text-xs text-muted-foreground'>
        {row.getValue('date')}
      </span>
    ),
  },
  {
    accessorKey: 'description',
    header: 'დანიშნულება/დეტალები',
    cell: ({ row }) => (
      <span className='text-sm font-medium text-foreground max-w-[140px] md:max-w-[200px]  xl:max-w-[290px] truncate block'>
        {row.getValue('description')}
      </span>
    ),
  },
  {
    accessorKey: 'amount',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className='text-right'
        >
          თანხა
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue('amount'));
      const formatted = amount.toLocaleString('ka-GE', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      return (
        <span
          className={`text-sm font-medium whitespace-nowrap ${amount > 0 ? 'text-green-600' : 'text-muted-foreground'}`}
        >
          {amount > 0 ? '+' : ''}
          {formatted} GEL
        </span>
      );
    },
  },
  {
    accessorKey: 'actions',
    header: '',
    cell: () => <ChevronRight className='size-4' />,
  },
];
