import * as React from 'react';
import { FC, Fragment, ReactNode } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs';
import {
  ScrollArea,
  ScrollBar,
  Skeleton,
} from '@lifespikes/ui/components/ui';
import { cn } from '@lifespikes/ui/lib/utils';

export type DynamicTab = {
  id: string;
  label?: string;
  content: ReactNode;
  index?: number;
};
export interface DynamicTabsProps
  extends React.ComponentPropsWithoutRef<typeof Tabs> {
  tabs: DynamicTab[];
}

export const DynamicTabs: FC<DynamicTabsProps> = ({ tabs, ...props }) => {
  const hasTab = tabs.find((tab) => tab.id === props.value);

  return (
    <Tabs {...props} className={cn('w-full', props.className)}>
      <ScrollArea className="mb-10">
        <TabsList className="flex w-max">
          {tabs.map((tab) => (
            <TabsTrigger key={tab.id} value={tab.id}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      {hasTab ? (
        tabs.map((tab) => (
          <TabsContent key={tab.id} className="max-w-full" value={tab.id}>
            {tab.content}
          </TabsContent>
        ))
      ) : (
        <div className="flex items-center space-y-4 w-full flex-col">
          {Array.from({ length: 10 }).map((a, i) => (
            <Fragment key={i}>
              <Skeleton className="h-4 w-[100%]" />
            </Fragment>
          ))}
        </div>
      )}
    </Tabs>
  );
};
