import * as React from 'react';
import { cn } from '@lifespikes/ui/lib/utils';

export const BadgeIcon: React.FC<React.HTMLAttributes<HTMLDivElement>> = (
  props,
) => {
  return (
    <div
      {...props}
      className={cn(
        'bg-primary text-primary-foreground p-2 rounded-full',
        props.className,
      )}
    />
  );
};

export const BadgeIconText: React.FC<
  React.HTMLAttributes<HTMLDivElement> & { text?: string }
> = ({ text, children, ...props }) => {
  return (
    <div
      className={cn('flex items-center space-x-4', props.className)}
      {...props}
    >
      <BadgeIcon className="bg-amber-400 text-white">{children}</BadgeIcon>
      <span>{text}</span>
    </div>
  );
};
