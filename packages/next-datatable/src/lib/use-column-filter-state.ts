import { ColumnFiltersState } from '@tanstack/react-table';
import { useQueryDatatable } from './use-query-datatable';

export const useColumnFilterState = (defaultState?: ColumnFiltersState) => {
  const [columnFilters, setColumnFilters, isLoading] =
    useQueryDatatable<ColumnFiltersState>('filter', {
      defaultValue: defaultState ?? [],
    });

  return { columnFilters, setColumnFilters, isLoading };
};
