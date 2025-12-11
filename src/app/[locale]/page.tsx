import {useTranslations} from 'next-intl';

export default function HomePage() {
    const t = useTranslations('Hero');

    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-6">
                {t('title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
                {t('desc')}
            </p>

            {/* 演示响应式 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full max-w-5xl">
                {[1, 2, 3].map((i) => (
                    <div key={i}
                         className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
                        <div className="h-32 bg-gray-100 rounded-lg mb-4 animate-pulse"></div>
                        <h3 className="font-bold text-lg">Feature {i}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}
