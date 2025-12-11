'use client';

import { useTranslations } from 'next-intl';
import { Link, usePathname, useRouter } from '@/navigation'; // 注意引入自定义的 navigation
import { useState } from 'react';

export default function Navbar() {
    const t = useTranslations('Navbar');
    const pathname = usePathname(); // 获取不带语言前缀的当前路径
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    // 切换语言的处理函数
    const handleLanguageSwitch = () => {
        // 获取当前完整 URL 中的 locale 并反转
        // 注意：next-intl 的 usePathname 已经去掉了 locale 前缀，
        // 所以我们只需要用 router.replace 加上新的 locale 参数即可
        const currentLocale = window.location.pathname.split('/')[1];
        const newLocale = currentLocale === 'zh-CN' ? 'zh-TW' : 'zh-CN';

        router.replace(pathname, { locale: newLocale });
    };

    return (
        <nav className="fixed w-full z-50 bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="font-bold text-xl text-blue-600">
                            Logo
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-gray-600 hover:text-blue-600">
                            {t('home')}
                        </Link>
                        <Link href="/product" className="text-gray-600 hover:text-blue-600">
                            {t('product')}
                        </Link>
                        <button
                            onClick={handleLanguageSwitch}
                            className="px-4 py-1 rounded-full bg-gray-100 hover:bg-gray-200 text-sm font-medium transition"
                        >
                            {t('switchLabel')}
                        </button>
                    </div>

                    {/* Mobile Button */}
                    <div className="flex items-center md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-600">
                            <span className="sr-only">Open menu</span>
                            {/* 简单的汉堡图标 SVG */}
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t p-4 space-y-2">
                    <Link href="/" className="block py-2 text-gray-700" onClick={() => setIsOpen(false)}>
                        {t('home')}
                    </Link>
                    <button
                        onClick={() => { handleLanguageSwitch(); setIsOpen(false); }}
                        className="block w-full text-left py-2 text-blue-600 font-semibold"
                    >
                        {t('switchLabel')}
                    </button>
                </div>
            )}
        </nav>
    );
}
