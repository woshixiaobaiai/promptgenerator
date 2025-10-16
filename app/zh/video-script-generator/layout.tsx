import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "视频脚本生成器 - 免费 AI 视频脚本创作工具",
  description: "使用我们的免费 AI 驱动视频脚本生成器，为 YouTube、TikTok、Instagram 及营销活动生成专业视频脚本。非常适合内容创作者与营销人员使用。",
  keywords: "视频脚本生成器, AI 视频脚本, YouTube 脚本生成, TikTok 脚本创作, Instagram 视频脚本, 营销视频脚本, 内容创作工具, AI 脚本写作, 视频内容制作, 免费脚本生成器, 社交媒体脚本, 视频营销, 内容营销, 视频制作",
  openGraph: {
    title: "视频脚本生成器 - 免费 AI 视频脚本创作工具",
    description: "使用我们的免费 AI 驱动视频脚本生成器，为 YouTube、TikTok、Instagram 及营销活动生成专业视频脚本。非常适合内容创作者与营销人员使用。",
    url: "https://veo3promptgenerator.online/video-script-generator",
    siteName: "Veo3 提示词生成器",
    images: [
      {
        url: "/images/og-image-1200x630.png",
        width: 1200,
        height: 630,
        alt: "视频脚本生成器 - 免费 AI 视频脚本创作工具",
      },
    ],
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "视频脚本生成器 - 免费 AI 视频脚本创作工具",
    description: "使用我们的免费 AI 驱动视频脚本生成器，为 YouTube、TikTok、Instagram 及营销活动生成专业视频脚本。",
    images: ["/images/twitter-image-1200x600.png"],
  },
  alternates: {
    canonical: "https://veo3promptgenerator.online/video-script-generator",
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

export default function VideoScriptGeneratorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
