
[English README](./README.md) | 中文说明

# Veo3 Prompt Generator

一个强大且免费的提示词生成工具，专为 Google 的 Veo3 AI 视频生成平台打造。支持通过高级自定义选项生成电影级 8 秒视频提示词。

## ✨ 功能特性

* **🎬 Veo3 定向优化**：生成贴合 Veo3 能力边界的高质量提示词
* **🔄 多 API 自动回退**：内置多组 Gemini API Key，确保高可用
* **📝 双重输出格式**：同时获得 JSON 与段落描述两种提示词
* **🎭 对话可控**：自定义对白设置（包含、自动生成或不包含）
* **🎨 高级自定义**：精细调参镜头运动、灯光、音频等
* **🌍 多语言支持**：一键生成多语种提示词
* **📱 自适应界面**：桌面与移动端均可完美使用
* **⚡ 实时生成**：即时输出并可实时预览

## 🚀 快速开始

### 1. 克隆仓库

```bash
git clone https://github.com/woshixiaobaiai/promptgenerator.git
cd promptgenerator
```

### 2. 安装依赖

```bash
npm install
```

### 3. 配置 API Key

复制环境变量示例文件并填写你的 API Key：

```bash
cp env.example .env.local
```

编辑 `.env.local` 并添加你的密钥：

```bash
# 主 Gemini API Key（必填）
GEMINI_API_KEY_1=your_gemini_api_key_1_here

# 备份 Gemini API Key（可选，用于回退）
GEMINI_API_KEY_2=your_gemini_api_key_2_here

# 第三备份 Gemini API Key（可选，进一步回退）
GEMINI_API_KEY_3=your_gemini_api_key_3_here

# OpenRouter API Key（最终回退）
OPENROUTER_API_KEY=your_openrouter_api_key_here
```

**获取 API Key：**

