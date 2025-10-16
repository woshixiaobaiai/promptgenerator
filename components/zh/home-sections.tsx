import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Zap, 
  Users, 
  Globe, 
  Award, 
  Target, 
  Lightbulb, 
  Shield, 
  Rocket,
  Upload,
  Brain,
  Download,
  Star,
  MessageSquare,
  Trophy,
  Heart,
  Share2,
  TrendingUp,
  ChevronDown,
  Sparkles,
  Camera,
  Mic,
  FileText,
  Video
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

export function HomeSections() {
  const features = [
    {
      icon: Zap,
      title: "极速处理",
      description: "依托优化的 AI 算法与云端架构（含自动回退机制），数秒内获得结果。"
    },
    {
      icon: Shield,
      title: "安全与私密",
      description: "企业级安全防护，文件仅用于处理并在完成后立即删除。"
    },
    {
      icon: Brain,
      title: "先进模型",
      description: "由 Gemini 2.5 Pro 驱动，并智能回退至 OpenRouter，可靠性更高。"
    },
    {
      icon: Globe,
      title: "多格式支持",
      description: "智能处理 JPG、PNG、MP4 等多种图片与视频格式。"
    },
    {
      icon: TrendingUp,
      title: "实时处理",
      description: "实时查看生成进度，配合回退保护机制更稳更快。"
    },
    {
      icon: Award,
      title: "专业品质",
      description: "面向专业与创作场景的高质量输出，并具备 AI 增强能力。"
    }
  ]

  const steps = [
    {
      icon: Upload,
      title: "上传你的内容",
      description: "拖拽或点击选择图片、视频或文本文件，即可开始处理。",
      step: "01"
    },
    {
      icon: Brain,
      title: "AI 深度分析",
      description: "AI 将理解上下文、物体、场景与情绪等要素，完成智能解析。",
      step: "02"
    },
    {
      icon: Download,
      title: "获取结果",
      description: "输出支持多种形式：开发者可用 JSON，创作者可用段落文本等。",
      step: "03"
    }
  ]

  const tools = [
    {
      icon: Video,
      title: "Veo3 提示词生成器",
      description: "为 Google 的 Veo3 AI 视频生成打造结构化表单和进阶对话模式。",
      link: "/zh/veo3-prompt-generator"
    },
    {
      icon: FileText,
      title: "视频脚本生成器",
      description: "为 YouTube、TikTok、Instagram 与营销活动生成专业脚本。",
      link: "/zh/video-script-generator"
    },
    {
      icon: Camera,
      title: "视频转提示词",
      description: "将现有视频转化为可用于 AI 视频生成工具的详细提示词。",
      link: "/zh/video-to-prompt"
    },
    {
      icon: Mic,
      title: "音频转写",
      description: "高准确率转写音频文件，支持多种输出格式。",
      link: "/zh/transcription"
    }
  ]

  const benefits = [
    {
      icon: Rocket,
      title: "大幅节省时间",
      description: "几分钟内将你的想法转化为可投入生产的内容，而非数小时的手工整理。"
    },
    {
      icon: Users,
      title: "专业级品质",
      description: "获取顶级创作者与营销机构使用的企业级 AI 技术。"
    },
    {
      icon: Heart,
      title: "释放创意",
      description: "把复杂技术交给 AI，你只需专注创意表达。"
    },
    {
      icon: TrendingUp,
      title: "更好效果",
      description: "通过优化的 AI 流程，获得更吸睛、更一致、更高质的内容。"
    }
  ]

  const whoCanBenefit = [
    {
      category: "内容创作者",
      description: "需要快速稳定产出的 YouTuber、TikTok 创作者与社媒影响者。",
      icon: Video
    },
    {
      category: "营销团队",
      description: "数字营销与代理团队，用于制作活动视频、产品演示与品牌故事。",
      icon: Target
    },
    {
      category: "教育工作者",
      description: "教师、培训师与教育创作者，打造高参与度的教学素材与教程。",
      icon: Lightbulb
    },
    {
      category: "企业团队",
      description: "用于推广内容、产品演示与企业传播的公司与创业者。",
      icon: Shield
    }
  ]

  const faqs = [
    {
      question: "AI 生成结果的准确度如何？",
      answer: "我们的模型在持续优化中，针对常见内容可达到极高准确度，并结合用户反馈不断迭代。"
    },
    {
      question: "支持哪些文件格式？",
      answer: "图片（JPG、PNG、GIF、WebP）与视频（MP4、AVI、MOV、WebM）等主流格式，单文件最高 100MB。"
    },
    {
      question: "我上传的内容是否安全？",
      answer: "是的。所有文件仅用于处理并在完成后自动删除，全程企业级加密，不做永久存储。"
    },
    {
      question: "生成内容可以商用吗？",
      answer: "完全可以！你可将生成内容用于任何用途，包括商业项目与客户交付。"
    },
    {
      question: "处理需要多长时间？",
      answer: "大多数文件在 10–30 秒内完成；体积更大或更复杂的内容可能需要至多 2 分钟。"
    },
    {
      question: "是否提供 API 接口？",
      answer: "提供。欢迎联系我们获取 RESTful API 文档与定价信息。"
    }
  ]

  return (
    <>
      {/* 工具合集 */}
      <section className="py-8 xs:py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 xs:mb-8 sm:mb-12">
            <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 xs:mb-3 sm:mb-4">
              我们的 <span className="text-purple-600">AI 工具</span>
            </h2>
            <p className="text-sm xs:text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-3 xs:px-4">
              面向创作者与专业人士的全套 AI 工具，助你高效创作优质内容。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 xs:gap-4 sm:gap-6">
            {tools.map((tool, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-3 xs:pt-4 sm:pt-6 p-3 xs:p-4 sm:p-6">
                  <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-2 xs:mb-3 sm:mb-4 group-hover:bg-purple-200 transition-colors">
                    <tool.icon className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 text-purple-600" />
                  </div>
                  <h3 className="text-sm xs:text-base sm:text-lg font-semibold mb-2">{tool.title}</h3>
                  <p className="text-muted-foreground text-xs xs:text-sm sm:text-base mb-4">{tool.description}</p>
                  <Button asChild variant="outline" size="sm">
                    <Link href={tool.link}>
                      立即体验
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 为什么选择我们 */}
      <section className="py-8 xs:py-12 sm:py-16 bg-muted/30">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 xs:mb-8 sm:mb-12">
            <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 xs:mb-3 sm:mb-4">
              为什么选择 <span className="text-purple-600">我们的平台</span>
            </h2>
            <p className="text-sm xs:text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-3 xs:px-4">
              体验更先进、更可靠的企业级 AI 生成平台与特性。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-3 xs:pt-4 sm:pt-6 p-3 xs:p-4 sm:p-6">
                  <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-2 xs:mb-3 sm:mb-4 group-hover:bg-purple-200 transition-colors">
                    <feature.icon className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 text-purple-600" />
                  </div>
                  <h3 className="text-sm xs:text-base sm:text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-xs xs:text-sm sm:text-base">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 工作流程 */}
      <section className="py-8 xs:py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 xs:mb-8 sm:mb-12">
            <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 xs:mb-3 sm:mb-4">
              如何 <span className="text-purple-600">开始使用</span>
            </h2>
            <p className="text-sm xs:text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-3 xs:px-4">
              三个简单步骤，就能把想法变成高质量内容。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xs:gap-6 sm:gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-3 xs:pt-4 sm:pt-6 p-3 xs:p-4 sm:p-6">
                  <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-2 xs:mb-3 sm:mb-4 text-white font-bold text-sm xs:text-lg sm:text-xl">
                    {step.step}
                  </div>
                  <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2 xs:mb-3 sm:mb-4">
                    <step.icon className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 text-purple-600" />
                  </div>
                  <h3 className="text-sm xs:text-base sm:text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-xs xs:text-sm sm:text-base">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 核心优势 */}
      <section className="py-8 xs:py-12 sm:py-16 bg-muted/30">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 xs:mb-8 sm:mb-12">
            <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 xs:mb-3 sm:mb-4">
              关键 <span className="text-purple-600">优势</span>
            </h2>
            <p className="text-sm xs:text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-3 xs:px-4">
              了解我们的 AI 平台如何改变你的内容生产流程。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-3 xs:pt-4 sm:pt-6 p-3 xs:p-4 sm:p-6">
                  <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2 xs:mb-3 sm:mb-4">
                    <benefit.icon className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 text-green-600" />
                  </div>
                  <h3 className="text-sm xs:text-base sm:text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-xs xs:text-sm sm:text-base">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 平台简介（精简） */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12">
              {/* 文案 */}
              <div className="flex-1">
                <div className="mb-4">
                  <Button asChild variant="outline" className="px-3 py-1 text-sm font-medium border-green-500 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20">
                    <Link href="https://trustpilot.com" target="_blank" rel="noopener noreferrer">
                      ⭐ 在 Trustpilot 上评价我们
                    </Link>
                  </Button>
                </div>
                
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                  关于 <span className="text-purple-600 dark:text-purple-400">Veo3 Prompt Generator</span>
                </h2>
                
                <div className="space-y-4">
                  <p className="text-[15px] sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    我们的使命是用 AI 工具重塑内容创作方式，帮助每个人释放创意与效率。我们深知在快速变化的数字时代，优质内容是成功的关键。
                  </p>
                  <p className="text-[15px] sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    欢迎与创建 Veo3 Prompt Generator 的 AI 工程师团队一起，解锁 AI 的全部潜力。通过精心设计的提示词工具，我们让 AI 更易用也更强大——新手能快速上手，高手也有进阶能力。
                  </p>
                  <p className="text-[15px] sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    凭借多年 AI 开发与内容制作经验，我们提供覆盖多场景的完整工具链：从 Veo3 提示词到视频脚本再到视频分析与转写。我们持续迭代模型与功能，以保持行业领先并满足用户需求。
                  </p>
                </div>
                
                <div className="mt-6">
                  <Button asChild variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20">
                    <Link href="/zh/about">
                      了解更多
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 常见问题 */}
      <section className="py-8 xs:py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 xs:mb-8 sm:mb-12">
            <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 xs:mb-3 sm:mb-4">
              常见 <span className="text-purple-600">问题</span>
            </h2>
            <p className="text-sm xs:text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-3 xs:px-4">
              这里汇总了大家最关心的问题与解答
            </p>
          </div>

          <div className="max-w-3xl mx-auto px-3 xs:px-4">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-xs xs:text-sm sm:text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-xs xs:text-sm sm:text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            {/* FAQ 结构化数据 */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  "mainEntity": faqs.map((faq) => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": faq.answer
                    }
                  }))
                })
              }}
            />
          </div>
        </div>
      </section>

      {/* 页尾召唤 */}
      <section className="py-8 xs:py-12 sm:py-16 bg-gradient-to-br from-purple-600 to-purple-800 dark:from-black dark:from-black dark:from-black text-white">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 xs:mb-3 sm:mb-4">
            准备好升级你的内容了吗？
          </h2>
          <p className="text-sm xs:text-lg sm:text-xl mb-4 xs:mb-6 sm:mb-8 max-w-2xl mx-auto opacity-90 px-3 xs:px-4">
            加入成千上万的创作者，马上用我们的 AI 平台创作出色内容。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg白 text-purple-600 hover:bg-gray-100 h-10 xs:h-12 sm:h-14 px-4 xs:px-6 sm:px-8 text-sm xs:text-base sm:text-lg">
              <Link href="/zh/veo3-prompt-generator">免费开始</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 h-10 xs:h-12 sm:h-14 px-4 xs:px-6 sm:px-8 text-sm xs:text-base sm:text-lg">
              <Link href="/zh/tools">查看全部工具</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
