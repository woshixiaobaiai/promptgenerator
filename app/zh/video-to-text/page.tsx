"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useState, useCallback } from "react"
import { Loader2, Upload, FileVideo, X, Download, Mic, Languages, Clock, Users, Brain, Video } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { ToolNavigation } from "@/components/zh/tool-navigation"
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
      if (file.type.startsWith('video/') || file.type.startsWith('audio/')) {
        setUploadedVideo(file)
        toast({
          title: "文件上传成功！",
          description: `${file.name} 已上传。`,
        })
      } else {
        toast({
          title: "文件类型无效",
          description: "请上传视频或音频文件。",
          variant: "destructive",
        })
      }
    }
  }, [toast])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'video/*': ['.mp4', '.avi', '.mov', '.wmv', '.flv', '.webm'],
      'audio/*': ['.mp3', '.wav', '.m4a', '.aac', '.ogg', '.flac']
    },
    maxFiles: 1,
    maxSize: 100 * 1024 * 1024 // 100MB
  })

  const removeVideo = () => {
    setUploadedVideo(null)
    setTranscription("")
  }

  const transcribeVideo = async () => {
    if (!uploadedVideo) {
      toast({
        title: "尚未上传文件",
        description: "请先上传一个视频或音频文件。",
        variant: "destructive",
      })
      return
    }

    setIsTranscribing(true)
    setTranscription("")

    try {
      console.log("🎵 开始音视频转文字…")
      
      const formData = new FormData()
      formData.append('video', uploadedVideo)

      const response = await fetch("/api/video-to-text", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()
      if (!response.ok) throw new Error(data.error || "转写失败")

      setTranscription(data.transcription)
      toast({
        title: "转写完成！",
        description: `用时 ${(data.metadata.processingTime / 1000).toFixed(1)} 秒，模型：${data.metadata.model}`,
      })
    } catch (error) {
      console.error("❌ 转写出错：", error)
      toast({
        title: "转写失败",
        description: error instanceof Error ? error.message : "转写失败，请重试。",
        variant: "destructive",
      })
    } finally {
      setIsTranscribing(false)
    }
  }

  const downloadTranscription = () => {
    if (!transcription) return

    const blob = new Blob([transcription], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `transcription-${Date.now()}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)

    toast({
      title: "开始下载！",
      description: "你的转写文本正在下载。",
    })
  }

  const clearAll = () => {
    setUploadedVideo(null)
    setTranscription("")
    setLanguage("auto")
  }

  const languages = [
    { value: "auto", label: "自动检测" },
    { value: "en", label: "English / 英语" },
    { value: "es", label: "Español / 西班牙语" },
    { value: "fr", label: "Français / 法语" },
    { value: "de", label: "Deutsch / 德语" },
    { value: "it", label: "Italiano / 意大利语" },
    { value: "pt", label: "Português / 葡萄牙语" },
    { value: "ru", label: "Русский / 俄语" },
    { value: "ja", label: "日本語 / 日语" },
    { value: "ko", label: "한국어 / 韩语" },
    { value: "zh", label: "中文 / Chinese" },
    { value: "ar", label: "العربية / 阿拉伯语" },
    { value: "hi", label: "हिन्दी / 印地语" },
    { value: "vi", label: "Tiếng Việt / 越南语" },
  ]

  const faqs = [
    {
      question: "支持哪些文件格式进行转文字？",
      answer: "支持主流视频格式（MP4、AVI、MOV、WMV、FLV、WebM）及音频格式（MP3、WAV、M4A、AAC、OGG、FLAC）。最大 100MB。"
    },
    {
      question: "转写准确度如何？",
      answer: "在音频清晰的前提下，Gemini 2.5 Flash 拥有较高准确率。准确度与音频质量、环境噪声、说话清晰度等因素相关。"
    },
    {
      question: "支持哪些语言？",
      answer: "支持多语言并可自动检测，包括英语、西班牙语、法语、德语、意大利语、葡萄牙语、俄语、日语、韩语、中文、阿拉伯语、印地语等。"
    },
    {
      question: "是否包含时间戳？",
      answer: "包含。每个片段都会带有时间戳，便于定位与引用视频中的具体位置。"
    },
    {
      question: "转写需要多久？",
      answer: "通常 30–60 秒，取决于视频长度与音频质量。经过优化的 Gemini 2.5 Flash 能提供快速稳定的结果。"
    },
    {
      question: "可以商用吗？",
      answer: "当然可以！生成的转写文本归你使用，可用于商业项目、字幕制作与内容分析。"
    }
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
          使用 Gemini 2.5 Flash AI 将视频与音频转为文本。自动语言检测，专业级准确度，完整提取音频内容。
        </p>

        {/* 工具导航 */}
        <ToolNavigation activeTool="transcription" />

        {/* 主卡片 */}
        <Card className="shadow-lg bg-white dark:bg-gray-800 mb-6 xs:mb-8 mx-1 xs:mx-2 sm:mx-0 rounded-lg">
          <CardContent className="p-4 xs:p-5 sm:p-6">
            {/* 上传区域 */}
            <div className="mb-4 xs:mb-6">
              <label className="text-sm xs:text-base font-bold mb-2 block">上传文件：</label>
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
                  {isDragActive ? "把文件拖到这里…" : "拖放视频/音频文件到此，或点击选择"}
                </p>
                <p className="text-xs text-gray-500 mt-1">支持 MP4、MOV、AVI、MP3、WAV（最大 100MB）</p>
              </div>
            </div>

            {/* 文件信息 */}
            {uploadedVideo && (
              <div className="mb-4 xs:mb-6 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {uploadedVideo.type.startsWith('video/') ? (
                      <Video className="h-4 w-4 text-orange-600" />
                    ) : (
                      <Mic className="h-4 w-4 text-orange-600" />
                    )}
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
                    正在转写…
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

            {/* 结果 */}
            {transcription && (
              <div className="mt-4 xs:mt-6 p-4 xs:p-5 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-bold text-sm xs:text-base">转写结果：</h4>
                  <Button
                    onClick={downloadTranscription}
                    variant="outline"
                    size="sm"
                    className="text-sm h-8 px-3"
                  >
                    <Download className="h-3 w-3 mr-1" />
                    下载
                  </Button>
                </div>
                <pre className="whitespace-pre-wrap text-sm xs:text-base overflow-x-auto">{transcription}</pre>
              </div>
            )}
          </CardContent>
        </Card>

        {/* 工作原理 */}
        <Card className="shadow-lg bg-white dark:bg-gray-800 mb-6 xs:mb-8 mx-1 xs:mx-2 sm:mx-0 rounded-lg">
          <CardHeader>
            <CardTitle className="text-lg xs:text-xl sm:text-2xl font-bold text-orange-600 flex items-center gap-2">
              <Brain className="h-5 w-5" />
              音/视频转文字的工作原理
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 xs:p-5">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-orange-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-sm xs:text-base mb-1">上传文件</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">上传任意视频（MP4、MOV、AVI）或音频（MP3、WAV、M4A），最大 100MB。AI 将提取并分析全部音频内容。</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-orange-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-sm xs:text-base mb-1">Gemini 2.5 Flash</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">高级 AI 以专业级准确度完成多语言转写，并支持自动语言检测。</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-orange-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-sm xs:text-base mb-1">下载与使用</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">获得带时间戳的转写文本并下载为 .txt，用于字幕、内容检索或文档归档。</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 工具简介 */}
        <Card className="shadow-lg bg-white dark:bg-gray-800 mb-6 xs:mb-8 mx-1 xs:mx-2 sm:mx-0 rounded-lg">
          <CardContent className="p-4 xs:p-5">
            <h3 className="text-lg xs:text-xl font-bold mb-3 xs:mb-4 text-orange-600">关于音/视频转文字</h3>
            <p className="text-sm xs:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              本工具利用 Gemini 2.5 Flash 将视频与音频文件中的语音精准转为文本，支持多语言自动检测。非常适合内容创作者、企业、教育机构及任何需要将音频转换为可检索文本的人群。转写可包含时间戳、说话人识别与音频分析，结果全面易用。
            </p>
          </CardContent>
        </Card>

        {/* 常见问题 */}
        <Card className="shadow-lg bg-white dark:bg-gray-800 mx-1 xs:mx-2 sm:mx-0 rounded-lg">
          <CardHeader>
            <CardTitle className="text-lg xs:text-xl sm:text-2xl font-bold text-orange-600">常见问题</CardTitle>
          </CardHeader>
          <CardContent className="p-4 xs:p-5">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-sm xs:text-base">支持哪些语言？</AccordionTrigger>
                <AccordionContent className="text-sm text-gray-600 dark:text-gray-400">
                  支持 14+ 种语言，包括英语、西班牙语、法语、德语、意大利语、葡萄牙语、荷兰语、俄语、中文、日语、韩语、阿拉伯语、印地语等，并可自动检测视频语言。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-sm xs:text-base">转写准确度如何？</AccordionTrigger>
                <AccordionContent className="text-sm text-gray-600 dark:text-gray-400">
                  AI 提供行业领先的准确率。实际质量受音频清晰度、环境噪音与发音影响；在清晰音频条件下通常可达 95%+。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-sm xs:text-base">是否包含时间戳？</AccordionTrigger>
                <AccordionContent className="text-sm text-gray-600 dark:text-gray-400">
                  是的。所有转写都包含时间戳，便于制作字幕、定位关键片段或分析内容结构。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-sm xs:text-base">可以下载转写结果吗？</AccordionTrigger>
                <AccordionContent className="text-sm text-gray-600 dark:text-gray-400">
                  当然！你可以下载带时间戳的 .txt 文本，方便用于剪辑、字幕或存档。
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
