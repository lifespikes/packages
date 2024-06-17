import * as React from 'react';
import { ReactNode, useState } from 'react';

import { cn, createMaskValue } from '@lifespikes/ui/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  rightIcon?: ReactNode;
  isMaskEnabled?: boolean;
  mask?: string;
  containerClassName?: string;
}

const MaskeableInput = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      rightIcon,
      className,
      containerClassName,
      type,
      isMaskEnabled = false,
      ...props
    },
    ref
  ) => {
    const [maskedValue, setMaskedValue] = useState<string>(
      createMaskValue((props.value || '') as string, props.mask || '').value
    );

    return (
      <input
        {...props}
        onChange={(e) => {
          const masked = createMaskValue(e.target.value, props.mask ?? '');

          setMaskedValue(masked.value);

          props.onChange?.({
            ...e,
            target: {
              ...e.target,
              value: masked.unmaskedValue,
            },
          });
        }}
        className={className}
        ref={ref}
        value={maskedValue}
      />
    );
  }
);

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      rightIcon,
      className,
      containerClassName,
      type,
      isMaskEnabled = false,
      ...props
    },
    ref
  ) => {
    const classNameVal =
      'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';

    return (
      <div className={cn('relative flex', containerClassName)}>
        {isMaskEnabled ? (
          <MaskeableInput {...props} className={classNameVal} />
        ) : (
          <input
            type={type}
            className={cn(classNameVal, className)}
            ref={ref}
            {...props}
          />
        )}

        {rightIcon ? (
          <div className="absolute right-2 top-0 flex items-center justify-center h-full">
            <div className="bg-background py-2">{rightIcon}</div>
          </div>
        ) : null}
      </div>
    );
  }
);

Input.displayName = 'Input';

MaskeableInput.displayName = 'MaskeableInput';

export { Input, MaskeableInput };
