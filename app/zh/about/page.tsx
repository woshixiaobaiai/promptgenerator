import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Users, Globe, Award, Target, Lightbulb, Shield, Rocket, Sparkles, FileText, Brain, Mic, Camera, Video } from "lucide-react"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "关于 Veo3 Prompt Generator - AI 视频工具与内容创作平台",
  description: "了解 Veo3 Prompt Generator，这是一款领先的 AI 驱动视频内容创作平台。探索我们的工具、使命，以及赋能全球创作者的承诺。",
  keywords: "关于 Veo3 Prompt Generator, AI 视频工具, 内容创作平台, 视频提示词生成器, 视频脚本生成, 视频转文字, AI 内容创作, 数字营销工具, 视频制作平台, 内容创作者, 视频营销, AI 视频生成",
  authors: [{ name: "Veo3 Prompt Generator Team" }],
  creator: "Veo3 Prompt Generator",
  publisher: "Veo3 Prompt Generator",
  metadataBase: new URL("https://veo3promptgenerator.online"),
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "关于 Veo3 Prompt Generator - AI 视频工具与内容创作平台",
    description: "了解 Veo3 Prompt Generator，这是一款领先的 AI 驱动视频内容创作平台。探索我们的工具、使命，以及赋能全球创作者的承诺。",
    url: "https://veo3promptgenerator.online/about",
    siteName: "Veo3 Prompt Generator",
    images: [
      {
        url: "/images/og-image-1200x630.png",
        width: 1200,
        height: 630,
        alt: "关于 Veo3 Prompt Generator - AI 视频工具平台",
      },
    ],
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "关于 Veo3 Prompt Generator - AI 视频工具与内容创作平台",
    description: "了解 Veo3 Prompt Generator，这是一款领先的 AI 驱动视频内容创作平台。",
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

const tools = [
  {
    icon: Sparkles,
    title: "Veo3 提示词生成器",
    description: "我们的旗舰工具，可将你的创意转化为适配 Google Veo3 AI 视频生成平台的专业级详细提示词。",
    benefits: [
      "支持人物设定、语音与台词的高级描述",
      "情境感知的场景细节与声音设计",
      "面向 Veo3 的专业提示词格式化",
      "多语言输入支持，统一英文输出"
    ],
    color: "text-purple-600"
  },
  {
    icon: FileText,
    title: "视频脚本生成器",
    description: "借助 AI 生成适用于 YouTube、抖音/TikTok、营销活动与教育内容的高质量视频脚本。",
    benefits: [
      "多种脚本风格（对话体、专业、教育等）",
      "面向目标受众的内容优化",
      "可自定义脚本长度与格式",
      "多语言支持，覆盖全球受众"
    ],
    color: "text-blue-600"
  },
  {
    icon: Brain,
    title: "视频转提示词",
    description: "从现有视频中提炼灵感，并将其转化为适用于各类 AI 视频平台的详细提示词。",
    benefits: [
      "对上传视频进行逐场景分析",
      "物体检测与动作识别",
      "音频与视觉要素提取",
      "兼容 Veo3、Runway 等多平台"
    ],
    color: "text-green-600"
  },
  {
    icon: Mic,
    title: "视频转文字",
    description: "将视频音频精准转换为可检索文本，支持说话人区分与时间戳标注。",
    benefits: [
      "清晰音频场景下 95%+ 的准确率",
      "多语言自动识别与支持",
      "说话人识别与时间戳",
      "适配字幕与文档的专业格式"
    ],
    color: "text-orange-600"
  }
]

const values = [
  {
    icon: Target,
    title: "以用户为中心",
    description: "我们构建的每一款工具都围绕用户需求与工作流而设计，让不同水平的创作者都能轻松上手。",
  },
  {
    icon: Lightbulb,
    title: "创新优先",
    description: "不断探索 AI 的边界，把前沿技术带给每一位日常创作者。",
  },
  {
    icon: Shield,
    title: "隐私与安全",
    description: "采用企业级安全措施，上传内容在处理完成后立即删除，保护你的数据与作品。",
  },
  {
    icon: Rocket,
    title: "持续进化",
    description: "以用户反馈与最新研究为依据快速迭代，确保你始终用上最好的工具。",
  },
]

