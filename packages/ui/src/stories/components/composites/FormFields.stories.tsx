import type { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react';
import {
  DatePickerField,
  DropZoneField,
  Form,
  Input,
  InputField,
  InputProps,
  PhoneInputField,
  RadioGroupField,
  SelectField,
  SwitchField,
  TextAreaField,
} from '@lifespikes/ui/components/ui';
import { useForm, useFormContext } from 'react-hook-form';
import { PropsWithChildren } from 'react';
import { AddressInputField } from '@lifespikes/ui/components/ui/form/fields/address-input-field';
import { ComboboxField } from '@lifespikes/ui/components/ui/form/fields/combobox-field';
import { DateRangeField } from '@lifespikes/ui/components/ui/form/fields/date-range-field';
import { cn } from '../../../lib/utils';
import * as React from 'react';

const comboBoxOptions = [
  {
    label: 'Option 1',
    value: 'option-1',
  },
  {
    label: 'Option 2',
    value: 'option-2',
  },
];

const ExampleForm = (props: PropsWithChildren) => {
  const form = useForm();

  return (
    <Form {...form}>
      <form className="max-w-2xl ">{props.children}</form>
    </Form>
  );
};

const meta = {
  title: 'Composites/FormFields',
  component: ExampleForm,
  render: (args) => <ExampleForm {...args} />,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ExampleForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputFieldExample: Story = {
  render: (args) => (
    <ExampleForm>
      <InputField name="input_field" label="Input Field" />
    </ExampleForm>
  ),
};

export const SelectFieldExample: Story = {
  render: (args) => (
    <ExampleForm>
      <SelectField
        name="select-field"
        label="Select Field"
        options={[
          {
            label: 'Option 1',
            value: 'option-1',
          },
          {
            label: 'Option 2',
            value: 'option-2',
          },
        ]}
      />
    </ExampleForm>
  ),
};

export const DatePickerFieldExample: Story = {
  render: (args) => (
    <ExampleForm>
      <DatePickerField name="date_picker_field" label="Date Picker Field" />
    </ExampleForm>
  ),
};

export const DateRangeFieldExample: Story = {
  render: (args) => (
    <ExampleForm>
      <DateRangeField name="date_range_field" label="Date Range Field" />
    </ExampleForm>
  ),
};

export const SwitchFieldExample: Story = {
  render: (args) => (
    <ExampleForm>
      <SwitchField name="switch_field" label="Switch Field" />
    </ExampleForm>
  ),
};

export const AddressInputFieldExample: Story = {
  render: (args) => (
    <ExampleForm>
      <AddressInputField
        apiKey="test_pub_bcc4a00c58adfb4b82d0f943135288d"
        name="address"
      />
    </ExampleForm>
  ),
};

export const RadioGroupFieldExample: Story = {
  render: (args) => (
    <ExampleForm>
      <div className="h-10 16 space-y-4">
        <RadioGroupField
          name="radio_group"
          label="Radio group vertical"
          options={[
            {
              label: 'Default',
              value: 'default',
            },

            {
              label: 'Comfortable',
              value: 'comfortable',
            },
            {
              label: 'Compact',
              value: 'compact',
            },
          ]}
        />

        <RadioGroupField
          name="radio_group_2"
          label="Radio group horizontal"
          orientation="horizontal"
          options={[
            {
              label: 'Default',
              value: 'default',
            },

            {
              label: 'Comfortable',
              value: 'comfortable',
            },
            {
              label: 'Compact',
              value: 'compact',
            },
          ]}
        />
      </div>
    </ExampleForm>
  ),
};

export const DropZoneFieldExample: Story = {
  parameters: {
    layout: '',
  },
  render: (args) => (
    <ExampleForm>
      <DropZoneField name="drop-zone" />
    </ExampleForm>
  ),
};

export const ComboboxFieldExample: Story = {
  parameters: {
    layout: 'centered',
  },
  render: (args) => (
    <ExampleForm>
      <ComboboxField
        name="combobox_field"
        label="Combobox Field"
        options={comboBoxOptions}
      />
    </ExampleForm>
  ),
};

export const TextAreaFieldExample: Story = {
  parameters: {
    layout: 'centered',
  },
  render: (args) => (
    <ExampleForm>
      <TextAreaField name="text_area_field" label="TextArea Field" />
    </ExampleForm>
  ),
};

const InputComponent = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <Input
      className={cn('rounded-e-lg rounded-s-none flex-1', className)}
      containerClassName="w-full"
      {...props}
      ref={ref}
    />
  )
);
InputComponent.displayName = 'InputComponent';

export const PhoneInputFieldExample: Story = {
  parameters: {
    layout: 'centered',
  },
  render: (args) => (
    <ExampleForm>
      <div className="w-[400px]">
        <PhoneInputField
          name="phone_input_field"
          label="Phone"
          _phoneInput={{
            inputComponent: InputComponent,
          }}
        />
      </div>
    </ExampleForm>
  ),
};

const Watcher = () => {
  const { watch } = useFormContext();

  return (
    <>
      When the mask is enabled, it updates with the unmasked value. value: "
      <strong>{watch('formated_inputField')}</strong>"
    </>
  );
};

export const FormattedInputFieldExample: Story = {
  render: (args) => (
    <ExampleForm>
      <Watcher />
      <InputField
        isMaskEnabled
        mask="00-0000000"
        name="formated_inputField"
        label="Formated Input Field"
        placeholder="12-1234567"
      />
    </ExampleForm>
  ),
};
