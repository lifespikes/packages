import { DropZone } from '@lifespikes/ui/components/ui';
import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

const meta = {
  title: 'Components/DropZone',
  component: DropZone,
  tags: ['autodocs'],
} satisfies Meta<typeof DropZone>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render() {
    const [file, setFile] = useState<File | null>(null);
    return (
      <div>
        <DropZone value={file} onChange={setFile} />
      </div>
    );
  },
};
