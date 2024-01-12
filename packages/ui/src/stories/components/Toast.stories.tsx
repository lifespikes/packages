import {
  Button,
  Toast,
  ToastAction,
  Toaster,
  useToast,
} from '@lifespikes/ui/components/ui';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  render() {
    const toast = useToast();

    return (
      <>
        <Toaster />
        <Button
          variant="outline"
          onClick={() => {
            toast.default({
              description: 'Your message has been sent.',
            });
          }}
        >
          Show Toast
        </Button>
      </>
    );
  },
};

export const WithTitle: Story = {
  render() {
    const toast = useToast();

    return (
      <>
        <Toaster />
        <Button
          variant="outline"
          onClick={() => {
            toast.default({
              title: 'Uh oh! Something went wrong.',
              description: 'There was a problem with your request.',
            });
          }}
        >
          Show Toast
        </Button>
      </>
    );
  },
};
export const WithAction: Story = {
  render() {
    const toast = useToast();

    return (
      <>
        <Toaster />
        <Button
          variant="outline"
          onClick={() => {
            toast.default({
              title: 'Uh oh! Something went wrong.',
              description: 'There was a problem with your request.',
              action: <ToastAction altText="Try again">Try again</ToastAction>,
            });
          }}
        >
          Show Toast
        </Button>
      </>
    );
  },
};

export const Destructive: Story = {
  render() {
    const toast = useToast();
    return (
      <>
        <Toaster />
        <Button
          variant="outline"
          onClick={() => {
            toast.destructive({
              title: 'Uh oh! Something went wrong.',
              description: 'There was a problem with your request.',
              action: <ToastAction altText="Try again">Try again</ToastAction>,
            });
          }}
        >
          Show Toast
        </Button>
      </>
    );
  },
};

export const Success: Story = {
  render() {
    const toast = useToast();
    return (
      <>
        <Toaster />
        <Button
          variant="outline"
          onClick={() => {
            toast.success({
              title: 'Amazing!',
              description: 'The payment was successfully',
              action: <ToastAction altText="Try again">Ok!</ToastAction>,
            });
          }}
        >
          Show Toast
        </Button>
      </>
    );
  },
};
