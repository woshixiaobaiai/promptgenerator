import { Metadata } from "next"

export const metadata: Metadata = {
  title: "免责声明 - Veo3 Prompt Generator | 法律声明与条款",
  description: "阅读 Veo3 Prompt Generator 的免责声明。关于 AI 生成内容、用户责任与服务限制的重要法律信息。",
  keywords: "免责声明, 法律声明, Veo3 Prompt Generator 免责声明, AI 内容免责声明, 用户责任, 法律条款, 服务限制, AI 生成内容声明, 法律信息, 用户协议免责声明",
  authors: [{ name: "Veo3 Prompt Generator 团队" }],
  creator: "Veo3 Prompt Generator",
  publisher: "Veo3 Prompt Generator",
  metadataBase: new URL("https://veo3promptgenerator.online"),
  alternates: {
    canonical: "/disclaimer",
  },
  openGraph: {
    title: "免责声明 - Veo3 Prompt Generator | 法律声明与条款",
    description: "阅读 Veo3 Prompt Generator 的免责声明。关于 AI 生成内容、用户责任与服务限制的重要法律信息。",
    url: "https://veo3promptgenerator.online/disclaimer",
    siteName: "Veo3 Prompt Generator",
    images: [
      {
        url: "/images/og-image-1200x630.png",
        width: 1200,
        height: 630,
        alt: "免责声明 - Veo3 Prompt Generator",
      },
    ],
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "免责声明 - Veo3 Prompt Generator | 法律声明与条款",
    description: "阅读 Veo3 Prompt Generator 的免责声明。关于 AI 生成内容、用户责任与服务限制的重要法律信息。",
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

export default function DisclaimerPage() {
  return (
    <main>
      <section className="py-16 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-primary">免责声明</span>
          </h1>
          <p className="text-lg text-muted-foreground">最后更新：{new Date().toLocaleDateString()}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">一般信息</h2>
                <p className="text-muted-foreground leading-relaxed">
                  本网站所提供的信息基于“现状”提供。在法律允许的最大范围内，Veo3 Prompt
                  Generator 对因本网站及其内容引发或与之相关的任何陈述、保证、义务与责任不承担责任；对任何关联方或第三方提供的信息亦不作保证，包括但不限于本网站及/或公司资料中可能存在的不准确或遗漏之处。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">AI 生成内容</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  我们的服务使用人工智能来分析内容并生成用于视频创作的提示。请注意：
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>AI 生成的提示与脚本可能并非始终 100% 准确或完整</li>
                  <li>输出质量取决于输入内容的质量与清晰度</li>
                  <li>在专业场景使用前，生成内容应由人工审核与校对</li>
                  <li>我们不保证 AI 生成内容的准确性、完整性或可靠性</li>
                  <li>AI 模型有时可能产生意外或不当的结果</li>
                  <li>生成内容可能需要人工编辑与润色</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">用户责任</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">用户应当自行承担以下责任：</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>确保其拥有上传与处理任何媒体内容的合法权利</li>
                  <li>遵守所有适用的法律法规</li>
                  <li>不得上传侵犯知识产权的内容</li>
                  <li>不得上传不当、冒犯或非法内容</li>
                  <li>在使用前核实生成提示的准确性与适用性</li>
                  <li>确保生成内容符合各平台的指南与政策</li>
                  <li>在使用生成内容时遵守版权与商标法律</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">责任限制</h2>
                <p className="text-muted-foreground leading-relaxed">
                  在适用法律允许的最大范围内，Veo3 Prompt Generator
                  不对任何间接、附带、特殊、后果性或惩罚性损害，或任何利润或收入损失（无论是直接或间接造成）、数据、使用、商誉或其他无形损失承担责任；该等损害包括但不限于因您使用我们的服务（包含使用
                  AI 生成内容）而产生的任何损害赔偿。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">服务可用性</h2>
                <p className="text-muted-foreground leading-relaxed">
                  我们努力保持服务的高可用性，但不保证服务随时可用。服务可能因维护、更新或技术问题而暂时不可用。我们保留在不另行通知的情况下随时修改、暂停或停止任何服务部分的权利。AI 处理时间可能因系统负载与内容复杂度而变化。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">第三方内容与服务</h2>
                <p className="text-muted-foreground leading-relaxed">
                  我们的网站可能包含指向第三方网站、服务的链接，或引用第三方内容。我们不对第三方网站或服务所提供信息的准确性或可靠性作出认可、担保或承担责任。用户访问第三方内容需自行承担风险。我们不对外部网站的可用性、内容或其做法负责。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">专业建议声明</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Veo3 Prompt Generator 提供的信息与工具仅供一般信息参考，不构成专业意见。对于特定情形（尤其是商业或专业视频制作项目），用户应咨询具备资质的专业人士以获取具体建议。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">知识产权</h2>
                <p className="text-muted-foreground leading-relaxed">
                  虽然我们提供内容生成工具，但用户需确保其对生成内容的使用不侵犯他人的知识产权。我们不保证生成内容不存在版权、商标或其他知识产权方面的主张。用户在将生成内容用于商业用途前应自行进行尽职调查。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">数据处理</h2>
                <p className="text-muted-foreground leading-relaxed">
                  我们的 AI 处理会分析用户上传的内容以生成提示与脚本。尽管我们实施安全措施并在处理完成后立即删除上传文件，用户仍应知悉上传至本服务的内容将由我们的 AI 系统进行处理。请勿上传机密或敏感信息。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">免责声明的变更</h2>
                <p className="text-muted-foreground leading-relaxed">
                  我们保留随时修改本免责声明的权利。变更将在本网站发布后立即生效。您在任何变更后继续使用我们的服务即表示接受新的免责声明。建议用户不时查阅本免责声明。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">联系信息</h2>
                <p className="text-muted-foreground mb-4">
                  如对本免责声明有任何疑问，请通过以下方式联系我们：
                </p>
                <div className="bg-muted rounded-lg p-4">
                  <p className="font-medium">邮箱：woshixiaobaiai@126.com</p>
                  <p className="font-medium">地址：北京市密云区</p>
                  <p className="font-medium">电话：NA</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
