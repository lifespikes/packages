import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@lifespikes/ui/components/ui';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  render: (args) => {
    return (
      <Dialog {...args}>
        <DialogTrigger>
          <Button>Click me!</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog</DialogTitle>
            <DialogDescription>Dialog description.</DialogDescription>
          </DialogHeader>
          <div>Your content goes here</div>
        </DialogContent>
      </Dialog>
    );
  },
};

export const Example: Story = {
  render: (args) => {
    const [open, setOpen] = React.useState(false);
    return (
      <Dialog {...args} open={open} onOpenChange={setOpen}>
        <DialogTrigger>
          <Button>Click me!</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Hello World</DialogTitle>
            <DialogDescription>
              This is a dialog example component.
            </DialogDescription>
          </DialogHeader>
          <div>
            <p>
              It was made to showcase the Dialog component. Please, select an
              action from the &lt;DialogFooter&gt;.
            </p>
          </div>
          <DialogFooter>
            <Button onClick={() => setOpen(false)} variant={'outline'}>
              Close
            </Button>
            <Button>Continue</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
};
