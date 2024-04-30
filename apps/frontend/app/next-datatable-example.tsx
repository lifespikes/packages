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

export const columns: ColumnDef<Product>[] = [
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
    accessorKey: 'title',
    header: 'Title',
  },
  {
    accessorKey: 'description',
    header: 'Description',
  },
];

export interface DummyApiResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  thumbnail: string;
  images: string[];
}

/** @see https://dummyjson.com/docs/products */
const request = async (
  page: number,
  perPage = 10
): Promise<DummyApiResponse> => {
  const response = await fetch(
    `https://dummyjson.com/products?limit=${perPage}&skip=${
      (page - 1) * perPage
    }`
  );
  return response.json();
};

const NextDatatableExample = () => {
  const [data, setData] = useState<DummyApiResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { pagination } = useGetNextTableState();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const data = await request(
        (pagination?.pageIndex ?? 0) + 1,
        pagination.pageSize ?? 10
      );
      setData(data);
      setIsLoading(false);
    })();
  }, [pagination]);

  const totalPages = Math.ceil(
    (data?.total ?? 0) / (pagination?.pageSize ?? 10)
  );

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
              pageSize: data?.limit ?? 10,
              pageIndex: (data?.skip ?? 1) - 1,
            },
          }}
          pageCount={totalPages}
          data={data?.products ?? []}
          columns={columns}
          isLoading={isLoading}
        />
      </CardContent>
    </Card>
  );
};

export default NextDatatableExample;
