import type { Metadata } from "next"

// 页面元数据（用于 SEO 和社交媒体分享）
export const metadata: Metadata = {
  title: "提示词指南 - Veo3 AI 视频生成技巧",
  description: "掌握 Veo3 AI 视频生成的提示词工程技巧。学习专家级提示词写作方法、最佳实践与创作高质量 AI 视频的技术。",
  keywords: "提示词指南, Veo3 提示词工程, AI 视频生成技巧, 提示词写作, Veo3 教程, AI 视频提示词, 提示词优化, Veo3 技巧",
  
  // Open Graph 协议（用于 Facebook、LinkedIn 等分享展示）
  openGraph: {
    title: "提示词指南 - Veo3 AI 视频生成技巧",
    description: "掌握 Veo3 AI 视频生成的提示词工程技巧。学习专家级提示词写作方法、最佳实践与创作高质量 AI 视频的技术。",
    url: "https://veo3promptgenerator.online/prompt-guide",
    siteName: "Veo3 提示词生成器",
    images: [
      {
        url: "/images/og-image-1200x630.png",
        width: 1200,
        height: 630,
        alt: "提示词指南 - Veo3 AI 视频生成技巧",
      },
    ],
    locale: "zh_CN", // 中文地区（原为 en_US）
    type: "website",
  },

  // Twitter 分享卡片信息
  twitter: {
    card: "summary_large_image",
    title: "提示词指南 - Veo3 AI 视频生成技巧",
    description: "掌握 Veo3 AI 视频生成的提示词工程技巧。学习专家级提示词写作方法、最佳实践与创作高质量 AI 视频的技术。",
    images: ["/images/twitter-image-1200x600.png"],
  },

  // 页面唯一规范链接（防止重复页面）
  alternates: {
    canonical: "https://veo3promptgenerator.online/prompt-guide",
  },

  // 搜索引擎爬虫设置
  robots: {
    index: true, // 允许索引
    follow: true, // 允许跟随链接
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // 其他元信息（移动端配置、主题色等）
  other: {
    "application-name": "Veo3 提示词生成器",
    "apple-mobile-web-app-title": "Veo3 提示词生成器",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "theme-color": "#6366f1",
    "msapplication-TileColor": "#6366f1",
  },
}

// 页面布局组件
export default function PromptGuideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // 仅渲染子页面内容（无额外结构）
  return children
}
