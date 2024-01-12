import { FieldPath, FieldValues } from 'react-hook-form';
import * as React from 'react';
import {
  Input,
  InputProps,
  FormField,
  FormFieldType,
  FormLabel,
} from '@lifespikes/ui/components/ui';

export interface InputFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends FormFieldType<TFieldValues, TName>,
    Omit<InputProps, 'name' | 'defaultValue'>,
    React.RefAttributes<HTMLInputElement> {}

export const InputField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: InputFieldProps<TFieldValues, TName>) => {
  return (
    <FormField
      {...props}
      render={({ field, label, fieldContext }) => {
        return (
          <>
            <FormLabel>{label}</FormLabel>
            <Input {...field} {...props} id={fieldContext.formItemId} />
          </>
        );
      }}
    />
  );
};
