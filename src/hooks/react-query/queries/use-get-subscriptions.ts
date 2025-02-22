import { getSubscriptions } from '@/api/subscription/services';
import type { Subscription } from '@/api/types';
import { QUERY_KEYS } from '@/hooks/react-query/enums';
import { useQuery, type UseQueryResult } from '@tanstack/react-query';

export const useGetSubscriptions = (
  userId: string,
): UseQueryResult<Subscription[], Error> => {
  return useQuery<Subscription[], Error>({
    queryKey: [QUERY_KEYS.SUBSCRIPTIONS, userId],
    queryFn: () => getSubscriptions(userId),
    staleTime: 10 * 60 * 1000,
    enabled: !!userId,
  });
};
