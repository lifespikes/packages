'use client';

import * as React from 'react';
import { FC, ReactNode } from 'react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  Table as TableType,
  TableOptions,
  useReactTable
} from '@tanstack/react-table';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableVariantProps
} from '@lifespikes/ui/components';
import { DataTablePagination } from '@lifespikes/ui/components/composites';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Skeleton } from '@lifespikes/ui/components';

export interface WithTable {
  table: TableType<Record<any, any>>;
}

export type RenderComponentDataTableHandler = (context: WithTable) => ReactNode;

export interface DataTableProps<D extends Record<any, any>>
  extends TableVariantProps {
  data: D[];
  columns: ColumnDef<D>[];
  tableOptions?: Partial<TableOptions<Record<any, any>>>;
  renderHeader?: RenderComponentDataTableHandler;
  renderFooter?: RenderComponentDataTableHandler;
  variantClassName?: string;
  isLoading?: boolean;
  pageCount?: number;
}

export const DataTableLoading: FC<WithTable> = ({ table }) => {
  return (
    <>
      {Array.from({ length: 5 }).map((o, index) => (
        <TableRow key={index}>
          {Array.from({ length: table.getAllColumns().length }).map((a, i) => (
            <TableCell key={i}>
              <Skeleton className="h-4 w-full" />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  );
};

export const DataTable = <D extends Record<any, any>>({
                                                        data,
                                                        columns,
                                                        tableOptions,
                                                        renderHeader,
                                                        renderFooter,
                                                        variant,
                                                        variantClassName,
                                                        isLoading
                                                      }: DataTableProps<D>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    //getPaginationRowModel: getPaginationRowModel(),
    ...tableOptions,
    state: {
      ...tableOptions?.state
    }
  });

  return (
    <div className="w-full">
      {renderHeader ? (
        <div className="flex items-center py-4">{renderHeader({ table })} </div>
      ) : null}

      <div className="rounded-md">
        <Table variant={variant} className={variantClassName}>
          <TableHeader className="bg-muted/50">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  const sort = header.column.getIsSorted();
                  return (
                    <TableHead
                      key={header.id}
                      className="text-muted-foreground"
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      <div className="flex space-x-2 items-center">
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                        {sort ? (
                          sort === 'asc' ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )
                        ) : null}
                      </div>
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <DataTableLoading table={table} />
            ) : table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  className={variantClassName}
                  variant={variant}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {renderFooter ? (
        renderFooter({ table })
      ) : (
        <DataTablePagination table={table} className="mt-2" />
      )}
    </div>
  );
};
