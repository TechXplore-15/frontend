export type Transaction = {
  date: string;
  description: string;
  amount: number;
};

export type SingleTransactionDialogProps = {
  transaction: Transaction;
  children: React.ReactNode;
};
