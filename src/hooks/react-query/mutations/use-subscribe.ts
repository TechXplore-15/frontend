import { postCard } from '@/api/subscription/services';
import type { Subscription } from '@/api/types';
import { useMutation, type UseMutationResult } from '@tanstack/react-query';

export const useSubscribe = (): UseMutationResult<
  void,
  Error,
  Subscription
> => {
  return useMutation({
    mutationFn: (subscriptionData: Subscription) => postCard(subscriptionData),
  });
};
