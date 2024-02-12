import { useSortingState } from './use-sorting-state';
import { usePaginationState } from './use-pagination-state';
import { useColumnVisibilityState } from './use-column-visibility-state';
import { useColumnFilterState } from './use-column-filter-state';

/**
 * Do not use this hook to get data from outside the Datatable, please use ./useNextTableState
 * */
export const useNextTableStateInternal = () => {
  const {
    pagination,
    setPagination,
    isLoading: isLoadingPagination,
  } = usePaginationState();
  const {
    sorting,
    setSorting,
    isLoading: isSortingLoading,
  } = useSortingState();
  const {
    columnVisibility,
    setColumnVisibility,
    isLoading: isColumnVisibilityLoading,
  } = useColumnVisibilityState();
  const {
    columnFilters,
    setColumnFilters,
    isLoading: isColumnFilterLoading,
  } = useColumnFilterState();

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
