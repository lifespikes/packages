import type { Meta } from '@storybook/react';
import {
  DatePickerField,
  DropZoneField,
  Form,
  InputField,
  RadioGroupField,
  SelectField,
  SwitchField,
} from '@lifespikes/ui/components/ui';
import { useForm } from 'react-hook-form';
import { PropsWithChildren } from 'react';
import { AddressInputField } from '@lifespikes/ui/components/ui/form/fields/address-input-field';
import { StoryObj } from '@storybook/react';
import { ComboboxField } from '@lifespikes/ui/components/ui/form/fields/combobox-field';
import { DateRangeField } from '@lifespikes/ui/components/ui/form/fields/date-range-field';

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
  args: {
    children: (
      <>
        <InputField name="input_field" label="Input Field" />
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
        <DatePickerField name="date_picker_field" label="Date Picker Field" />
        <DateRangeField name="date_range_field" label="Date Range Field" />
        <SwitchField name="switch_field" label="Switch Field" />
        <AddressInputField
          apiKey="test_pub_bcc4a00c58adfb4b82d0f943135288d"
          name="address"
        />
        <ComboboxField
          name="combobox_field"
          label="Combobox Field"
          options={comboBoxOptions}
        />
      </>
    ),
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ExampleForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputFieldExample: Story = {
  args: {
    children: <InputField name="input_field" label="Input Field" />,
  },
};

export const SelectFieldExample: Story = {
  args: {
    children: (
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
    ),
  },
};

export const DatePickerFieldExample: Story = {
  args: {
    children: (
      <DatePickerField name="date_picker_field" label="Date Picker Field" />
    ),
  },
};

export const DateRangeFieldExample: Story = {
  args: {
    children: (
      <DateRangeField name="date_range_field" label="Date Range Field" />
    ),
  },
};

export const SwitchFieldExample: Story = {
  args: {
    children: <SwitchField name="switch_field" label="Switch Field" />,
  },
};

export const AddressInputFieldExample: Story = {
  args: {
    children: (
      <div className="h-10 16">
        <AddressInputField
          apiKey="test_pub_bcc4a00c58adfb4b82d0f943135288d"
          name="address"
        />
      </div>
    ),
  },
};

export const RadioGroupFieldExample: Story = {
  args: {
    children: (
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
    ),
  },
};

export const DropZoneFieldExample: Story = {
  parameters: {
    layout: '',
  },
  args: {
    children: (
      <div>
        <DropZoneField name="drop-zone" />
      </div>
    ),
  },
};

export const ComboboxFieldExample: Story = {
  parameters: {
    layout: 'centered',
  },
  args: {
    children: (
      <div>
        <ComboboxField
          name="combobox_field"
          label="Combobox Field"
          options={comboBoxOptions}
        />
      </div>
    ),
  },
};
