import React, {
  FC,
  ForwardRefExoticComponent,
  Fragment,
  HTMLAttributes,
  ReactNode,
  useImperativeHandle,
  useMemo
} from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@lifespikes/ui/components';
import { cn, getUniqueId } from '@lifespikes/ui/lib/utils';
import { useDisclose, UseDiscloseReturn } from '@lifespikes/ui/hooks';

export interface SidebarItem {
  id?: string;
  label: string;
  onClick?: () => void;
  href?: string;
  as?: React.ComponentType<any> | string | ForwardRefExoticComponent<any>;
  children?: SidebarItem[];
  current?: boolean;
  toBottomPosition?: boolean;
  icon?: ForwardRefExoticComponent<any> | string | FC<HTMLAttributes<any>>;
}

export interface SidebarProps {
  items: SidebarItem[];
  logo?: string;
  renderLogo?: () => ReactNode;
  renderMenuButton?: (props: UseDiscloseReturn) => ReactNode;
  hasMenuButton?: boolean;
  modal?: UseDiscloseReturn;
}

export type SidebarRefType = UseDiscloseReturn;

export interface SidebarListProps {
  items: SidebarItem[];
  className?: string;
}

const SidebarListItem: FC<SidebarItem> = (item) => {
  const hasChildren = (item.children ?? []).length > 0;

  const areSomeChildrenCurrent = (item.children ?? []).some(
    (item) => item.current
  );

  const LinkWrapper = (
    hasChildren ? AccordionTrigger : item.as ?? 'a'
  ) as FC<any>;

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue={areSomeChildrenCurrent ? 'item-1' : undefined}
    >
      <AccordionItem className="border-0" value="item-1">
        <LinkWrapper
          href={item.href}
          variant="unstyled"
          onClick={item.onClick}
          className={cn(
            item.current || areSomeChildrenCurrent
              ? 'bg-primary-foreground text-primary'
              : 'text-secondary-foreground hover:text-primary hover:bg-primary-foreground',
            'group flex rounded-md p-2 text-sm leading-6 font-semibold justify-between w-full hover:no-underline focus:bg-primary-foreground focus:text-primary'
          )}
        >
          <div className="flex gap-x-3">
            {item.icon ? (
              <item.icon
                className={cn(
                  item.current || areSomeChildrenCurrent
                    ? 'text-primary'
                    : 'text-secondary-foreground group-hover:text-primary',
                  'h-6 w-6 shrink-0 group-focus:text-primary'
                )}
                aria-hidden="true"
              />
            ) : null}
            {item.label}
          </div>
        </LinkWrapper>

        {hasChildren ? (
          <AccordionContent hasWrapper={false}>
            <SidebarList
              className="-mx-0 mt-1"
              items={(item.children ?? []).map((child) => ({
                ...child,
                icon: () => <div className="w-10" />
              }))}
            />
          </AccordionContent>
        ) : null}
      </AccordionItem>
    </Accordion>
  );
};

const SidebarList: FC<SidebarListProps> = ({ items, className }) => {
  return (
    <ul className={cn('-mx-2 space-y-1', className)}>
      {items.map((item, idx) => (
        <li key={item.id ?? idx}>
          <SidebarListItem {...item} />
        </li>
      ))}
    </ul>
  );
};

export const Sidebar = React.forwardRef<SidebarRefType, SidebarProps>(
  (
    {
      items = [],
      renderLogo,
      logo,
      renderMenuButton,
      hasMenuButton = true,
      modal: modalProp
    },
    ref
  ) => {
    const modalDisclose = useDisclose();
    const modal = modalProp ?? modalDisclose;
    const { isOpen, onClose, onOpen } = modal;

    useImperativeHandle(ref, () => modal, [modal]);

    const mappedItems = useMemo(
      () =>
        items.map((item) => ({ ...item, id: item.id || getUniqueId(items) })),
      [items]
    );

    const bottomItem = useMemo(
      () => mappedItems.find((item) => item.toBottomPosition),
      [mappedItems]
    );

    const filteredItems = useMemo(
      () => mappedItems.filter((item) => item.id !== bottomItem?.id),
      [mappedItems, bottomItem]
    );

    const navigationContent = (
      <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-background px-6 pb-4">
        <div className="flex h-16 shrink-0 items-center">
          {renderLogo ? (
            renderLogo()
          ) : (
            <img className="h-8 w-auto" src={logo} alt="Your Company" />
          )}
        </div>
        <nav className="flex flex-1 flex-col">
          <ul className="flex flex-1 flex-col gap-y-7 mt-4">
            <li>
              <SidebarList items={filteredItems} />
            </li>
            {bottomItem ? (
              <li className="mt-auto">
                <SidebarListItem {...bottomItem} />
              </li>
            ) : null}
          </ul>
        </nav>
      </div>
    );

    return (
      <div>
        <Transition.Root show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={() => onClose?.()}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={onClose}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <Cross1Icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {navigationContent}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {navigationContent}
        </div>

        {renderMenuButton ? (
          renderMenuButton(modal)
        ) : hasMenuButton ? (
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
            onClick={onOpen}
          >
            <span className="sr-only">Open sidebar</span>
            <HamburgerMenuIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        ) : null}
      </div>
    );
  }
);
