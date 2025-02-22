import { ENDPOINTS } from '@/api/enums';
import { httpClient } from '@/api/http-client';
import type { Subscription } from '@/api/types';

export const postCard = async (cardData: Subscription) => {
  try {
    const response = await httpClient.post(ENDPOINTS.SUBSCRIPTION, cardData);
    console.log('Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error posting card:', error);
    throw error;
  }
};
