declare module '@lob/react-address-autocomplete' {
  import Select, { InputActionMeta } from 'react-select';
  import React, { ChangeEvent, ReactNode } from 'react';

  export type SelectProps = React.ComponentPropsWithoutRef<typeof Select>;
  export interface AddressObject {
    primary_line: string;
    secondary_line?: string;
    city: string;
    state: string;
    zip_code: string;
  }

  export interface SelectionObject {
    label: string;
    value: AddressObject;
  }

  export type onSelection = (option: SelectionObject) => void;
  export type onInputChange = (
    newValue: string,
    actionMeta: InputActionMeta,
  ) => void;
  export type onError = (errorMessage: string) => void;

  export interface AutocompleteProps extends SelectProps {
    addressComponentValues?: {
      city?: string;
      state?: string;
      zip_code?: string;
    };
    apiKey: string;
    delaySearch?: boolean;
    delayValue?: number;
    disableLobLogo?: boolean;
    onSelection?: onSelection;
    onError?: onError;
    onInputChange?: onInputChange;
    inputValue?: string;
    primaryLineOnly?: boolean;
  }

  export const Autocomplete: React.FC<AutocompleteProps>;

  interface Form {
    primary_line: string;
    secondary_line: string;
    city: string;
    state: string;
    zip_code: string;
  }

  interface StylesOverride {
    container?: (baseStyles: React.CSSProperties) => React.CSSProperties;
    [key: string]: any;
  }

  export interface AddressFormProps {
    apiKey: string;
    children?: ReactNode;
    hideSubmitButton?: boolean;
    onFieldChange?: (event: {
      address: Form;
      event: ChangeEvent<HTMLInputElement>;
    }) => void;
    onSelection?: (option: any) => void;
    onSubmit?: (verificationResult: any) => void;
    styles?: StylesOverride;
    submitButtonLabel?: string;
  }

  export const AddressForm: React.FC<AddressFormProps & AutocompleteProps>;
}
