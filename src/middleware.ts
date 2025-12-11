import createMiddleware from 'next-intl/middleware';
import { routing } from './navigation'; // 引入刚才定义的 routing 配置

export default createMiddleware(routing);

export const config = {
    // 匹配规则保持不变
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
