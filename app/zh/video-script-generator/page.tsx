"use client"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useState, useEffect } from "react"
import { Loader2, FileText, Brain, Copy, Check, History } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useToastNotification } from "@/hooks/use-toast-notification"
import { ToolNavigation } from "@/components/zh/tool-navigation"
import { ToastNotification } from "@/components/ui/toast-notification"
import { PromptHistory, addPromptToHistoryGlobal } from "@/components/prompt-history"

export default function VideoScriptGeneratorPage() {
  const [activeTab, setActiveTab] = useState<"video-script" | "history">("video-script")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedScript, setGeneratedScript] = useState("")
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()
  const { showToast, showToastAfterSuccess, closeToast } = useToastNotification()

  // 预告提示语
  const [currentTeaserIndex, setCurrentTeaserIndex] = useState(0)
  const teaserPrompts = [
    "正在为你打造理想脚本…",
    "把灵感织成故事…",
    "创造电影级魔法…",
    "拼合你的视频杰作…"
  ]

  // 播放提示音
  const playNotificationSound = () => {
    try {
      const audio = new Audio('/sounds/toastnotifications.wav')
      audio.volume = 0.5
      audio.play().catch(error => {
        console.log('Audio autoplay blocked or failed:', error)
      })
    } catch (error) {
      console.log('Failed to play notification sound:', error)
    }
  }

  // 生成中轮播预告语
  useEffect(() => {
    if (isGenerating) {
      const interval = setInterval(() => {
        setCurrentTeaserIndex((prev) => (prev + 1) % teaserPrompts.length)
      }, 3000) // 每 3 秒更换
      
      return () => clearInterval(interval)
    }
  }, [isGenerating, teaserPrompts.length])

  // 表单状态
  const [formData, setFormData] = useState({
    videoTopic: "",
    audience: "",
    scriptLength: "",
    scriptStyle: "",
    language: "english",
  })

  // 校验状态
  const [validationErrors, setValidationErrors] = useState<string[]>([])

  const audiences = [
    { value: "general", label: "大众受众" },
    { value: "teens", label: "青少年（13-19）" },
    { value: "young-adults", label: "青年（20-35）" },
    { value: "professionals", label: "职场人士" },
    { value: "parents", label: "父母" },
    { value: "seniors", label: "老年人（55+）" },
  ]

  const scriptLengths = [
    { value: "15-30s", label: "15–30 秒" },
    { value: "30-60s", label: "30–60 秒" },
    { value: "1-2min", label: "1–2 分钟" },
    { value: "2-5min", label: "2–5 分钟" },
    { value: "5-10min", label: "5–10 分钟" },
  ]

  const scriptStyles = [
    { value: "conversational", label: "对话体" },
    { value: "professional", label: "专业" },
    { value: "energetic", label: "活力" },
    { value: "educational", label: "教学/科普" },
    { value: "storytelling", label: "叙事" },
    { value: "promotional", label: "推广/营销" },
  ]

  const languages = [
    { value: "english", label: "English（英语）" },
    { value: "hindi", label: "Hindi（印地语）" },
    { value: "vietnamese", label: "Vietnamese（越南语）" },
    { value: "french", label: "French（法语）" },
    { value: "spanish", label: "Spanish（西班牙语）" },
    { value: "german", label: "German（德语）" },
  ]

  const faqs = [
    {
      question: "我可以为哪些类型的视频生成脚本？",
      answer: "本工具支持多种视频类型：YouTube 内容、TikTok 短视频、营销推广、教育内容、产品演示、故事叙述与宣传素材等。"
    },
    {
      question: "生成的脚本准确吗？",
      answer: "AI 会根据你的受众与风格偏好生成高质量脚本，并针对互动率与转化率做了优化。"
    },
    {
      question: "我可以自定义脚本风格和语气吗？",
      answer: "可以！你可选择对话体、专业、活力、教学、叙事、推广等多种风格，分别适配不同内容与受众。"
    },
    {
      question: "支持哪些语言？",
      answer: "目前支持英语、印地语、越南语、法语、西班牙语与德语。我们会持续新增更多语言服务全球用户。"
    },
    {
      question: "生成脚本需要多久？",
      answer: "通常 10–30 秒，具体取决于需求的复杂度与时长。我们的优化确保快速稳定的结果。"
    },
    {
      question: "生成的脚本可以商用吗？",
      answer: "当然可以！你可将脚本用于任何用途，包括商业项目、客户工作和个人内容创作。"
    }
  ]

  // 表单校验
  const validateForm = () => {
    const errors: string[] = []

    if (!formData.videoTopic.trim()) {
      errors.push("必须填写：视频主题与主要角色")
    }

    if (!formData.audience) {
      errors.push("请选择：目标受众")
    }

    if (!formData.scriptLength) {
      errors.push("请选择：脚本时长")
    }

    if (!formData.scriptStyle) {
      errors.push("请选择：脚本风格")
    }

    if (!formData.language) {
      errors.push("请选择：语言")
    }

    setValidationErrors(errors)
    return errors.length === 0
  }

  const generateScript = async () => {
    // 清空历史错误
    setValidationErrors([])

    // 校验
    if (!validateForm()) {
      toast({
        title: "信息不完整",
        description: `请补充以下字段：${validationErrors.join("、")}`,
        variant: "default",
      })
      return
    }

    setIsGenerating(true)
    setGeneratedScript("")

    try {
      const response = await fetch("/api/generate-video-script", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      if (!response.ok) throw new Error(data.error || "Failed to generate script")

      setGeneratedScript(data.script)
      
      // 保存到历史
      addPromptToHistoryGlobal(
        data.script,
        "video-script",
        "video-script",
        {
          json: false,
          paragraph: true
        }
      )
      
      // 成功提示音
      playNotificationSound()
      
      toast({
        title: "脚本生成成功！",
        description: "你的专业视频脚本已就绪。",
      })
      
      // 书签/分享提示
      showToastAfterSuccess()
    } catch (error) {
      console.error("Error generating script:", error)
      toast({
        title: "生成失败",
        description: error instanceof Error ? error.message : "脚本生成失败，请重试。",
        variant: "destructive",
      })
    } finally {
      setIsGenerating(false)
    }
  }

  const clearForm = () => {
    setFormData({
      videoTopic: "",
      audience: "",
      scriptLength: "",
      scriptStyle: "",
      language: "english",
    })
    setGeneratedScript("")
    setValidationErrors([])
    setCopied(false)
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedScript)
      setCopied(true)
      toast({
        title: "已复制到剪贴板！",
        description: "脚本内容已复制。",
      })
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      toast({
        title: "复制失败",
        description: "复制未成功，请手动复制。",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-black dark:from-black dark:from-black">
      <div className="max-w-[720px] mx-auto px-2 xs:px-3 sm:px-4 pt-6 xs:pt-8 sm:pt-10">
        {/* 标题 */}
        <h1 className="text-center text-3xl xs:text-4xl sm:text-5xl lg:text-5xl font-bold mb-2 xs:mb-3 px-1">
          视频脚本生成器 <span className="text-blue-600">免费在线</span>
        </h1>

        {/* 描述 */}
        <p className="text-gray-700 dark:text-gray-300 text-center mb-4 xs:mb-6 max-w-2xl mx-auto text-sm xs:text-base px-2">
          使用 AI 快速创建精彩视频脚本。适用于 YouTube、TikTok、Instagram 等社交平台内容创作者。
        </p>

        {/* 工具导航 */}
        <ToolNavigation activeTool="video-script-generator" />

        {/* 主卡片 */}
        <Card className="shadow-lg bg-white dark:bg-gray-800 mb-6 xs:mb-8 mx-1 xs:mx-2 sm:mx-0 rounded-lg">
          <CardContent className="p-4 xs:p-5 sm:p-6">
            {/* 标签切换 */}
            <div className="flex items-center justify-center mb-6 gap-2">
              <button
                onClick={() => setActiveTab("video-script")}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  activeTab === "video-script" 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  视频脚本
                </div>
              </button>

              <button
                onClick={() => setActiveTab("history")}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  activeTab === "history" 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                <div className="flex items-center gap-2">
                  <History className="h-4 w-4" />
                  历史记录
                </div>
              </button>
            </div>

            {/* 视频脚本内容 */}
            {activeTab === "video-script" && (
              <div>
                {/* 视频主题与主要角色 */}
                <div className="mb-4 xs:mb-6">
                  <label className="text-sm xs:text-base font-bold mb-2 block">视频主题与主要角色：</label>
                  <Textarea
                    value={formData.videoTopic}
                    onChange={(e) => setFormData({ ...formData, videoTopic: e.target.value })}
                    placeholder="示例：一部关于孤独机器人的短片，它邂逅一朵花。角色：好奇的机器人与会发光的鲜花。"
                    className="min-h-[120px] xs:min-h-[150px] sm:min-h-[180px] md:min-h-[200px] lg:min-h-[250px] resize-none text-sm xs:text-base rounded-lg p-4"
                    maxLength={1500}
                  />
                  <div className="flex justify-between items-center mt-2">
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      请详细描述你的概念、角色与故事
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {formData.videoTopic.length}/1500
                    </div>
                  </div>
                </div>

                {/* 表单网格 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-5 mb-4 xs:mb-6">
                  {/* 受众 */}
                  <div className="space-y-2">
                    <label className="text-sm xs:text-base font-bold">目标受众：</label>
                    <Select
                      value={formData.audience}
                      onValueChange={(value) => setFormData({ ...formData, audience: value })}
                    >
                      <SelectTrigger className="text-sm xs:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400">
                        <SelectValue placeholder="选择受众" />
                      </SelectTrigger>
                      <SelectContent className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                        {audiences.map((audience) => (
                          <SelectItem 
                            key={audience.value} 
                            value={audience.value}
                            className="focus:bg-blue-50 dark:focus:bg-blue-900/20 focus:text-blue-700 dark:focus:text-blue-300 data-[state=checked]:bg-blue-50 dark:data-[state=checked]:bg-blue-900/20 data-[state=checked]:text-blue-700 dark:data-[state=checked]:text-blue-300"
                          >
                            {audience.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* 时长 */}
                  <div className="space-y-2">
                    <label className="text-sm xs:text-base font-bold">脚本时长：</label>
                    <Select
                      value={formData.scriptLength}
                      onValueChange={(value) => setFormData({ ...formData, scriptLength: value })}
                    >
                      <SelectTrigger className="text-sm xs:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400">
                        <SelectValue placeholder="选择时长" />
                      </SelectTrigger>
                      <SelectContent className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                        {scriptLengths.map((length) => (
                          <SelectItem 
                            key={length.value} 
                            value={length.value}
                            className="focus:bg-blue-50 dark:focus:bg-blue-900/20 focus:text-blue-700 dark:focus:text-blue-300 data-[state=checked]:bg-blue-50 dark:data-[state=checked]:bg-blue-900/20 data-[state=checked]:text-blue-700 dark:data-[state=checked]:text-blue-300"
                          >
                            {length.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* 风格 */}
                  <div className="space-y-2">
                    <label className="text-sm xs:text-base font-bold">脚本风格：</label>
                    <Select
                      value={formData.scriptStyle}
                      onValueChange={(value) => setFormData({ ...formData, scriptStyle: value })}
                    >
                      <SelectTrigger className="text-sm xs:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400">
                        <SelectValue placeholder="选择风格" />
                      </SelectTrigger>
                      <SelectContent className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                        {scriptStyles.map((style) => (
                          <SelectItem 
                            key={style.value} 
                            value={style.value}
                            className="focus:bg-blue-50 dark:focus:bg-blue-900/20 focus:text-blue-700 dark:focus:text-blue-300 data-[state=checked]:bg-blue-50 dark:data-[state=checked]:bg-blue-900/20 data-[state=checked]:text-blue-700 dark:data-[state=checked]:text-blue-300"
                          >
                            {style.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* 语言 */}
                  <div className="space-y-2">
                    <label className="text-sm xs:text-base font-bold">语言：</label>
                    <Select
                      value={formData.language}
                      onValueChange={(value) => setFormData({ ...formData, language: value })}
                    >
                      <SelectTrigger className="text-sm xs:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                        {languages.map((lang) => (
                          <SelectItem 
                            key={lang.value} 
                            value={lang.value}
                            className="focus:bg-blue-50 dark:focus:bg-blue-900/20 focus:text-blue-700 dark:focus:text-blue-300 data-[state=checked]:bg-blue-50 dark:data-[state=checked]:bg-blue-900/20 data-[state=checked]:text-blue-700 dark:data-[state=checked]:text-blue-300"
                          >
                            {lang.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* 操作按钮 */}
                <div className="flex gap-3 xs:gap-4">
                  <Button
                    onClick={generateScript}
                    disabled={isGenerating}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white h-10 xs:h-12 text-sm xs:text-base font-medium rounded-lg"
                  >
                    {isGenerating ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        正在生成脚本…
                      </>
                    ) : (
                      <>
                        <FileText className="mr-2 h-4 w-4" />
                        生成脚本
                      </>
                    )}
                  </Button>
                  <Button
                    onClick={clearForm}
                    variant="outline"
                    className="h-10 xs:h-12 px-4 xs:px-6 text-sm xs:text-base rounded-lg"
                    disabled={isGenerating || (!formData.videoTopic.trim() && !generatedScript)}
                  >
                    清空
                  </Button>
                </div>

                {/* 加载动画 */}
                {isGenerating && (
                  <div className="mt-4 space-y-3 animate-in fade-in duration-300">
                    {/* 进度条 */}
                    <div className="px-2.5">
                      <div className="loader-blue"></div>
                    </div>
                    
                    {/* 预告语 */}
                    <div className="text-center">
                      <p className="text-sm text-blue-600 dark:text-blue-400 font-medium animate-pulse">
                        {teaserPrompts[currentTeaserIndex]}
                      </p>
                    </div>
                  </div>
                )}

                {/* 结果 */}
                {generatedScript && (
                  <div className="mt-4 xs:mt-6 p-4 xs:p-5 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="font-bold text-sm xs:text-base">生成的脚本：</h4>
                      <Button
                        onClick={copyToClipboard}
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2"
                      >
                        {copied ? (
                          <>
                            <Check className="h-4 w-4" />
                            已复制
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4" />
                            复制
                          </>
                        )}
                      </Button>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border">
                      <div className="whitespace-pre-wrap text-sm xs:text-base overflow-x-auto text-gray-800 dark:text-gray-200 font-sans leading-relaxed">
                        {generatedScript}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* 历史记录内容 */}
            {activeTab === "history" && (
              <div className="space-y-4">
                <PromptHistory />
              </div>
            )}
          </CardContent>
        </Card>

        {/* 工作原理 */}
        <Card className="shadow-lg bg-white dark:bg-gray-800 mb-6 xs:mb-8 mx-1 xs:mx-2 sm:mx-0 rounded-lg">
          <CardHeader>
            <CardTitle className="text-lg xs:text-xl sm:text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Brain className="h-5 w-5" />
              视频脚本生成器的工作原理
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 xs:p-5">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-sm xs:text-base mb-1">描述你的视频</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">输入视频主题，描述你想在脚本中包含的主要角色或元素。</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-sm xs:text-base mb-1">AI 生成</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">高级 AI 解析你的输入，生成结构清晰、衔接顺畅的专业脚本。</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-sm xs:text-base mb-1">复制与使用</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">复制生成的脚本，用于你的视频制作。内容包含清晰的场景描述与对白。</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 工具简介 */}
        <Card className="shadow-lg bg-white dark:bg-gray-800 mb-6 xs:mb-8 mx-1 xs:mx-2 sm:mx-0 rounded-lg">
          <CardContent className="p-4 xs:p-5">
            <h3 className="text-lg xs:text-xl font-bold mb-3 xs:mb-4 text-blue-600">关于视频脚本生成器</h3>
            <p className="text-sm xs:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              本工具是一款由 AI 驱动的脚本创作助手，帮助内容创作者、影视从业者与视频团队高效产出高质量脚本。你只需描述视频概念与主要角色，AI 即可生成包含场景描述、人物对白与叙事结构的专业脚本。无论是 YouTube 创作者、社媒达人还是营销团队，都能快速获得结构清晰、可直接使用的脚本。
            </p>
          </CardContent>
        </Card>

        {/* 常见问题 */}
        <Card className="shadow-lg bg-white dark:bg-gray-800 mx-1 xs:mx-2 sm:mx-0 rounded-lg">
          <CardHeader>
            <CardTitle className="text-lg xs:text-xl sm:text-2xl font-bold text-blue-600">常见问题</CardTitle>
          </CardHeader>
          <CardContent className="p-4 xs:p-5">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-sm xs:text-base">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-sm text-gray-600 dark:text-gray-400">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
      
      {/* Toast 提示 */}
      <ToastNotification 
        isVisible={showToast} 
        onClose={closeToast} 
      />
    </div>
  )
}

