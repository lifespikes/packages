import {
  DataTable,
  DataTableProps
} from '@lifespikes/ui/components/composites/data-table';
import { useNextTableStateInternal } from './_use-next-table-state_internal';

export const NextDataTable = <D extends Record<any, any>>(
  props: DataTableProps<D>
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
    isLoading
  } = useNextTableStateInternal();

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
          columnFilters
        },
        onSortingChange: setSorting,
        onPaginationChange: setPagination,
        onColumnVisibilityChange: setColumnVisibility,
        onColumnFiltersChange: setColumnFilters
      }}
      isLoading={_loading}
    />
  );
};