const impactStories = [
  {
    category: "内容创作者",
    description: "YouTuber 与社媒创作者利用我们的工具生成高吸引力脚本、打造 AI 视频，并通过转录提升可访问性。",
    icon: Video
  },
  {
    category: "市场营销",
    description: "营销团队使用提示词生成器为活动、产品演示与品牌故事打造高转化的视频内容。",
    icon: Target
  },
  {
    category: "教育工作者",
    description: "教师和培训者借助转录与脚本工具创建教学内容、提升视频可访问性，并产出更具吸引力的学习素材。",
    icon: Lightbulb
  },
  {
    category: "开发者",
    description: "AI 开发者与研究者使用我们的工具理解提示工程、分析视频内容，并创建训练数据集。",
    icon: Brain
  }
]

export default function AboutPage() {
  return (
    <main>
      <section className="py-16 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            关于 <span className="text-primary">VeO3 Prompt Generator</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            我们正在用一整套工具重塑创作者与 AI 的协作方式，让高级视频生成、脚本创作与内容分析触手可及。
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Mission */}
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">我们的使命</h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  在 VeO3 Prompt Generator，我们相信内容创作的未来，是人类创造力与人工智能的无缝协作。我们的使命是让
                  每位创作者都能公平地使用先进的 AI 工具，将专业视频创作、脚本撰写与内容分析带给不同背景的人群。
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  我们致力于提供一体化工具，不仅节省时间，更能激发灵感；在此过程中，坚持最高标准的质量、隐私与可靠性。
                </p>
              </div>
            </div>

            {/* Our Tools */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">我们的完整工具矩阵</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {tools.map((tool, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <tool.icon className={`h-8 w-8 ${tool.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
                        <p className="text-muted-foreground mb-4">{tool.description}</p>
                        <ul className="space-y-1">
                          {tool.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="text-sm text-muted-foreground flex items-start">
                              <span className="text-green-500 mr-2">✓</span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* How We Help People */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">我们的工具如何改变工作方式</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {impactStories.map((story, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <story.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{story.category}</h3>
                        <p className="text-muted-foreground">{story.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Values */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">我们的价值观</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <value.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                        <p className="text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* What Makes Us Different */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">我们的差异化优势</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>一体化 AI 套件</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      不同于单一功能工具，我们提供从提示词生成、脚本撰写到视频分析与转录的完整内容创作生态。
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>专业级品质</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      以专业场景为目标打造，具备企业级准确度与功能，可支持个人创作者到大型团队的规模化使用。
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>隐私优先</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      我们将你的隐私与安全放在首位。所有上传内容均在安全环境中处理，并在完成后立即删除。
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>持续创新</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      依托用户反馈与前沿研究持续优化算法与功能，让你始终站在工具能力的前沿。
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Join Our Journey */}
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">加入我们的旅程</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                我们才刚刚起步。加入成千上万的创作者、营销人、教育工作者与开发者，一起用这套完整工具矩阵重塑创作流程，把灵感变成作品。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Badge variant="outline" className="text-sm px-4 py-2">
                  🚀 每月上新功能
                </Badge>
                <Badge variant="outline" className="text-sm px-4 py-2">
                  🌍 全球可用
                </Badge>
                <Badge variant="outline" className="text-sm px-4 py-2">
                  💡 社区共建驱动
                </Badge>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/zh">
                  <Badge className="text-sm px-6 py-3 bg-primary hover:bg-primary/90 cursor-pointer">
                    立即体验 Veo3 提示词生成器
                  </Badge>
                </Link>
                <Link href="/zh/video-script-generator">
                  <Badge variant="outline" className="text-sm px-6 py-3 hover:bg-muted cursor-pointer">
                    视频脚本生成器
                  </Badge>
                </Link>
                <Link href="/zh/video-to-prompt">
                  <Badge variant="outline" className="text-sm px-6 py-3 hover:bg-muted cursor-pointer">
                    视频转提示词
                  </Badge>
                </Link>
                <Link href="/zh/transcription">
                  <Badge variant="outline" className="text-sm px-6 py-3 hover:bg-muted cursor-pointer">
                    视频转文字
                  </Badge>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
