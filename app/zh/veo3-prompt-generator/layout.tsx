import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "免费 Veo3 提示词生成器（高级 JSON 与爆款模板）",
  description: "为谷歌 Veo3 生成可直接用于制作的视频提示词。我们的免费工具可生成高级 JSON 和段落格式提示词，内含爆款模板与完整的电影级控制，无需注册即可使用。",
  keywords: "Veo3 提示词生成器,免费 Veo3 提示词,AI 视频生成,Google Veo3,JSON 提示词,爆款视频模板,电影级提示词,视频内容创作,AI 视频工具,提示词工程,Veo3 AI,视频生成提示词,高级提示词,段落提示词,可生产提示词,爆款模板,电影级控制,无需注册,免费 AI 工具",
  openGraph: {
  title: "免费 Veo3 提示词生成器（高级 JSON 与爆款模板）",
  description: "为谷歌 Veo3 生成可直接用于制作的视频提示词。我们的免费工具可生成高级 JSON 与段落格式提示词，内含爆款模板与完整的电影级控制，无需注册即可使用。",
  url: "https://veo3promptgenerator.online/veo3-prompt-generator",
  siteName: "Veo3 提示词生成器",
  images: [
    {
      url: "/images/og-image-1200x630.png",
      width: 1200,
      height: 630,
      alt: "免费 Veo3 提示词生成器 - 高级 JSON 与爆款模板",
    },
  ],
  locale: "zh_CN",
  type: "website",
},
twitter: {
  card: "summary_large_image",
  title: "免费 Veo3 提示词生成器（高级 JSON 与爆款模板）",
  description: "为谷歌 Veo3 生成可直接用于制作的视频提示词。我们的免费工具可生成高级 JSON 与段落格式提示词，内含爆款模板与完整的电影级控制，无需注册即可使用。",
  images: ["/images/twitter-image-1200x600.png"],
},
alternates: {
  canonical: "https://veo3promptgenerator.online/veo3-prompt-generator",
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

export default function Veo3PromptGeneratorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 