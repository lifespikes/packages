import { FieldPath, FieldValues } from 'react-hook-form';
import * as React from 'react';
import {
  DynamicRadioGroup,
  DynamicRadioGroupProps,
  FormField,
  FormFieldType,
  FormLabel,
} from '@lifespikes/ui/components/ui';

export interface RadioGroupFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends FormFieldType<TFieldValues, TName>,
    Omit<DynamicRadioGroupProps, 'name' | 'defaultValue'> {}

export const RadioGroupField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: RadioGroupFieldProps<TFieldValues, TName>) => {
  return (
    <FormField
      {...props}
      render={({ field, label, fieldContext }) => {
        return (
          <>
            <FormLabel>{label}</FormLabel>
            <DynamicRadioGroup
              {...props}
              value={field.value}
              onValueChange={field.onChange}
            />
          </>
        );
      }}
    />
  );
};
