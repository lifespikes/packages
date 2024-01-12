import { SimpleStepper } from '@lifespikes/ui/components/ui/stepper/simple-stepper';
import { StepProps } from '@lifespikes/ui/components/ui';
import { Meta, StoryObj } from '@storybook/react';

const steps = [
  { label: 'Step 1', description: 'Step 1 directions', isCompletedStep: true },
  { label: 'Step 2', description: 'Step 2 directions', isCompletedStep: false },
  { label: 'Step 2', description: 'Step 2 directions', isCompletedStep: true },
] satisfies StepProps[];

const meta = {
  title: 'Components/SimpleStepper',
  tags: ['autodocs'],
  component: SimpleStepper,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SimpleStepper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: (args) => {
    return (
      <div className="flex h-96 w-96 justify-start">
        <div className="h-10 w-16">
          <SimpleStepper steps={steps} isVertical={args.isVertical} />
        </div>
      </div>
    );
  },
  args: {
    steps: steps,
    isVertical: true,
  },
};
