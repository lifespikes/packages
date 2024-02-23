import {
  Button,
  Credenza,
  CredenzaBody,
  CredenzaClose,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaTrigger,
} from '@lifespikes/ui/components/ui';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/CredenzaModal',
  component: Credenza,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Credenza>;

export default meta;

type Story = StoryObj<typeof meta>;

/// @ts-ignore
export const Example: Story = {
  render(args) {
    return (
      <Credenza {...args}>
        <CredenzaTrigger asChild>
          <Button>Open modal</Button>
        </CredenzaTrigger>
        <CredenzaContent>
          <CredenzaHeader>
            <CredenzaTitle>Credenza</CredenzaTitle>
            <CredenzaDescription>
              A responsive modal component for shadcn/ui.
            </CredenzaDescription>
          </CredenzaHeader>
          <CredenzaBody>
            This component is built using shadcn/ui&apos;s dialog and drawer
            component, which is built on top of Vaul.
          </CredenzaBody>
          <CredenzaFooter>
            <CredenzaClose asChild>
              <Button>Close</Button>
            </CredenzaClose>
          </CredenzaFooter>
        </CredenzaContent>
      </Credenza>
    );
  },
};
