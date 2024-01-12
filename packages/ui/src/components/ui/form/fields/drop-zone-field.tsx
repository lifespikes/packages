import { FieldPath, FieldValues } from 'react-hook-form';
import * as React from 'react';

import {
  DropZone,
  DropZoneProps,
  FormField,
  FormFieldType,
  FormLabel,
} from '@lifespikes/ui/components/ui';

export interface DropZoneFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends FormFieldType<TFieldValues, TName> {
  _drop_zone?: DropZoneProps;
  withLabel?: boolean;
}

export const DropZoneField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  _drop_zone,
  withLabel = false,
  ...props
}: DropZoneFieldProps<TFieldValues, TName>) => {
  return (
    <FormField
      {...props}
      render={({ field, label, fieldContext }) => {
        return (
          <>
            {withLabel ? <FormLabel>{label}</FormLabel> : null}

            <DropZone
              {..._drop_zone}
              value={field.value}
              onChange={field.onChange}
            />
          </>
        );
      }}
    />
  );
};
