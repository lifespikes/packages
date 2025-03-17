import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { Slot } from '@radix-ui/react-slot';
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
  useForm,
} from 'react-hook-form';

import { cn, labelFromFieldName } from '@lifespikes/ui/lib/utils';
import { Label } from '@lifespikes/ui/components/ui/label';
import { UseFormStateReturn } from 'react-hook-form/dist/types';
import {
  ControllerFieldState,
  ControllerRenderProps,
} from 'react-hook-form/dist/types/controller';

const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName;
};

export type RenderContext<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  field: ControllerRenderProps<TFieldValues, TName>;
  fieldState: ControllerFieldState;
  formState: UseFormStateReturn<TFieldValues>;
  label: string;
  labelFromName?: string;
  requiredSign?: boolean;
  fieldContext: UseFormFieldReturnType;
};

export type FormFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  render: (context: RenderContext<TFieldValues, TName>) => React.ReactElement;
  label?: string;
  requiredSign?: boolean;
} & Omit<ControllerProps<TFieldValues, TName>, 'render'>;

export type FormFieldType<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = Omit<FormFieldProps<TFieldValues, TName>, 'render'> & {
  _label?: React.ComponentPropsWithoutRef<typeof FormLabel>;
};

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
);

const FormFieldWrapper = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(props: {
  context: Omit<
    RenderContext<TFieldValues, TName>,
    'label' | 'name' | 'fieldContext' | 'requiredSign'
  >;
  label?: string;
  name?: string;
  requiredSign?: boolean;
  render?: (context: RenderContext<TFieldValues, TName>) => React.ReactElement;
}) => {
  const labelFromName = labelFromFieldName(props.name ?? '');
  const defaultLabel = props.label ?? labelFromName;

  const fieldContext = useFormField();

  return props.render?.({
    ...props.context,
    fieldContext,
    label: defaultLabel,
    requiredSign: props.requiredSign,
    labelFromName,
  });
};

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  label,
  requiredSign,
  ...props
}: FormFieldProps<TFieldValues, TName>) => {
  const { control } = useFormContext<TFieldValues>();

  if (!props.name) {
    throw new Error(
      'The name property in the FormField component is required.'
    );
  }

  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller
        {...(props as ControllerProps<TFieldValues, TName>)}
        render={(values) => {
          return (
            <FormItem>
              <FormFieldWrapper
                context={values}
                render={props.render}
                name={props.name}
                requiredSign={requiredSign}
                label={label}
              />
              <FormMessage />
            </FormItem>
          );
        }}
        control={props.control ?? control}
      />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>');
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

export type UseFormFieldReturnType = ReturnType<typeof useFormField>;

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
);

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn('space-y-2 w-full', className)} {...props} />
    </FormItemContext.Provider>
  );
});

FormItem.displayName = 'FormItem';

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();

  return (
    <Label
      ref={ref}
      className={cn(error && 'text-destructive', className)}
      htmlFor={formItemId}
      {...props}
    />
  );
});
FormLabel.displayName = 'FormLabel';

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
});
FormControl.displayName = 'FormControl';

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  );
});
FormDescription.displayName = 'FormDescription';

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message ?? '') : children;

  if (!body) {
    return null;
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn('text-sm font-medium text-destructive', className)}
      {...props}
    >
      {body ?? ''}
    </p>
  );
});
FormMessage.displayName = 'FormMessage';

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
  useForm,
};
