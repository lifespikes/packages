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

const Component = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <DatePicker selectedDate={date} onChangeDate={(date) => setDate(date)} />
  );
};

export const Example: Story = {
  render: (args) => {
    return <Component />;
  },
};
