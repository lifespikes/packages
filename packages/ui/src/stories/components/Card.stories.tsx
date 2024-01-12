import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@lifespikes/ui/components/ui';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>An example</CardTitle>
        <CardDescription>Heres a card example using Shadcn-ui</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Some content</p>
      </CardContent>
      <CardFooter className="space-x-2">
        <Button>Cancel</Button>
        <Button>Save</Button>
      </CardFooter>
    </Card>
  ),
};
