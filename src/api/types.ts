export type Subscription = {
  user: number;
  subscriber_name: string;
  subscriber_account: string;
  pay_day: number | string;
  is_subscribe: boolean;
  end_date: string;
  is_active: boolean;
};

export type SubscriptionWGenDates = Subscription & {
  generatedDate: string;
};
