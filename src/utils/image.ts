/**
 * Helper to get clean absolute asset URL supporting both local dev and production base paths (e.g. /emtiaz/)
 */
export const getImageUrl = (path: string): string => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;

  // Remove duplicate /emtiaz if already prepended
  let cleanPath = path;
  if (cleanPath.startsWith('/emtiaz/')) {
    cleanPath = cleanPath.replace('/emtiaz/', '/');
  }

  // Ensure leading slash
  if (!cleanPath.startsWith('/')) {
    cleanPath = '/' + cleanPath;
  }

  const base = (import.meta as any).env?.BASE_URL || '/';
  const prefix = base.endsWith('/') ? base.slice(0, -1) : base;

  return `${prefix}${cleanPath}`;
};
