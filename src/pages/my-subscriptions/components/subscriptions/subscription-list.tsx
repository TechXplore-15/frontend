import React, { useState } from 'react';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  type SortingState,
  getPaginationRowModel,
  getFilteredRowModel,
} from '@tanstack/react-table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { subscriptionTableColumns } from '@/pages/my-subscriptions/utils/subscription-table-columns';
import { useGetSubscriptions } from '@/hooks/react-query/queries/use-get-subscriptions';
import { Loading } from '@/components/ui/loading';
import { SingleSubscriptionDialog } from '@/pages/my-subscriptions/components/subscriptions/single-subscription-dialog';

export const SubscriptionList: React.FC = () => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState('');

  const { data, isLoading } = useGetSubscriptions('2');

  const table = useReactTable({
    data: data || [],
    columns: subscriptionTableColumns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    state: {
      sorting,
      globalFilter,
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Card className='w-full md:min-w-3xl sm:min-w-2xl min-w-md sm:px-0 px-4'>
      <CardHeader className='border-b'>
        <CardTitle className='text-lg font-medium'>გამოწერები</CardTitle>
        <Input
          placeholder='ძებნა...'
          value={globalFilter ?? ''}
          onChange={(event) => setGlobalFilter(event.target.value)}
          className='max-w-sm mt-4'
        />
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <SingleSubscriptionDialog
                  key={row.id}
                  subscription={row.original}
                >
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && 'selected'}
                    className='group hover:bg-muted/20 h-16'
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                </SingleSubscriptionDialog>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={subscriptionTableColumns.length}
                  className='h-24 text-center'
                >
                  შედეგები არ მოიძებნა.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
