import { CheckboxPrimitive } from '@lifespikes/ui/components/ui';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/CheckBoxPrimitive',
  component: CheckboxPrimitive,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
} satisfies Meta<typeof CheckboxPrimitive>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {};
