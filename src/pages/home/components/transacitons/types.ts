import { SubscriptionWGenDates } from '@/api/types';

export type Transaction = {
  date?: string;
  peerAcc: string;
  description: string;
  amount: number;
};

export type SingleTransactionDialogProps = {
  transaction: SubscriptionWGenDates;
  children: React.ReactNode;
};
