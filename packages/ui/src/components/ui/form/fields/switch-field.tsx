import { FieldPath, FieldValues } from 'react-hook-form';
import * as React from 'react';

import {
  FormField,
  FormFieldType,
  FormLabel,
  Switch,
} from '@lifespikes/ui/components/ui';
import * as SwitchPrimitives from '@radix-ui/react-switch/dist';

export interface SwitchFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends FormFieldType<TFieldValues, TName> {
  _switch?: React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>;
}

export const SwitchField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  _switch,
  ...props
}: SwitchFieldProps<TFieldValues, TName>) => {
  return (
    <FormField
      {...props}
      render={({ field, label, fieldContext }) => {
        return (
          <>
            <FormLabel>{label}</FormLabel>
            <Switch
              {...field}
              {..._switch}
              checked={field.value}
              onCheckedChange={field.onChange}
              id={fieldContext.formItemId}
            />
          </>
        );
      }}
    />
  );
};
