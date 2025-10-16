import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "视频转提示词生成器 - 借助 Gemini 2.5 Flash 将视频转换为 AI 提示词",
  description: "使用 Gemini 2.5 Flash 将现有视频转换为适用于 AI 视频生成工具的详细提示词。把你的视频转化为针对 Veo3、Runway 及其他 AI 视频平台优化的提示词。",
  keywords: "视频转提示词, 视频提示词生成器, AI 视频提示词, 视频转换, Veo3 提示词, Runway 提示词, AI 视频生成, 视频分析, 提示词工程, 视频内容创作, AI 视频工具, 视频优化, Gemini 2.5 Flash",
  openGraph: {
    title: "视频转提示词生成器 - 借助 Gemini 2.5 Flash 将视频转换为 AI 提示词",
    description: "使用 Gemini 2.5 Flash 将现有视频转换为适用于 AI 视频生成工具的详细提示词。把你的视频转化为针对 Veo3、Runway 及其他 AI 视频平台优化的提示词。",
    url: "https://veo3promptgenerator.online/video-to-prompt",
    siteName: "Veo3 提示词生成器",
    images: [
      {
        url: "/images/og-image-1200x630.png",
        width: 1200,
        height: 630,
        alt: "视频转提示词生成器 - 借助 Gemini 2.5 Flash 将视频转换为 AI 提示词",
      },
    ],
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "视频转提示词生成器 - 借助 Gemini 2.5 Flash 将视频转换为 AI 提示词",
    description: "使用 Gemini 2.5 Flash 将现有视频转换为适用于 AI 视频生成工具的详细提示词。把你的视频转化为针对 Veo3、Runway 及其他 AI 视频平台优化的提示词。",
    images: ["/images/twitter-image-1200x600.png"],
  },
  alternates: {
    canonical: "https://veo3promptgenerator.online/video-to-prompt",
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

export default function VideoToPromptLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}