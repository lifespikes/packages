import * as React from 'react';
import { ReactNode } from 'react';
import { Slot, Slottable } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@lifespikes/ui/lib/utils';
import LoadingIcon from '@lifespikes/ui/components/ui/icon/loading-icon';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        unstyled: '',
        'default-light': `bg-brand-purple-50 text-brand-purple-500 hover:bg-brand-purple-100`,
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-8 w-8 rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;

  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      leftIcon,
      rightIcon,
      isLoading,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';

    const baseProps = {
      className: cn(buttonVariants({ variant, size, className })),
      ref,
      type: 'button' as React.ButtonHTMLAttributes<HTMLButtonElement>['type'],
    };

    if (isLoading) {
      return (
        <Comp
          {...baseProps}
          {...props}
          className={cn(baseProps.className, 'justify-center')}
          disabled
          ref={ref}
        >
          <LoadingIcon />
        </Comp>
      );
    }

    if (!leftIcon && !rightIcon) {
      return <Comp {...baseProps} {...props} ref={ref} />;
    }

    return (
      <Comp
        {...baseProps}
        {...props}
        className={cn(baseProps.className, 'space-x-2')}
        ref={ref}
      >
        <div className="flex items-center space-x-2">
          <div>{leftIcon}</div>
          <div>
            <Slottable {...props}>{props.children}</Slottable>
          </div>
          <div>{rightIcon}</div>
        </div>
      </Comp>
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
