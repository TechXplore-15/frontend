import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { SubscribeForm } from '@/pages/home/components/transacitons/subscribe-form';
import { type SingleTransactionDialogProps } from '@/pages/home/components/transacitons/types';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { CheckCircle2 } from 'lucide-react';
import React, { useState } from 'react';

export const SingleTransactionDialog: React.FC<
  SingleTransactionDialogProps
> = ({ transaction, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className='cursor-pointer'>
        {children}
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogTitle>
          <VisuallyHidden.Root>Transaction details</VisuallyHidden.Root>
        </DialogTitle>
        {transaction && (
          <div className='space-y-4'>
            <div className='border-b pb-4'>
              <h2 className='text-lg font-semibold'>ტრანზაქციის დეტალები</h2>
            </div>

            <div className='space-y-3'>
              <div>
                <h3 className='text-sm font-medium text-muted-foreground'>
                  დანიშნულება
                </h3>
                <p className='text-sm'>{transaction.subscriber_name}</p>
              </div>

              <div>
                <h3 className='text-sm font-medium text-muted-foreground'>
                  სტატუსი
                </h3>
                <div className='flex items-center gap-2 mt-1'>
                  <CheckCircle2 className='size-4 text-green-700' />
                  <span className='text-sm'>დასრულებული</span>
                </div>
              </div>
            </div>

            <SubscribeForm
              transaction={transaction}
              onClose={() => setOpen(false)}
            />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
