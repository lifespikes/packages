import { FieldPath, FieldValues } from 'react-hook-form';
import * as React from 'react';
import {
  FormField,
  FormFieldType,
  FormLabel,
  Textarea,
  TextareaProps,
} from '@lifespikes/ui/components/ui';

export interface TextAreaFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends FormFieldType<TFieldValues, TName>,
    Omit<TextareaProps, 'name' | 'defaultValue'>,
    React.RefAttributes<HTMLTextAreaElement> {}

export const TextAreaField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  ...props
}: TextAreaFieldProps<TFieldValues, TName>) => {
  return (
    <FormField
      {...props}
      render={({ field, label, fieldContext }) => {
        return (
          <>
            <FormLabel>{label}</FormLabel>
            <Textarea {...field} {...props} id={fieldContext.formItemId} />
          </>
        );
      }}
    />
  );
};
