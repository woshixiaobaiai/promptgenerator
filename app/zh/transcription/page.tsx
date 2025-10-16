"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useState, useCallback } from "react"
import { Loader2, Upload, X, Download, Mic, Brain, Video } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { ToolNavigation } from "@/components/tool-navigation"
import { useDropzone } from "react-dropzone"

export default function TranscriptionPage() {
  const [activeTab, setActiveTab] = useState("transcription")
  const [isTranscribing, setIsTranscribing] = useState(false)
  const [transcription, setTranscription] = useState("")
  const [uploadedVideo, setUploadedVideo] = useState<File | null>(null)
  const [language, setLanguage] = useState("auto")
  const { toast } = useToast()

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0]
      if (file.type.startsWith("video/")) {
        setUploadedVideo(file)
        toast({
          title: "视频上传成功",
          description: `${file.name} 已上传。`,
        })
      } else {
        toast({
          title: "文件类型不支持",
          description: "请上传视频文件。",
          variant: "destructive",
        })
      }
    }
  }, [toast])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "video/*": [".mp4", ".avi", ".mov", ".wmv", ".flv", ".webm"],
    },
    maxFiles: 1,
    maxSize: 100 * 1024 * 1024, // 100MB
  })

  const removeVideo = () => {
    setUploadedVideo(null)
    setTranscription("")
  }

  const transcribeVideo = async () => {
    if (!uploadedVideo) {
      toast({
        title: "尚未上传视频",
        description: "请先上传一个视频文件。",
        variant: "destructive",
      })
      return
    }

    setIsTranscribing(true)
    setTranscription("")

    try {
      console.log("🎵 开始视频转文字...")

      const formData = new FormData()
      formData.append("video", uploadedVideo)

      const response = await fetch("/api/video-to-text", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()
      if (!response.ok) throw new Error(data.error || "视频转文字失败")

      setTranscription(data.transcription)
      toast({
        title: "转写完成",
        description: `用时 ${(data.metadata.processingTime / 1000).toFixed(1)} 秒，模型：${data.metadata.model}`,
      })
    } catch (error) {
      console.error("❌ 视频转文字出错：", error)
      toast({
        title: "转写失败",
        description: error instanceof Error ? error.message : "转换失败，请重试。",
        variant: "destructive",
      })
    } finally {
      setIsTranscribing(false)
    }
  }

  const downloadTranscription = () => {
    if (!transcription) return

    const blob = new Blob([transcription], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `transcription-${Date.now()}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)

    toast({
      title: "开始下载",
      description: "正在下载转写文本文件。",
    })
  }

  const clearAll = () => {
    setUploadedVideo(null)
    setTranscription("")
    setLanguage("auto")
  }

  const languages = [
    { value: "auto", label: "自动检测" },
    { value: "en", label: "英语" },
    { value: "es", label: "西班牙语" },
    { value: "fr", label: "法语" },
    { value: "de", label: "德语" },
    { value: "it", label: "意大利语" },
    { value: "pt", label: "葡萄牙语" },
    { value: "ru", label: "俄语" },
    { value: "ja", label: "日语" },
    { value: "ko", label: "韩语" },
    { value: "zh", label: "中文" },
    { value: "ar", label: "阿拉伯语" },
    { value: "hi", label: "印地语" },
    { value: "vi", label: "越南语" },
  ]

  const faqs = [
    {
      question: "支持哪些视频格式？",
      answer: "我们支持 MP4、AVI、MOV、WMV、FLV、WebM 等主流格式。单个文件最大 100MB。",
    },
    {
      question: "转写准确率如何？",
      answer:
        "在清晰音频条件下，Gemini 2.5 Flash 具有很高的准确率。实际效果取决于音质、噪声和说话人清晰度。",
    },
    {
      question: "支持哪些语言？",
      answer:
        "支持多种语言并可自动检测，包括英语、西班牙语、法语、德语、意大利语、葡萄牙语、俄语、日语、韩语、中文、阿拉伯语、印地语等。",
    },
    {
      question: "是否包含时间戳？",
      answer: "是的！每个片段都会包含时间戳，便于定位和引用视频中的具体位置。",
    },
    {
      question: "需要多长时间？",
      answer:
        "通常 30–60 秒（取决于视频长度与音频质量）。我们对 Gemini 2.5 Flash 做了性能优化，速度稳定。",
    },
    {
      question: "可以商用吗？",
      answer: "当然！你可以将生成的转写用于商业项目、字幕制作和内容分析。",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 dark:from-black dark:from-black dark:from-black">
      <div className="max-w-[720px] mx-auto px-2 xs:px-3 sm:px-4 pt-6 xs:pt-8 sm:pt-10">
        {/* 标题 */}
        <h1 className="text-center text-3xl xs:text-4xl sm:text-5xl lg:text-5xl font-bold mb-2 xs:mb-3 px-1">
          视频转文字 <span className="text-orange-600">免费在线</span>
        </h1>

        {/* 描述 */}
        <p className="text-gray-700 dark:text-gray-300 text-center mb-4 xs:mb-6 max-w-2xl mx-auto text-sm xs:text-base px-2">
          使用 Gemini 2.5 Flash AI 将视频音频精准转写为文本，支持自动语言检测与专业级准确率。
        </p>

        {/* 导航 */}
        <ToolNavigation activeTool="transcription" />

        {/* 主卡片 */}
        <Card className="shadow-lg bg-white dark:bg-gray-800 mb-6 xs:mb-8 mx-1 xs:mx-2 sm:mx-0 rounded-lg">
          <CardContent className="p-4 xs:p-5 sm:p-6">
            {/* 上传区 */}
            <div className="mb-4 xs:mb-6">
              <label className="text-sm xs:text-base font-bold mb-2 block">上传视频：</label>
              <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
                  isDragActive
                    ? "border-orange-500 bg-orange-50 dark:bg-orange-950/20"
                    : "border-gray-300 dark:border-gray-600 hover:border-orange-500 dark:hover:border-orange-500"
                }`}
              >
                <input {...getInputProps()} />
                <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                <p className="text-sm xs:text-base text-gray-600 dark:text-gray-400">
                  {isDragActive ? "把视频拖到这里..." : "拖拽视频到此处，或点击选择文件"}
                </p>
                <p className="text-xs text-gray-500 mt-1">支持 MP4、MOV、AVI（最大 100MB）</p>
              </div>
            </div>

            {/* 文件信息 */}
            {uploadedVideo && (
              <div className="mb-4 xs:mb-6 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Video className="h-4 w-4 text-orange-600" />
                    <span className="text-sm xs:text-base font-medium">{uploadedVideo.name}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setUploadedVideo(null)}
                    className="text-red-600 hover:text-red-700 h-8 px-2"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* 语言选择 */}
            <div className="mb-4 xs:mb-6">
              <label className="text-sm xs:text-base font-bold mb-2 block">语言：</label>
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="min-h-[48px] px-4 text-sm xs:text-base rounded-lg">
                  <SelectValue placeholder="选择语言" />
                </SelectTrigger>
                <SelectContent>
                  {languages.map((lang) => (
                    <SelectItem key={lang.value} value={lang.value}>
                      {lang.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* 操作按钮 */}
            <div className="flex gap-3 xs:gap-4">
              <Button
                onClick={transcribeVideo}
                disabled={isTranscribing || !uploadedVideo}
                className="flex-1 bg-orange-600 hover:bg-orange-700 text-white h-10 xs:h-12 text-sm xs:text-base font-medium rounded-lg"
              >
                {isTranscribing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    转换中...
                  </>
                ) : (
                  <>
                    <Mic className="mr-2 h-4 w-4" />
                    开始转写
                  </>
                )}
              </Button>
              <Button
                onClick={clearAll}
                variant="outline"
                className="h-10 xs:h-12 px-4 xs:px-6 text-sm xs:text-base rounded-lg"
                disabled={isTranscribing || (!uploadedVideo && !transcription)}
              >
                清空
              </Button>
            </div>

            {/* 结果展示 */}
            {transcription && (
              <div className="mt-4 xs:mt-6 p-4 xs:p-5 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-bold text-sm xs:text-base">转写结果：</h4>
                  <Button onClick={downloadTranscription} variant="outline" size="sm" className="text-sm h-8 px-3">
                    <Download className="h-3 w-3 mr-1" />
                    下载
                  </Button>
                </div>
                <pre className="whitespace-pre-wrap text-sm xs:text-base overflow-x-auto">{transcription}</pre>
              </div>
            )}
          </CardContent>
        </Card>

        {/* 工作流程介绍 */}
        <Card className="shadow-lg bg-white dark:bg-gray-800 mb-6 xs:mb-8 mx-1 xs:mx-2 sm:mx-0 rounded-lg">
          <CardHeader>
            <CardTitle className="text-lg xs:text-xl sm:text-2xl font-bold text-orange-600 flex items-center gap-2">
              <Brain className="h-5 w-5" />
              视频转文字如何工作
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 xs:p-5">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-orange-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-sm xs:text-base mb-1">上传视频</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    上传任意视频文件（MP4、MOV、AVI），大小不超过 100MB。系统将自动提取音频并进行分析。
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-orange-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-sm xs:text-base mb-1">Gemini 2.5 Flash</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    由 Gemini 2.5 Flash 进行高精度转写，支持多语言与自动检测。
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-orange-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-sm xs:text-base mb-1">下载与使用</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    结果包含时间戳与音频要点，可下载为文本文件，用于字幕、内容分析或归档。
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 工具说明 */}
        <Card className="shadow-lg bg-white dark:bg-gray-800 mb-6 xs:mb-8 mx-1 xs:mx-2 sm:mx-0 rounded-lg">
          <CardContent className="p-4 xs:p-5">
            <h3 className="text-lg xs:text-xl font-bold mb-3 xs:mb-4 text-orange-600">关于视频转文字工具</h3>
            <p className="text-sm xs:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              我们的视频转文字工具基于 Gemini 2.5 Flash，可将视频中的音频精准转换为文本。支持多语言与自动检测，适合创作者、企业、教育工作者等将视频内容转换为可检索、可访问的文本。输出可包含时间戳、说话人识别与音频分析，结果更全面。
            </p>
          </CardContent>
        </Card>

        {/* FAQ */}
        <Card className="shadow-lg bg-white dark:bg-gray-800 mx-1 xs:mx-2 sm:mx-0 rounded-lg">
          <CardHeader>
            <CardTitle className="text-lg xs:text-xl sm:text-2xl font-bold text-orange-600">常见问题</CardTitle>
          </CardHeader>
          <CardContent className="p-4 xs:p-5">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-sm xs:text-base">{f.question}</AccordionTrigger>
                  <AccordionContent className="text-sm text-gray-600 dark:text-gray-400">{f.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
