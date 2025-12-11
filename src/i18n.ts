import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

// 允许的语言列表
const locales = ['zh-CN', 'zh-TW'];

export default getRequestConfig(async ({locale}) => {
    // 验证传入的 locale 是否有效
    if (!locales.includes(locale as any)) notFound();

    return {
        messages: (await import(`../../messages/${locale}.json`)).default
    };
});
