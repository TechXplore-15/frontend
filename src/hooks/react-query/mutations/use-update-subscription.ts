import { patchSubscription } from '@/api/subscription/services';
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

export const useUpdateSubscription = (): UseMutationResult<
  void,
  Error,
  { userId: string; updateData: Partial<Subscription> }
> => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: ({ userId, updateData }) =>
      patchSubscription(userId, updateData),
    onSuccess: () => {
      toast.success('გამოწერა წარმატებით შეიცვალა');

      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.SUBSCRIPTIONS],
      });

      navigate(PATHS.MY_SUBSCRIPTIONS);
    },
  });
};
