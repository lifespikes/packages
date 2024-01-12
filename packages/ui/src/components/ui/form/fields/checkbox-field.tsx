import { FieldPath, FieldValues } from 'react-hook-form';
import * as React from 'react';

import {
  Checkbox,
  CheckboxProps,
  FormField,
  FormFieldType,
} from '@lifespikes/ui/components/ui';

export interface CheckboxFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends FormFieldType<TFieldValues, TName> {
  _checkbox?: CheckboxProps;
}

export const CheckBoxField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  _checkbox,
  ...props
}: CheckboxFieldProps<TFieldValues, TName>) => {
  return (
    <FormField
      {...props}
      render={({ field, label, fieldContext }) => {
        return (
          <>
            <Checkbox
              {...field}
              {..._checkbox}
              checked={field.value}
              onCheckedChange={field.onChange}
              label={label}
              id={fieldContext.formItemId}
            />
          </>
        );
      }}
    />
  );
};
