import { PhoneInput } from '@lifespikes/ui/components/ui';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/PhoneInput',
  component: PhoneInput,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
} satisfies Meta<typeof PhoneInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: (args) => <PhoneInput />,
};
