import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@lifespikes/ui/components/ui';
import { ucfirst } from '@lifespikes/ui/lib/utils';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;

const { Default, Secondary, Destructive, Outline } = Object.fromEntries(
  ['default', 'secondary', 'destructive', 'outline'].map((variant) => [
    ucfirst(variant),
    {
      args: {
        variant: variant.toLocaleLowerCase(),
        children: variant,
      },
    },
  ]),
);

export { Default, Secondary, Destructive, Outline };
