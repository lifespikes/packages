import { DataTable, DataTableProps } from '@lifespikes/ui';
import {
  InternalOptionsType,
  useNextTableStateInternal,
} from './_use-next-table-state_internal';

export interface NextDatatableProps<T extends Record<any, any>>
  extends DataTableProps<T> {
  defaultValues?: InternalOptionsType;
}

export const NextDataTable = <D extends Record<any, any>>(
  props: NextDatatableProps<D>
) => {
  const {
    pagination,
    columnVisibility,
    sorting,
    columnFilters,
    setPagination,
    setColumnVisibility,
    setSorting,
    setColumnFilters,
    isLoading,
  } = useNextTableStateInternal(props.defaultValues);

  const _loading = props.isLoading || isLoading;

  return (
    <DataTable
      {...props}
      tableOptions={{
        manualPagination: true,
        manualSorting: true,
        manualFiltering: true,
        state: {
          pagination,
          sorting,
          columnVisibility,
          columnFilters,
        },
        onSortingChange: setSorting,
        onPaginationChange: setPagination,
        onColumnVisibilityChange: setColumnVisibility,
        onColumnFiltersChange: setColumnFilters,
      }}
      isLoading={_loading}
    />
  );
};
