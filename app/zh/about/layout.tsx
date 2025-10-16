import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "关于我们 - Veo3 Prompt Generator 团队",
  description:
    "了解 Veo3 Prompt Generator 团队与我们的使命：用 AI 驱动的工具重塑内容创作。探索我们的故事、价值观，以及帮助创作者的承诺。",
  keywords:
    "关于 Veo3 Prompt Generator, AI 内容创作团队, Veo3 prompt generator about, 内容创作工具, AI 视频生成团队, 提示工程专家, 视频内容创作, AI 工具开发",
  openGraph: {
    title: "关于我们 - Veo3 Prompt Generator 团队",
    description:
      "了解 Veo3 Prompt Generator 团队与我们的使命：用 AI 驱动的工具重塑内容创作。探索我们的故事、价值观，以及帮助创作者的承诺。",
    url: "https://veo3promptgenerator.online/about",
    siteName: "Veo3 Prompt Generator",
    images: [
      {
        url: "/images/og-image-1200x630.png",
        width: 1200,
        height: 630,
        alt: "关于我们 - Veo3 Prompt Generator 团队",
      },
    ],
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "关于我们 - Veo3 Prompt Generator 团队",
    description:
      "了解 Veo3 Prompt Generator 团队，以及我们用 AI 赋能内容创作的使命与实践。",
    images: ["/images/twitter-image-1200x600.png"],
  },
  alternates: {
    canonical: "https://veo3promptgenerator.online/about",
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
    "application-name": "Veo3 Prompt Generator",
    "apple-mobile-web-app-title": "Veo3 Prompt Generator",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "theme-color": "#6366f1",
    "msapplication-TileColor": "#6366f1",
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
