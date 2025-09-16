// @ts-check

import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            ...['en', 'ko'] .flatMap((locale) => {
                return [
                    {
                        source: `/${locale}`,
                        destination: `/${locale}/outer/Inner`,
                        permanent: true,
                    },
                    {
                        source: `/${locale}/outer`,
                        destination: `/${locale}/outer/Inner`,
                        permanent: true,
                    },
                ];
            }),
        ];
    }
};

export default withNextIntl(nextConfig);
