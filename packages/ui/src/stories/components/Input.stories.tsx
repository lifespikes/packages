import { Input } from '@lifespikes/ui/components/ui';
import { QuestionMarkCircledIcon } from '@radix-ui/react-icons';
import { Meta, StoryObj } from '@storybook/react';
import { Mail } from 'lucide-react';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;


export const WithLeadingIcon: Story = {
  render: (args) => (
    <div className="relative rounded-md shadow-sm">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <Mail
          strokeWidth={1.2}
          className="h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
      </div>
      <Input type="text" className="pl-10" placeholder="example@gmail.com" />
    </div>
  ),
};

export const WithTrailingIcon: Story = {
  render: (args) => (
    <div className="relative mt-2 rounded-md shadow-sm">
      <Input
        type="text"
        name="account-number"
        id="account-number"
        className="block w-full rounded-md border-0 py-1.5 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="000-00-0000"
      />
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
        <QuestionMarkCircledIcon
          className="h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
      </div>
    </div>
  ),
};

export const InlineLeadingAndTrailingAddons: Story = {
  render: (args) => (
    <div className="relative mt-2 rounded-md shadow-sm">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <span className="text-gray-500 sm:text-sm">$</span>
      </div>
      <Input
        type="text"
        name="price"
        className="pl-7 pr-12"
        placeholder="0.00"
        aria-describedby="price-currency"
      />
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
        <span className="text-gray-500 sm:text-sm" id="price-currency">
          USD
        </span>
      </div>
    </div>
  ),
};
