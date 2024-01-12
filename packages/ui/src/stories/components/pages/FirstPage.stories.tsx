import { Sidebar } from '@lifespikes/ui/components/composites';

import { sidebarItems } from '../composites/Sidebar.stories';

import { Tabs, TabsList, TabsTrigger } from '@lifespikes/ui/components/ui';
import { useDisclose } from '../../../hooks';

const meta = {
  title: 'Pages/SetupAccount',
  tags: ['autodocs']
};

export default meta;

export const FirstPage = () => {
  const modal = useDisclose();
  return (
    <div className="flex relative">
      <Sidebar
        modal={modal}
        items={sidebarItems}
        logo="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
      />
      <div className="flex-1 pl-72 bg-[#F6F8FF] pb-10">
        <div className="px-4">
          <div className="mt-10">
            <Tabs defaultValue="account-setup">
              <TabsList>
                <TabsTrigger value="account-setup">Account Setup</TabsTrigger>
              </TabsList>
              <TabsList>
                <TabsTrigger value="company-details">Company Details</TabsTrigger>
              </TabsList>
              <TabsList>
                <TabsTrigger value="documents">Documents</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};
