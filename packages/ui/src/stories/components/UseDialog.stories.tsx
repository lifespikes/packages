import {
  Button,
  DialogProvider,
  useDialog,
} from '@lifespikes/ui/components/ui';
import { Meta, StoryObj } from '@storybook/react';
import { FC, PropsWithChildren } from 'react';

const AlertTrigger: FC<PropsWithChildren> = ({ children }) => {
  const dialog = useDialog();
  return (
    <Button
      onClick={() => {
        dialog.alert(
          'Important Information!',
          'Does this employee physically reside in State of Florida (even if they work remotely)?',
          {
            cancelBtnContent: 'No',
            confirmBtnContent: 'Yes',
            onConfirm() {
              dialog.close();
            },
          },
        );
      }}
    >
      Trigger
    </Button>
  );
};

const meta = {
  title: 'Components/UseDialog',
  component: DialogProvider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DialogProvider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render() {
    return (
      <DialogProvider>
        <AlertTrigger />
      </DialogProvider>
    );
  },
};
