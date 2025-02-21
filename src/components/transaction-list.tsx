import type { Transaction } from '@/components/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { CheckCircle2 } from 'lucide-react';

const transactions: Transaction[] = [
  {
    date: '20 იან 2025',
    description: 'TBCBank_ის VISA/MC ბარათებით TBC...',
    amount: -800.0,
  },
  {
    date: '18 იან 2025',
    description: 'TBCBank_ის MC ბარათებით TBC Bank_...',
    amount: -6.95,
  },
  {
    date: '17 იან 2025',
    description: 'TBCBank_ის MC ბარათებით TBC Bank_...',
    amount: -7.52,
  },
  {
    date: '15 იან 2025',
    description: 'გია ინწკირველი, პირადი გადარიცხვა თი...',
    amount: -1400.0,
  },
  {
    date: '15 იან 2025',
    description: 'თიბისი ბანკის MC ბარათებით სავაჭრ...',
    amount: -12.0,
  },
  {
    date: '15 იან 2025',
    description: 'დიკო მესხიშვილი, მომსახურების საფასური',
    amount: 1720.0,
  },
  {
    date: '12 იან 2025',
    description: 'TBCBank_ის VISA/MC ბარათებით TBC...',
    amount: -500.0,
  },
];

export default function TransactionList() {
  return (
    <Card className='w-full max-w-3xl'>
      <CardHeader>
        <CardTitle className='text-lg font-medium'>ბოლო ტრანზაქციები</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableBody>
            {transactions.map((transaction, index) => (
              <TableRow key={index} className='group hover:bg-muted/50'>
                <TableCell className='flex items-center gap-3'>
                  <CheckCircle2 className='h-4 w-4 text-green-500' />
                  <span className='text-sm text-muted-foreground'>
                    {transaction.date}
                  </span>
                </TableCell>
                <TableCell className='w-full'>
                  <span className='text-sm'>{transaction.description}</span>
                </TableCell>
                <TableCell className='text-right'>
                  <span
                    className={`text-sm font-medium ${
                      transaction.amount > 0
                        ? 'text-green-600'
                        : 'text-muted-foreground'
                    }`}
                  >
                    {transaction.amount > 0 ? '+' : ''}
                    {transaction.amount.toLocaleString('ka-GE', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}{' '}
                    GEL
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
