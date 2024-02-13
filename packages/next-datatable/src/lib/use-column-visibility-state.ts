import { VisibilityState } from '@tanstack/react-table';
import { useQueryDatatable } from './use-query-datatable';

export const useColumnVisibilityState = (
  defaultState: VisibilityState = {}
) => {
  const [columnVisibility, setColumnVisibility, isLoading] =
    useQueryDatatable<VisibilityState>('visibility', {
      defaultValue: defaultState,
    });

  return { columnVisibility, setColumnVisibility, isLoading };
};
