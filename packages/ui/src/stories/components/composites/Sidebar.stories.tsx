import {
  Sidebar,
  SidebarItem
} from '@lifespikes/ui/components/composites';
import type { Meta, StoryObj } from '@storybook/react';
import { MixerHorizontalIcon } from '@radix-ui/react-icons';
import {
  BuildingIcon,
  CreditCardIcon,
  FileCheck,
  Folder,
  GripIcon,
  HomeIcon,
  LogOut,
  PercentCircle,
  SettingsIcon,
  UsersIcon
} from 'lucide-react';

export const sidebarItems: SidebarItem[] = [
  {
    label: 'Dashboard',
    href: '#',
    icon: HomeIcon,
    current: true
  },
  {
    label: 'Companies',
    href: '#',
    icon: BuildingIcon,
    children: [
      {
        label: 'List of Companies',
        href: '#',
        icon: MixerHorizontalIcon,
        current: false
      }
    ],
    current: false
  },
  { label: 'Employees', href: '#', icon: UsersIcon, current: false },
  {
    label: 'Time & Attendance',
    href: '#',
    icon: MixerHorizontalIcon,
    current: false
  },
  { label: 'Billing', href: '#', icon: CreditCardIcon, current: false },
  {
    label: 'Taxes & Compliances',
    href: '#',
    icon: PercentCircle,
    current: false
  },
  {
    label: 'Reports',
    href: '#',
    icon: Folder,
    current: false
  },
  {
    label: 'Apps',
    href: '#',
    icon: GripIcon,
    current: false
  },
  {
    label: 'Settings',
    href: '#',
    icon: SettingsIcon,
    current: false
  }
];

const meta = {
  title: 'Composites/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  args: {
    logo: 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
  }
} satisfies Meta<typeof Sidebar>;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    items: sidebarItems
  }
};

export const WithItemToBottomPosition: Story = {
  args: {
    items: [
      ...sidebarItems,
      {
        label: 'Logout',
        href: '#',
        icon: LogOut,
        current: false,
        toBottomPosition: true
      }
    ]
  }
};
export default meta;
