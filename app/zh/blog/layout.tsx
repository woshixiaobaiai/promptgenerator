import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "博客 - Veo3 提示词生成器内容与技巧",
  description: "获取 AI 视频生成、提示工程与内容创作的最新洞见、技巧与教程。关注 Veo3 提示词生成器博客，持续提升你的创作效率与作品质量。",
  keywords: "Veo3 提示词生成器 博客, AI 视频生成 技巧, 提示工程 教程, 内容创作 指南, AI 视频工具 博客, Veo3 教程, 视频内容创作 技巧, AI 工具 博客",
  openGraph: {
    title: "博客 - Veo3 提示词生成器内容与技巧",
    description: "获取 AI 视频生成、提示工程与内容创作的最新洞见、技巧与教程。关注 Veo3 提示词生成器博客，持续提升你的创作效率与作品质量。",
    url: "https://veo3promptgenerator.online/blog",
    siteName: "Veo3 提示词生成器",
    images: [
      {
        url: "/images/og-image-1200x630.png",
        width: 1200,
        height: 630,
        alt: "博客 - Veo3 提示词生成器内容与技巧",
      },
    ],
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "博客 - Veo3 提示词生成器内容与技巧",
    description: "获取 AI 视频生成、提示工程与内容创作的最新洞见、技巧与教程。",
    images: ["/images/twitter-image-1200x600.png"],
  },
  alternates: {
    canonical: "https://veo3promptgenerator.online/blog",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "application-name": "Veo3 提示词生成器",
    "apple-mobile-web-app-title": "Veo3 提示词生成器",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "theme-color": "#6366f1",
    "msapplication-TileColor": "#6366f1",
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
