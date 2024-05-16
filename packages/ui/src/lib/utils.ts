import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import v from 'voca';
import { UsesHints } from '@lifespikes/ui/types/global';

export const labelHints: UsesHints = {
  email: 'E-mail',
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const ucfirst = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getUniqueId = (items: Record<any, any>[]): string => {
  const id = `${Math.random().toString(36).substr(2, 9)}`;
  return items.find((item) => item.id === id) ? getUniqueId(items) : id;
};

export const labelFromFieldName = (name: string): string =>
  v.capitalize(
    v
      .words(name)
      .map((w) => {
        const idx = w.toLowerCase();
        return idx in labelHints ? labelHints[idx] : w;
      })
      .join(' ')
  );
