import { ColumnFiltersState } from '@tanstack/react-table';
import { useQueryDatatable } from './use-query-datatable';

export const useColumnFilterState = () => {
  const [columnFilters, setColumnFilters, isLoading] =
    useQueryDatatable<ColumnFiltersState>('filter', { defaultValue: [] });

  return { columnFilters, setColumnFilters, isLoading };
};
