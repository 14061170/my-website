import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import Navbar from '@/components/Navbar';
import './globals.css'; // 确保你引入了 Tailwind 样式

export default async function LocaleLayout({
    children,
    params: {locale}
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body className="bg-gray-50 text-gray-900">
                <NextIntlClientProvider messages={messages}>
                    <Navbar/>
                    <main className="pt-16">{children}</main>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
