import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    // 支持的语言列表
    locales: ['zh-CN', 'zh-TW'],

    // 默认语言
    defaultLocale: 'zh-CN',

    // URL 前缀策略 (always 表示 URL 始终包含语言，如 /zh-cn/about)
    localePrefix: 'always'
});

// 创建并导出导航组件
export const { Link, redirect, usePathname, useRouter, getPathname } =
    createNavigation(routing);
