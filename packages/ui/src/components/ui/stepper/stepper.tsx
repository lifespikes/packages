import * as React from 'react';
import { HTMLAttributes, PropsWithChildren } from 'react';
import { cn } from '@lifespikes/ui/lib/utils';
import type { Scope } from '@radix-ui/react-context';
import { createContextScope } from '@radix-ui/react-context';
import { Button, Label, Separator } from '@lifespikes/ui/components/ui';
import { Check } from 'lucide-react';

const STEPS_NAME = 'Steps';

type ScopedProps<P> = P & { __scopeSteps?: Scope };
const [createStepperContext] = createContextScope(STEPS_NAME);

type StepsContextValue = StepsProps;

export const [StepsProvider, useStepsContext] =
  createStepperContext<StepsContextValue>(STEPS_NAME);
export const useStepperContext = (
  consumerName: string,
  scope: Scope<StepsContextValue | undefined>
) => useStepsContext(consumerName, scope);

// Steps
export type StepsProps = PropsWithChildren<{
  isVertical?: boolean;
  className?: string;
}>;

export const Steps = React.forwardRef<HTMLDivElement, StepsProps>(
  (props: ScopedProps<StepsProps>, ref: React.ForwardedRef<HTMLDivElement>) => {
    const { __scopeSteps, children, className } = props;

    const childArr = React.Children.toArray(children);

    const stepCount = childArr.length;

    return (
      <StepsProvider scope={__scopeSteps} {...props}>
        <div
          ref={ref}
          className={cn(
            'items-center h-full flex justify-between',
            props.isVertical ? 'flex-col space-y-2' : 'flex-row space-x-2',
            className
          )}
        >
          {React.Children.map(children, (child, i) => {
            const isCompletedStep =
              React.isValidElement(child) && child.props.isCompletedStep;
            const isLastStep = i === stepCount - 1;

            const stepProps = {
              index: i,
              isCompletedStep,
              isLastStep,
            };

            if (React.isValidElement(child)) {
              return React.cloneElement(child, stepProps);
            }

            return null;
          })}
        </div>
      </StepsProvider>
    );
  }
);
Steps.displayName = 'Steps';

export type StepProps = HTMLAttributes<HTMLDivElement> &
  StepLabelProps &
  Pick<StepStatus, 'isCompletedStep'>;

type StepStatus = {
  index: number;
  isCompletedStep: boolean;
  isLastStep?: boolean;
};

export type StepAndStatusProps = StepProps & StepStatus;

export const Step = React.forwardRef<HTMLDivElement, StepAndStatusProps>(
  (
    props: ScopedProps<StepAndStatusProps>,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const {
      __scopeSteps,
      description,
      index,
      isCompletedStep,
      isLastStep,
      label,
    } = props;

    const { isVertical } = useStepperContext(STEPS_NAME, __scopeSteps);

    return (
      <>
        <div ref={ref}>
          <div
            className={cn(
              'items-center flex',
              isVertical ? 'flex-col space-y-2' : 'flex-row space-x-2'
            )}
          >
            <div>
              <Button
                data-highlighted={isCompletedStep}
                size={'icon'}
                className={
                  'data-[highlighted=true]:bg-success data-[highlighted=true]:text-success-foreground'
                }
                variant="outline"
              >
                {isCompletedStep ? <Check className="w-4 h-4" /> : index + 1}
              </Button>
            </div>
            <div
              className={cn('flex flex-col space-y-2', {
                'text-center': isVertical,
              })}
            >
              <Label>{label}</Label>
              {description ? (
                <Label className={'text-muted-foreground'}>{description}</Label>
              ) : null}
            </div>
          </div>
        </div>
        {isLastStep ? null : (
          <Separator
            data-highlighted={isCompletedStep}
            className={cn(
              'flex self-auto data-[highlighted=true]:border-success border-2 rounded-md',
              {
                'min-h-[20px]': isVertical,
                'min-w-[20px]': !isVertical,
              }
            )}
            orientation={isVertical ? 'vertical' : 'horizontal'}
          />
        )}
      </>
    );
  }
);

Step.displayName = 'Step';

// StepLabel
export type StepLabelProps = {
  label: string | React.ReactNode;
  description?: string | React.ReactNode;
};
