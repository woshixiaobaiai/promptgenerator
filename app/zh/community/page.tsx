import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, MessageSquare, Star, Trophy, Heart, Share2, TrendingUp, Award } from "lucide-react"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Veo3 社区 - 连接 AI 视频创作者并分享提示词",
  description:
    "加入由内容创作者、AI 爱好者与视频从业者组成的 Veo3 社区。分享提示词、互助答疑，并获取 AI 视频生成的最新趋势。",
  keywords:
    "Veo3 社区, AI 视频创作者, 创作者社区, 提示词分享, 视频创作技巧, AI 视频爱好者, 创作者网络, 视频制作社区, AI 工具社区, 数字创作者, 视频营销社区, 创意协作",
  authors: [{ name: "Veo3 Prompt Generator Team" }],
  creator: "Veo3 提示词生成器",
  publisher: "Veo3 提示词生成器",
  metadataBase: new URL("https://veo3promptgenerator.online"),
  alternates: { canonical: "/community" },
  openGraph: {
    title: "Veo3 社区 - 连接 AI 视频创作者并分享提示词",
    description:
      "加入由内容创作者、AI 爱好者与视频从业者组成的 Veo3 社区。分享提示词、互助答疑，并获取 AI 视频生成的最新趋势。",
    url: "https://veo3promptgenerator.online/community",
    siteName: "Veo3 提示词生成器",
    images: [
      {
        url: "/images/og-image-1200x630.png",
        width: 1200,
        height: 630,
        alt: "Veo3 社区 - AI 视频创作者网络",
      },
    ],
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veo3 社区 - 连接 AI 视频创作者并分享提示词",
    description:
      "加入由内容创作者、AI 爱好者与视频从业者组成的 Veo3 社区。分享提示词、互助答疑，并获取 AI 视频生成的最新趋势。",
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
}

const communityStats = [
  { icon: Users, label: "活跃成员", value: "25K+" },
  { icon: MessageSquare, label: "讨论帖", value: "5K+" },
  { icon: Star, label: "已分享提示词", value: "50K+" },
  { icon: Trophy, label: "成功案例", value: "1K+" },
]

const featuredMembers = [
  {
    name: "Sarah Creative",
    role: "内容创作者",
    avatar: "/placeholder.svg?height=60&width=60&text=SC",
    contribution: "已分享 200+ 爆款视频提示词",
    badge: "顶级贡献者",
  },
  {
    name: "Mike VideoMaster",
    role: "YouTuber",
    avatar: "/placeholder.svg?height=60&width=60&text=MV",
    contribution: "为 500+ 创作者提供脚本建议",
    badge: "社区帮手",
  },
  {
    name: "Alex AI Enthusiast",
    role: "AI 研究者",
    avatar: "/placeholder.svg?height=60&width=60&text=AA",
    contribution: "提出多项高级提示词技巧",
    badge: "创新领袖",
  },
]

const recentDiscussions = [
  {
    title: "Veo3 角色一致性的最佳实践",
    author: "CreativeGuru",
    replies: 23,
    likes: 45,
    category: "技巧与经验",
    timeAgo: "2 小时前",
  },
  {
    title: "我如何用 AI 脚本拿到 100 万播放",
    author: "ViralMaker",
    replies: 67,
    likes: 128,
    category: "成功案例",
    timeAgo: "5 小时前",
  },
  {
    title: "常见提示词生成问题排查指南",
    author: "TechHelper",
    replies: 34,
    likes: 56,
    category: "技术支持",
    timeAgo: "1 天前",
  },
  {
    title: "新功能建议：批量提示词生成",
    author: "ProductivityPro",
    replies: 19,
    likes: 32,
    category: "功能建议",
    timeAgo: "2 天前",
  },
]

const communityFeatures = [
  {
    icon: Share2,
    title: "分享你的提示词",
    description: "将你的成功案例与全社区共享，帮助更多人创作优质内容。",
  },
  {
    icon: MessageSquare,
    title: "获取帮助与支持",
    description: "提问、解答，与经验丰富的创作者与 AI 爱好者共同进步。",
  },
  {
    icon: TrendingUp,
    title: "把握最新趋势",
    description: "持续关注 AI 视频生成的前沿方法、技巧与最佳实践。",
  },
  {
    icon: Award,
    title: "贡献者荣誉体系",
    description: "通过积极贡献赢取徽章与荣誉，获得社区认可。",
  },
]

export default function CommunityPage() {
  return (
    <main>
      <section className="py-16 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            加入我们的 <span className="text-primary">社区</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            与数千名创作者建立连接，分享你的经验；在 AI 视频生成与提示工程中持续学习与成长。
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg">加入 Discord</Button>
            <Button size="lg" variant="outline">
              浏览论坛
            </Button>
          </div>
        </div>
      </section>

      {/* 社区数据概览 */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {communityStats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <stat.icon className="h-8 w-8 mx-auto text-primary mb-2" />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 精选成员 */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5" />
                    精选成员
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {featuredMembers.map((member, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
                      <Image
                        src={member.avatar || "/placeholder.svg"}
                        alt={member.name}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-sm">{member.name}</h4>
                          <Badge variant="secondary" className="text-xs">
                            {member.badge}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mb-1">{member.role}</p>
                        <p className="text-xs text-muted-foreground">{member.contribution}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* 最新讨论 */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    最新讨论
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentDiscussions.map((discussion, index) => (
                    <div key={index} className="border-b border-border pb-4 last:border-b-0">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-sm hover:text-primary cursor-pointer">
                          {discussion.title}
                        </h4>
                        <Badge variant="outline" className="text-xs ml-2">
                          {discussion.category}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-4">
                          <span>作者 {discussion.author}</span>
                          <span>{discussion.timeAgo}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <MessageSquare className="h-3 w-3" />
                            {discussion.replies}
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="h-3 w-3" />
                            {discussion.likes}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="text-center pt-4">
                    <Button variant="outline">查看全部讨论</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 社区功能亮点 */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">为什么加入我们的社区？</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              这里不仅是论坛，更是创作者共同学习、分享与成长的家园。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {communityFeatures.map((feature, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 社区守则 */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">社区守则</h2>
              <p className="text-lg text-muted-foreground">为了营造积极、互助的氛围，请遵循以下守则：</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-600">请遵循</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>✅ 保持尊重，提供建设性反馈</li>
                    <li>✅ 分享经验，互相帮助成长</li>
                    <li>✅ 使用清晰、准确的标题</li>
                    <li>✅ 发帖前先搜索，避免重复</li>
                    <li>✅ 转发他人内容需注明来源</li>
                    <li>✅ 发现不当内容及时举报</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-red-600">请避免</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>❌ 发布垃圾信息、过度自我推广或无关内容</li>
                    <li>❌ 未经许可分享受版权保护的素材</li>
                    <li>❌ 使用攻击性语言或进行人身攻击</li>
                    <li>❌ 发布不当或有害内容</li>
                    <li>❌ 侵犯他人隐私或知识产权</li>
                    <li>❌ 任何形式的骚扰或歧视行为</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 行动召唤 */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">准备好加入了吗？</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            成为我们不断壮大的创作者社区一员，从今天开始分享你的创作旅程。
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="secondary">
              加入 Discord 服务器
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              创建论坛账号
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
