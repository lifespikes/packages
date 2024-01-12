import { Meta, StoryObj } from '@storybook/react';
import { Button, SimpleCard } from '@lifespikes/ui/components/ui';

const meta = {
  title: 'Components/SimpleCard',
  component: SimpleCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SimpleCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: (args) => {
    return (
      <SimpleCard
        {...args}
        title="An example"
        description="Heres a card example using Shadcn-ui"
        content={<p>Some content</p>}
        footer={
          <div className="space-x-2">
            <Button className="btn btn-primary">Cancel</Button>
            <Button className="btn btn-primary">Save</Button>
          </div>
        }
      ></SimpleCard>
    );
  },
};
