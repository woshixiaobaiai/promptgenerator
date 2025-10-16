import { Metadata } from "next"

export const metadata: Metadata = {
  title: "服务条款 - Veo3 Prompt Generator | 用户协议与法律条款",
  description:
    "阅读 Veo3 Prompt Generator 的服务条款。了解在使用我们 AI 视频提示词生成工具与服务时，您的权利与义务。",
  keywords:
    "服务条款, 用户协议, Veo3 Prompt Generator 条款, 法律条款, 服务协议, 用户权利, 使用条件, 法律政策, 用户责任, 服务使用条款, 合规",
  authors: [{ name: "Veo3 Prompt Generator Team" }],
  creator: "Veo3 Prompt Generator",
  publisher: "Veo3 Prompt Generator",
  metadataBase: new URL("https://veo3promptgenerator.online"),
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "服务条款 - Veo3 Prompt Generator | 用户协议与法律条款",
    description:
      "阅读 Veo3 Prompt Generator 的服务条款。了解在使用我们 AI 视频提示词生成工具与服务时，您的权利与义务。",
    url: "https://veo3promptgenerator.online/terms",
    siteName: "Veo3 Prompt Generator",
    images: [
      {
        url: "/images/og-image-1200x630.png",
        width: 1200,
        height: 630,
        alt: "服务条款 - Veo3 Prompt Generator",
      },
    ],
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "服务条款 - Veo3 Prompt Generator | 用户协议与法律条款",
    description:
      "阅读 Veo3 Prompt Generator 的服务条款。了解在使用我们 AI 视频提示词生成工具与服务时，您的权利与义务。",
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

export default function TermsPage() {
  return (
    <main>
      <section className="py-16 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-primary">服务条款</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            最近更新：{new Date().toLocaleDateString()}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">同意条款</h2>
                <p className="text-muted-foreground leading-relaxed">
                  访问并使用 Veo3 Prompt Generator（以下简称“服务”）即表示您接受并同意受本协议条款的约束。
                  如您不同意上述条款，请勿使用本服务。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">使用许可</h2>
                <p className="text-muted-foreground mb-4">
                  我们授予您在个人与商业场景下临时使用 Veo3 Prompt Generator 的许可。该许可并非所有权转移，
                  在此许可下，您可以：
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>使用我们的 AI 工具生成视频提示词与脚本</li>
                  <li>下载并在您的项目中使用生成内容</li>
                  <li>在适当署名的前提下分享生成内容</li>
                  <li>将本服务用于商业目的</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  如您违反上述任何限制，该许可将自动终止；Veo3 Prompt Generator
                  亦可在任何时间终止该许可。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">用户责任</h2>
                <p className="text-muted-foreground mb-4">作为本服务用户，您同意：</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>在创建账户时提供准确且完整的信息</li>
                  <li>仅将本服务用于合法目的</li>
                  <li>不上传侵犯他人知识产权的内容</li>
                  <li>不上传不当、冒犯或违法内容</li>
                  <li>不尝试逆向工程、入侵或破坏我们的系统</li>
                  <li>不使用本服务生成有害或误导性内容</li>
                  <li>尊重他人权利与隐私</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">内容与知识产权</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">您的内容</h3>
                    <p className="text-muted-foreground">
                      您对上传至本服务的任何内容保留所有权。通过上传内容，您授予我们一项临时许可，
                      仅用于为您提供服务之目的而对该内容进行处理与分析。我们不主张对您上传内容的所有权。
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">生成内容</h3>
                    <p className="text-muted-foreground">
                      我们的 AI 工具生成的内容供您使用。但您应确保该等内容符合法律法规，
                      且不侵犯第三方权利。
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">我们的知识产权</h3>
                    <p className="text-muted-foreground">
                      Veo3 Prompt Generator 的服务（包括设计、功能与底层技术）受版权、商标及其他知识产权法保护。
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">服务可用性</h2>
                <p className="text-muted-foreground">
                  我们努力保持服务的高可用性，但不保证任何时间的持续可用。服务可能因维护、更新或技术问题而暂时不可用。
                  我们保留在不另行通知的情况下修改、暂停或终止任何服务部分的权利。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">责任限制</h2>
                <p className="text-muted-foreground">
                  在适用法律允许的最大范围内，Veo3 Prompt Generator 对因您使用本服务所致的任何
                  间接、附带、特殊、后果性或惩罚性损害，或任何利润、收入、数据、使用、商誉或其他无形损失，
                  无论直接或间接产生，均不承担责任。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">隐私政策</h2>
                <p className="text-muted-foreground">
                  我们重视您的隐私。请查阅我们的《隐私政策》，了解我们如何收集与使用您的信息；
                  该政策同样适用于您对本服务的使用。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">终止</h2>
                <p className="text-muted-foreground">
                  如您违反本服务条款，我们可在不事先通知且无需承担责任的情况下，立即终止或暂停您的账户与服务访问。
                  终止后，您对本服务的使用权将立即终止。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">条款变更</h2>
                <p className="text-muted-foreground">
                  我们保留随时修改本条款的权利。我们将通过在本页发布更新并修改“最近更新”日期的方式进行通知。
                  您继续使用本服务即视为接受更新后的条款。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">适用法律</h2>
                <p className="text-muted-foreground">
                  本服务条款及我们向您提供服务所订立的任何单独协议，均受美国加利福尼亚州法律管辖并据其解释。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">联系信息</h2>
                <p className="text-muted-foreground mb-4">
                  如对本服务条款有任何问题，请联系：
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
