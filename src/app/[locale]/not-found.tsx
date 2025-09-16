'use client';

import type { Metadata } from 'next';
import Error from 'next/error';

// Render the default Next.js 404 page when a route
// is requested that doesn't match the middleware and
// therefore doesn't have a locale associated with it.

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="text-white">
      <Error statusCode={404} />
    </main>
  );
}
