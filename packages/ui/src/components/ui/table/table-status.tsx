import { cn } from '@lifespikes/ui/lib/utils';
import React, { FC, PropsWithChildren } from 'react';

export type TableStatusType = 'success' | 'warning' | 'error';

export const TableStatus: FC<
  PropsWithChildren & { value: TableStatusType; className?: string }
> = (props) => {
  const { value, className } = props;
  const badgeClassname = {
    success: 'bg-green-100 border-green-300',
    warning: 'bg-yellow-100 border-yellow-300',
    error: 'bg-red-100 border-red-300',
  };

  const dotClassname = {
    success: 'bg-green-400',
    warning: 'bg-yellow-400',
    error: 'bg-red-400',
  };

  return (
    <div
      className={cn(
        'px-2 py-0.5 w-fit rounded-full flex items-center border space-x-1',
        badgeClassname[value],
        className,
      )}
    >
      <div className={cn('w-2 h-2 rounded-full', dotClassname[value])} />
      <p className="text-gray-700">{props.children}</p>
    </div>
  );
};
