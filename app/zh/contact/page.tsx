"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, MapPin, Clock, MessageSquare, Users, Headphones } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    category: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // 模拟表单提交
    setTimeout(() => {
      toast({
        title: "消息已发送！",
        description: "我们会在 24 小时内回复您。",
      })
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        category: "",
      })
      setIsSubmitting(false)
    }, 1000)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <main>
      <section className="py-16 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            与我们 <span className="text-primary">联系</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            有问题、反馈或需要支持？我们很乐意听到您的声音。我们的团队将帮助您更好地使用 Veo3 提示词生成器，实现创作目标。
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* 联系表单 */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="h-5 w-5" />
                      发送消息给我们
                    </CardTitle>
                    <CardDescription>
                      填写下方表单，我们会尽快与您取得联系。
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">姓名</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleChange("name", e.target.value)}
                            placeholder="请输入您的姓名"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">邮箱</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            placeholder="your@email.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="category">类别</Label>
                        <Select value={formData.category} onValueChange={(value) => handleChange("category", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="请选择类别" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">一般咨询</SelectItem>
                            <SelectItem value="support">技术支持</SelectItem>
                            <SelectItem value="feature">功能需求</SelectItem>
                            <SelectItem value="bug">问题上报</SelectItem>
                            <SelectItem value="business">商务合作</SelectItem>
                            <SelectItem value="partnership">伙伴关系</SelectItem>
                            <SelectItem value="media">媒体与公关</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">主题</Label>
                        <Input
                          id="subject"
                          value={formData.subject}
                          onChange={(e) => handleChange("subject", e.target.value)}
                          placeholder="请简要描述您的问题"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">消息内容</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleChange("message", e.target.value)}
                          placeholder="请详细描述您的问题或需求……"
                          className="min-h-[120px]"
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "发送中…" : "发送消息"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* 联系方式 */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Mail className="h-5 w-5" />
                      邮件支持
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-2">用于一般咨询与技术支持</p>
                    <p className="font-medium">woshixiaobaiai@126.com</p>
                    <p className="text-sm text-muted-foreground mt-2">通常会在 24 小时内回复</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Headphones className="h-5 w-5" />
                      在线客服
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-2">通过在线聊天获得即时帮助</p>
                    <Button className="w-full bg-transparent" variant="outline">
                      开始聊天
                    </Button>
                    <p className="text-sm text-muted-foreground mt-2">服务时间：周一至周五 9:00–18:00（PST）</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      社区论坛
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-2">与其他用户交流并获取帮助</p>
                    <Button className="w-full bg-transparent" variant="outline">
                      访问论坛
                    </Button>
                    <p className="text-sm text-muted-foreground mt-2">社区 24/7 全天候支持</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      工作时间
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>周一 - 周五</span>
                        <span>9:00 AM - 6:00 PM PST</span>
                      </div>
                      <div className="flex justify-between">
                        <span>周六</span>
                        <span>10:00 AM - 4:00 PM PST</span>
                      </div>
                      <div className="flex justify-between">
                        <span>周日</span>
                        <span>休息</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      办公地点
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-2">欢迎到访我们的总部</p>
                    <address className="text-sm not-italic">
                      密云
                      <br />
                      北京
                      <br />
                      中国
                    </address>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* 常见问题 */}
            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold mb-4">常见问题</h2>
              <p className="text-muted-foreground mb-8">
                查看常见问题（FAQ），快速获取关于 Veo3 提示词生成器的答案。
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="outline" asChild>
                  <a href="/xz/faq">查看 FAQ</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/xz/help">帮助中心</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