* **Gemini API**： [Google AI Studio](https://makersuite.google.com/app/apikey)
* **OpenRouter API**： [OpenRouter](https://openrouter.ai/keys)

### 4. 启动开发服务器

```bash
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000)。

## 🔧 多 API Key 自动回退机制

Veo3 Prompt Generator 现在内置稳健的多密钥回退系统，保障高可用与高可靠性：

### 工作原理

1. **主通道**：优先使用 `GEMINI_API_KEY_1`
2. **二级回退**：主通道失败时自动尝试 `GEMINI_API_KEY_2`
3. **三级回退**：再失败则尝试 `GEMINI_API_KEY_3`
4. **最终回退**：若全部 Gemini 失败，则改用 `OPENROUTER_API_KEY`

### 优势

* **🔄 高可用**：自动故障切换，目标 99.9% 运行时间
* **💰 成本优化**：多 Key 分流以控制费用与配额
* **⚡ 性能更稳**：本地回退减少端到端延迟
* **🛡️ 容错能力**：单一 API 异常不影响整体服务

### 异常处理

系统自动处理以下问题：

* 频控、配额耗尽
* 网络连通性异常
* 无效/异常的 API 响应
* JSON 解析失败

## 📖 使用方法

### 简单模式

1. 在文本框中输入你的影片概念
2. 选择对白偏好
3. 选择输出格式（JSON、段落或两者）
4. 点击「Generate Prompt」
5. 将生成的提示词复制到 Veo3

### 高级模式

1. 填写详细表单，包括：

   * 主体与动作
   * 镜头运动偏好
   * 细节与风格
   * 目标受众与视频风格
2. 配置对白与字幕设置
3. 一键生成专业级提示词

## 🎯 提示词类型

### JSON 提示词

包含细致电影语言规格的结构化提示：

```json
{
  "shot_concept": "A grizzled detective discovers a crucial clue",
  "duration_seconds": 8,
  "composition": {
    "shot_type": "Medium Close-Up",
    "camera_dynamics": "Slow push-in towards the detective's hand"
  },
  "subject": {
    "description": "World-weary detective in a classic trench coat",
    "action": "Carefully examines the clue with focused attention",
    "dialogue": ""
  },
  "atmosphere": {
    "setting": "Dimly lit office with dust motes in the air",
    "lighting_style": "Harsh, focused beam of light",
    "color_palette": "High-contrast black and white"
  },
  "audio_design": {
    "sound_effects": "Gentle creak of floorboards",
    "music_cue": "Single, tense violin note"
  }
}
```

### 段落提示词

针对 Veo3 优化的自然语言描述：

```
一个电影感的 8 秒镜头：在昏暗办公室里，一位饱经风霜的侦探正专注审视关键线索。摄影机缓慢推进至侦探的手部，营造紧张与戏剧性。灯光采用强烈聚焦的硬光，投下高反差阴影；整体色调偏黑白，强化黑色电影美学。环境声包含旧木地板轻微的吱呀声，配以单一而紧绷的小提琴音符，烘托悬疑氛围。镜头按 4K、30fps、16:9 的参数优化，确保可直接用于 Veo3 的专业级生成。
```

## 🛠️ 技术架构

### 核心组件

* **BaseAIService**：多 API Key 自动回退核心
* **SimpleAIService**：基础提示词生成
* **AdvancedAIService**：表单驱动的专业生成
* **API Routes**：REST 风格生成接口
* **UI Components**：TypeScript + React 组件

### API Key 优先级

1. `GEMINI_API_KEY_1`（主用）
2. `GEMINI_API_KEY_2`（二级）
3. `GEMINI_API_KEY_3`（三级）
4. `OPENROUTER_API_KEY`（最终回退）

### 异常处理

* **稳健的 JSON 解析**：多策略解析 AI 返回
* **回退生成**：解析失败时提供结构化兜底提示词
* **详细日志**：完整错误跟踪与调试信息
* **优雅降级**：局部失败不影响整体服务

## 🚀 部署

### Vercel（推荐）

1. **连接仓库**：在 Vercel 绑定你的 GitHub 仓库
2. **配置环境变量**：在 Vercel 后台添加所有 API Key
3. **一键部署**：每次 push 自动触发部署

### 生产环境变量

```bash
# 必填
GEMINI_API_KEY_1=your_production_key_1
GEMINI_API_KEY_2=your_production_key_2
GEMINI_API_KEY_3=your_production_key_3
OPENROUTER_API_KEY=your_openrouter_key

# 可选
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

## 🧪 测试

运行测试脚本验证多 API 回退：

```bash
node test-multi-api.js
```

测试涵盖：

* API Key 配置有效性
* 回退机制功能
* JSON 解析健壮性
* 异常处理流程

## 📊 监控

### 控制台日志

系统输出详尽日志：

```
Attempting Gemini API 1...
Gemini API 1 failed: 402 - Payment Required
Attempting Gemini API 2...
JSON AI Response: { "shot_concept": "..." }
```

### API 状态

检查系统状态：

```typescript
const status = aiService.getAPIStatus();
// 返回示例：{ geminiCount: 3, openRouterAvailable: true }
```

## 🤝 参与贡献

1. Fork 本仓库
2. 创建功能分支：`git checkout -b feature-name`
3. 实现你的改动
4. 充分测试
5. 提交 Pull Request

## 📄 许可证

本项目基于 MIT License 开源——详情见 [LICENSE](LICENSE)。

## 🆘 支持与帮助

### 常见问题

1. **“No API keys configured”**

   * 至少在 `.env.local` 添加一个 Gemini API Key
   * 重启开发服务器

2. **“All APIs failed”**

   * 检查 Key 有效性与配额
   * 确认网络连通
   * 确保已配置计费

3. **JSON 解析错误**

   * 系统会自动使用兜底 JSON
   * 查看控制台日志定位细节

### 获取帮助

* **文档**：参见 [MULTI_API_FALLBACK_SYSTEM.md](MULTI_API_FALLBACK_SYSTEM.md)
* **问题反馈**：在 GitHub 提交 Issue
* **讨论**：加入社区讨论

## 🎉 致谢

* **Google Veo3**：卓越的 AI 视频生成平台
* **Next.js**：优秀的 React 框架
* **Tailwind CSS**：高效优雅的样式系统
* **OpenRouter**：提供额外的 API 接入能力

## 💬 作者 & 致谢
我是小白 ai，从我的公众号联系我：  
<img src="https://github.com/user-attachments/assets/4a8f8755-2157-40ae-8f39-ac8e8011f850" width="350">
[Amanai05/veo3promptgenerator](https://github.com/Amanai05/veo3promptgenerator))

**献给 AI 视频生成社区的爱与热忱 ❤️**
