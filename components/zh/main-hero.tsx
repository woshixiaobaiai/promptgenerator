"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Zap, 
  Brain, 
  Globe, 
  Shield, 
  TrendingUp, 
  Award,
  Video,
  FileText,
  Camera,
  Mic
} from "lucide-react"
import Link from "next/link"

export function MainHero() {
  const features = [
    {
      icon: Zap,
      title: "极速生成",
      description: "借助优化的 AI 算法，数秒内获得结果"
    },
    {
      icon: Shield,
      title: "安全与私密",
      description: "企业级安全，上传文件自动删除"
    },
    {
      icon: Brain,
      title: "先进 AI",
      description: "由 Gemini 2.5 Pro 驱动并智能回退"
    },
    {
      icon: Globe,
      title: "多格式支持",
      description: "同时支持图片、视频与音频文件"
    }
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-black dark:from-black dark:from-black">
      {/* 背景网格 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* 顶部徽标 */}
          <div className="mb-8 sm:mb-12">
            <Badge variant="secondary" className="mb-4 px-3 py-1 text-sm font-medium bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300">
              🚀 AI 驱动的内容生成
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Veo3 <span className="text-purple-700 dark:text-purple-700">提示词生成器</span> · 免费
            </h1>
            
            <p className="text-sm xs:text-base sm:text-lg lg:text-xl xl:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              用前沿 AI 将你的想法转化为专业的视频提示词与脚本。
              非常适合内容创作者、营销人员与企业使用。
            </p>

            {/* 主要操作按钮（移动端优化） */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8">
              <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg">
                <Link href="/zh/veo3-prompt-generator">
                  <Video className="h-4 w-4 sm:h-5 sm:w-5 mr-1.5 sm:mr-2" />
                  Veo3 提示词生成器
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg">
                <Link href="/zh/video-script-generator">
                  <FileText className="h-4 w-4 sm:h-5 sm:w-5 mr-1.5 sm:mr-2" />
                  视频脚本生成器
                </Link>
              </Button>
            </div>

            {/* 次级工具（移动端优化） */}
            <div className="grid grid-cols-2 gap-2 mb-6 sm:flex sm:flex-wrap sm:justify-center sm:gap-3">
              <Button asChild variant="ghost" size="sm" className="text-xs sm:text-sm">
                <Link href="/zh/video-to-prompt">
                  <Camera className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  视频转提示词
                </Link>
              </Button>
              <Button asChild variant="ghost" size="sm" className="text-xs sm:text-sm">
                <Link href="/zh/transcription">
                  <Mic className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  转写（视频转文字）
                </Link>
              </Button>
              <Button asChild variant="ghost" size="sm" className="text-xs sm:text-sm">
                <Link href="/zh/prompt-guide">
                  <Brain className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  提示词指南
                </Link>
              </Button>
              <Button asChild variant="ghost" size="sm" className="text-xs sm:text-sm">
                <Link href="/zh/prompt-library">
                  <Award className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  提示词库
                </Link>
              </Button>
            </div>
          </div>

          {/* 功能栅格（移动端优化） */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                <CardContent className="p-3 sm:p-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-purple-200 dark:group-hover:bg-purple-800 transition-colors">
                    <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-sm sm:text-lg font-semibold mb-1 sm:mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
