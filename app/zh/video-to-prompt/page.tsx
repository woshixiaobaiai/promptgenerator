"use client"

import { useState, useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import { Copy, Upload, Video, Loader2, Brain, X, FileVideo, Eye, Play } from "lucide-react"
import { ToolNavigation } from "@/components/zh/tool-navigation"
import { DetailedAnalysisView } from "@/components/video-analysis-detailed-view"
import { Veo3PromptsView } from "@/components/veo3-prompts-view"
import { DetailedVideoAnalysis, Veo3PromptResult } from "@/lib/services/dual-ai-pipeline"

// 文件校验常量
const MAX_FILE_SIZE = 100 * 1024 * 1024 // 100MB
const MAX_DURATION_SECONDS = 120 // 2 分钟

export default function VideoToPromptPage() {
  const [videoFile, setVideoFile] = useState<File | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [currentStage, setCurrentStage] = useState<'upload' | 'analyzing' | 'converting' | 'complete'>('upload')
  const [detailedAnalysis, setDetailedAnalysis] = useState<DetailedVideoAnalysis | null>(null)
  const [veo3Prompts, setVeo3Prompts] = useState<Veo3PromptResult | null>(null)
  const [totalProcessingTime, setTotalProcessingTime] = useState<number>(0)
  const { toast } = useToast()

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0]
      
      // 校验文件类型
      if (!file.type.startsWith('video/')) {
        toast({
          title: "文件类型无效",
          description: "请上传视频文件（MP4、MOV、AVI 等）",
          variant: "destructive",
        })
        return
      }

      // 校验文件大小
      if (file.size > MAX_FILE_SIZE) {
        toast({
          title: "文件过大",
          description: `请上传小于 100MB 的视频。当前大小：${(file.size / (1024 * 1024)).toFixed(1)}MB`,
          variant: "destructive",
        })
        return
      }

      setVideoFile(file)
      setDetailedAnalysis(null)
      setVeo3Prompts(null)
      setTotalProcessingTime(0)
      setCurrentStage('upload')
      toast({
        title: "视频上传成功！",
        description: `${file.name} 已上传。`,
      })
    }
  }, [toast])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'video/*': ['.mp4', '.avi', '.mov', '.wmv', '.flv', '.webm', '.mkv']
    },
    maxFiles: 1,
    maxSize: MAX_FILE_SIZE
  })

  const removeVideo = () => {
    setVideoFile(null)
    setDetailedAnalysis(null)
    setVeo3Prompts(null)
    setTotalProcessingTime(0)
    setCurrentStage('upload')
  }

  const validateForm = () => {
    if (!videoFile) {
      toast({
        title: "尚未上传视频",
        description: "请先上传一个视频文件。",
        variant: "destructive",
      })
      return false
    }

    return true
  }

  const analyzeVideo = async () => {
    if (!validateForm()) return

    setIsProcessing(true)
    setCurrentStage('analyzing')
    setDetailedAnalysis(null)
    setVeo3Prompts(null)
    setTotalProcessingTime(0)

    try {
      // 构建上传数据
      const formData = new FormData()
      formData.append('video', videoFile!)

      console.log("🚀 启动双 AI 流水线…")
      console.log("📹 文件信息:", { 
        name: videoFile!.name, 
        size: videoFile!.size, 
        type: videoFile!.type 
      })

      const response = await fetch('/api/video-to-veo3', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || '视频处理失败')
      }

      if (!data.success) {
        throw new Error(data.error || '处理失败')
      }

      // 更新结果
      setDetailedAnalysis(data.detailedAnalysis)
      setVeo3Prompts(data.veo3Prompts)
      setTotalProcessingTime(data.totalProcessingTime)
      setCurrentStage('complete')

      toast({
        title: "双 AI 流水线完成！",
        description: `已在 ${(data.totalProcessingTime / 1000).toFixed(1)} 秒内生成 ${data.veo3Prompts.scenes.length} 个 Veo3 提示片段`,
      })
    } catch (error) {
      console.error("❌ 双 AI 流水线错误:", error)
      toast({
        title: "处理失败",
        description: error instanceof Error ? error.message : "视频处理失败，请重试。",
        variant: "destructive"
      })
      setCurrentStage('upload')
    } finally {
      setIsProcessing(false)
    }
  }

  const clearAll = () => {
    setVideoFile(null)
    setDetailedAnalysis(null)
    setVeo3Prompts(null)
    setTotalProcessingTime(0)
    setCurrentStage('upload')
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const faqs = [
    {
      question: "支持哪些视频格式？",
      answer: "支持主流视频格式：MP4、AVI、MOV、WMV、FLV、WebM、MKV。可上传不超过 100MB、时长不超过 2 分钟的视频进行分析。"
    },
    {
      question: "AI 如何分析我的视频？",
      answer: "我们的 Gemini 2.5 Flash 会逐场景进行专业电影摄影分析，提供详尽的灯光描述、全面的音频拆解，以及面向 Veo 的精确技术参数。"
    },
    {
      question: "我能获得怎样的分析结果？",
      answer: "你将获得逐场景的专业拆解：包含摄影/构图、灯光分析、音频描述、对白转写，以及针对每个 8 秒片段的可直接使用的 Veo 生成提示词。"
    },
    {
      question: "视频分析有多准确？",
      answer: "Gemini 2.5 Flash 具备高精度视频理解能力，结合先进的计算机视觉与机器学习算法，能够理解专业电影语言与技术规格。"
    },
    {
      question: "我可以将生成的分析用于商业项目吗？",
      answer: "当然可以！所有生成的分析都归你自由使用，包括商业制作、客户项目与个人创作。"
    },
    {
      question: "视频分析需要多久？",
      answer: "通常 15–30 秒，视视频时长与复杂度而定。我们的优化保证快速、稳定且专业级的输出。"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 dark:from-black dark:from-black dark:from-black">
      <div className="max-w-[720px] mx-auto px-2 xs:px-3 sm:px-4 pt-6 xs:pt-8 sm:pt-10">
        {/* 标题 */}
        <h1 className="text-center text-3xl xs:text-4xl sm:text-5xl lg:text-5xl font-bold mb-2 xs:mb-3 px-1">
          视频转提示词生成器 <span className="text-green-600">免费在线</span>
        </h1>

        {/* 描述 */}
        <p className="text-gray-700 dark:text-gray-300 text-center mb-4 xs:mb-6 max-w-2xl mx-auto text-sm xs:text-base px-2">
          使用我们的双 AI 流水线处理你的现有视频。阶段 1：逐像素精细分析。阶段 2：专业 Veo3 提示词生成。获取详尽分析与可直接使用的提示词。
        </p>

        {/* 工具导航 */}
        <ToolNavigation activeTool="video-to-prompt" />

        {/* 主卡片 */}
        <Card className="shadow-lg bg-white dark:bg-gray-800 mb-6 xs:mb-8 mx-1 xs:mx-2 sm:mx-0 rounded-lg">
          <CardContent className="p-4 xs:p-5 sm:p-6">
            {/* 上传区域 */}
            <div className="mb-4 xs:mb-6">
              <label className="text-sm xs:text-base font-bold mb-2 block">上传视频：</label>
              <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
                  isDragActive
                    ? "border-green-500 bg-green-50 dark:bg-green-950/20"
                    : "border-gray-300 dark:border-gray-600 hover:border-green-500 dark:hover:border-green-500"
                }`}
              >
                <input {...getInputProps()} />
                <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                <p className="text-sm xs:text-base text-gray-600 dark:text-gray-400">
                  {isDragActive ? "将视频拖放到此处…" : "拖拽视频到此处，或点击选择文件"}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  支持 MP4、MOV、AVI、WebM、MKV（最大 100MB，2 分钟）
                </p>
              </div>
            </div>

            {/* 已上传视频展示 */}
            {videoFile && (
              <div className="mb-4 xs:mb-6 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <FileVideo className="h-4 w-4 text-green-600" />
                    <div>
                      <span className="text-sm xs:text-base font-medium">{videoFile.name}</span>
                      <p className="text-xs text-gray-500">{formatFileSize(videoFile.size)}</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={removeVideo}
                    className="text-red-600 hover:text-red-700 h-8 px-2"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* 操作按钮 */}
            <div className="flex gap-3 xs:gap-4">
              <Button
                onClick={analyzeVideo}
                disabled={isProcessing || !videoFile}
                className="flex-1 bg-green-600 hover:bg-green-700 text白 h-10 xs:h-12 text-sm xs:text-base font-medium rounded-lg"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    正在分析视频…
                  </>
                ) : (
                  <>
                    <Brain className="mr-2 h-4 w-4" />
                    开始分析
                  </>
                )}
              </Button>
              <Button
                onClick={clearAll}
                variant="outline"
                className="h-10 xs:h-12 px-4 xs:px-6 text-sm xs:text-base rounded-lg"
                disabled={isProcessing || (!videoFile && !detailedAnalysis)}
              >
                清空
              </Button>
            </div>

            {/* 处理动画 */}
            {isProcessing && (
              <div className="mt-4 space-y-3 animate-in fade-in duration-300">
                <div className="px-2.5">
                  <div className="loader-green"></div>
                </div>
                <div className="text-center">
                  <p className="text-sm text-green-600 dark:text-green-400 font-medium animate-pulse">
                    {currentStage === 'analyzing' && "阶段 1：进行逐像素视频分析…"}
                    {currentStage === 'converting' && "阶段 2：将分析结果转换为 Veo3 提示词…"}
                  </p>
                </div>
              </div>
            )}

            {/* 结果容器 */}
            {currentStage === 'complete' && detailedAnalysis && veo3Prompts && (
              <div className="mt-4 xs:mt-6 space-y-4">
                <Tabs defaultValue="analysis" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="analysis" className="flex items-center gap-2">
                      <Eye className="h-4 w-4" />
                      详细分析
                    </TabsTrigger>
                    <TabsTrigger value="prompts" className="flex items-center gap-2">
                      <Play className="h-4 w-4" />
                      Veo3 提示词
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="analysis" className="mt-4">
                    <DetailedAnalysisView analysis={detailedAnalysis} />
                  </TabsContent>
                  
                  <TabsContent value="prompts" className="mt-4">
                    <Veo3PromptsView prompts={veo3Prompts} />
                  </TabsContent>
                </Tabs>

                {/* 元信息 */}
                <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
                  双 AI 流水线总耗时 {totalProcessingTime}ms
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* 工作原理 */}
        <Card className="shadow-lg bg-white dark:bg-gray-800 mb-6 xs:mb-8 mx-1 xs:mx-2 sm:mx-0 rounded-lg">
          <CardHeader>
            <CardTitle className="text-lg xs:text-xl sm:text-2xl font-bold text-green-600 flex items-center gap-2">
              <Brain className="h-5 w-5" />
              视频转提示词生成器的工作原理
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 xs:p-5">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-sm xs:text-base mb-1">上传视频</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">上传任意视频文件（MP4、MOV、AVI），上限 100MB、2 分钟。系统将分析其视觉内容。</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-sm xs:text-base mb-1">专业场景分析</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Gemini 2.5 Flash 将以专业电影摄影术语进行逐场景解析，并提供细致的音频分析。</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-sm xs:text-base mb-1">获取 Veo 就绪的提示词</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">收到包含摄影、灯光、音频分析的专业场景拆解，以及可直接用于 Veo 生成的提示词。</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 工具简介 */}
        <Card className="shadow-lg bg白 dark:bg-gray-800 mb-6 xs:mb-8 mx-1 xs:mx-2 sm:mx-0 rounded-lg">
          <CardContent className="p-4 xs:p-5">
            <h3 className="text-lg xs:text-xl font-bold mb-3 xs:mb-4 text-green-600">关于视频转提示词生成器</h3>
            <p className="text-sm xs:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              本工具是一款创新的 AI 应用，基于 Gemini 2.5 Flash 将你的现有视频转化为逐场景专业分析。AI 会把视频拆分为 8 秒片段，并输出详尽的摄影分析、专业灯光描述、全面音频拆解以及可直接用于 Veo 的生成提示词。无论是内容创作者、电影人还是视频制作团队，都能借助已有素材生成具备电影质感与精确技术规格的 AI 视频。
            </p>
          </CardContent>
        </Card>

        {/* 常见问题 */}
        <Card className="shadow-lg bg-white dark:bg-gray-800 mx-1 xs:mx-2 sm:mx-0 rounded-lg">
          <CardHeader>
            <CardTitle className="text-lg xs:text-xl sm:text-2xl font-bold text-green-600">常见问题</CardTitle>
          </CardHeader>
          <CardContent className="p-4 xs:p-5">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-b-0">
                  <h4 className="font-semibold text-sm xs:text-base mb-2">{faq.question}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}