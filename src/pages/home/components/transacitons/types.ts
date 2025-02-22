export type Transaction = {
  date: string;
  peerAcc: string;
  description: string;
  amount: number;
};

export type SingleTransactionDialogProps = {
  transaction: Transaction;
  children: React.ReactNode;
};
