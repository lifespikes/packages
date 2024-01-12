import * as React from 'react';
import { InputHTMLAttributes, ReactNode } from 'react';
import InputMask from 'react-input-mask';

import { cn } from '@lifespikes/ui/lib/utils';

export interface InputProps
  extends Omit<
    /** @ts-ignore */
    React.ComponentPropsWithoutRef<typeof InputMask>,
    'mask' | 'children' | 'contentEditable' | 'contextType'
  > {
  rightIcon?: ReactNode;
  isMaskEnabled?: boolean;
  mask?: string;
}

const CustomInput = React.forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return <input {...props} ref={ref} />;
});

CustomInput.displayName = 'CustomInput';

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ rightIcon, className, type, isMaskEnabled = false, ...props }, ref) => {
    return (
      <div className="relative flex">
        {isMaskEnabled ? (
          <InputMask {...props} mask={props.mask ?? '99/99/99'} maskChar={null}>
            {
              ((props: any) => (
                <CustomInput
                  type={type}
                  className={cn(
                    'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
                    className,
                  )}
                  {...props}
                  ref={ref}
                />
              )) as any
            }
          </InputMask>
        ) : (
          <input
            type={type}
            className={cn(
              'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
              className,
            )}
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
  },
);

Input.displayName = 'Input';

export { Input };
