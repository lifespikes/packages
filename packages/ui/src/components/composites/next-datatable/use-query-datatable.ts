import { parseAsJson, useQueryState, UseQueryStateOptions } from 'nuqs';
import { useTransition } from 'react';
import { OnChangeFn } from '@tanstack/react-table';

export const useQueryDatatable = <T>(
  key: string,
  options?: Omit<UseQueryStateOptions<T>, 'parse'> & {
    defaultValue: T;
  },
): [T, OnChangeFn<T>, boolean] => {
  const [isLoading, startTransition] = useTransition();

  const [value, setValue] = useQueryState<T>(key, {
    ...parseAsJson<T>(),
    shallow: true,
    history: 'replace',
    startTransition: startTransition as any,
    ...options,
  });

  return [value as T, setValue as OnChangeFn<T>, isLoading];
};
