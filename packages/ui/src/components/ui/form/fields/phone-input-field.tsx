import { FieldPath, FieldValues } from 'react-hook-form';
import * as React from 'react';
import {
  FormField,
  FormFieldType,
  FormLabel,
} from '@lifespikes/ui/components/ui';
// import PhoneInput from "react-phone-number-input";
import PhoneInput from 'react-phone-number-input/input';
import { cn } from '@lifespikes/ui/lib/utils';
import { ComponentProps } from 'react';

type PrimitivePhoneInputProps = ComponentProps<typeof PhoneInput>;
type PhoneInputProps = PrimitivePhoneInputProps;

export interface PhoneInputFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends FormFieldType<TFieldValues, TName> {
  _phoneInput?: Omit<PhoneInputProps, 'value' | 'onChange'>;
  _className?: string;
}

export const PhoneInputField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
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
              country="US"
              {..._phoneInput}
              className={cn(
                'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
                _className,
              )}
            />
          </>
        );
      }}
    />
  );
};
