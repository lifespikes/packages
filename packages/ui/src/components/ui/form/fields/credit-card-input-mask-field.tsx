import { FieldPath, FieldValues } from 'react-hook-form';
import * as React from 'react';
import { FC, useMemo } from 'react';
import {
  FormField,
  FormLabel,
  Input,
  InputFieldProps,
  RenderContext,
} from '@lifespikes/ui/components/ui';

export interface CreditCardInputMaskFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends InputFieldProps<TFieldValues, TName> {}

const Wrapper: FC<
  Pick<RenderContext<any>, 'field' | 'fieldContext' | 'label'> & {
    id?: string;
  }
> = ({ label, fieldContext, field, ...props }) => {
  const mask = useMemo(() => {
    return /^3[47]/.test(field.value)
      ? '9999-999999-99999'
      : '9999-9999-9999-9999';
  }, [field.value]);

  return (
    <>
      <FormLabel>{label}</FormLabel>
      <Input
        {...field}
        {...props}
        id={fieldContext.formItemId}
        isMaskEnabled
        mask={mask}
      />
    </>
  );
};

export const CreditCardInputMaskField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: CreditCardInputMaskFieldProps<TFieldValues, TName>) => {
  return (
    <FormField
      {...props}
      render={({ field, fieldContext, label }) => {
        return (
          <>
            <Wrapper
              field={field as any}
              label={label}
              fieldContext={fieldContext}
              {...props}
            />
          </>
        );
      }}
    />
  );
};
