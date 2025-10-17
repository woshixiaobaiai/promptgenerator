"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X, Globe, Sparkles, FileText, ChevronDown } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { locales, type Locale } from "@/lib/i18n"
import { useRouter, usePathname } from "next/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
  const [isToolsMenuOpen, setIsToolsMenuOpen] = useState(false)
  const toolsMenuRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const pathname = usePathname()

  const getCurrentLocale = (): Locale => {
    const pathLocale = pathname.split('/')[1] as Locale
    return locales.includes(pathLocale) ? pathLocale : 'en'
  }

 const setLocaleCookie = (locale: Locale) => {
    // 1 年有效，根路径可用
    document.cookie = `locale=${locale}; path=/; max-age=31536000; samesite=lax`
    //console.log("设置语言 Cookie：", document.cookie)
  }

  // 仅当第一段为 fr/zh 时移除语言前缀；英文无前缀
  const switchLanguage = (locale: Locale) => {

    setLocaleCookie(locale)
    
    setIsLanguageMenuOpen(false)

    const stripLocalePrefix = (p: string) =>
      p.replace(/^\/(fr|zh)(?=\/|$)/, "") || "/"

    const buildUrl = (p: string) => {
      const qs = typeof window !== "undefined" ? window.location.search : ""
      const hash = typeof window !== "undefined" ? window.location.hash : ""
      return `${p}${qs}${hash}`
    }

    const base = stripLocalePrefix(pathname)

    if (locale === "en") {
      router.push(buildUrl(base))
    } else {
      const localized = base === "/" ? `/${locale}` : `/${locale}${base}`
      router.push(buildUrl(localized))
    }
  }

  const languageNames: Record<Locale, string> = {
    en: "English",
    fr: "Français",
    zh: "中文",
  }

  // 鼠标离开时自动关闭工具下拉
  useEffect(() => {
    const handleMouseLeave = () => setIsToolsMenuOpen(false)
    const el = toolsMenuRef.current
    if (el) {
      el.addEventListener("mouseleave", handleMouseLeave)
      return () => el.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 xs:h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/images/woshixiaobaiai-logo.png" 
              alt="Veo3" 
              width={120} 
              height={40} 
              className="h-6 w-auto xs:h-8 sm:h-10" 
            />
          </Link>

          {/* 桌面导航 */}
          <nav className="hidden lg:flex items-center space-x-4 xs:space-x-6">
            <Link
              href="/zh/"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-2 py-1 rounded-md hover:bg-muted/50"
            >
              主页
            </Link>
            <Link
              href="/zh/blog"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-2 py-1 rounded-md hover:bg-muted/50"
            >
              博客
            </Link>
            <Link
              href="/zh/prompt-guide"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-2 py-1 rounded-md hover:bg-muted/50"
            >
              提示词指南
            </Link>
            <Link
              href="/zh/prompt-library"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-2 py-1 rounded-md hover:bg-muted/50"
            >
              提示词库
            </Link>
            <Link
              href="/zh/about"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-2 py-1 rounded-md hover:bg-muted/50"
            >
              关于
            </Link>
            <Link
              href="/zh/contact"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-2 py-1 rounded-md hover:bg-muted/50"
            >
              联系
            </Link>
            <Link
              href="/zh/disclaimer"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-2 py-1 rounded-md hover:bg-muted/50"
            >
              免责声明
            </Link>
            <Link
              href="/zh/sitemap"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-2 py-1 rounded-md hover:bg-muted/50"
            >
              网站地图
            </Link>
          </nav>

          {/* 右侧控件 */}
          <div className="flex items-center space-x-2 xs:space-x-3 sm:space-x-4">
            {/* 工具下拉（桌面显示） */}
            <div className="relative hidden lg:block" ref={toolsMenuRef}>
              <button
                onClick={() => setIsToolsMenuOpen(!isToolsMenuOpen)}
                onMouseEnter={() => setIsToolsMenuOpen(true)}
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-3 py-2 rounded-md hover:bg-muted/50"
              >
                工具
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isToolsMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isToolsMenuOpen && (
                <div className="absolute right-0 top-full mt-1 w-56 bg-background border rounded-lg shadow-xl py-2 backdrop-blur-sm">
                  <Link
                    href="/"
                    className="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-muted/50 transition-colors"
                    onClick={() => setIsToolsMenuOpen(false)}
                  >
                    <Sparkles className="h-4 w-4 text-purple-600" />
                    Veo3 提示词生成器
                  </Link>
                  <Link
                    href="/video-script-generator"
                    className="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-muted/50 transition-colors"
                    onClick={() => setIsToolsMenuOpen(false)}
                  >
                    <FileText className="h-4 w-4 text-blue-600" />
                    视频脚本生成器
                  </Link>
                  <Link
                    href="/video-to-prompt"
                    className="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-muted/50 transition-colors"
                    onClick={() => setIsToolsMenuOpen(false)}
                  >
                    <FileText className="h-4 w-4 text-green-600" />
                    视频转提示词生成器
                  </Link>
                  <Link
                    href="/transcription"
                    className="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-muted/50 transition-colors"
                    onClick={() => setIsToolsMenuOpen(false)}
                  >
                    <FileText className="h-4 w-4 text-orange-600" />
                    视频转文字
                  </Link>
                </div>
              )}
            </div>

            {/* 语言切换（桌面显示） */}
            <div className="relative hidden sm:block">
              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-2 py-1 rounded-md hover:bg-muted/50"
              >
                <Globe className="h-4 w-4" />
                <span className="hidden sm:inline">{languageNames[getCurrentLocale()]}</span>
              </button>
              
              {isLanguageMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-40 bg-background border rounded-md shadow-lg py-1">
                  {locales.map((locale) => (
                    <button
                      key={locale}
                      onClick={() => switchLanguage(locale)}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-muted ${
                        getCurrentLocale() === locale ? 'bg-muted font-medium' : ''
                      }`}
                    >
                      {languageNames[locale]}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <ThemeToggle />
            
            {/* 移动端菜单按钮 */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-muted/50"
              aria-label="打开/关闭菜单"
            >
              {isMenuOpen ? <X className="h-5 w-5 xs:h-6 xs:w-6" /> : <Menu className="h-5 w-5 xs:h-6 xs:w-6" />}
            </button>
          </div>
        </div>

        {/* 移动端导航 */}
        {isMenuOpen && (
          <div className="lg:hidden border-t py-4 xs:py-6">
            <nav className="space-y-4 xs:space-y-6">
              {/* 主导航链接 */}
              <div className="space-y-3 xs:space-y-4">
                <Link
                  href="/"
                  className="block text-sm xs:text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2 px-3 xs:px-4 rounded-md hover:bg-muted/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  主页
                </Link>
                <Link
                  href="/blog"
                  className="block text-sm xs:text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2 px-3 xs:px-4 rounded-md hover:bg-muted/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  博客
                </Link>
                <Link
                  href="/prompt-guide"
                  className="block text-sm xs:text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2 px-3 xs:px-4 rounded-md hover:bg-muted/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  提示词指南
                </Link>
                <Link
                  href="/about"
                  className="block text-sm xs:text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2 px-3 xs:px-4 rounded-md hover:bg-muted/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  关于
                </Link>
                <Link
                  href="/contact"
                  className="block text-sm xs:text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2 px-3 xs:px-4 rounded-md hover:bg-muted/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  联系
                </Link>
                <Link
                  href="/disclaimer"
                  className="block text-sm xs:text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2 px-3 xs:px-4 rounded-md hover:bg-muted/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  免责声明
                </Link>
                <Link
                  href="/sitemap"
                  className="block text-sm xs:text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2 px-3 xs:px-4 rounded-md hover:bg-muted/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  网站地图
                </Link>
              </div>
              
              {/* 工具分组 */}
              <div className="pt-4 xs:pt-6 border-t">
                <h3 className="text-sm xs:text-base font-semibold text-foreground mb-3 xs:mb-4 px-3 xs:px-4">工具</h3>
                <div className="space-y-3 xs:space-y-4">
                  <Link
                    href="/"
                    className="flex items-center gap-2 xs:gap-3 text-sm xs:text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2 px-3 xs:px-4 rounded-md hover:bg-muted/50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Sparkles className="h-4 w-4 xs:h-5 xs:w-5 text-purple-600" />
                    Veo3 提示词生成器
                  </Link>
                  <Link
                    href="/video-script-generator"
                    className="flex items-center gap-2 xs:gap-3 text-sm xs:text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2 px-3 xs:px-4 rounded-md hover:bg-muted/50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <FileText className="h-4 w-4 xs:h-5 xs:w-5 text-blue-600" />
                    视频脚本生成器
                  </Link>
                  <Link
                    href="/video-to-prompt"
                    className="flex items-center gap-2 xs:gap-3 text-sm xs:text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2 px-3 xs:px-4 rounded-md hover:bg-muted/50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <FileText className="h-4 w-4 xs:h-5 xs:w-5 text-green-600" />
                    视频转提示词生成器
                  </Link>
                  <Link
                    href="/transcription"
                    className="flex items-center gap-2 xs:gap-3 text-sm xs:text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2 px-3 xs:px-4 rounded-md hover:bg-muted/50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <FileText className="h-4 w-4 xs:h-5 xs:w-5 text-orange-600" />
                    视频转文字
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
