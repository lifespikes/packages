import {
  ModalAlert,
  ModalAlertDescription,
  ModalAlertTitle
} from '@lifespikes/ui/components/ui/modal-alert/modal-alert';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/ModalAlert',
  component: ModalAlert,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof ModalAlert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Info: Story = {
  render: (args) => (
    <ModalAlert {...args}>
      <ModalAlertTitle>Are you Sure?</ModalAlertTitle>
      <ModalAlertDescription>
        You’ll have to enter this employee’s personal, tax and bank account
        details yourself. We recommend letting them do it.
      </ModalAlertDescription>
    </ModalAlert>
  ),
  args: {
    variant: 'info'
  }
};

export const Warning: Story = {
  render: (args) => (
    <ModalAlert {...args}>
      <ModalAlertTitle>Contratulations!</ModalAlertTitle>
      <ModalAlertDescription>
        hi
      </ModalAlertDescription>
    </ModalAlert>
  ),
  args: {
    variant: 'success'
  }
};

export const Error: Story = {
  render: (args) => (
    <ModalAlert {...args}>
      <ModalAlertTitle>Are you Sure?</ModalAlertTitle>
      <ModalAlertDescription>
        You’ll have to enter this employee’s personal, tax and bank account
        details yourself. We recommend letting them do it.
      </ModalAlertDescription>
    </ModalAlert>
  ),
  args: {
    variant: 'error'
  }
};
