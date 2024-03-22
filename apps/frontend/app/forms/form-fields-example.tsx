'use client';
import { useForm } from 'react-hook-form';
import { Button, Form, FormField, Input, InputField } from '@lifespikes/ui';

import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z
  .object({
    name: z.string(),
    test1: z.string(),
  })
  .required();

export const FormFieldsExample = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(console.log, console.error)}>
        <InputField label="Name" name="name" />
        <InputField label="Email" name="email" />

        <FormField
          control={form.control}
          name="test1"
          render={({ field }) => (
            <Input placeholder="Type the company name" {...field} />
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
