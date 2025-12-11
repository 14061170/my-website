import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['zh-CN', 'zh-TW'] as const;
export const localePrefix = 'always'; // 强制 URL 始终带语言前缀 (推荐)

export const { Link, redirect, usePathname, useRouter } =
    createSharedPathnamesNavigation({ locales, localePrefix });
