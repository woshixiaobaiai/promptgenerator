"use client"

import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-6 xs:py-8 sm:py-12">
        {/* 标志与名称 */}
        

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 xs:gap-6 sm:gap-8">
          <div className="space-y-2 xs:space-y-3 sm:space-y-4">
            <h3 className="font-semibold mb-2 xs:mb-3 sm:mb-4 text-xs xs:text-sm sm:text-base">核心工具</h3>
            <ul className="space-y-1 xs:space-y-2 sm:space-y-3 text-xs xs:text-sm">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("video-script-generator")
                    if (element) element.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="text-muted-foreground hover:text-primary cursor-pointer text-left w-full py-1"
                >
                  视频脚本生成器
                </button>
              </li>
              <li>
                <Link href="/zh/veo3-prompt-generator" className="text-muted-foreground hover:text-primary block py-1">
                  Veo3 提示词生成器
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2 xs:mb-3 sm:mb-4 text-xs xs:text-sm sm:text-base">工具</h3>
            <ul className="space-y-1 xs:space-y-2 sm:space-y-3 text-xs xs:text-sm">
              <li>
                <Link href="/zh/video-to-prompt" className="text-muted-foreground hover:text-primary block py-1">
                  视频转提示词
                </Link>
              </li>
              <li>
                <Link href="/zh/transcription" className="text-muted-foreground hover:text-primary block py-1">
                  视频转文字
                </Link>
              </li>
              <li>
                <Link href="/zh/prompt-guide" className="text-muted-foreground hover:text-primary block py-1">
                  提示词指南
                </Link>
              </li>
              <li>
                <Link href="/zh/prompt-library" className="text-muted-foreground hover:text-primary block py-1">
                  提示词库
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2 xs:mb-3 sm:mb-4 text-xs xs:text-sm sm:text-base">公司</h3>
            <ul className="space-y-1 xs:space-y-2 sm:space-y-3 text-xs xs:text-sm">
              <li>
                <Link href="/zh/about" className="text-muted-foreground hover:text-primary block py-1">
                  关于
                </Link>
              </li>
              <li>
                <Link href="/zh/contact" className="text-muted-foreground hover:text-primary block py-1">
                  联系
                </Link>
              </li>
              <li>
                <Link href="/zh/blog" className="text-muted-foreground hover:text-primary block py-1">
                  博客
                </Link>
              </li>
              <li>
                <Link href="/zh/community" className="text-muted-foreground hover:text-primary block py-1">
                  社区
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2 xs:mb-3 sm:mb-4 text-xs xs:text-sm sm:text-base">法律</h3>
            <ul className="space-y-1 xs:space-y-2 sm:space-y-3 text-xs xs:text-sm">
              <li>
                <Link href="/zh/privacy" className="text-muted-foreground hover:text-primary block py-1">
                  隐私政策
                </Link>
              </li>
              <li>
                <Link href="/zh/terms" className="text-muted-foreground hover:text-primary block py-1">
                  服务条款
                </Link>
              </li>
              <li>
                <Link href="/zh/disclaimer" className="text-muted-foreground hover:text-primary block py-1">
                  免责声明
                </Link>
              </li>
              <li>
                <Link href="/zh/sitemap" className="text-muted-foreground hover:text-primary block py-1">
                  网站地图
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-6 xs:mt-8 sm:mt-12 pt-4 xs:pt-6 sm:pt-8 text-center text-xs xs:text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} 我是小白 ai. 保留所有权利。</p>
        </div>
      </div>
    </footer>
  )
}
