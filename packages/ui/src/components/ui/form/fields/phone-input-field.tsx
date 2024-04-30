import { FieldPath, FieldValues } from 'react-hook-form';
import * as React from 'react';
import {
  FormField,
  FormFieldType,
  FormLabel,
  PhoneInput,
} from '@lifespikes/ui/components/ui';
import { cn } from '@lifespikes/ui/lib/utils';
import { ComponentProps } from 'react';

type PrimitivePhoneInputProps = ComponentProps<typeof PhoneInput>;
type PhoneInputProps = PrimitivePhoneInputProps;

export interface PhoneInputFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends FormFieldType<TFieldValues, TName> {
  _phoneInput?: Omit<PhoneInputProps, 'value' | 'onChange'>;
  _className?: string;
}

export const PhoneInputField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  _phoneInput,
  _className,
  ...props
}: PhoneInputFieldProps<TFieldValues, TName>) => {
  return (
    <FormField
      {...props}
      render={({ field, label }) => {
        return (
          <>
            <FormLabel>{label}</FormLabel>
            <PhoneInput
              {...field}
              {..._phoneInput}
              className={cn(_className)}
            />
          </>
        );
      }}
    />
  );
};
