import { useDisclose } from '@lifespikes/ui/hooks';
import {
  Button,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
  VStack
} from '@lifespikes/ui/components/ui';
import { Check, ChevronsUpDown, LucideProps } from 'lucide-react';
import { cn } from '@lifespikes/ui/lib/utils';
import { ComponentPropsWithoutRef, HTMLAttributes } from 'react';
import { PopoverContentProps, PopoverProps, PopoverTriggerProps } from '@radix-ui/react-popover';

type ComboboxOption = {
  label: string;
  value: string;
};

export type ComboboxOptions = ComboboxOption[];

export type SimpleComboboxProps = PopoverProps & {
  options: ComboboxOptions;
  value?: string;
  onSelect?: (value: string) => void;
  _popOverTriggerProps?: PopoverTriggerProps;
  _buttonProps?: ComponentPropsWithoutRef<typeof Button>;
  _popOverContentProps?: PopoverContentProps;
  _commandProps?: ComponentPropsWithoutRef<typeof Command>;
  _commandInputProps?: ComponentPropsWithoutRef<typeof CommandInput>;
  _commandEmptyProps?: ComponentPropsWithoutRef<typeof CommandEmpty>;
  _commandGroupProps?: ComponentPropsWithoutRef<typeof CommandGroup>;
  _commandItemProps?: ComponentPropsWithoutRef<typeof CommandItem>;
  _checkIconProps?: LucideProps;
  _upDownIconProps?: LucideProps;
  _containerProps?: HTMLAttributes<HTMLDivElement>;
};

const SimpleCombobox = ({
  onSelect,
  options = [],
  value = '',
  _popOverTriggerProps,
  _buttonProps,
  _popOverContentProps,
  _commandProps,
  _commandInputProps,
  _commandEmptyProps,
  _commandGroupProps,
  _commandItemProps,
  _checkIconProps,
  _upDownIconProps,
  _containerProps,
  ...props
}: SimpleComboboxProps) => {
  const { isOpen, setIsOpen } = useDisclose();

  return (
    <div
      {..._containerProps}
      className={cn('w-auto', _containerProps?.className)}
    >
      <Popover {...props} open={isOpen} onOpenChange={setIsOpen}>
        <VStack>
          <PopoverTrigger asChild {..._popOverTriggerProps}>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={isOpen}
              className="w-auto justify-between"
              {..._buttonProps}
            >
              {value
                ? options?.find((option) => option.value === value)?.label ??
                  'Select an option'
                : 'Select an option'}
              <ChevronsUpDown
                className="ml-2 h-4 w-4 shrink-0 opacity-50"
                {..._upDownIconProps}
              />
            </Button>
          </PopoverTrigger>
        </VStack>
        <PopoverContent className="w-auto p-0" {..._popOverContentProps}>
          <Command {..._commandProps}>
            <CommandInput
              placeholder="Search options..."
              {..._commandInputProps}
            />
            <CommandEmpty {..._commandEmptyProps}>
              No results found
            </CommandEmpty>
            <CommandGroup {..._commandGroupProps}>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value + ' ' + option.label}
                  className="w-auto text-left"
                  onSelect={() => {
                    onSelect && onSelect(option.value);
                    setIsOpen(false);
                  }}
                  {..._commandItemProps}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === option.value ? 'opacity-100' : 'opacity-0',
                    )}
                    {..._checkIconProps}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export { SimpleCombobox };
