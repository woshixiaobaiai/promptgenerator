import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "联系我们 - Veo3 提示词生成器客服支持",
  description:
    "与 Veo3 提示词生成器团队取得联系。无论是技术支持、功能反馈、商务合作，还是对我们 AI 内容创作工具的任何疑问，都欢迎留言。",
  keywords:
    "联系 Veo3 提示词生成器, 客服支持, 意见反馈, 商务合作, AI 工具支持, 内容创作帮助, Veo3 联系方式, 客户服务",
  openGraph: {
    title: "联系我们 - Veo3 提示词生成器客服支持",
    description:
      "与 Veo3 提示词生成器团队取得联系。欢迎就支持、反馈、合作或任何问题与我们沟通。",
    url: "https://veo3promptgenerator.online/contact",
    siteName: "Veo3 提示词生成器",
    images: [
      {
        url: "/images/og-image-1200x630.png",
        width: 1200,
        height: 630,
        alt: "联系我们 - Veo3 提示词生成器客服支持",
      },
    ],
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "联系我们 - Veo3 提示词生成器客服支持",
    description:
      "联系 Veo3 提示词生成器团队，获取支持、提交反馈或洽谈合作。",
    images: ["/images/twitter-image-1200x600.png"],
  },
  alternates: {
    canonical: "https://veo3promptgenerator.online/contact",
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

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
