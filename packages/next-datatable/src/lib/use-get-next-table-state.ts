import { useSearchParams } from 'next/navigation';
import { parseAsJson, Parser } from 'nuqs';
import { useMemo } from 'react';

import {
  ColumnFiltersState,
  PaginationState,
  SortingState,
} from '@tanstack/react-table';

export const mapSort = (sort: SortingState) => {
  const firstSort = sort[0];
  if (!firstSort) {
    return null;
  }

  return `${firstSort.desc ? '-' : ''}${firstSort.id}`;
};

export function safeParse<T>(
  parser: Parser<T>['parse'],
  value: string,
  key?: string
) {
  try {
    return parser(value);
  } catch (error) {
    console.warn(
      '[nuqs] Error while parsing value `%s`: %O' +
        (key ? ' (for key `%s`)' : ''),
      value,
      error,
      key
    );
    return null;
  }
}

const jsonParser = parseAsJson().parse;

const parseToNumber = (value: any, defaultValue: number | null = null) => {
  if (!value) {
    return defaultValue;
  }
  if (isNaN(Number(value))) {
    return defaultValue;
  }

  return Number(value);
};

/**
 *
 * Hook that allows to obtain the data used internally in the NextTable state, since having duplications of the data setting hook (_use-next-table-state)
 * in the url, you can have unexpected behaviors.
 * */
export const useGetNextTableState = () => {
  const searchParams = useSearchParams();

  const pagination = searchParams.get('pagination');
  const filter = searchParams.get('filter');
  const sorting = searchParams.get('sorting');
  const visibility = searchParams.get('visibility');

  return useMemo(() => {
    const parseData = Object.entries({
      pagination,
      filter,
      sorting,
      visibility,
    }).reduce((acc, [key, param]) => {
      return {
        ...acc,
        [key]: safeParse(jsonParser, param ?? '', key),
      };
    }, {}) as {
      pagination: PaginationState;
      filter: ColumnFiltersState;
      sorting: SortingState;
    };

    return {
      pagination: {
        pageSize: parseToNumber(parseData.pagination?.pageSize, null),
        pageIndex: parseToNumber(parseData.pagination?.pageIndex, null),
      },
      filter: (parseData.filter ?? []).reduce((acc, filter) => {
        return {
          ...acc,
          [filter.id]: filter.value,
        };
      }, {}),
      sort: mapSort(parseData.sorting ?? []),
      visibility,
    };
  }, [pagination, filter, sorting, visibility]);
};
