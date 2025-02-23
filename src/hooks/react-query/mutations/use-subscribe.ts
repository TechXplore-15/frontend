import { postSubscription } from '@/api/subscription/services';
import type { Subscription } from '@/api/types';
import { QUERY_KEYS } from '@/hooks/react-query/enums';
import { PATHS } from '@/routes/enums';
import {
  useMutation,
  useQueryClient,
  type UseMutationResult,
} from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';

export const useSubscribe = (): UseMutationResult<
  void,
  Error,
  Subscription
> => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (subscriptionData: Subscription) =>
      postSubscription(subscriptionData),
    onSuccess: () => {
      toast.success('წარმატებით დაემატა გამოწერა');

      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.SUBSCRIPTIONS, '2'],
      });

      navigate(PATHS.HOME);
    },
  });
};
