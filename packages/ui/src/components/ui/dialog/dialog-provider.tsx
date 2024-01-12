import * as React from 'react';
import { FC, PropsWithChildren, ReactNode, useState } from 'react';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@lifespikes/ui/components/ui/alert-dialog';
import { Button } from '@lifespikes/ui/components/ui';

export type DialogOptionsType = {
  title?: string;
  description?: string;
  cancelBtnContent?: string | ReactNode;
  confirmBtnContent?: string | ReactNode;
  hasConfirmBtn?: boolean;
  hasCancelBtn?: boolean;
  onConfirm?: () => void;
  onCancel?: () => void;
};

export interface DialogContextValue extends DialogOptionsType {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  setOptions: (opts: DialogOptionsType) => void;
}

export const DialogProviderContext = React.createContext<DialogContextValue>(
  null as unknown as DialogContextValue,
);

const DialogContent = () => {
  return (
    <DialogProviderContext.Consumer>
      {({
        description,
        title,
        cancelBtnContent,
        confirmBtnContent,
        onCancel,
        isOpen = false,
        onConfirm,
        setIsOpen,
        hasConfirmBtn = true,
        hasCancelBtn = true,
      }) => (
        <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>{title}</AlertDialogTitle>
              <AlertDialogDescription>{description}</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              {hasCancelBtn ? (
                <AlertDialogCancel
                  onClick={() => {
                    setIsOpen(false);
                    onCancel?.();
                  }}
                >
                  {cancelBtnContent ?? 'Cancel'}
                </AlertDialogCancel>
              ) : null}
              {hasConfirmBtn ? (
                <Button onClick={onConfirm}>
                  {confirmBtnContent ?? 'Confirm'}
                </Button>
              ) : null}
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </DialogProviderContext.Consumer>
  );
};

export const DialogProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<DialogOptionsType>({});

  return (
    <DialogProviderContext.Provider
      value={{
        isOpen,
        setIsOpen,
        ...options,
        setOptions,
      }}
    >
      <DialogContent />
      {children}
    </DialogProviderContext.Provider>
  );
};
