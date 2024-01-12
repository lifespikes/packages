import { RadioGroup, RadioGroupItem } from './radio-group';
import React, { FC, useId } from 'react';
import { Label } from '@lifespikes/ui/components/ui';
import { cn } from '@lifespikes/ui/lib/utils';

export interface DynamicRadioGroupOption {
  label: string;
  value: string;
  id?: string;
}

export interface DynamicRadioGroupProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroup> {
  options: DynamicRadioGroupOption[];
  orientation?: 'vertical' | 'horizontal';
}

const DynamicGroupItem: FC<DynamicRadioGroupOption> = ({
  value,
  label,
  ...props
}) => {
  const rcId = useId();
  const id = props.id ?? rcId;
  return (
    <div className="flex items-center space-x-2">
      <RadioGroupItem value={value} id={id} />
      <Label htmlFor={id}>{label}</Label>
    </div>
  );
};

export const DynamicRadioGroup: FC<DynamicRadioGroupProps> = ({
  options,
  orientation = 'vertical',
  ...props
}) => {
  return (
    <RadioGroup
      {...props}
      className={cn({
        'flex space-x-2': orientation === 'horizontal',
      })}
    >
      {options.map((option, idx) => (
        <DynamicGroupItem {...option} key={idx} />
      ))}
    </RadioGroup>
  );
};
