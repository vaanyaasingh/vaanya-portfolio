import { useEffect } from 'react';

export function useTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} · Vaanya Singh` : 'Vaanya Singh · A developer who designs, too';
  }, [title]);
}
