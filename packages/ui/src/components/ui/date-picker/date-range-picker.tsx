import React, { FC } from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

import { cn } from '@lifespikes/ui/lib/utils';
import { Button } from '@lifespikes/ui/components/ui/button';
import { Calendar } from '@lifespikes/ui/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@lifespikes/ui/components/ui/popover';
import { DateRange, DayPickerRangeProps, SelectRangeEventHandler } from 'react-day-picker';

export type DateRangePickerProps = Omit<DayPickerRangeProps, 'mode'> & {
  selectedDate?: DateRange;
  onChangeDate?: SelectRangeEventHandler;
  triggerClassName?: string;
  triggerPlaceholder?: string;
};

export const DateRangePicker: FC<DateRangePickerProps> = ({
  selectedDate,
  onChangeDate,
  triggerPlaceholder,
  ...props
}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            !selectedDate && 'text-muted-foreground',
            props.triggerClassName,
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {selectedDate?.from ? (
            selectedDate.to ? (
              <>
                {format(selectedDate.from, 'LLL dd, y')} -{' '}
                {format(selectedDate.to, 'LLL dd, y')}
              </>
            ) : (
              format(selectedDate.from, 'LLL dd, y')
            )
          ) : (
            <span>
              {triggerPlaceholder ? triggerPlaceholder : 'Pick a Date Range'}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          {...props}
          mode="range"
          selected={selectedDate}
          onSelect={onChangeDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};
