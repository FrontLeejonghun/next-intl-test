/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';


import NextError from 'next/error';

export default function GlobalError() {
  return (
    <html>
      <body>
        <NextError statusCode={undefined as any} />
      </body>
    </html>
  );
}
