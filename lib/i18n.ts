export const defaultLocale = "en"
export const locales = ["en", "fr", "zh"] as const
export type Locale = (typeof locales)[number]

export const translations = {
  en: {
    // SEO and Branding
    siteTitle: "Veo3 Prompt Generator Free Online",
    mainHeading: "Veo3 Prompt Generator",
    accentWord: "Prompt",

    // Navigation
    home: "Home",
    tools: "Tools",
    blog: "Blog",
    about: "About",
    contact: "Contact",
    getStarted: "Get Started",

    // Main Tools Navigation
    videoScriptGenerator: "Video Script Generator",
    veo3PromptGenerator: "Veo3 Prompt Generator",

    // Video Script Generator
    videoTopic: "Video Topic & Main Characters (Describe in 1-2 sentences)",
    videoTopicPlaceholder:
      "Example: New product advertisement, product introduction, product usage guide,...\nCharacters: Example: Baby Bi, Mr. A, Mrs. B,...",
    audience: "Who is your audience?",
    selectAudience: "Select audience",
    scriptLength: "Script Length",
    selectLength: "Select length",
    scriptStyle: "Script Style",
    selectStyle: "Select style",
    language: "Language",
    vietnamese: "Vietnamese",
    english: "English",
    french: "French",
    spanish: "Spanish",
    german: "German",
    generator: "Generator",

    // Veo3 Prompt Generator - Structured Mode
    structuredMode: "Structured Mode",
    chatMode: "Chat Mode",
    mainSubject: "Describe the main subject of the video in detail?",
    mainSubjectPlaceholder: "Describe the main subject's appearance",
    mainSubjectRequired: "This field is required",
    sceneAction: "What is happening in the scene?",
    sceneActionPlaceholder: "What is the subject doing or feeling in the scene?",
    sceneActionRequired: "This field is required",
    dialogue: "Is there any specific dialogue or sound you want in the video?",
    dialogueOptional: "(optional)",
    dialoguePlaceholder: "Add dialogue, music, or sound effects if needed.",
    cameraMovement: "How should the camera move or frame the shot?",
    cameraOptional: "(optional)",
    cameraPlaceholder: "You can describe things like slow zoom, aerial view, close-up, tracking shot, etc.",
    otherDetails: "Any other details you want to include?",
    otherDetailsOptional: "(optional)",
    otherDetailsPlaceholder: "This could be lighting, weather, objects, mood, or small touches in the environment",
    subtitles: "Do you want subtitles in the video?",
    subtitlesOptional: "(optional)",
    yes: "Yes",
    no: "No",
    generate: "Generate",

    // Chat Mode
    chatPrompt:
      "Please describe your idea clearly, specify the required video dimensions, and accurately define your target audience. Example: An astronaut embarking on an exploratory mission to the moon, vertical video for TikTok targeting space and celestial body enthusiasts",
    chatPlaceholder: "Describe the video you want to create...",
    generateVideoPrompt: "Generate Video Prompt",

    // Audiences
    generalAudience: "General Audience",
    teenagers: "Teenagers (13-19)",
    youngAdults: "Young Adults (20-35)",
    professionals: "Professionals",
    parents: "Parents",
    seniors: "Seniors (55+)",

    // Script Lengths
    length15to30: "15-30 seconds",
    length30to60: "30-60 seconds",
    length1to2min: "1-2 minutes",
    length2to5min: "2-5 minutes",
    length5to10min: "5-10 minutes",

    // Script Styles
    conversational: "Conversational",
    professional: "Professional",
    energetic: "Energetic",
    educational: "Educational",
    storytelling: "Storytelling",
    promotional: "Promotional",

    // Footer
    footerDescription:
      "Transform your ideas into powerful video prompts with cutting-edge AI technology. Our platform combines advanced prompt engineering with intuitive design to help content creators, marketers, and businesses generate compelling video scripts and detailed prompts for AI video generation tools like Google's Veo 3.",

    // Tools Pages
    videoToPrompt: "Video to Prompt",
    transcription: "Transcription",
    promptGuide: "Prompt Guide",
    promptLibrary: "Prompt Library",

    // Common
    loading: "Loading...",
    error: "Error occurred",
    success: "Success",
    required: "required",
    optional: "optional",
  },
  fr: {
    // SEO and Branding
    siteTitle: "Générateur de Prompts Veo3 Gratuit en Ligne",
    mainHeading: "Générateur de Prompts Veo3",
    accentWord: "Prompts",

    // Navigation
    home: "Accueil",
    tools: "Outils",
    blog: "Blog",
    about: "À propos",
    contact: "Contact",
    getStarted: "Commencer",

    // Main Tools Navigation
    videoScriptGenerator: "Générateur de Script Vidéo",
    veo3PromptGenerator: "Générateur de Prompts Veo3",

    // Video Script Generator
    videoTopic: "Sujet vidéo et personnages principaux (Décrire en 1-2 phrases)",
    videoTopicPlaceholder:
      "Exemple: Nouvelle publicité produit, introduction produit, guide d'utilisation produit,...\nPersonnages: Exemple: Bébé Bi, M. A, Mme B,...",
    audience: "Qui est votre audience?",
    selectAudience: "Sélectionner l'audience",
    scriptLength: "Longueur du script",
    selectLength: "Sélectionner la longueur",
    scriptStyle: "Style du script",
    selectStyle: "Sélectionner le style",
    language: "Langue",
    vietnamese: "Vietnamien",
    english: "Anglais",
    french: "Français",
    spanish: "Espagnol",
    german: "Allemand",
    generator: "Générateur",

    // Veo3 Prompt Generator - Structured Mode
    structuredMode: "Mode Structuré",
    chatMode: "Mode Chat",
    mainSubject: "Décrivez le sujet principal de la vidéo en détail?",
    mainSubjectPlaceholder: "Décrivez l'apparence du sujet principal",
    mainSubjectRequired: "Ce champ est requis",
    sceneAction: "Que se passe-t-il dans la scène?",
    sceneActionPlaceholder: "Que fait ou ressent le sujet dans la scène?",
    sceneActionRequired: "Ce champ est requis",
    dialogue: "Y a-t-il un dialogue ou un son spécifique que vous voulez dans la vidéo?",
    dialogueOptional: "(optionnel)",
    dialoguePlaceholder: "Ajoutez du dialogue, de la musique ou des effets sonores si nécessaire.",
    cameraMovement: "Comment la caméra doit-elle bouger ou cadrer la prise?",
    cameraOptional: "(optionnel)",
    cameraPlaceholder: "Vous pouvez décrire des choses comme zoom lent, vue aérienne, gros plan, plan de suivi, etc.",
    otherDetails: "D'autres détails que vous voulez inclure?",
    otherDetailsOptional: "(optionnel)",
    otherDetailsPlaceholder:
      "Cela pourrait être l'éclairage, la météo, les objets, l'ambiance, ou de petites touches dans l'environnement",
    subtitles: "Voulez-vous des sous-titres dans la vidéo?",
    subtitlesOptional: "(optionnel)",
    yes: "Oui",
    no: "Non",
    generate: "Générer",

    // Chat Mode
    chatPrompt:
      "Veuillez décrire votre idée clairement, spécifier les dimensions vidéo requises, et définir précisément votre audience cible. Exemple: Un astronaute embarquant dans une mission d'exploration vers la lune, vidéo verticale pour TikTok ciblant les passionnés d'espace et de corps célestes",
    chatPlaceholder: "Décrivez la vidéo que vous voulez créer...",
    generateVideoPrompt: "Générer un Prompt Vidéo",

    // Audiences
    generalAudience: "Audience Générale",
    teenagers: "Adolescents (13-19)",
    youngAdults: "Jeunes Adultes (20-35)",
    professionals: "Professionnels",
    parents: "Parents",
    seniors: "Seniors (55+)",

    // Script Lengths
    length15to30: "15-30 secondes",
    length30to60: "30-60 secondes",
    length1to2min: "1-2 minutes",
    length2to5min: "2-5 minutes",
    length5to10min: "5-10 minutes",

    // Script Styles
    conversational: "Conversationnel",
    professional: "Professionnel",
    energetic: "Énergique",
    educational: "Éducatif",
    storytelling: "Narratif",
    promotional: "Promotionnel",

    // Footer
    footerDescription:
      "Transformez vos idées en prompts vidéo puissants avec une technologie IA de pointe. Notre plateforme combine l'ingénierie de prompts avancée avec un design intuitif pour aider les créateurs de contenu, les marketeurs et les entreprises à générer des scripts vidéo convaincants et des prompts détaillés pour les outils de génération vidéo IA comme Veo 3 de Google.",

    // Tools Pages
    videoToPrompt: "Vidéo vers Prompt",
    transcription: "Transcription",
    promptGuide: "Guide des Prompts",
    promptLibrary: "Bibliothèque de Prompts",

    // Common
    loading: "Chargement...",
    error: "Erreur survenue",
    success: "Succès",
    required: "requis",
    optional: "optionnel",
  },
  zh: {
  // SEO and Branding
  siteTitle: "Veo3 提示词生成器（免费在线）",
  mainHeading: "Veo3 提示词生成器",
  accentWord: "提示词",

  // Navigation
  home: "首页",
  tools: "工具",
  blog: "博客",
  about: "关于",
  contact: "联系",
  getStarted: "立即使用",

  // Main Tools Navigation
  videoScriptGenerator: "视频脚本生成器",
  veo3PromptGenerator: "Veo3 提示词生成器",

  // Video Script Generator
  videoTopic: "视频主题与主要角色（用 1–2 句话描述）",
  videoTopicPlaceholder:
    "示例：新品广告、产品介绍、产品使用指南……\n角色：示例：小白、A 先生、B 女士……",
  audience: "你的目标受众是谁？",
  selectAudience: "选择受众",
  scriptLength: "脚本时长",
  selectLength: "选择时长",
  scriptStyle: "脚本风格",
  selectStyle: "选择风格",
  language: "语言",
  vietnamese: "越南语",
  english: "英语",
  french: "法语",
  spanish: "西班牙语",
  german: "德语",
  generator: "生成",

  // Veo3 Prompt Generator - Structured Mode
  structuredMode: "结构化模式",
  chatMode: "对话模式",
  mainSubject: "请详细描述视频的主体？",
  mainSubjectPlaceholder: "描述主体的外观特征",
  mainSubjectRequired: "该字段为必填项",
  sceneAction: "场景中发生了什么？",
  sceneActionPlaceholder: "主体在场景中的动作或情绪？",
  sceneActionRequired: "该字段为必填项",
  dialogue: "是否需要在视频中加入特定台词或声音？",
  dialogueOptional: "（可选）",
  dialoguePlaceholder: "如需，可添加台词、音乐或音效。",
  cameraMovement: "镜头应如何运动或构图？",
  cameraOptional: "（可选）",
  cameraPlaceholder: "可描述：慢速推拉、航拍、特写、跟拍等。",
  otherDetails: "还有其他想包含的细节吗？",
  otherDetailsOptional: "（可选）",
  otherDetailsPlaceholder: "例如灯光、天气、物件、氛围或环境中的小细节",
  subtitles: "是否需要字幕？",
  subtitlesOptional: "（可选）",
  yes: "是",
  no: "否",
  generate: "生成",

  // Chat Mode
  chatPrompt:
    "请清晰描述你的创意，注明所需视频尺寸，并准确界定目标受众。示例：一位宇航员踏上登月探索任务；竖屏视频，面向对太空与天体感兴趣的 TikTok 受众",
  chatPlaceholder: "描述你想要创作的视频……",
  generateVideoPrompt: "生成视频提示词",

  // Audiences
  generalAudience: "大众受众",
  teenagers: "青少年（13–19）",
  youngAdults: "青年（20–35）",
  professionals: "职场人士",
  parents: "父母",
  seniors: "老年人（55+）",

  // Script Lengths
  length15to30: "15–30 秒",
  length30to60: "30–60 秒",
  length1to2min: "1–2 分钟",
  length2to5min: "2–5 分钟",
  length5to10min: "5–10 分钟",

  // Script Styles
  conversational: "对话体",
  professional: "专业",
  energetic: "活力",
  educational: "科普/教学",
  storytelling: "叙事/讲故事",
  promotional: "推广/营销",

  // Footer
  footerDescription:
    "借助前沿 AI 技术，将你的创意转化为强大的视频提示词。我们的平台将先进的提示词工程与直观设计相结合，帮助内容创作者、营销人员和企业为 Google 的 Veo 3 等 AI 视频生成工具产出有说服力的脚本与详细提示。",

  // Tools Pages
  videoToPrompt: "视频转提示词",
  transcription: "转写",
  promptGuide: "提示词指南",
  promptLibrary: "提示词库",

  // Common
  loading: "加载中…",
  error: "发生错误",
  success: "成功",
  required: "必填",
  optional: "可选",
}
} as const

export function getTranslation(locale: Locale, key: keyof typeof translations.en): string {
  return translations[locale][key] || translations.en[key]
}
