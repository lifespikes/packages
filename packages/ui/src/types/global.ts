import { HTMLInputTypeAttribute } from 'react';

export interface PaginatedResource<D extends Record<any, any>> {
  data: D[];
  meta: PaginatedMeta;
}

export interface PaginatedMeta {
  current_page: number;
  from: number;
  last_page: number;
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export type SizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export interface ClosableProps {
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

export type HintName = HTMLInputTypeAttribute;

export type UsesHints<T = string> = {
  [key in HintName]?: T;
};
