import React, { useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  subscribeSchema,
  type SubscribeSchema,
} from '@/pages/home/utils/schemas/subscribe-schema';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Calendar } from '@/components/ui/calendar';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useSubscribe } from '@/hooks/react-query/mutations/use-subscribe';
import type { Subscription, SubscriptionWGenDates } from '@/api/types';

export const EditSubscriptionForm: React.FC<{
  subscription: SubscriptionWGenDates;
}> = ({ subscription }) => {
  const { mutate } = useSubscribe();

  const form = useForm<SubscribeSchema>({
    resolver: zodResolver(subscribeSchema),
    defaultValues: {
      subName: '',
      isActive: false,
      endDate: undefined,
    },
  });

  const isActive = form.watch('isActive');

  useEffect(() => {
    if (!isActive) {
      form.setValue('endDate', undefined);
    }
  }, [isActive, form]);

  const onSubmit = (values: SubscribeSchema) => {
    const day = subscription.generatedDate?.toString().split(' ')[0];

    const payload: Subscription = {
      user: 2,
      subscriber_name: values.subName,
      subscriber_account: subscription.subscriber_account,
      pay_day: day,
      is_subscribe: true,
      end_date: values.endDate
        ? values.endDate.toISOString().split('T')[0]
        : '',
      is_active: values.isActive,
    };

    mutate(payload);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
        <FormField
          control={form.control}
          name='subName'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder='გამოწერის სახელი' {...field} />
              </FormControl>
              <FormMessage className='text-red-500' />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='isActive'
          render={({ field }) => (
            <FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md p-4'>
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className='border border-primary'
                />
              </FormControl>
              <div className='space-y-1 leading-none'>
                <FormLabel>აქტიური გამოწერა</FormLabel>
              </div>
              <FormMessage className='text-red-500' />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='endDate'
          render={({ field }) => (
            <FormItem>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant='outline'
                      className={cn(
                        'w-full pl-3 text-left font-normal',
                        !field.value && 'text-muted-foreground',
                      )}
                    >
                      {field.value ? (
                        format(field.value, 'PPP')
                      ) : (
                        <span>დასრულების თარიღი</span>
                      )}
                      <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className='w-auto p-0' align='start'>
                  <Calendar
                    mode='single'
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) => date < new Date()}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage className='text-red-600' />
            </FormItem>
          )}
        />

        <Button type='submit' className='w-full'>
          გამოწერის დამატება
        </Button>
      </form>
    </Form>
  );
};
