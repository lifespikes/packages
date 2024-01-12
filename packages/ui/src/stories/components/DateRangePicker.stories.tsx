import { Meta, StoryObj } from '@storybook/react';
import { DateRangePicker } from '@lifespikes/ui/components/ui/date-picker/date-range-picker';
import { useState } from 'react';
import { DateRange } from 'react-day-picker';

const meta = {
  title: 'Components/DateRangePicker',
  component: DateRangePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DateRangePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: (args) => {
    const [date, setDate] = useState<DateRange | undefined>({
      from: new Date(),
      to: new Date(),
    });
    return (
      <DateRangePicker
        selectedDate={date}
        onChangeDate={(date) => setDate(date)}
      />
    );
  },
};
