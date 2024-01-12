import { FieldPath, FieldValues } from 'react-hook-form';
import * as React from 'react';
import {
  FormField,
  FormFieldType,
  FormLabel,
} from '@lifespikes/ui/components/ui';
import {
  AddressForm,
  AddressFormProps,
  AddressObject,
  Autocomplete,
  AutocompleteProps,
} from '@lob/react-address-autocomplete';
import { PropsWithChildren, useEffect, useState } from 'react';

type InputAddressAutocompleteProps = Omit<
  AutocompleteProps,
  'onSelection' | 'value' | 'apiKey'
>;

export interface AddressInputFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends FormFieldType<TFieldValues, TName> {
  mode?: 'autocomplete' | 'form';
  _autocomplete?: InputAddressAutocompleteProps;
  _addressForm?: AddressFormProps & InputAddressAutocompleteProps;
  apiKey: string;
}

const Render = ({ value, children }: PropsWithChildren & { value: any }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(false);

    setTimeout(() => {
      setShow(true);
    }, 1);
  }, [value]);

  return show ? <>{children}</> : null;
};

export const AddressInputField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  mode = 'autocomplete',
  apiKey,
  _autocomplete,
  _addressForm,
  ...props
}: AddressInputFieldProps<TFieldValues, TName>) => {
  return (
    <FormField
      {...props}
      render={({ field, label }) => {
        const parsedValue = (valueObject: AddressObject | undefined) => {
          if (!valueObject) return '';
          return Object.values(valueObject)
            .map((value) => value)
            .join(', ');
        };

        return (
          <Render value={field.value}>
            <FormLabel>{label}</FormLabel>
            {mode === 'autocomplete' ? (
              <Autocomplete
                {..._autocomplete}
                apiKey={apiKey}
                delaySearch
                disableLobLogo
                onSelection={(selected) => field.onChange(selected.value)}
                inputValue={parsedValue(field.value)}
                classNames={{
                  control: () => 'dark:bg-background !bg-background',
                  menu: () => 'dark:bg-background !bg-background ',
                  option: () => '!text-primary',
                  input: () => '!text-primary-foreground',
                }}
                styles={{
                  option(styles, { data }) {
                    // remove lob label
                    if ((data as any).value === 'lob-label') {
                      return {
                        display: 'none',
                      };
                    }
                    return styles;
                  },
                }}
              />
            ) : (
              <AddressForm
                apiKey={apiKey}
                delaySearch={true}
                hideSubmitButton
                {..._addressForm}
                onSelection={(selected) => field.onChange(selected.value)}
                inputValue={parsedValue(field.value)}
              />
            )}
          </Render>
        );
      }}
    />
  );
};
