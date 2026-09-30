import { useEffect } from 'react';

export function useTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} · Vaanya Singh` : 'Vaanya Singh · Engineer who starts with people';
  }, [title]);
}
