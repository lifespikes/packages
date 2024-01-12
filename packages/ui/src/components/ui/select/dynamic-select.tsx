import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@lifespikes/ui/components/ui';
import { FC, FocusEventHandler, PropsWithoutRef } from 'react';
import { cn } from '@lifespikes/ui/lib/utils';

export interface DynamicSelectOption {
  label: string;
  value: string;
}

export interface DynamicSelectProps
  extends Omit<PropsWithoutRef<typeof Select>, 'value'> {
  label?: string;
  selectLabel?: string;
  options?: DynamicSelectOption[];
  onValueChange?: (value: string) => void;
  value?: string;
  onFocus?: FocusEventHandler<HTMLDivElement>;
}

export const DynamicSelect: FC<DynamicSelectProps> = ({
  options = [],
  label,
  selectLabel,
  value,
  onValueChange,
  onFocus,
  ...props
}) => {
  return (
    <Select value={value} onValueChange={onValueChange} {...props}>
      <SelectTrigger
        className={cn(
          'hover:text-foreground w-full text-left font-normal',
          !value && 'text-muted-foreground',
        )}
      >
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent onFocus={onFocus}>
        <SelectGroup>
          <SelectLabel>{label ?? selectLabel}</SelectLabel>
          {options?.map((option, idx) => (
            <SelectItem value={option.value} key={idx}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
