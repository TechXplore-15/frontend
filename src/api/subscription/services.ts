import { ENDPOINTS } from '@/api/enums';
import { httpClient } from '@/api/http-client';
import type { Subscription } from '@/api/types';

export const postSubscription = async (cardData: Subscription) => {
  try {
    const response = await httpClient.post(ENDPOINTS.SUBSCRIPTION, cardData);
    console.log('Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error posting card:', error);
    throw error;
  }
};

export const getSubscriptions = async (userId: string) => {
  try {
    const response = await httpClient.get(
      `${ENDPOINTS.SUBSCRIPTION}?user_id=${userId}`,
    );
    console.log('User Subscriptions:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching subscriptions:', error);
    throw error;
  }
};
