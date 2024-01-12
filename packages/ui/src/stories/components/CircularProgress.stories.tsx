import { CircularProgress } from '@lifespikes/ui/components/ui/circular-progress';
import { StoryObj, Meta } from '@storybook/react';

const meta = {
  title: 'Components/CircularProgress',
  component: CircularProgress,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CircularProgress>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: (args) => <CircularProgress {...args} />,
  args: {
    value: 75,
    size: 'lg',
    hasLabel: true,
  },
};
