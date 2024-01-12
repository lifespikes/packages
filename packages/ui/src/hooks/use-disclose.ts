import { useState } from 'react';

export const useDisclose = (initState?: boolean) => {
  const [isOpen, setIsOpen] = useState(initState || false);
  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };
  const onToggle = () => {
    setIsOpen(!isOpen);
  };
  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
    setIsOpen,
  };
};

export type UseDiscloseReturn = ReturnType<typeof useDisclose>;
