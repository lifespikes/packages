import type { Meta, StoryObj } from '@storybook/react';

import {
  Button,
  TooltipButton,
} from '@lifespikes/ui/components/ui/button';
import { ucfirst } from '@lifespikes/ui/lib/utils';
import { DownloadCloud, Search } from 'lucide-react';
import * as React from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

const { Link, Destructive, Unstyled, Ghost, Secondary, Outline, Primary } =
  Object.fromEntries(
    [
      'link',
      'destructive',
      'outline',
      'ghost',
      'primary',
      'secondary',
      'unstyled',
    ].map((variant) => [
      ucfirst(variant),
      {
        args: {
          variant:
            variant === 'primary' ? 'default' : variant.toLocaleLowerCase(),
          children: variant,
        },
      },
    ]),
  );

export { Primary, Link, Destructive, Ghost, Outline, Secondary, Unstyled };

export const IconButton: Story = {
  render: () => {
    return (
      <Button size={'icon'}>
        <Search className="w-4 h-4" />
      </Button>
    );
  },
};

export const WithTooltip: Story = {
  render: () => {
    return <TooltipButton label="Ohh this is amazing">Hover</TooltipButton>;
  },
};
export const WithLeftIcon: Story = {
  args: {
    leftIcon: <DownloadCloud className="w-4 h-4" />,
    children: 'Download',
  },
};

export const WithRightIcon: Story = {
  args: {
    rightIcon: <DownloadCloud className="w-4 h-4" />,
    children: 'Download',
  },
};
