import {routing} from '@/i18n/routing';
import {hasLocale, NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import {ReactNode} from 'react';
import {getMessages, setRequestLocale} from "next-intl/server";

type Props = {
    children: ReactNode;
    params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({children, params}: Props) {
    // Ensure that the incoming `locale` is valid
    const {locale} = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }


    const messages = await getMessages();
    setRequestLocale(locale);
    return (
        <html lang={locale}>
        <head>
            <title>next-intl-bug-repro-app-router</title>
        </head>
        <body>
        <NextIntlClientProvider locale={locale} messages={messages}>{children}</NextIntlClientProvider>
        </body>
        </html>
    );
}
