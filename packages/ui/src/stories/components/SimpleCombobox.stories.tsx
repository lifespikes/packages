import { Meta, StoryObj } from '@storybook/react';
import { SimpleCombobox } from '@lifespikes/ui/components';
import { useState } from 'react';

const meta = {
  title: 'Components/SimpleCombobox',
  component: SimpleCombobox,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof SimpleCombobox>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  {
    label: 'React',
    value: 'react'
  },
  {
    label: 'Vue',
    value: 'vue'
  },
  {
    label: 'Angular',
    value: 'angular'
  }
];

export const Example: Story = {
  args: {
    options,
  },
  render({ options }) {
    const [value, setValue] = useState('');
    return (
      <SimpleCombobox
        value={value}
        onSelect={setValue}
        options={options}
      />
    );
  }
};
