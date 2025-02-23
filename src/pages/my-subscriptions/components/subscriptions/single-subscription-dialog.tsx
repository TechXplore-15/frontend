import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { EditSubscriptionForm } from '@/pages/my-subscriptions/components/subscriptions/edit-subscription-form';
import { SingleSubscriptionDialogProps } from '@/pages/my-subscriptions/components/subscriptions/types';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import React, { useState } from 'react';

export const SingleSubscriptionDialog: React.FC<
  SingleSubscriptionDialogProps
> = ({ subscription, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className='cursor-pointer'>
        {children}
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogTitle>
          <VisuallyHidden.Root>Subscription details</VisuallyHidden.Root>
        </DialogTitle>
        {subscription && (
          <div className='space-y-4'>
            <EditSubscriptionForm
              subscription={subscription}
              onClose={() => setOpen(false)}
            />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
