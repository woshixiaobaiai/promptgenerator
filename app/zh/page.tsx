import { MainHero } from "@/components/zh/main-hero"
import { HomeSections } from "@/components/zh/home-sections"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Veo3 提示词生成器 - 免费 AI 视频提示词工具 | 专业内容创作套件",
  description: "使用我们的免费 AI 驱动生成器创建专业级 Veo3 提示词与视频脚本。非常适合内容创作者、营销人员与企业，帮助你将创意快速变成高质量视频内容。",
  keywords: "Veo3 提示词生成器, AI 视频提示词, 视频脚本生成器, 内容创作工具, AI 视频生成, Google Veo3, 提示工程, 视频内容创作, 免费 AI 工具, 视频营销, 社交媒体内容, YouTube 提示词, TikTok 内容, Instagram 视频, 专业视频脚本, AI 内容创作, 视频制作工具, 数字营销, 内容营销, 视频广告",
  authors: [{ name: "Veo3 Prompt Generator Team" }],
  creator: "Veo3 提示词生成器",
  publisher: "Veo3 提示词生成器",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://veo3promptgenerator.online"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Veo3 提示词生成器 - 免费 AI 视频提示词工具 | 专业内容创作套件",
    description: "使用我们的免费 AI 驱动生成器创建专业级 Veo3 提示词与视频脚本。非常适合内容创作者、营销人员与企业，帮助你将创意快速变成高质量视频内容。",
    url: "https://veo3promptgenerator.online",
    siteName: "Veo3 提示词生成器",
    images: [
      {
        url: "/images/og-image-1200x630.png",
        width: 1200,
        height: 630,
        alt: "Veo3 提示词生成器 - AI 视频提示词工具",
      },
    ],
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veo3 提示词生成器 - 免费 AI 视频提示词工具",
    description: "使用我们的免费 AI 生成器快速创建专业 Veo3 提示词与视频脚本。",
    images: ["/images/og-image-1200x630.png"],
    creator: "@veo3promptgen",
    site: "@veo3promptgen",
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "科技",
  classification: "AI 工具",
  other: {
    "theme-color": "#6366f1",
    "color-scheme": "light dark",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Veo3 提示词生成器",
    "application-name": "Veo3 提示词生成器",
    "msapplication-TileColor": "#6366f1",
    "msapplication-config": "/browserconfig.xml",
  },
}

export default function HomePage() {
  return (
    <>
      <main>
        <MainHero />
        <HomeSections />
      </main>
      
      {/* Organization Schema 组织结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Veo3 提示词生成器",
            "url": "https://veo3promptgenerator.online",
            "logo": "https://veo3promptgenerator.online/images/og-image-1200x630.png",
            "description": "面向内容创作者、营销人员与企业的免费 AI 驱动 Veo3 提示词生成器",
            "sameAs": [
              "https://twitter.com/veo3promptgen",
              "https://linkedin.com/company/veo3promptgenerator",
              "https://facebook.com/veo3promptgenerator",
              "https://instagram.com/veo3promptgenerator"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "email": "veo3promptgenerator.online@gmail.com",
              "availableLanguage": "English"
            },
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "US"
            },
            "foundingDate": "2024",
            "numberOfEmployees": "10-50"
          })
        }}
      />
      
      {/* WebSite Schema 站点结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Veo3 提示词生成器",
            "url": "https://veo3promptgenerator.online",
            "description": "免费 AI 驱动的 Veo3 提示词生成与视频脚本创作工具",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://veo3promptgenerator.online/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            },
            "inLanguage": "zh-CN",
            "isAccessibleForFree": true
          })
        }}
      />
      
      {/* SoftwareApplication Schema 软件应用结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Veo3 提示词生成器",
            "applicationCategory": "ContentCreationApplication",
            "operatingSystem": "Web Browser",
            "description": "用于创建专业 Veo3 提示词与视频脚本的 AI 工具",
            "url": "https://veo3promptgenerator.online",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            },
            "featureList": [
              "Veo3 提示词生成",
              "视频脚本创作",
              "AI 内容创作工具",
              "专业模板",
              "免费在线使用",
              "多语言支持",
              "高级自定义",
              "实时生成"
            ],
            "screenshot": "https://veo3promptgenerator.online/images/og-image-1200x630.png",
            "softwareVersion": "1.0.0",
            "releaseNotes": "最新版本：增强 AI 能力与多 API 支持",
            "downloadUrl": "https://veo3promptgenerator.online",
            "installUrl": "https://veo3promptgenerator.online",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "1250",
              "bestRating": "5",
              "worstRating": "1"
            },
            "author": {
              "@type": "Organization",
              "name": "Veo3 Prompt Generator Team"
            }
          })
        }}
      />

      {/* BreadcrumbList Schema 面包屑结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "首页",
                "item": "https://veo3promptgenerator.online"
              }
            ]
          })
        }}
      />

      {/* FAQ Schema 常见问题结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "什么是 Veo3 提示词生成器？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Veo3 提示词生成器是一款免费 AI 工具，帮助内容创作者、营销人员和企业为 Google 的 Veo3 AI 视频生成平台创建专业的视频提示词与脚本。"
                }
              },
              {
                "@type": "Question",
                "name": "Veo3 提示词生成器是否免费？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "是的，Veo3 提示词生成器完全免费。你可以无限制地创建视频提示词与脚本。"
                }
              },
              {
                "@type": "Question",
                "name": "我可以创建哪些类型的内容？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "你可以为 YouTube、TikTok、Instagram 等平台创作营销视频、教育内容、故事类视频、推广内容等多种类型。"
                }
              },
              {
                "@type": "Question",
                "name": "使用该工具需要技术背景吗？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "不需要！我们的 AI 驱动界面让任何人都能轻松创建专业视频内容。只需描述你的创意，AI 就会生成合适的提示词。"
                }
              }
            ]
          })
        }}
      />
    </>
  )
}
