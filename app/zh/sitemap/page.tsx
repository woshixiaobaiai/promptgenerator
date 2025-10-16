import Link from "next/link"

const sitemapLinks = [
  { title: "首页", href: "/zh" },
  { title: "工具", href: "/zh/tools" },
  { title: "博客", href: "/zh/blog" },
  { title: "关于我们", href: "/zh/about" },
  { title: "联系我们", href: "/zh/contact" },
  { title: "提示词指南", href: "/zh/prompt-guide" },
  { title: "提示词库", href: "/zh/prompt-library" },
  { title: "社区", href: "/zh/community" },
  { title: "隐私政策", href: "/zh/privacy" },
  { title: "服务条款", href: "/zh/terms" },
  { title: "免责声明", href: "/zh/disclaimer" },
]

export default function SitemapPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">网站地图</h1>
        <div className="space-y-4">
          {sitemapLinks.map((link) => (
            <div key={link.href} className="border-b pb-2">
              <Link href={link.href} className="text-primary hover:underline text-lg">
                {link.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
