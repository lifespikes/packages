import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@lifespikes/ui/components/ui';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => (
    <Avatar>
      <AvatarFallback>SM</AvatarFallback>
      <AvatarImage src={'https://i.pravatar.cc/100'} />
    </Avatar>
  ),
};
