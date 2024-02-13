'use client';
import { useEffect, useState } from 'react';
import {
  NextDataTable,
  useGetNextTableState,
} from '@lifespikes/next-datatable';

import { ColumnDef } from '@tanstack/react-table';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CheckboxPrimitive,
} from '@lifespikes/ui';

const response = {
  data: [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    { id: 3, name: 'User 3' },
  ],
  meta: {
    totalItems: 100,
    perPage: 10,
    currentPage: 1,
    totalPages: 10,
  },
};

export const columns: ColumnDef<any>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <CheckboxPrimitive
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <CheckboxPrimitive
        className="border-gray-400 data-[state=checked]:border-white"
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'id',
    header: 'Id',
  },
  {
    accessorKey: 'name',
    header: 'Name',
    cell: ({ row }) => (
      <div className="flex space-x-2 text-primary">
        <span>{row.getValue('name')}</span>
      </div>
    ),
  },
];

const request = (page: number): Promise<typeof response> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(response);
    }, 1000);
  });
};

const NextDatatableExample = () => {
  const [data, setData] = useState<null | typeof response>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { pagination } = useGetNextTableState();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setData(await request(pagination.pageIndex + 1));
      setIsLoading(false);
    })();
  }, [pagination]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Next Datatable</CardTitle>
        <CardDescription>Minimal example of usage</CardDescription>
      </CardHeader>
      <CardContent>
        <NextDataTable
          defaultValues={{
            pagination: {
              pageSize: data?.meta?.perPage ?? 1,
              pageIndex: (data?.meta?.currentPage ?? 1) - 1,
            },
          }}
          pageCount={data?.meta?.totalPages}
          data={data?.data ?? []}
          columns={columns}
          isLoading={isLoading}
        />
      </CardContent>
    </Card>
  );
};

export default NextDatatableExample;
