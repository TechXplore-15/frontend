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
import type { Subscription } from '@/api/types';
import { useUpdateSubscription } from '@/hooks/react-query/mutations/use-update-subscription';

export const EditSubscriptionForm: React.FC<{
  subscription: Subscription;
  onClose: () => void;
}> = ({ subscription, onClose }) => {
  const { mutate } = useUpdateSubscription();
  const { subscriber_name, end_date, is_active, id } = subscription;

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
    if (subscriber_name && is_active && end_date) {
      form.reset({
        subName: subscriber_name,
        isActive: is_active,
        endDate: new Date(end_date),
      });
    }
  }, [subscriber_name, is_active, end_date, form]);

  useEffect(() => {
    if (!isActive) {
      form.setValue('endDate', undefined);
    }
  }, [isActive, form]);

  const onSubmit = (values: SubscribeSchema) => {
    const payload = {
      card_id: id,
      subscriber_name: values.subName,
      end_date: values.endDate
        ? values.endDate.toISOString().split('T')[0]
        : '',
      is_active: values.isActive,
    };

    mutate({ userId: '2', updateData: payload });
    onClose();
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
          ცვლილებების შეტანა
        </Button>
      </form>
    </Form>
  );
};
