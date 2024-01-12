import React, { FC, PropsWithChildren, ReactNode } from 'react';
import {
  Dialog,
  DialogContent,
  DialogContentProps,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@lifespikes/ui/components/ui';
import { ClosableProps } from '@lifespikes/ui/types/global';

export interface SimpleDialogProps
  extends PropsWithChildren,
    ClosableProps,
    DialogContentProps {
  title?: string;
  description?: string;
  trigger?: ReactNode;
}

export const SimpleDialog: FC<SimpleDialogProps> = ({
  title,
  isOpen,
  children,
  onOpen,
  onClose,
  description,
  trigger,
  ...props
}) => {
  const handleOpenChange = (val: boolean) => {
    val ? onOpen?.() : onClose?.();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent
        className="max-w-4xl"
        onOverlayClick={() => {
          props.onOverlayClick?.();
          handleOpenChange(false);
        }}
        {...props}
      >
        <DialogHeader>
          <DialogTitle className="text-primary">{title}</DialogTitle>
          {description ? (
            <DialogDescription>{description}</DialogDescription>
          ) : null}
        </DialogHeader>
        {children}
      </DialogContent>
      {trigger ? <DialogTrigger asChild>{trigger}</DialogTrigger> : null}
    </Dialog>
  );
};
