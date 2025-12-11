import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');
const nextConfig: NextConfig = {
  /* config options here */
    typescript: { ignoreBuildErrors: true }, // 仅在紧急上线时使用
    eslint: { ignoreDuringBuilds: true }
};

export default withNextIntl(nextConfig);
