import { FieldPath, FieldValues } from 'react-hook-form';
import * as React from 'react';
import {
  FormField,
  FormFieldType,
  FormLabel,
} from '@lifespikes/ui/components/ui';
import {
  DatePicker,
  DatePickerProps,
} from '@lifespikes/ui/components/ui/date-picker';

export interface DatePickerFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends FormFieldType<TFieldValues, TName> {
  _date_picker?: DatePickerProps;
}

export const DatePickerField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  _date_picker,
  ...props
}: DatePickerFieldProps<TFieldValues, TName>) => {
  return (
    <FormField
      {...props}
      render={({ field, label, fieldContext }) => {
        return (
          <div className="flex flex-col space-y-4 w-full">
            <FormLabel>{label}</FormLabel>
            <DatePicker
              className="w-full"
              {...(_date_picker as DatePickerProps)}
              onChangeDate={field.onChange}
              selectedDate={field.value}
              id={fieldContext.formItemId}
            />
          </div>
        );
      }}
    />
  );
};
