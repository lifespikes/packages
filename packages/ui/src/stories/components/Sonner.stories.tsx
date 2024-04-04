import { Button, SonnerToaster } from '@lifespikes/ui/components/ui';
import { Meta, StoryObj } from '@storybook/react';
import { toast } from 'sonner';

const meta = {
  title: 'Components/Sonner',
  tags: ['autodocs'],
} satisfies Meta<typeof SonnerToaster>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => {
    const handleButtonClick = () => {
      toast('Hello world');
    };
    return (
      <div>
        <SonnerToaster />

        <Button onClick={handleButtonClick}>Click me</Button>
      </div>
    );
  },
};
