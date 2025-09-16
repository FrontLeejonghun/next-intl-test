import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'TEST manifest',
    short_name: 'TEST',
    start_url: '/',
    display: 'standalone',
    theme_color: '#000000',
    background_color: '#000000',
  };
}
