import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { EditSubscriptionForm } from '@/pages/my-subscriptions/components/subscriptions/edit-subscription-form';
import { SingleSubscriptionDialogProps } from '@/pages/my-subscriptions/components/subscriptions/types';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import React from 'react';

export const SingleSubscriptionDialog: React.FC<
  SingleSubscriptionDialogProps
> = ({ subscription, children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild className='cursor-pointer'>
        {children}
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogTitle>
          <VisuallyHidden.Root>Subscription details</VisuallyHidden.Root>
        </DialogTitle>
        {subscription && (
          <div className='space-y-4'>
            <EditSubscriptionForm subscription={subscription} />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
