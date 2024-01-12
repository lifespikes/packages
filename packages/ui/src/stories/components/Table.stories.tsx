import type { Meta, StoryObj } from '@storybook/react';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableVariantProps,
} from '@lifespikes/ui/components/ui/table';
import { FC } from 'react';

export const Simple: FC<TableVariantProps> = ({ variant }) => {
  return (
    <div>
      <Table variant={variant}>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow variant={variant}>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
          <TableRow variant={variant}>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

const meta = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  render(args) {
    return <Simple variant={args.variant} />;
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Table>;

export default meta;

export const stripped: Story = {
  render: () => <Simple variant="striped" />,
};

export const unstyled: Story = {
  render: () => <Simple variant="unstyled" />,
};

type Story = StoryObj<typeof meta>;
