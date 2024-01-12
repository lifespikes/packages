import { FieldPath, FieldValues } from 'react-hook-form';
import {
  FormField,
  FormFieldType,
  FormLabel,
  SimpleCombobox,
  SimpleComboboxProps,
} from '@lifespikes/ui/components/ui';

export interface ComboboxFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends FormFieldType<TFieldValues, TName>,
    SimpleComboboxProps {
  selectLabel?: string;
}

export const ComboboxField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  selectLabel,
  options,
  ...props
}: ComboboxFieldProps<TFieldValues, TName>) => {
  return (
    <FormField
      {...props}
      render={({ field, label }) => {
        return (
          <div className="flex flex-col space-y-4 w-full">
            <FormLabel>{label}</FormLabel>
            <SimpleCombobox
              {...props}
              value={field.value}
              onSelect={field.onChange}
              options={options}
            />
          </div>
        );
      }}
    />
  );
};
