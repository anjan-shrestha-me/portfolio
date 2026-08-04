import { useEffect, useState } from 'react';

/**
 * Returns true/false based on whether the given media query currently matches.
 * @param {string} query - e.g. '(max-width: 768px)'
 * @example const isMobile = useMediaQuery('(max-width: 768px)');
 */
export const useMediaQuery = (query) => {
  const getMatch = () =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false;

  const [matches, setMatches] = useState(getMatch);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const handleChange = (event) => setMatches(event.matches);

    // Sync immediately in case the query changed between renders
    setMatches(mediaQueryList.matches);

    mediaQueryList.addEventListener('change', handleChange);
    return () => mediaQueryList.removeEventListener('change', handleChange);
  }, [query]);

  return matches;
};
