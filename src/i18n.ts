import {getRequestConfig} from 'next-intl/server';
import {routing} from './navigation';

export default getRequestConfig(async ({requestLocale}) => {
    // 等待获取当前的 locale
    let locale = await requestLocale;

    // 验证 locale 是否合法，如果不合法或者是 undefined，则使用默认语言或报错
    if (!locale || !routing.locales.includes(locale as any)) {
        locale = routing.defaultLocale;
    }

    return {
        messages: (await import(`../messages/${locale}.json`)).default
    };
});
