import { type NextRequest } from 'next/server';
import createIntlMiddleware from 'next-intl/middleware';

import {routing} from "@/i18n/routing";
const X_URL = 'x-url';

const X_QUERY_STRING = 'x-query-string';
export default async function middleware(request: NextRequest) {
  /**
   * next-intl의 기본 미들웨어입니다.
   */
  const handleI18nRouting = createIntlMiddleware(routing);

  const response = handleI18nRouting(request);

  /**
   * viewport width를 header로 넘겨서, ServerComponent에서 사용할 수 있도록 합니다.
   */
  const queryString = request.url.split('?')[1];

  // to get pathname in generateMetadata , you need set "x-url here
  response.headers.set(X_URL, request.url);
  queryString && queryString !== 'undefined' && response.headers.set(X_QUERY_STRING, queryString);

  return response;
}

export const config = {
  matcher: [
    '/',
    '/(ko|en)/:path*',
    '/((?!api|_next|sitemap|_vercel|.*\\..*).*)',
  ],
};
