import React, { FC } from 'react';
import { cn } from '@lifespikes/ui/lib/utils';
import { SizeType } from '@lifespikes/ui/types/global';
import { cva } from 'class-variance-authority';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  variant?: SizeType;
}

const headingVariants = cva(
  'font-semibold leading-none tracking-tight text-primary',
  {
    variants: {
      variant: {
        xxl: 'text-2xl',
        xl: 'text-xl',
        lg: 'text-lg',
        md: 'text-md',
        sm: 'text-sm',
        xs: 'text-xs',
      },
    },
  },
);

export const Heading: FC<HeadingProps> = ({ variant = 'xl', ...props }) => (
  <h1
    {...props}
    className={cn(
      headingVariants({
        variant: variant,
      }),
      props.className,
    )}
  >
    {props.children}
  </h1>
);

export const Flex: FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  return <div {...props} className={cn('flex', props.className)} />;
};

export const Grid: FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <div {...props} className={cn('grid gap-y-2 gap-x-2', props.className)} />
  );
};

export const HStack: FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <div
      {...props}
      className={cn('flex md:space-x-4 flex-row', props.className)}
    />
  );
};

export const VStack: FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <div
      {...props}
      className={cn('flex space-y-4 flex-col', props.className)}
    />
  );
};

export const InputGroup: FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <div
      {...props}
      className={cn(
        'grid lg:grid-cols-2 gap-y-4 lg:gap-y-0 lg:gap-x-4',
        props.className,
      )}
    />
  );
};

export const ButtonGroup: FC<React.HTMLAttributes<HTMLDivElement>> = (
  props,
) => {
  return <div {...props} className={cn('flex space-x-2', props.className)} />;
};
