import { useSortingState } from './use-sorting-state';
import { usePaginationState } from './use-pagination-state';
import { useColumnVisibilityState } from './use-column-visibility-state';
import { useColumnFilterState } from './use-column-filter-state';
import {
  ColumnFiltersState,
  PaginationState,
  SortingState,
  VisibilityState,
} from '@tanstack/react-table';

export type InternalOptionsType = {
  pagination?: PaginationState;
  sorting?: SortingState;
  visibility?: VisibilityState;
  filter?: ColumnFiltersState;
};

/**
 * Do not use this hook to get data from outside the Datatable, please use useNextTableState hook
 * */
export const useNextTableStateInternal = (
  options: InternalOptionsType = {}
) => {
  const {
    pagination,
    setPagination,
    isLoading: isLoadingPagination,
  } = usePaginationState(options.pagination);
  const {
    sorting,
    setSorting,
    isLoading: isSortingLoading,
  } = useSortingState(options.sorting);
  const {
    columnVisibility,
    setColumnVisibility,
    isLoading: isColumnVisibilityLoading,
  } = useColumnVisibilityState(options.visibility);
  const {
    columnFilters,
    setColumnFilters,
    isLoading: isColumnFilterLoading,
  } = useColumnFilterState(options.filter);

  const isLoading =
    isLoadingPagination ||
    isSortingLoading ||
    isColumnVisibilityLoading ||
    isColumnFilterLoading;

  return {
    pagination,
    setPagination,
    sorting,
    setSorting,
    columnVisibility,
    setColumnVisibility,
    columnFilters,
    setColumnFilters,
    isLoading,
  };
};
