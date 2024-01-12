import { FieldPath, FieldValues } from 'react-hook-form';
import * as React from 'react';
import {
  FormField,
  FormFieldType,
  FormLabel,
} from '@lifespikes/ui/components/ui';
import {
  DateRangePicker,
  DateRangePickerProps,
} from '@lifespikes/ui/components/ui/date-picker/date-range-picker';

export interface DateRangePickerFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends FormFieldType<TFieldValues, TName> {
  _date_picker?: DateRangePickerProps;
}

export const DateRangeField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  _date_picker,
  ...props
}: DateRangePickerFieldProps<TFieldValues, TName>) => {
  return (
    <FormField
      {...props}
      render={({ field, label, fieldContext }) => {
        return (
          <div className="flex flex-col space-y-4 w-full">
            <FormLabel>{label}</FormLabel>
            <DateRangePicker
              className="w-full"
              {...(_date_picker as DateRangePickerProps)}
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
