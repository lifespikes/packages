import { Steps, Step, StepProps } from '@lifespikes/ui/components/ui';
import { Meta, StoryObj } from '@storybook/react';

const steps = [
  { label: 'Step 1', description: 'Step 1 directions', isCompletedStep: true },
  { label: 'Step 2', description: 'Step 2 directions', isCompletedStep: false },
  { label: 'Step 2', description: 'Step 2 directions', isCompletedStep: true },
] satisfies StepProps[];

const meta = {
  title: 'Components/Stepper',
  tags: ['autodocs'],
} satisfies Meta<typeof Steps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
  render: () => {
    return (
      <div className="flex h-96 20">
        <div className="h-10">
          <Steps isVertical={true}>
            {steps.map((step, index) => (
              <Step index={index} key={index} {...step} />
            ))}
          </Steps>
        </div>
      </div>
    );
  },
};

export const Horizontal: Story = {
  render: () => {
    return (
      <div>
        <div className="flex h-36 w-10">
          <div className="h-40">
            <Steps isVertical={false}>
              {steps.map((step, index) => (
                <Step index={index} key={index} {...step} />
              ))}
            </Steps>
          </div>
        </div>
      </div>
    );
  },
};
