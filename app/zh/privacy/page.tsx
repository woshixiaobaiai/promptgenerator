import { Metadata } from "next"

export const metadata: Metadata = {
  title: "隐私政策 - Veo3 Prompt Generator | 数据保护与安全",
  description: "了解 Veo3 Prompt Generator 如何保护您的隐私与数据。本隐私政策详述我们如何收集、使用与保护您的信息。",
  keywords: "隐私政策, 数据保护, Veo3 Prompt Generator 隐私, 用户数据安全, GDPR 合规, 数据隐私, 信息安全, 用户隐私, 数据收集政策, 隐私保护, 安全数据处理",
  authors: [{ name: "Veo3 Prompt Generator 团队" }],
  creator: "Veo3 Prompt Generator",
  publisher: "Veo3 Prompt Generator",
  metadataBase: new URL("https://veo3promptgenerator.online"),
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "隐私政策 - Veo3 Prompt Generator | 数据保护与安全",
    description: "了解 Veo3 Prompt Generator 如何保护您的隐私与数据。本隐私政策详述我们如何收集、使用与保护您的信息。",
    url: "https://veo3promptgenerator.online/privacy",
    siteName: "Veo3 Prompt Generator",
    images: [
      {
        url: "/images/og-image-1200x630.png",
        width: 1200,
        height: 630,
        alt: "隐私政策 - Veo3 Prompt Generator",
      },
    ],
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "隐私政策 - Veo3 Prompt Generator | 数据保护与安全",
    description: "了解 Veo3 Prompt Generator 如何保护您的隐私与数据。本隐私政策详述我们如何收集、使用与保护您的信息。",
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

export default function PrivacyPage() {
  return (
    <main>
      <section className="py-16 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span>隐私</span> <span className="text-primary">政策</span>
          </h1>
          <p className="text-lg text-muted-foreground">最后更新：{new Date().toLocaleDateString()}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">简介</h2>
                <p className="text-muted-foreground leading-relaxed">
                  在 Veo3 Prompt Generator，我们高度重视您的隐私。本隐私政策说明当您访问我们的网站并使用我们的服务时，我们如何收集、使用、披露与保护您的信息。请仔细阅读本政策；若您不同意其中任何条款，请勿访问本网站。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">我们收集的信息</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">个人信息</h3>
                    <p className="text-muted-foreground mb-2">
                      当您主动向我们提供时，我们可能会收集个人信息，例如：
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>在平台创建账户</li>
                      <li>就支持或咨询事宜与我们联系</li>
                      <li>订阅我们的新闻邮件或更新</li>
                      <li>参与问卷调查、活动或促销</li>
                      <li>使用我们的 AI 工具与服务</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">使用信息</h3>
                    <p className="text-muted-foreground mb-2">
                      当您访问本网站时，我们会自动收集部分信息，包括：
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>IP 地址与浏览器信息</li>
                      <li>访问的页面与停留时间</li>
                      <li>设备信息与操作系统</li>
                      <li>来源渠道与搜索关键词</li>
                      <li>与我们工具和功能的交互数据</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">内容与媒体</h3>
                    <p className="text-muted-foreground">
                      当您向我们的服务上传视频、图片或其他内容时，我们会在短时间内处理这些内容以生成提示并提供服务。处理完成后，所有上传文件会在数分钟内自动从我们的服务器中删除。
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">我们如何使用您的信息</h2>
                <p className="text-muted-foreground mb-4">我们将所收集的信息用于：</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>提供与维护我们的 AI 服务</li>
                  <li>处理您的请求并生成提示</li>
                  <li>向您发送技术通知与支持消息</li>
                  <li>回应您的评论、问题与需求</li>
                  <li>改进网站、工具与用户体验</li>
                  <li>分析使用模式与服务性能</li>
                  <li>发现并防止欺诈、滥用或安全问题</li>
                  <li>遵守法律义务并保护我们的权利</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">数据安全</h2>
                <p className="text-muted-foreground">
                  我们采取适当的技术与组织性安全措施，以防止您的个人信息被未经授权访问、篡改、披露或毁损，包括加密、数据安全传输、访问控制与定期安全审计。但请注意，任何经互联网传输或电子存储的方法都无法保证 100% 安全，我们无法提供绝对安全的保证。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">数据保留</h2>
                <p className="text-muted-foreground">
                  我们仅在实现本隐私政策所述目的的必要期限内保留您的个人信息。上传的媒体文件在处理完成后会立即删除；账号信息会保留至您申请删除或关闭账户；使用数据可能以匿名化形式保留用于分析。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">第三方服务</h2>
                <p className="text-muted-foreground">
                  我们的网站可能包含第三方网站或服务的链接；我们也可能使用第三方服务进行分析、支付或其他功能。我们不对这些第三方的隐私实践负责。建议您在向第三方提供任何个人信息前，先行查阅其隐私政策。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">您的权利</h2>
                <p className="text-muted-foreground mb-4">根据您的所在地区，您可能享有以下权利：</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>访问您的个人信息</li>
                  <li>更正不准确的信息</li>
                  <li>删除您的个人信息</li>
                  <li>限制处理您的个人信息</li>
                  <li>数据可携权</li>
                  <li>反对出于特定目的的处理</li>
                  <li>撤回同意的权利</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">跨境数据传输</h2>
                <p className="text-muted-foreground">
                  您的信息可能会被传输至您所在国家/地区之外并在其他国家处理。我们确保此类传输遵循适用的数据保护法律，并采取适当的保障措施来保护您的信息。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">本政策的变更</h2>
                <p className="text-muted-foreground">
                  我们可能不时更新本隐私政策。我们会在本页面发布新版本并更新“最后更新”日期。建议您定期查阅本政策以了解最新变更。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">联系我们</h2>
                <p className="text-muted-foreground mb-4">
                  若您对本隐私政策或我们的数据实践有任何疑问，请通过以下方式与我们联系：
                </p>
                <div className="bg-muted rounded-lg p-4">
                  <p className="font-medium">邮箱：veo3promptgenerator.online@gmail.com</p>
                  <p className="font-medium">地址：123 Innovation Drive, San Francisco, CA 94105</p>
                  <p className="font-medium">电话：+1 (555) 123-4567</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
