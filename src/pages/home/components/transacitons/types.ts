import { Subscription } from '@/api/types';

export type Transaction = {
  date?: string;
  peerAcc: string;
  description: string;
  amount: number;
};

export type SingleTransactionDialogProps = {
  transaction: Subscription;
  children: React.ReactNode;
};
