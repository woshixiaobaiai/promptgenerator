import type { Metadata } from "next"

// 页面元数据定义（用于 SEO、社交分享、网页展示优化）
export const metadata: Metadata = {
  title: "提示词库 - Veo3 AI 视频模板",
  description:
    "探索我们精心整理的 Veo3 专业提示词与模板集合。查找可直接使用的提示词，涵盖多种视频风格、类型与内容场景。",
  keywords:
    "提示词库, Veo3 模板, AI 视频提示词, 视频模板, Veo3 提示词合集, 专业提示词, 视频生成模板, AI 视频库",
  
  // Open Graph：定义网页在 Facebook、LinkedIn 等社交媒体的展示信息
  openGraph: {
    title: "提示词库 - Veo3 AI 视频模板",
    description:
      "探索我们精心整理的 Veo3 专业提示词与模板集合。查找可直接使用的提示词，涵盖多种视频风格、类型与内容场景。",
    url: "https://veo3promptgenerator.online/prompt-library",
    siteName: "Veo3 提示词生成器",
    images: [
      {
        url: "/images/og-image-1200x630.png",
        width: 1200,
        height: 630,
        alt: "提示词库 - Veo3 AI 视频模板",
      },
    ],
    locale: "zh_CN",
    type: "website",
  },

  // Twitter：定义在 Twitter 上分享时的预览卡片
  twitter: {
    card: "summary_large_image",
    title: "提示词库 - Veo3 AI 视频模板",
    description:
      "探索我们精心整理的 Veo3 专业提示词与模板集合。查找可直接使用的提示词，涵盖多种视频风格、类型与内容场景。",
    images: ["/images/twitter-image-1200x600.png"],
  },

  // canonical 链接：告诉搜索引擎页面的规范 URL，避免重复收录
  alternates: {
    canonical: "https://veo3promptgenerator.online/prompt-library",
  },

  // Robots：定义搜索引擎抓取行为
  robots: {
    index: true, // 允许收录
    follow: true, // 允许跟随链接
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1, // 不限制视频预览长度
      "max-image-preview": "large", // 优先使用大图
      "max-snippet": -1, // 不限制文本摘要长度
    },
  },

  // 其他信息：用于移动端和浏览器显示优化
  other: {
    "application-name": "Veo3 提示词生成器",
    "apple-mobile-web-app-title": "Veo3 提示词生成器",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "theme-color": "#6366f1", // 页面主题色
    "msapplication-TileColor": "#6366f1", // Windows 磁贴颜色
  },
}

// 页面布局组件：负责渲染其下子页面内容
export default function PromptLibraryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // 直接返回子组件内容，不添加额外布局
  return children
}
