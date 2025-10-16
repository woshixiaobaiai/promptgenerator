"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ToolNavigationProps {
  activeTool: "veo3-prompt-generator" | "video-script-generator" | "video-to-prompt" | "transcription"
}

export function ToolNavigation({ activeTool }: ToolNavigationProps) {
  const tools = [
  {
    id: "veo3-prompt-generator",
    name: "Veo3 提示词生成器",
    href: "/zh/veo3-prompt-generator",
    color: "purple"
  },
  {
    id: "video-script-generator", 
    name: "视频脚本生成器",
    href: "/zh/video-script-generator",
    color: "blue"
  },
  {
    id: "video-to-prompt",
    name: "视频转提示词生成器", 
    href: "/zh/video-to-prompt",
    color: "green"
  },
  {
    id: "transcription",
    name: "视频转文字",
    href: "/zh/video-to-text", 
    color: "orange"
  }
]


  return (
    <div className="mb-6 xs:mb-8 px-1">
      <div className="w-full max-w-md mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 xs:gap-3">
          {tools.map((tool) => {
            const isActive = activeTool === tool.id
            const colorClasses = {
              purple: "bg-purple-600 text-white",
              blue: "bg-blue-600 text-white", 
              green: "bg-green-600 text-white",
              orange: "bg-orange-600 text-white"
            }
            
            const hoverClasses = {
              purple: "hover:bg-purple-600 hover:text-white hover:border-purple-600",
              blue: "hover:bg-blue-600 hover:text-white hover:border-blue-600",
              green: "hover:bg-green-600 hover:text-white hover:border-green-600", 
              orange: "hover:bg-orange-600 hover:text-white hover:border-orange-600"
            }

            if (isActive) {
              return (
                <Button 
                  key={tool.id}
                  className={`w-full h-10 xs:h-12 text-sm xs:text-base font-medium ${colorClasses[tool.color as keyof typeof colorClasses]} break-words !opacity-100`}
                  disabled
                >
                  {tool.name}
                </Button>
              )
            }

            return (
              <Link key={tool.id} href={tool.href} className="w-full">
                <Button 
                  variant="outline" 
                  className={`w-full h-10 xs:h-12 text-sm xs:text-base font-medium transition-all duration-200 break-words ${hoverClasses[tool.color as keyof typeof hoverClasses]}`}
                >
                  {tool.name}
                </Button>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
} 