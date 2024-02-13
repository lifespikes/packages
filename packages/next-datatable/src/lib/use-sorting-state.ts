import { SortingState } from '@tanstack/react-table';
import { useQueryDatatable } from './use-query-datatable';

export const useSortingState = (defaultState?: SortingState) => {
  const [sorting, setSorting, isLoading] = useQueryDatatable<SortingState>(
    'sorting',
    { defaultValue: defaultState ?? [] }
  );

  return { sorting, setSorting, isLoading };
};
