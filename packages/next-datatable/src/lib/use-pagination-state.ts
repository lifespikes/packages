import { PaginationState } from '@tanstack/react-table';
import { useQueryDatatable } from './use-query-datatable';

export const usePaginationState = (defaultState?: PaginationState) => {
  const [pagination, setPagination, isLoading] =
    useQueryDatatable<PaginationState>('pagination', {
      defaultValue: { pageIndex: 0, pageSize: 10, ...defaultState },
    });

  return { pagination, setPagination, isLoading };
};
