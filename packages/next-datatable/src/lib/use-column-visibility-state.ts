import { VisibilityState } from '@tanstack/react-table';
import { useQueryDatatable } from './use-query-datatable';

export const useColumnVisibilityState = () => {
  const [columnVisibility, setColumnVisibility, isLoading] =
    useQueryDatatable<VisibilityState>('visibility', { defaultValue: {} });

  return { columnVisibility, setColumnVisibility, isLoading };
};
