import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, User, Clock } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Veo3 博客 - AI 视频生成技巧、教程与行业洞察",
  description:
    "获取关于 AI 视频生成、Veo3 提示词、内容创作与数字媒体最新趋势的专业技巧与教程。关注我们的深度指南，走在创作前沿。",
  keywords:
    "Veo3 博客, AI 视频生成 技巧, 提示工程 教程, 内容创作 指南, 视频营销 洞察, AI 视频 趋势, 数字媒体 博客, 创作者 资源, 视频制作 技巧, AI 工具 博客, Veo3 教程, 视频内容 策略",
  authors: [{ name: "Veo3 Prompt Generator Team" }],
  creator: "Veo3 提示词生成器",
  publisher: "Veo3 提示词生成器",
  metadataBase: new URL("https://veo3promptgenerator.online"),
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Veo3 博客 - AI 视频生成技巧、教程与行业洞察",
    description:
      "获取关于 AI 视频生成、Veo3 提示词、内容创作与数字媒体最新趋势的专业技巧与教程。",
    url: "https://veo3promptgenerator.online/blog",
    siteName: "Veo3 提示词生成器",
    images: [
      {
        url: "/images/og-image-1200x630.png",
        width: 1200,
        height: 630,
        alt: "Veo3 博客 - AI 视频生成技巧与教程",
      },
    ],
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veo3 博客 - AI 视频生成技巧、教程与行业洞察",
    description:
      "获取关于 AI 视频生成、Veo3 提示词、内容创作与数字媒体最新趋势的专业技巧与教程。",
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
}

const blogPosts = [
  {
    id: "complete-guide-veo3-prompts",
    title: "Veo3 提示词完全指南：精通 AI 视频生成",
    excerpt:
      "学习如何撰写高质量的 Veo3 提示词，从基础概念到进阶技巧，全面解析生成惊艳 AI 视频的关键方法。",
    author: "Sarah Johnson",
    date: "2024-01-20",
    image: "/placeholder.svg?height=200&width=400&text=Veo3+Guide",
    category: "指南",
    readTime: "约 12 分钟",
  },
  {
    id: "video-script-writing-tips",
    title: "内容创作者必备：10 条视频脚本写作技巧",
    excerpt:
      "掌握这些经过验证的写作技巧，创作更具吸引力的视频脚本，适用于 YouTube、TikTok 和各类社媒平台。",
    author: "Mike Chen",
    date: "2024-01-18",
    image: "/placeholder.svg?height=200&width=400&text=Script+Writing",
    category: "教程",
    readTime: "约 8 分钟",
  },
  {
    id: "ai-video-generation-trends-2024",
    title: "2024 年 AI 视频生成趋势：内容创作的下一步",
    excerpt:
      "从 Veo3 到 Sora，探索 AI 视频生成的最新趋势，了解这些技术如何重塑各行业的内容生产方式。",
    author: "Alex Rivera",
    date: "2024-01-15",
    image: "/placeholder.svg?height=200&width=400&text=AI+Trends+2024",
    category: "行业",
    readTime: "约 10 分钟",
  },
  {
    id: "optimize-prompts-better-results",
    title: "如何优化提示词以获得更佳的 AI 视频效果",
    excerpt:
      "通过实用技巧与示例掌握提示词优化之道——小改动也能显著提升生成质量与一致性。",
    author: "Emma Thompson",
    date: "2024-01-12",
    image: "/placeholder.svg?height=200&width=400&text=Prompt+Optimization",
    category: "技巧",
    readTime: "约 7 分钟",
  },
  {
    id: "veo3-vs-competitors-comparison",
    title: "Veo3 对比竞品：全面的 AI 视频工具评测",
    excerpt:
      "深入对比 Veo3 与其他主流 AI 视频生成平台，帮助你按需求与预算选择最合适的解决方案。",
    author: "David Park",
    date: "2024-01-10",
    image: "/placeholder.svg?height=200&width=400&text=Tool+Comparison",
    category: "对比",
    readTime: "约 15 分钟",
  },
]

export default function BlogPage() {
  return (
    <main>
      <section className="py-16 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Veo3 <span className="text-primary">博客</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            聚焦 AI 视频生成、提示工程与内容创作的洞察、教程与最佳实践，助你持续精进创作力。
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary">{post.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <CalendarDays className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString("zh-CN")}
                    </div>
                  </div>
                  <CardTitle className="mb-3 group-hover:text-primary transition-colors">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </CardTitle>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <Link href={`/blog/${post.id}`} className="text-primary hover:underline font-medium">
                      阅读全文
                    </Link>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
