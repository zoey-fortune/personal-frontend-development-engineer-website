export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  role?: string;
  timeline?: string;
  overview?: string;
  features?: string[];
  techArchitecture?: string;
  challenges?: string[];
  results?: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  email: string;
  socialLinks: SocialLink[];
}

export const personalInfo: PersonalInfo = {
  name: 'Alex Chen',
  title: '前端开发工程师',
  tagline: '用代码编织数字世界的无限可能',
  bio: '热衷于构建优雅、高性能的 Web 应用。相信好的前端体验源于对细节的极致追求和对技术的不断探索。在 React 生态、交互设计和性能优化领域有深入实践，致力于将创意与技术完美融合，打造令人难忘的数字产品。',
  email: 'alex.chen@devfolio.io',
  socialLinks: [
    { platform: 'GitHub', url: 'https://github.com', icon: 'github' },
    { platform: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
    { platform: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
    { platform: 'Dribbble', url: 'https://dribbble.com', icon: 'dribbble' },
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    name: '前端框架',
    skills: [
      { name: 'React', icon: 'react', level: 95 },
      { name: 'Vue.js', icon: 'vue', level: 88 },
      { name: 'Next.js', icon: 'next', level: 90 },
      { name: 'TypeScript', icon: 'typescript', level: 92 },
    ],
  },
  {
    name: '样式与设计',
    skills: [
      { name: 'Tailwind CSS', icon: 'tailwind', level: 95 },
      { name: 'CSS / SCSS', icon: 'css', level: 90 },
      { name: 'Framer Motion', icon: 'framer', level: 85 },
      { name: 'Figma', icon: 'figma', level: 80 },
    ],
  },
  {
    name: '工具与工程化',
    skills: [
      { name: 'Vite', icon: 'vite', level: 92 },
      { name: 'Webpack', icon: 'webpack', level: 85 },
      { name: 'Git', icon: 'git', level: 90 },
      { name: 'Docker', icon: 'docker', level: 75 },
      { name: 'Node.js', icon: 'node', level: 82 },
      { name: 'Jest / Vitest', icon: 'jest', level: 80 },
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'Nebula Dashboard',
    description: '企业级数据可视化仪表盘，支持实时数据流渲染、拖拽式布局和自定义主题。采用 ECharts 实现复杂图表交互。',
    tags: ['React', 'TypeScript', 'ECharts', 'Tailwind CSS', 'WebSocket'],
    link: 'https://github.com',
    github: 'https://github.com',
    role: '全栈开发 · 项目负责人',
    timeline: '2024.06 - 2024.11',
    overview: 'Nebula Dashboard 是一个面向企业级应用的数据可视化仪表盘平台。用户可以通过拖拽方式自定义仪表盘布局，接入多种数据源并实时呈现数据变化。系统支持多租户架构，每个租户可拥有独立的仪表盘配置和主题风格。',
    features: [
      '拖拽式布局引擎，支持自由排列和大小调整图表组件',
      'WebSocket 实时数据推送，延迟低于 100ms',
      '内置 30+ 种 ECharts 图表模板，支持自定义配置',
      '多租户权限体系，RBAC 角色权限控制',
      '深色/浅色主题切换，支持品牌色自定义',
      '数据导出支持 PDF、Excel、CSV 等多种格式',
    ],
    techArchitecture: '前端采用 React 18 + TypeScript + Tailwind CSS 构建 UI 层，使用 react-grid-layout 实现拖拽布局，ECharts 负责图表渲染。通过 WebSocket 与后端 Node.js 服务保持长连接，后端使用 Redis 缓存实时数据，PostgreSQL 存储持久化配置。',
    challenges: [
      '大量图表同时渲染时的性能瓶颈 —— 通过虚拟滚动和按需渲染，将首屏渲染时间从 3.2s 降至 0.8s',
      '跨图表数据联动时的状态同步 —— 设计了一套发布-订阅事件总线，统一管理图表间通信',
      '多租户数据隔离与权限校验 —— 在 API 层和数据库层双重校验，确保数据安全',
    ],
    results: [
      '上线后服务了 30+ 企业客户，日均活跃用户 500+',
      '前端打包体积优化至 280KB（gzip），首屏加载 < 1.5s',
      '拖拽布局响应时间 < 16ms，用户体验流畅',
    ],
  },
  {
    title: 'PixelForge Editor',
    description: '基于浏览器的图像编辑工具，支持图层管理、滤镜效果和 AI 辅助处理。使用 WebGL 加速渲染。',
    tags: ['Next.js', 'WebGL', 'Canvas API', 'Zustand', 'Node.js'],
    link: 'https://github.com',
    github: 'https://github.com',
    role: '前端核心开发',
    timeline: '2024.01 - 2024.08',
    overview: 'PixelForge 是一款纯浏览器端的图像编辑工具，无需安装即可在网页中进行专业的图像处理。支持多图层编辑、滤镜效果、智能选区等专业功能，并集成了 AI 辅助的背景移除和图像增强能力。',
    features: [
      '多图层管理系统，支持混合模式、透明度调节和图层蒙版',
      'WebGL 加速的滤镜引擎，包含 40+ 种滤镜效果',
      'AI 智能背景移除与对象识别（基于 TensorFlow.js）',
      '完整的撤销/重做历史栈，支持 100 步操作回退',
      '选区工具套件（矩形、椭圆、套索、魔棒）',
      '支持 PSD、PNG、JPPG、WebP 等多种格式导入导出',
    ],
    techArchitecture: '基于 Next.js 14 构建，使用 OffscreenCanvas + WebGL 2.0 实现高性能图像渲染管线。状态管理采用 Zustand + Immer 保证不可变数据更新。AI 功能使用 TensorFlow.js 在浏览器端运行预训练模型，通过 Web Worker 避免阻塞主线程。后端 Node.js 服务仅用于用户认证和云端存储。',
    challenges: [
      '大尺寸图片（8000×6000px+）的处理性能 —— 采用分块渲染和渐进式加载策略',
      'WebGL 滤镜链的性能优化 —— 将多个滤镜合并为单次 GPU Pass 执行',
      '浏览器兼容性 —— 针对不同浏览器实现了 WebGL fallback 到 Canvas 2D',
    ],
    results: [
      '上线 3 个月获得 10K+ GitHub Stars',
      '图片处理速度相比纯 Canvas 方案提升 8 倍',
      '支持处理最大 10K×10K 分辨率的图像文件',
    ],
  },
  {
    title: 'Voxel Chat',
    description: '实时多人协作聊天平台，集成语音通话、文件共享和 Markdown 编辑器。支持端到端加密。',
    tags: ['React', 'Socket.io', 'WebRTC', 'Node.js', 'MongoDB'],
    link: 'https://github.com',
    github: 'https://github.com',
    role: '前端负责人 · 全栈参与',
    timeline: '2023.08 - 2024.03',
    overview: 'Voxel Chat 是一个面向远程团队的实时协作通信平台。除了基础的即时通讯功能外，还集成了语音/视频通话、屏幕共享、文件协作编辑等功能。采用端到端加密确保通信安全，支持数千人同时在线。',
    features: [
      '实时消息传递，支持文字、图片、代码块和 Markdown 富文本',
      'WebRTC 音视频通话，支持多人会议（最多 50 人同时）',
      '文件共享与在线预览（PDF、图片、代码文件等）',
      '频道/话题分组管理，支持公开频道和私密群组',
      '消息端到端加密（E2EE），基于 Signal Protocol',
      '消息搜索、收藏和稍后阅读功能',
    ],
    techArchitecture: '前端 React 应用通过 Socket.io 与后端建立 WebSocket 长连接，实现 < 50ms 的消息延迟。WebRTC 通话使用 SFU 架构的 Mediasoup 服务器进行媒体流转发。消息在客户端使用 Web Crypto API 进行端到端加密后再传输。后端使用 Node.js + Express，MongoDB 存储消息和用户数据，Redis 管理在线状态和消息队列。',
    challenges: [
      '万人同时在线的消息广播效率 —— 采用消息分片 + 批量推送策略，将服务器压力降至原来的 30%',
      '弱网环境下的消息可靠投递 —— 实现消息确认与重传机制，丢包率降至 0.1%',
      '端到端加密密钥管理 —— 设计了安全的多设备密钥同步方案',
    ],
    results: [
      'DAU 峰值突破 8000，总注册用户超过 50K',
      '消息端到端延迟中位数 35ms',
      '99.99% 的服务可用性，获得用户高度评价',
    ],
  },
  {
    title: 'Quantum UI',
    description: '开源的 React 组件库，提供 50+ 高质量组件。支持主题定制、无障碍访问和 SSR。',
    tags: ['React', 'TypeScript', 'Storybook', 'Rollup', 'Jest'],
    link: 'https://github.com',
    github: 'https://github.com',
    role: '核心维护者 · 独立开发',
    timeline: '2023.03 - 至今',
    overview: 'Quantum UI 是一个面向现代 Web 应用的开源 React 组件库。设计理念是"高可定制、高性能、高可访问性"。提供了 50+ 精心设计的 UI 组件，支持 Tree Shaking、服务端渲染和完整的 TypeScript 类型推导。',
    features: [
      '50+ 生产级组件，涵盖表单、数据展示、导航、反馈等类别',
      '基于 CSS Variables 的主题系统，支持运行时动态切换',
      '完整的 WAI-ARIA 支持，所有组件通过无障碍测试',
      'Tree Shaking 友好，按需引入最小化打包体积',
      '支持 React Server Components（RSC）',
      'Storybook 交互式文档，包含 200+ 使用示例',
    ],
    techArchitecture: '使用 TypeScript 严格模式开发，Rollup 打包输出 ESM/CJS/UMD 三种格式。组件样式使用 CSS Modules + CSS Variables 实现主题化。测试体系包括 Jest 单元测试 + Testing Library 集成测试 + Chromatic 视觉回归测试。文档站点基于 Next.js 构建，CI/CD 通过 GitHub Actions 自动发布到 NPM。',
    challenges: [
      '组件 API 设计的简洁性与灵活性平衡 —— 通过组合模式（Compound Components）实现',
      'TypeScript 泛型类型推导的复杂度 —— 大量使用类型体操确保 IDE 智能提示准确',
      '打包体积优化 —— 利用 Rollup sideEffects 配置将组件库 tree-shaking 利用率提升至 95%',
    ],
    results: [
      'NPM 周下载量 15K+，GitHub Stars 8K+',
      '被 200+ 开源项目采用为 UI 基础库',
      'BundlePhobia 评分 A+，单组件平均体积 < 3KB gzip',
    ],
  },
];