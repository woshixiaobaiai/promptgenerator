import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/zh/header"
import { Footer } from "@/components/zh/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from '@vercel/analytics/react'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins"
})

export const metadata: Metadata = {
  title: {
    default: "Veo3 提示词生成器 - 免费 AI 视频提示词工具 | 专业内容创作套件",
    template: "%s | Veo3 提示词生成器"
  },
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
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/images/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/images/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/images/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'apple-touch-icon', url: '/images/apple-touch-icon.png' },
    ],
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://veo3promptgenerator.online",
    siteName: "Veo3 提示词生成器",
    title: "Veo3 提示词生成器 - 免费 AI 视频提示词工具 | 专业内容创作套件",
    description: "使用我们的免费 AI 驱动生成器创建专业级 Veo3 提示词与视频脚本。非常适合内容创作者、营销人员与企业，帮助你将创意快速变成高质量视频内容。",
    images: [
      {
        url: "/images/og-image-1200x630.png",
        width: 1200,
        height: 630,
        alt: "Veo3 提示词生成器 - AI 视频提示词工具",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Veo3 提示词生成器 - 免费 AI 视频提示词工具",
    description: "使用我们的免费 AI 生成器快速创建专业 Veo3 提示词与视频脚本。",
    images: ["/images/twitter-image-1200x600.png"],
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
    "manifest": "/manifest.json",
  },
  generator: 'Next.js'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/images/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/images/favicon-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/images/favicon-512x512.png" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#6366f1" />
        <meta name="msapplication-TileColor" content="#6366f1" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="canonical" href="https://veo3promptgenerator.online" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        {/* Clarity 追踪代码（站点：https://veo3promptgenerator.online） */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "sr07pc17c3");
            `
          }}
        />
      </head>
      <body className={poppins.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
