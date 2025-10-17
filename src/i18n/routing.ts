import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
    locales: ['ko', 'en'],
    defaultLocale: 'en',
    localePrefix: 'as-needed',
    localeDetection:true
});
