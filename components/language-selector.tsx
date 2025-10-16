"use client"

import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"
import type { Locale } from "@/lib/i18n"

interface LanguageSelectorProps {
  currentLocale: Locale
}


const languageNames = { en: "English", fr: "Français", zh: "中文" } as const

export function LanguageSelector({ currentLocale }: LanguageSelectorProps) {
  const router = useRouter()
  const pathname = usePathname()
  const search = useSearchParams()

  // 仅当第一段就是 fr/zh 才视为语言前缀
  const stripLocalePrefix = (p: string) => {
    const segments = p.split("/") // 以 / 开头 => ["", "segment1", "segment2"...]
    const first = segments[1]
    if (first === "fr" || first === "zh") {
      segments.splice(1, 1) // 去掉语言段
      const rebuilt = segments.join("/")
      return rebuilt || "/"
    }
    return p || "/"
  }

  // 构造带查询与哈希的 URL（可选保留 hash）
  const buildUrl = (p: string) => {
    const qs = search?.toString()
    const hash = typeof window !== "undefined" ? window.location.hash : ""
    return (qs ? `${p}?${qs}` : p) + (hash || "")
  }

  const setLocaleCookie = (locale: Locale) => {
    // 1 年有效，根路径可用
    document.cookie = `locale=${locale}; path=/; max-age=31536000; samesite=lax`
    //console.log("设置语言 Cookie：", document.cookie)
  }

  const switchLanguage = (locale: Locale) => {

    //console.log("设置语言 Locale：" + locale)

    setLocaleCookie(locale) // ⬅️ 关键：写入 cookie
    const base = stripLocalePrefix(pathname) // 去掉现有 fr/zh 前缀，保证以 / 开头

    if (locale === "en") {
      // 英文不加前缀
      router.push(buildUrl(base))
    } else {
      // 其他语言加对应前缀
      const localized = base === "/" ? `/${locale}` : `/${locale}${base}`
      router.push(buildUrl(localized))
    }
  }

  return (
    
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Switch language">
          <Globe className="h-4 w-4" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => switchLanguage("en")}
          className={currentLocale === "en" ? "bg-accent" : ""}
        >
          🇺🇸 {languageNames.en}
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => switchLanguage("fr")}
          className={currentLocale === "fr" ? "bg-accent" : ""}
        >
          🇫🇷 {languageNames.fr}
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => switchLanguage("zh")}
          className={currentLocale === "zh" ? "bg-accent" : ""}
        >
          🇨🇳 {languageNames.zh}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
