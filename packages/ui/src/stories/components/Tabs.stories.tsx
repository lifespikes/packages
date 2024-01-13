import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@lifespikes/ui/components/ui';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: (args) => {
    return (
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="account">Company Details</TabsTrigger>
          <TabsTrigger value="password">Company Locations</TabsTrigger>
          <TabsTrigger value="settings">Billing</TabsTrigger>
          <TabsTrigger value="employees">Employees</TabsTrigger>
        </TabsList>
        <TabsContent value="account"></TabsContent>
        <TabsContent value="password"></TabsContent>
        <TabsContent value="settings"></TabsContent>
        <TabsContent value="employees"></TabsContent>
      </Tabs>
    );
  },
};

export const Test: Story = {
  render: (args) => {
    const Tab1 = () => {
      console.log('test');

      return null;
    };

    const Tab2 = () => {
      console.log('test');

      return null;
    };
    return (
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="account">Company Details</TabsTrigger>
          <TabsTrigger value="password">Company Locations</TabsTrigger>
          <TabsTrigger value="settings">Billing</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Tab1 />
        </TabsContent>
        <TabsContent value="password">
          <Tab2 />
        </TabsContent>
        <TabsContent value="settings"></TabsContent>
      </Tabs>
    );
  },
};
