import { z } from 'zod';

export const subscribeSchema = z.object({
  subName: z
    .string()
    .min(2, { message: 'გამომწერის სახელი უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს' })
    .max(30, {
      message: 'გამომწერის სახელი არ შეიძლება იყოს 30 სიმბოლოზე მეტი',
    }),
  isActive: z.boolean(),
  endDate: z
    .date()
    .optional()
    .refine((value) => {
      if (value) {
        return false;
      }
      return true;
    }),
});

export type SubscribeSchema = z.infer<typeof subscribeSchema>;
