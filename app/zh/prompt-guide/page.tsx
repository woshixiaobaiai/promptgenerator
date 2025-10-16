import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Veo3 提示词指南 - 精通 AI 视频提示词工程",
  description:
    "通过我们的完整指南学习如何为 AI 视频生成编写高效的提示词。掌握 Veo3 及其他 AI 视频平台的提示词工程技巧。",
  keywords:
    "Veo3 提示词指南, AI 视频提示词工程, 提示词写作技巧, 视频生成提示词, AI 内容创作指南, 提示词工程教程, 视频提示词最佳实践, AI 视频技巧, 内容创作指导, 视频制作提示词, AI 创意写作, 提示词优化",
  authors: [{ name: "Veo3 提示词生成器团队" }],
  creator: "Veo3 提示词生成器",
  publisher: "Veo3 提示词生成器",
  metadataBase: new URL("https://veo3promptgenerator.online"),
  alternates: {
    canonical: "/prompt-guide",
  },
  openGraph: {
    title: "Veo3 提示词指南 - 精通 AI 视频提示词工程",
    description:
      "通过我们的完整指南学习如何为 AI 视频生成编写高效的提示词。掌握 Veo3 及其他 AI 视频平台的提示词工程技巧。",
    url: "https://veo3promptgenerator.online/prompt-guide",
    siteName: "Veo3 提示词生成器",
    images: [
      {
        url: "/images/og-image-1200x630.png",
        width: 1200,
        height: 630,
        alt: "Veo3 提示词指南 - AI 视频提示词工程",
      },
    ],
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veo3 提示词指南 - 精通 AI 视频提示词工程",
    description:
      "通过我们的完整指南学习如何为 AI 视频生成编写高效的提示词。掌握 Veo3 及其他 AI 视频平台的提示词工程技巧。",
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

export default function PromptGuidePage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">提示词指南</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            学习如何为 AI 视频生成创建高效提示词，让你的创意项目达到最佳效果。
          </p>

          <h2>入门指南</h2>
          <p>
            创建一个优秀的提示词既是一门艺术，也是一门科学。本指南将帮助你理解提示词工程的基本原理，
            并教你如何将它们应用到视频生成中。
          </p>

          <h2>提示词的基本结构</h2>
          <p>一个良好的提示词应包含以下要素：</p>
          <ul>
            <li>清晰的主体描述</li>
            <li>具体的动作或行为</li>
            <li>场景与环境细节</li>
            <li>视觉风格与氛围</li>
            <li>技术参数或画面规格</li>
          </ul>

          <h2>进阶技巧</h2>
          <p>
            当你掌握基础后，可以进一步探索更高级的提示词技巧，
            以实现更复杂、更具表现力的生成效果。
          </p>

          <div className="bg-primary/10 p-6 rounded-lg mt-8">
            <h3 className="text-lg font-semibold mb-2">需要帮助？</h3>
            <p className="mb-4">
              试试我们的 AI 提示词生成器，让你立即获得专业级提示词。
            </p>
            <a
              href="/xz"
              className="text-primary hover:underline font-medium"
            >
              立即生成提示词 →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
