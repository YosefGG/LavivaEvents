export function assetUrl(path) {
  if (!path || /^https?:\/\//.test(path) || path.startsWith('data:')) {
    return path;
  }

  const base = import.meta.env.BASE_URL;
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${normalizedPath}`;
}
