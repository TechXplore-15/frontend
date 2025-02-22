import { getSubscriptions } from '@/api/subscription/services';
import { Subscription, SubscriptionWGenDates } from '@/api/types';
import { QUERY_KEYS } from '@/hooks/react-query/enums';
import { useQuery, type UseQueryResult } from '@tanstack/react-query';

export const useGetSubscriptions = (
  userId: string,
): UseQueryResult<{ subscriptions: SubscriptionWGenDates[] }, Error> => {
  return useQuery<{ subscriptions: SubscriptionWGenDates[] }, Error>({
    queryKey: [QUERY_KEYS.SUBSCRIPTIONS],
    queryFn: async () => {
      const data = await getSubscriptions(userId);

      return {
        subscriptions: data.subscriptions.map((subscription: Subscription) => ({
          ...subscription,
          generatedDate: new Date().toISOString(),
        })),
      };
    },
    retry: 6,
    staleTime: 10 * 60 * 1000,
  });
};
