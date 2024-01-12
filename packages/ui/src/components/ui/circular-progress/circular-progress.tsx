import React, { FC } from 'react';
import { cn } from '@lifespikes/ui/lib/utils';

const cx = 145;
const cy = 145;
const r = 120;
const sw = 25;

export const circularProgressVariants = {
  default: {
    cx: cx / 3,
    cy: cy / 3,
    r: r / 3,
    sw: sw / 3,
    className: 'w-24 h-24',
  },
  sm: { cx: cx / 3, cy: cy / 3, r: r / 3, sw: sw / 3, className: 'w-24 h-24' },
  md: { cx: cx / 2, cy: cy / 2, r: r / 2, sw: sw / 2, className: 'w-36 h-36' },
  lg: {
    cx: cx / 1.5,
    cy: cy / 1.5,
    r: r / 1.5,
    sw: sw / 1.5,
    className: 'w-48 h-48',
  },
  xl: { cx, cy, r, sw, className: 'w-72 h-72' },
};

export interface CircularProgressProps {
  value: number;
  hasLabel?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  labelClassName?: string;
}

export const CircularProgress: FC<CircularProgressProps> = ({
  value,
  hasLabel = false,
  size,
  labelClassName,
  className,
}) => {
  const PI = 22 / 7;
  const values =
    circularProgressVariants[size ?? 'sm'] ?? circularProgressVariants.default;
  const circumference = 2 * PI * values.r;

  const offset = circumference - (value / 100) * circumference;

  return (
    <div className={cn('flex relative', values.className, className)}>
      <svg className={cn('transform -rotate-90', values.className)}>
        <circle
          cx={values.cx}
          cy={values.cy}
          r={values.r}
          strokeWidth={values.sw}
          stroke="currentColor"
          fill="transparent"
          className="text-gray-300"
        />
        <circle
          cx={values.cx}
          cy={values.cy}
          r={values.r}
          strokeWidth={values.sw}
          stroke="currentColor"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap={'round'}
          className="text-success bg-success-foreground"
        />
      </svg>
      {hasLabel ? (
        <span
          className={cn(
            'absolute flex self-center items-center justify-center h-full w-full',
            {
              'text-sm': size === 'sm',
              'text-md': size === 'md',
              'text-lg': size === 'lg',
              'text-xl': size === 'xl',
            },
            labelClassName,
          )}
        >
          <p>{value}%</p>
        </span>
      ) : null}
    </div>
  );
};
