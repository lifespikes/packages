import { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from '@lifespikes/ui/components/ui/date-picker';
import { useState } from 'react';

const meta = {
  title: 'Components/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DatePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: (args) => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return (
      <DatePicker selectedDate={date} onChangeDate={(date) => setDate(date)} />
    );
  },
};
