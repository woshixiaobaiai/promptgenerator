"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useToast } from "@/hooks/use-toast"
import { MessageSquare, Camera, FileText, Type, Info, Video, Loader2, Brain, Copy, Check, Settings, History } from "lucide-react"
import { ToolNavigation } from "@/components/zh/tool-navigation"
import { ToastNotification } from "@/components/ui/toast-notification"
import { useToastNotification } from "@/hooks/use-toast-notification"
import { PromptHistory, addPromptToHistoryGlobal } from "@/components/prompt-history"

export default function Veo3PromptGeneratorPage() {
  const [activeMode, setActiveMode] = useState("chat")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedPrompts, setGeneratedPrompts] = useState<{
    jsonPrompt: string
    paragraphPrompt: string
    metadata?: any
  } | null>(null)
  const { toast } = useToast()
  const { showToast, showToastAfterSuccess, closeToast } = useToastNotification()

  // Output options state
  const [outputOptions, setOutputOptions] = useState({
    jsonPrompt: false,
    paragraphPrompt: true,
    subtitles: "no", // "yes" or "no"
    dialogue: "yes" // "yes", "ai", or "no"
  })

  // Advanced Mode State
  const [advancedData, setAdvancedData] = useState({
    mainSubject: "",
    sceneAction: "",
    cameraMovement: "",
    otherDetails: "",
    subtitles: "no",
    targetAudience: "",
    videoStyle: "Cinematic",
    durationPreference: "8 seconds",
    lightingStyle: "",
    colorPalette: "",
    audioElements: "",
    specialEffects: ""
  })

  // Chat Mode State
  const [chatInput, setChatInput] = useState("")

  // Teaser prompts state
  const [currentTeaserIndex, setCurrentTeaserIndex] = useState(0)
  const teaserPrompts = [
    "We're pulling magic from the cloud…",
    "Consulting the prompt oracle…",
    "Cooking something magical",
    "Creating something you love just a sec. please"
  ]

  // Function to play notification sound
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

  // Cycle through teaser prompts when generating
  useEffect(() => {
    if (isGenerating) {
      const interval = setInterval(() => {
        setCurrentTeaserIndex((prev) => (prev + 1) % teaserPrompts.length)
      }, 3000) // Change every 3 seconds
      
      return () => clearInterval(interval)
    }
  }, [isGenerating, teaserPrompts.length])

  const generateChatPrompt = async () => {
    if (!chatInput.trim()) {
      toast({
        title: "Missing Input",
        description: "Please describe your video idea.",
        variant: "destructive",
      })
      return
    }

    // Check if at least one output type is selected
    if (!outputOptions.jsonPrompt && !outputOptions.paragraphPrompt) {
      toast({
        title: "No Output Selected",
        description: "Please select at least one output format (JSON or Paragraph).",
        variant: "destructive",
      })
      return
    }

    setIsGenerating(true)
    setGeneratedPrompts(null)

    try {
      const results: any = {}
      let totalProcessingTime = 0
      let usedModel = "unknown"

      // Generate JSON prompt ONLY if selected
      if (outputOptions.jsonPrompt) {
        console.log("Generating JSON prompt...")
        const jsonResponse = await fetch("/api/simple-veo3-prompt/json", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
            input: chatInput,
            dialogueSetting: outputOptions.dialogue
          }),
        })

        const jsonData = await jsonResponse.json()

        if (!jsonResponse.ok) {
          throw new Error(jsonData.error || "Failed to generate JSON prompt")
        }

        results.jsonPrompt = jsonData.jsonPrompt
        results.jsonMetadata = jsonData.metadata
        totalProcessingTime += jsonData.metadata?.processingTime || 0
        usedModel = jsonData.metadata?.model || "unknown"
      }

      // Generate paragraph prompt ONLY if selected
      if (outputOptions.paragraphPrompt) {
        console.log("Generating paragraph prompt...")
        const paragraphResponse = await fetch("/api/simple-veo3-prompt/paragraph", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
          body: JSON.stringify({ 
            input: chatInput,
            dialogueSetting: outputOptions.dialogue
          }),
        })

        const paragraphData = await paragraphResponse.json()

        if (!paragraphResponse.ok) {
          throw new Error(paragraphData.error || "Failed to generate paragraph prompt")
        }

        results.paragraphPrompt = paragraphData.paragraphPrompt
        results.paragraphMetadata = paragraphData.metadata
        totalProcessingTime += paragraphData.metadata?.processingTime || 0
        usedModel = paragraphData.metadata?.model || usedModel
      }

      setGeneratedPrompts({
        jsonPrompt: results.jsonPrompt || "",
        paragraphPrompt: results.paragraphPrompt || "",
        metadata: {
          model: usedModel,
          processingTime: totalProcessingTime,
          mode: "chat",
          outputsGenerated: {
            json: outputOptions.jsonPrompt,
            paragraph: outputOptions.paragraphPrompt
          }
        }
      })

      // Save to prompt history
      const promptToSave = outputOptions.paragraphPrompt 
        ? results.paragraphPrompt 
        : results.jsonPrompt || chatInput
      
      addPromptToHistoryGlobal(
        promptToSave,
        "chat",
        "veo3-prompt",
        {
          json: outputOptions.jsonPrompt,
          paragraph: outputOptions.paragraphPrompt
        }
      )

      const outputTypes = []
      if (outputOptions.jsonPrompt) outputTypes.push("JSON")
      if (outputOptions.paragraphPrompt) outputTypes.push("Paragraph")

      // Play notification sound when prompt is generated successfully
      playNotificationSound()

      toast({
        title: "AI Prompt Generated!",
        description: `${outputTypes.join(" & ")} format${outputTypes.length > 1 ? 's' : ''} ready.`,
      })
      
      // Show bookmark toast notification
      showToastAfterSuccess()
    } catch (error) {
      console.error("Error generating prompt:", error)
      toast({
        title: "Generation failed",
        description: error instanceof Error ? error.message : "Failed to generate prompt. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsGenerating(false)
    }
  }

  const generateAdvancedPrompt = async () => {
    if (!advancedData.mainSubject.trim() || !advancedData.sceneAction.trim()) {
      toast({
        title: "Missing Required Fields",
        description: "Please fill in the main subject and scene action fields.",
        variant: "destructive",
      })
      return
    }

    // Check if at least one output type is selected
    if (!outputOptions.jsonPrompt && !outputOptions.paragraphPrompt) {
      toast({
        title: "No Output Selected",
        description: "Please select at least one output format (JSON or Paragraph).",
        variant: "destructive",
      })
      return
    }

    setIsGenerating(true)
    setGeneratedPrompts(null)

    try {
      const results: any = {}
      let totalProcessingTime = 0
      let usedModel = "unknown"

      // Generate JSON prompt ONLY if selected
      if (outputOptions.jsonPrompt) {
        console.log("Generating Advanced JSON prompt...")
        const jsonResponse = await fetch("/api/advanced-veo3-prompt/json", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
            formData: advancedData,
            dialogueSetting: outputOptions.dialogue
          }),
        })

        const jsonData = await jsonResponse.json()

        if (!jsonResponse.ok) {
          throw new Error(jsonData.error || "Failed to generate Advanced JSON prompt")
        }

        results.jsonPrompt = jsonData.jsonPrompt
        results.jsonMetadata = jsonData.metadata
        totalProcessingTime += jsonData.metadata?.processingTime || 0
        usedModel = jsonData.metadata?.model || "unknown"
      }

      // Generate paragraph prompt ONLY if selected
      if (outputOptions.paragraphPrompt) {
        console.log("Generating Advanced paragraph prompt...")
        const paragraphResponse = await fetch("/api/advanced-veo3-prompt/paragraph", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
          body: JSON.stringify({ 
            formData: advancedData,
            dialogueSetting: outputOptions.dialogue
          }),
        })

        const paragraphData = await paragraphResponse.json()

        if (!paragraphResponse.ok) {
          throw new Error(paragraphData.error || "Failed to generate Advanced paragraph prompt")
        }

        results.paragraphPrompt = paragraphData.paragraphPrompt
        results.paragraphMetadata = paragraphData.metadata
        totalProcessingTime += paragraphData.metadata?.processingTime || 0
        usedModel = paragraphData.metadata?.model || usedModel
      }

      setGeneratedPrompts({
        jsonPrompt: results.jsonPrompt || "",
        paragraphPrompt: results.paragraphPrompt || "",
        metadata: {
          model: usedModel,
          processingTime: totalProcessingTime,
          mode: "advanced",
          outputsGenerated: {
            json: outputOptions.jsonPrompt,
            paragraph: outputOptions.paragraphPrompt
          }
        }
      })

      // Save to prompt history
      const promptToSave = outputOptions.paragraphPrompt 
        ? results.paragraphPrompt 
        : results.jsonPrompt || `${advancedData.mainSubject} - ${advancedData.sceneAction}`
      
      addPromptToHistoryGlobal(
        promptToSave,
        "advanced",
        "veo3-prompt",
        {
          json: outputOptions.jsonPrompt,
          paragraph: outputOptions.paragraphPrompt
        }
      )

      const outputTypes = []
      if (outputOptions.jsonPrompt) outputTypes.push("JSON")
      if (outputOptions.paragraphPrompt) outputTypes.push("Paragraph")

      // Play notification sound when prompt is generated successfully
      playNotificationSound()

      toast({
        title: "Advanced AI Prompt Generated!",
        description: `${outputTypes.join(" & ")} format${outputTypes.length > 1 ? 's' : ''} ready.`,
      })
      
      // Show bookmark toast notification
      showToastAfterSuccess()
    } catch (error) {
      console.error("Error generating advanced prompt:", error)
      toast({
        title: "Generation failed",
        description: error instanceof Error ? error.message : "Failed to generate advanced prompt. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsGenerating(false)
    }
  }

  const clearForm = () => {
    setAdvancedData({
      mainSubject: "",
      sceneAction: "",
      cameraMovement: "",
      otherDetails: "",
      subtitles: "no",
      targetAudience: "",
      videoStyle: "Cinematic",
      durationPreference: "8 seconds",
      lightingStyle: "",
      colorPalette: "",
      audioElements: "",
      specialEffects: ""
    })
    setChatInput("")
    setGeneratedPrompts(null)
    setOutputOptions({
      jsonPrompt: false,
      paragraphPrompt: true,
      subtitles: "no",
      dialogue: "yes"
    })
  }

  const faqs = [
  {
    question: "什么是 Veo3？这个生成器有什么用？",
    answer: "Veo3 是 Google 的先进 AI 视频生成模型。我们的提示词生成器会创建详尽、结构化的提示，帮助 Veo3 准确理解你要创作的视频，包括场景细节、镜头运动、灯光与音频元素。"
  },
  {
    question: "JSON 与段落格式有什么区别？",
    answer: "JSON 格式提供结构化数据，便于技术处理与 API 集成；段落格式则以叙事描述为主，更适合创意生成。两种格式包含相同信息，但针对不同使用场景做了优化。"
  },
  {
    question: "我可以将生成的提示词用于商业用途吗？",
    answer: "当然可以！所有生成的提示词都归你使用，包括商业项目、客户工作和个人内容创作。这些提示词可用于 Google 的 Veo3 以及其他 AI 视频生成工具。"
  },
  {
    question: "生成的提示词有多准确？",
    answer: "我们的 AI 模型在提示词生成方面可达到 99.5% 的准确率，并通过机器学习与用户反馈持续改进。提示词会针对 Veo3 的能力与要求进行专项优化。"
  },
  {
    question: "Veo3 支持哪些视频规格？",
    answer: "Veo3 可生成最长约 2 分钟、分辨率最高 4K 的视频。我们的提示词针对 15–60 秒的专业电影级短片做了优化，非常适合社媒与营销内容。"
  },
  {
    question: "使用这个工具需要技术背景吗？",
    answer: "不需要！我们的工具提供结构化（表单）与高级（对话）两种模式。你只需用自然语言描述视频想法，AI 就会为你生成专业提示词。"
  }
]


  return (
  <>
    {/* 结构化数据（SEO） */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "免费 Veo3 提示词生成器",
          "description": "为谷歌 Veo3 生成可直接用于制作的提示词。我们的免费工具可生成高级 JSON 与段落格式提示词，内含爆款模板与完整的电影级控制，无需注册。",
          "url": "https://veo3promptgenerator.online/veo3-prompt-generator",
          "applicationCategory": "MultimediaApplication",
          "operatingSystem": "Web Browser",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "creator": {
            "@type": "Organization",
            "name": "Veo3 提示词生成器"
          },
          "featureList": [
            "高级 JSON 提示词生成",
            "爆款视频模板",
            "电影级细节控制",
            "段落式提示词格式",
            "无需注册",
            "永久免费使用"
          ],
          "screenshot": "https://veo3promptgenerator.online/images/screenshot-desktop.png",
          "softwareVersion": "1.0",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "1250"
          }
        })
      }}
    />
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-black dark:from-black dark:from-black">
      <div className="max-w-[720px] mx-auto px-2 xs:px-3 sm:px-4 pt-6 xs:pt-8 sm:pt-10">
        {/* 标题 */}
        <h1 className="text-center text-2xl xs:text-3xl sm:text-4xl lg:text-4xl font-bold mb-3 xs:mb-4 px-1">
          免费 Veo3 提示词生成器 <span className="text-purple-600">在线版</span>
        </h1>

        {/* 描述 */}
        <p className="text-gray-700 dark:text-gray-300 text-center mb-4 xs:mb-6 max-w-3xl mx-auto text-sm xs:text-base px-2 leading-relaxed">
          将你的创意转化为惊艳的高质量视频。我们的 AI 工具基于 10,000+ 专业提示词训练，为你提供前所未有的精细控制——从多角色对白到精确的镜头运动。100% 免费，无需注册。
        </p>

        {/* 导航标签 */}
        <ToolNavigation activeTool="veo3-prompt-generator" />

        {/* 主卡片 */}
        <Card className="shadow-lg bg-white dark:bg-gray-800 mb-6 xs:mb-8 mx-1 xs:mx-2 sm:mx-0 rounded-lg">
          <CardContent className="p-4 xs:p-5 sm:p-6">
            {/* 模式切换 */}
            <div className="flex items-center justify-center mb-6 gap-2">
              <button
                onClick={() => setActiveMode("chat")}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  activeMode === "chat" 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  对话模式
                </div>
              </button>
              
              <button
                onClick={() => setActiveMode("advanced")}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  activeMode === "advanced" 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  高级模式
                </div>
              </button>

              <button
                onClick={() => setActiveMode("history")}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  activeMode === "history" 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                <div className="flex items-center gap-2">
                  <History className="h-4 w-4" />
                  历史记录
                </div>
              </button>
            </div>

            {/* 对话模式内容 */}
            {activeMode === "chat" && (
              <div className="space-y-4 xs:space-y-6">
                <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                  <p className="text-sm xs:text-base text-blue-800 dark:text-blue-200">
                    请清晰描述你的创意，注明所需视频尺寸，并准确界定目标受众。
                    示例：一名宇航员踏上登月探索任务；竖屏视频，用于 TikTok，面向对太空与天体感兴趣的受众。
                  </p>
                </div>

                <div className="space-y-2">
                  <Textarea
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="描述你想创作的视频……"
                    className="min-h-[120px] xs:min-h-[150px] sm:min-h-[200px] resize-none text-sm xs:text-base"
                    maxLength={1000}
                  />
                  <div className="text-xs text-gray-500 text-right">
                    {chatInput.length}/1000 字符
                  </div>
                </div>
              </div>
            )}

            {/* 高级模式内容 */}
            {activeMode === "advanced" && (
              <div className="space-y-4 xs:space-y-6">
                {/* 主体（必填） */}
                <div className="space-y-2">
                  <label className="text-sm xs:text-base font-bold text-red-600">
                    视频主体：*必填
                  </label>
                  <Input
                    value={advancedData.mainSubject}
                    onChange={(e) => setAdvancedData((prev) => ({ ...prev, mainSubject: e.target.value }))}
                    placeholder="描述主体的外观、服装与特征……"
                    className="border-red-200 focus:border-red-500 text-sm xs:text-base"
                  />
                  {!advancedData.mainSubject.trim() && (
                    <div className="text-xs text-red-600 bg-red-50 px-2 py-1 rounded">
                      该字段为必填项
                    </div>
                  )}
                </div>

                {/* 场景动作（必填） */}
                <div className="space-y-2">
                  <label className="text-sm xs:text-base font-bold text-red-600">
                    场景动作：*必填
                  </label>
                  <Input
                    value={advancedData.sceneAction}
                    onChange={(e) => setAdvancedData((prev) => ({ ...prev, sceneAction: e.target.value }))}
                    placeholder="主体在场景中的动作或情绪是什么？"
                    className="border-red-200 focus:border-red-500 text-sm xs:text-base"
                  />
                  {!advancedData.sceneAction.trim() && (
                    <div className="text-xs text-red-600 bg-red-50 px-2 py-1 rounded">
                      该字段为必填项
                    </div>
                  )}
                </div>

                {/* 目标受众 */}
                <div className="space-y-2">
                  <label className="text-sm xs:text-base font-medium">
                    目标受众
                  </label>
                  <Input
                    value={advancedData.targetAudience}
                    onChange={(e) => setAdvancedData((prev) => ({ ...prev, targetAudience: e.target.value }))}
                    placeholder="例如：青年人、儿童、商务人士……"
                    className="text-sm xs:text-base"
                  />
                </div>

                {/* 视频风格 */}
                <div className="space-y-2">
                  <label className="text-sm xs:text-base font-medium">
                    视频风格
                  </label>
                  <select
                    value={advancedData.videoStyle}
                    onChange={(e) => setAdvancedData((prev) => ({ ...prev, videoStyle: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm xs:text-base bg-white dark:bg-gray-800 dark:border-gray-600"
                  >
                    <option value="Cinematic">电影感</option>
                    <option value="Documentary">纪录片</option>
                    <option value="Commercial">商业广告</option>
                    <option value="Educational">教学</option>
                    <option value="Artistic">艺术</option>
                    <option value="Minimalist">极简</option>
                  </select>
                </div>

                {/* 镜头运动 */}
                <div className="space-y-2">
                  <label className="text-sm xs:text-base font-medium">
                    镜头运动
                  </label>
                  <Input
                    value={advancedData.cameraMovement}
                    onChange={(e) => setAdvancedData((prev) => ({ ...prev, cameraMovement: e.target.value }))}
                    placeholder="慢速推进、航拍、特写、跟拍等……"
                    className="text-sm xs:text-base"
                  />
                </div>

                {/* 灯光风格 */}
                <div className="space-y-2">
                  <label className="text-sm xs:text-base font-medium">
                    灯光风格
                  </label>
                  <Input
                    value={advancedData.lightingStyle}
                    onChange={(e) => setAdvancedData((prev) => ({ ...prev, lightingStyle: e.target.value }))}
                    placeholder="自然光、戏剧光、柔光、硬光、彩色灯光……"
                    className="text-sm xs:text-base"
                  />
                </div>

                {/* 配色方案 */}
                <div className="space-y-2">
                  <label className="text-sm xs:text-base font-medium">
                    配色方案
                  </label>
                  <Input
                    value={advancedData.colorPalette}
                    onChange={(e) => setAdvancedData((prev) => ({ ...prev, colorPalette: e.target.value }))}
                    placeholder="暖色调、冷色调、黑白、鲜艳、低饱和……"
                    className="text-sm xs:text-base"
                  />
                </div>

                {/* 音频元素 */}
                <div className="space-y-2">
                  <label className="text-sm xs:text-base font-medium">
                    音频元素
                  </label>
                  <Input
                    value={advancedData.audioElements}
                    onChange={(e) => setAdvancedData((prev) => ({ ...prev, audioElements: e.target.value }))}
                    placeholder="背景音乐、音效、环境声……"
                    className="text-sm xs:text-base"
                  />
                </div>

                {/* 特效 */}
                <div className="space-y-2">
                  <label className="text-sm xs:text-base font-medium">
                    特效
                  </label>
                  <Input
                    value={advancedData.specialEffects}
                    onChange={(e) => setAdvancedData((prev) => ({ ...prev, specialEffects: e.target.value }))}
                    placeholder="VFX、转场、滤镜、叠加效果……"
                    className="text-sm xs:text-base"
                  />
                </div>

                {/* 其他细节 */}
                <div className="space-y-2">
                  <label className="text-sm xs:text-base font-medium">
                    其他细节
                  </label>
                  <Textarea
                    value={advancedData.otherDetails}
                    onChange={(e) => setAdvancedData((prev) => ({ ...prev, otherDetails: e.target.value }))}
                    placeholder="其他具体要求、氛围、情绪或技术规格……"
                    className="min-h-[100px] resize-none text-sm xs:text-base"
                    maxLength={500}
                  />
                  <div className="text-xs text-gray-500 text-right">
                    {advancedData.otherDetails.length}/500 字符
                  </div>
                </div>
              </div>
            )}

            {/* 历史模式 */}
            {activeMode === "history" && (
              <div className="space-y-4">
                <PromptHistory />
              </div>
            )}

            {/* 输出选项 */}
            {activeMode !== "history" && (
              <div className="mt-6 space-y-2">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-sm xs:text-base mb-2">输出选项</h3>
                  
                  {/* 提示词类型 */}
                  <div className="flex space-x-2 xs:space-x-4">
                    <div className="flex items-center space-x-1.5 xs:space-x-2">
                      <Checkbox
                        id="paragraph-prompt"
                        checked={outputOptions.paragraphPrompt}
                        onCheckedChange={(checked) => 
                          setOutputOptions(prev => ({ ...prev, paragraphPrompt: checked as boolean }))
                        }
                      />
                      <Label htmlFor="paragraph-prompt" className="text-xs xs:text-sm">段落提示词</Label>
                    </div>
                    
                    <div className="flex items-center space-x-1.5 xs:space-x-2">
                      <Checkbox
                        id="json-prompt"
                        checked={outputOptions.jsonPrompt}
                        onCheckedChange={(checked) => 
                          setOutputOptions(prev => ({ ...prev, jsonPrompt: checked as boolean }))
                        }
                      />
                      <Label htmlFor="json-prompt" className="text-xs xs:text-sm">JSON 提示词</Label>
                    </div>
                  </div>

                  {/* 对白设置 */}
                  <div className="mt-4">
                    <Label className="font-semibold text-sm xs:text-base">对白设置</Label>
                    <div className="flex space-x-2 xs:space-x-4 mt-1">
                      <div className="flex items-center space-x-1.5 xs:space-x-2">
                        <Checkbox
                          id="dialogue-yes"
                          checked={outputOptions.dialogue === "yes"}
                          onCheckedChange={(checked) => 
                            setOutputOptions(prev => ({ ...prev, dialogue: checked ? "yes" : "no" }))
                          }
                        />
                        <Label htmlFor="dialogue-yes" className="text-xs xs:text-sm">有对白</Label>
                      </div>
                      <div className="flex items-center space-x-1.5 xs:space-x-2">
                        <Checkbox
                          id="dialogue-ai"
                          checked={outputOptions.dialogue === "ai"}
                          onCheckedChange={(checked) => 
                            setOutputOptions(prev => ({ ...prev, dialogue: checked ? "ai" : "no" }))
                          }
                        />
                        <Label htmlFor="dialogue-ai" className="text-xs xs:text-sm">自动生成</Label>
                      </div>
                      <div className="flex items-center space-x-1.5 xs:space-x-2">
                        <Checkbox
                          id="dialogue-no"
                          checked={outputOptions.dialogue === "no"}
                          onCheckedChange={(checked) => 
                            setOutputOptions(prev => ({ ...prev, dialogue: checked ? "no" : "yes" }))
                          }
                        />
                        <Label htmlFor="dialogue-no" className="text-xs xs:text-sm">无对白</Label>
                      </div>
                    </div>
                  </div>

                  {/* 字幕 */}
                  <div className="mt-4">
                    <Label className="font-semibold text-sm xs:text-base">字幕</Label>
                    <div className="flex space-x-2 xs:space-x-4 mt-1">
                      <div className="flex items-center space-x-1.5 xs:space-x-2">
                        <Checkbox
                          id="subtitles-no"
                          checked={outputOptions.subtitles === "no"}
                          onCheckedChange={(checked) => 
                            setOutputOptions(prev => ({ ...prev, subtitles: checked ? "no" : "yes" }))
                          }
                        />
                        <Label htmlFor="subtitles-no" className="text-xs xs:text-sm">不启用字幕</Label>
                      </div>
                      <div className="flex items-center space-x-1.5 xs:space-x-2">
                        <Checkbox
                          id="subtitles-yes"
                          checked={outputOptions.subtitles === "yes"}
                          onCheckedChange={(checked) => 
                            setOutputOptions(prev => ({ ...prev, subtitles: checked ? "yes" : "no" }))
                          }
                        />
                        <Label htmlFor="subtitles-yes" className="text-xs xs:text-sm">启用字幕</Label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 操作按钮 */}
            {activeMode !== "history" && (
              <div className="flex gap-3 xs:gap-4 mt-6">
                <Button
                  onClick={
                    activeMode === "chat" ? generateChatPrompt : generateAdvancedPrompt
                  }
                  disabled={isGenerating || (!outputOptions.jsonPrompt && !outputOptions.paragraphPrompt)}
                  className="flex-1 bg-purple-600 hover:bg-purple-700 text-white h-10 xs:h-12 text-sm xs:text-base font-medium rounded-lg"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      正在生成提示词…
                    </>
                  ) : (
                    <>
                      <Video className="mr-2 h-4 w-4" />
                      生成提示词
                    </>
                  )}
                </Button>
                <Button
                  onClick={clearForm}
                  variant="outline"
                  className="h-10 xs:h-12 px-4 xs:px-6 text-sm xs:text-base rounded-lg"
                  disabled={isGenerating}
                >
                  清空
                </Button>
              </div>
            )}

            {/* 加载动画 */}
            {activeMode !== "history" && isGenerating && (
              <div className="mt-4 space-y-3 animate-in fade-in duration-300">
                <div className="px-2.5">
                  <div className="loader"></div>
                </div>
                <div className="text-center">
                  <p className="text-sm text-purple-600 dark:text-purple-400 font-medium animate-pulse">
                    {teaserPrompts[currentTeaserIndex]}
                  </p>
                </div>
              </div>
            )}

            {/* 生成结果 */}
            {activeMode !== "history" && generatedPrompts && (
              <div className="mt-6 space-y-4">
                {/* JSON 格式 */}
                {outputOptions.jsonPrompt && generatedPrompts.jsonPrompt && (
                  <div className="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-gray-600" />
                        <h4 className="font-bold text-sm flex items-center gap-2">
                          JSON 格式（技术向）
                        </h4>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Info className="h-4 w-4 text-gray-500 cursor-help" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>结构化 JSON，适用于技术集成与 API 调用。</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={async () => {
                          await navigator.clipboard.writeText(generatedPrompts.jsonPrompt)
                          toast({
                            title: "已复制！",
                            description: "JSON 格式已复制到剪贴板。",
                          })
                          showToastAfterSuccess()
                        }}
                        className="text-xs h-8 px-3"
                      >
                        复制
                      </Button>
                    </div>
                    <div className="bg-white dark:bg-gray-900 rounded-lg p-3 border border-gray-200 dark:border-gray-700">
                      <pre className="whitespace-pre-wrap text-sm leading-relaxed font-sans text-gray-800 dark:text-gray-200 overflow-x-auto">
                        {generatedPrompts.jsonPrompt}
                      </pre>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                      使用该结构化格式进行技术处理与系统对接。
                    </p>
                  </div>
                )}

                {/* 段落格式 */}
                {outputOptions.paragraphPrompt && generatedPrompts.paragraphPrompt && (
                  <div className="bg-gray-50 dark:bg-gray-900/20 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Type className="h-4 w-4 text-gray-600" />
                        <h4 className="font-bold text-sm flex items-center gap-2">
                          段落格式（创作向）
                        </h4>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Info className="h-4 w-4 text-gray-500 cursor-help" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>叙事段落样式，优化用于创意生成与讲故事。</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={async () => {
                          await navigator.clipboard.writeText(generatedPrompts.paragraphPrompt)
                          toast({
                            title: "已复制！",
                            description: "段落格式已复制到剪贴板。",
                          })
                          showToastAfterSuccess()
                        }}
                        className="text-xs h-8 px-3"
                      >
                        复制
                      </Button>
                    </div>
                    <div className="bg-white dark:bg-gray-900 rounded-lg p-3 border border-gray-200 dark:border-gray-700">
                      <pre className="whitespace-pre-wrap text-sm leading-relaxed font-sans text-gray-800 dark:text-gray-200">
                        {generatedPrompts.paragraphPrompt}
                      </pre>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                      使用该叙事格式以便于创意表达与故事化呈现。
                    </p>
                  </div>
                )}

                {/* AI 信息框 */}
                <div className="bg-purple-600 border border-purple-600 rounded-lg p-4">
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center gap-3">
                      <Brain className="h-5 w-5 text-white" />
                      <div>
                        <p className="text-sm font-medium">
                          我们基于成千上万条专业提示词进行训练，只为给你更好的提示词创作体验。
                        </p>
                        <p className="text-xs mt-1 opacity-90">
                          用心打造 ❤️ 你的每一次分享都弥足珍贵
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={async () => {
                        await navigator.clipboard.writeText(window.location.href)
                        toast({
                          title: "链接已复制！",
                          description: "工具链接已复制到剪贴板。",
                        })
                        showToastAfterSuccess()
                      }}
                      className="text-xs h-8 px-3 bg-white text-purple-600 border-white hover:bg-gray-100"
                    >
                      分享
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* 工作原理 */}
        <Card className="shadow-lg bg-white dark:bg-gray-800 mb-6 xs:mb-8 mx-1 xs:mx-2 sm:mx-0 rounded-lg">
          <CardHeader>
            <CardTitle className="text-lg xs:text-xl sm:text-2xl font-bold text-purple-600 flex items-center gap-2">
              <Brain className="h-5 w-5" />
              Veo3 提示词生成器的工作原理
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 xs:p-5">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-purple-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-sm xs:text-base mb-1">描述你的视频</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">使用“结构化/高级模式”进行精细控制，或用自然语言快速描述你的创意概念。</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-purple-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-sm xs:text-base mb-1">AI 生成提示词</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">我们的高级 AI 会分析你的输入，输出适配 Veo3 的 JSON 与段落两种格式。</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-purple-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-sm xs:text-base mb-1">在 Veo3 中使用</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">复制生成的提示词，在 Google 的 Veo3 中按你的规格生成专业品质的视频。</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 关于 */}
        <Card className="shadow-lg bg-white dark:bg-gray-800 mb-6 xs:mb-8 mx-1 xs:mx-2 sm:mx-0 rounded-lg">
          <CardContent className="p-4 xs:p-5">
            <h3 className="text-lg xs:text-xl font-bold mb-3 xs:mb-4 text-purple-600">关于 Veo3 提示词生成器</h3>
            <p className="text-sm xs:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              Veo3 提示词生成器是一款为 Google Veo3 视频生成平台打造的专业 AI 工具，可生成详尽、可用于制作的提示词。无论你是内容创作者、营销人员还是视频制作人，本工具都能帮助你将创意转化为 Veo3 易于理解与执行的结构化提示词。提供结构化与高级两种模式：你可以通过表单获得精细控制，或用自然语言快速构思。生成内容涵盖场景描述、镜头运动、灯光细节、音频元素与技术规格，并针对 Veo3 能力做了优化。
            </p>
          </CardContent>
        </Card>

        {/* FAQ */}
        <Card className="shadow-lg bg-white dark:bg-gray-800 mx-1 xs:mx-2 sm:mx-0 rounded-lg">
          <CardHeader>
            <CardTitle className="text-lg xs:text-xl sm:text-2xl font-bold text-purple-600">常见问题</CardTitle>
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
      
      {/* 提示通知 */}
      <ToastNotification 
        isVisible={showToast} 
        onClose={closeToast} 
      />
    </div>
  </>
)
}