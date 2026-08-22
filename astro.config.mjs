import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://anu.wiki',
  vite: { plugins: [tailwindcss()] }, integrations: [sitemap()],
  // 2026-08-22：geo_deploy_guard.py 的 CJK slug 拼音化把这两篇文章改名后
  // 没留跳转（见 [[staged-files-swept-by-concurrent-commit]] 附近的事故记录）；
  // 旧中文网址补 301 到新拼音网址，避免下次部署后旧网址直接 404、丢收录。
  redirects: {
    '/anu-性别研究专业学术研讨会征稿与参会信息': '/anu-xing-bie-yan-jiu-zhuan-ye-xue-shu-yan-tao-hui-zheng-gao-yu-can-hui-xin-xi',
    '/anu-学期交换项目申请指南合作院校名单与学分互认': '/anu-xue-qi-jiao-huan-xiang-mu-shen-qing-zhi-nan-he-zuo-yuan-xiao-ming-dan-yu-xue-fen-hu-ren',
  },
});