import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "视频转文字 - 使用 Gemini 2.5 Flash 将视频音频转成文本",
  description: "借助 Gemini 2.5 Flash AI 将视频中的音频精准转写为文本。支持自动语言检测与专业级转写，完整提取音频内容。",
  keywords: "视频转文字, 音频转文字, 视频转写, Gemini 2.5 Flash, AI 转写, 语音转文字, 视频字幕, 转写服务, 音频转换, 提取视频音频, 转写工具",
  openGraph: {
    title: "视频转文字 - 使用 Gemini 2.5 Flash 将视频音频转成文本",
    description: "借助 Gemini 2.5 Flash AI 将视频中的音频精准转写为文本。支持自动语言检测与专业级转写，完整提取音频内容。",
    url: "https://veo3promptgenerator.online/video-to-text",
    siteName: "Veo3 提示词生成器",
    images: [
      {
        url: "/images/og-image-1200x630.png",
        width: 1200,
        height: 630,
        alt: "视频转文字 - 使用 Gemini 2.5 Flash 将视频音频转成文本",
      },
    ],
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "视频转文字 - 使用 Gemini 2.5 Flash 将视频音频转成文本",
    description: "借助 Gemini 2.5 Flash AI 将视频中的音频精准转写为文本。支持自动语言检测与专业级转写。",
    images: ["/images/twitter-image-1200x600.png"],
  },
  alternates: {
    canonical: "https://veo3promptgenerator.online/video-to-text",
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

export default function TranscriptionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
