import { CheckboxPrimitive, Label } from '@lifespikes/ui/components/ui';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => {
    return (
      <div>
        <div className="flex items-center space-x-2">
          <CheckboxPrimitive id="terms" />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
      </div>
    );
  },
};
