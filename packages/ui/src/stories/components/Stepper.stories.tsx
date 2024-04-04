import {
  Step,
  StepItem,
  Stepper,
  useStepper,
  Button,
} from '@lifespikes/ui/components/ui';
import { Meta, StoryObj } from '@storybook/react';

const steps = [
  { label: 'Step 1' },
  { label: 'Step 2' },
  { label: 'Step 3' },
] satisfies StepItem[];

const meta = {
  title: 'Components/Stepper',
  tags: ['autodocs'],
} satisfies Meta<typeof Stepper>;

export default meta;

type Story = StoryObj<typeof meta>;

const Footer = () => {
  const {
    nextStep,
    prevStep,
    resetSteps,
    hasCompletedAllSteps,
    isLastStep,
    isOptionalStep,
    isDisabledStep,
  } = useStepper();
  return (
    <>
      {hasCompletedAllSteps && (
        <div className="h-40 flex items-center justify-center my-4 border bg-secondary text-primary rounded-md">
          <h1 className="text-xl">Woohoo! All steps completed! 🎉</h1>
        </div>
      )}
      <div className="w-full flex justify-end gap-2">
        {hasCompletedAllSteps ? (
          <Button size="sm" onClick={resetSteps}>
            Reset
          </Button>
        ) : (
          <>
            <Button
              disabled={isDisabledStep}
              onClick={prevStep}
              size="sm"
              variant="secondary"
            >
              Prev
            </Button>
            <Button size="sm" onClick={nextStep}>
              {isLastStep ? 'Finish' : isOptionalStep ? 'Skip' : 'Next'}
            </Button>
          </>
        )}
      </div>
    </>
  );
};

export const Example: Story = {
  render: () => {
    return (
      <div>
        <div className="flex w-full flex-col gap-4">
          <Stepper initialStep={0} steps={steps}>
            {steps.map((stepProps, index) => {
              return (
                <Step key={stepProps.label} {...stepProps}>
                  <div className="h-40 flex items-center justify-center my-4 border bg-secondary text-primary rounded-md">
                    <h1 className="text-xl">Step {index + 1}</h1>
                  </div>
                </Step>
              );
            })}
            <Footer />
          </Stepper>
        </div>

        <a
          className="text-blue-500 mt-4"
          rel="noreferrer"
          target="_blank"
          href="https://github.com/damianricobelli/ui/tree/feat/stepper/apps/www/registry/new-york/example"
        >
          Find more examples here
        </a>
      </div>
    );
  },
};
