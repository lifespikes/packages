import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@lifespikes/ui/components';
import { CheckedState } from '@radix-ui/react-checkbox';

const meta: Meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    _containerProps: {
      className: 'flex items-center space-x-2 mt-8',
    },
    label: 'Checkbox Label',
    onCheckedChange: (e: CheckedState) => alert(e),
  },
};
