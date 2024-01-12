import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Separator,
} from '@lifespikes/ui/components/ui';
import * as React from 'react';
import { FC, PropsWithChildren, ReactNode } from 'react';
import { cn } from '@lifespikes/ui/lib/utils';

export interface CardBadgeProps
  extends PropsWithChildren,
    React.HTMLAttributes<HTMLDivElement> {
  footer?: ReactNode;
  title: string;
  description?: string;
  badgeTxt?: string;
  buttons?: ReactNode;
  className?: string;
  header?: ReactNode;
  hasSeparator?: boolean;
  asChild?: boolean;
}

export const CardBadge: FC<CardBadgeProps> = ({
  children,
  title,
  badgeTxt,
  buttons,
  footer,
  header,
  hasSeparator = true,
  description,
  asChild = false,
  ...props
}) => {
  const CardComponent = asChild ? 'div' : Card;

  return (
    <CardComponent {...props}>
      <CardHeader
        className={cn('p-6 ', {
          'px-0': asChild,
        })}
      >
        {header ? header : null}
        <div className="items-center lg:flex lg:justify-between">
          <div className="mb-4 space-y-2 lg:mb-0">
            <div className="flex flex-col items-start space-y-2 lg:flex-row lg:items-center lg:space-x-2 lg:space-y-0">
              <CardTitle>{title}</CardTitle>
              {badgeTxt ? (
                <p className="rounded-md bg-amber-200 p-1 text-xs text-indigo-800">
                  {badgeTxt}
                </p>
              ) : null}
            </div>
            {description ? (
              <CardDescription>{description}</CardDescription>
            ) : null}
          </div>
          {buttons}
        </div>
      </CardHeader>
      <CardContent
        className={cn({
          'px-0': asChild,
        })}
      >
        {hasSeparator ? <Separator /> : null}
        {children}
      </CardContent>
      {footer ? <CardFooter>{footer}</CardFooter> : null}
    </CardComponent>
  );
};
