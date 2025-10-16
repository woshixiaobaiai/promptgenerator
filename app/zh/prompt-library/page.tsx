"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"

const promptExamples = [
  {
    title: "电影感人像",
    category: "人像",
    prompt:
      "Close-up portrait of a person with dramatic lighting, shallow depth of field, cinematic color grading, professional photography style, 4K resolution",
    tags: ["Portrait", "Cinematic", "Professional"],
  },
  {
    title: "自然风光",
    category: "自然",
    prompt:
      "Wide shot of a serene mountain landscape at golden hour, misty valleys, warm lighting, peaceful atmosphere, drone photography perspective",
    tags: ["Landscape", "Nature", "Golden Hour"],
  },
  {
    title: "产品展示",
    category: "商业",
    prompt:
      "360-degree rotation of a modern smartphone on white background, studio lighting, clean minimalist style, highlighting premium materials and design",
    tags: ["Product", "Commercial", "Clean"],
  },
  {
    title: "城市街景",
    category: "城市",
    prompt:
      "Busy city street during rush hour, people walking, cars passing, urban energy, street photography style, natural lighting, documentary feel",
    tags: ["Urban", "Street", "Documentary"],
  },
]

export default function PromptLibraryPage() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const copyPrompt = async (prompt: string, index: number) => {
    try {
      await navigator.clipboard.writeText(prompt)
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 1500)
    } catch {
      // 可按需加入 toast
    }
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">提示词库</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          浏览精心打造的专业提示词，覆盖多种视频风格与应用场景。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {promptExamples.map((example, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{example.title}</CardTitle>
                <Badge variant="secondary">{example.category}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 leading-relaxed">{example.prompt}</p>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {example.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyPrompt(example.prompt, index)}
                >
                  {copiedIndex === index ? (
                    <>
                      <Check className="h-4 w-4 mr-2" />
                      已复制
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 mr-2" />
                      复制
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <div className="bg-primary/10 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">创建你的专属提示词</h2>
          <p className="text-muted-foreground mb-6">
            使用我们的 AI 生成器，快速定制符合你项目需求的高质量提示词。
          </p>
          <Button asChild size="lg">
            <a href="/#generator">立即生成</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
