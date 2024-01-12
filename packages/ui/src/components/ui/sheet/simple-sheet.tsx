import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
  SheetTrigger,
  Button,
} from '@lifespikes/ui/components/ui';
import { ReactNode } from 'react';

export type SimpleSheetProps = {
  children: ReactNode;
  trigger: ReactNode;

  title: string;
  description?: string;

  side?: 'top' | 'right' | 'bottom' | 'left';

  close?: ReactNode;
};

export const SimpleSheet = ({
  side,
  children,
  trigger,
  title,
  description,
  close,
}: SimpleSheetProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent side={side}>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>{description}</SheetDescription>
        </SheetHeader>
        <div className="py-4">{children}</div>
        <SheetFooter>
          <SheetClose asChild>
            {close ?? <Button type="submit">Save changes</Button>}
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
