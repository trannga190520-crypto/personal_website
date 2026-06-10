import { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardList,
  Database,
  Download,
  ExternalLink,
  FileText,
  Layers3,
  Mail,
  MapPin,
  MousePointerClick,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
  X,
  ZoomIn,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Folder from "./components/Folder";

type Evidence = {
  title: string;
  src: string;
  alt: string;
  caption: string;
  kind?: "image" | "video";
};

type LightboxImage = {
  src: string;
  alt: string;
  title: string;
  caption?: string;
};

type FolderGallery = {
  title: string;
  description: string;
  images: LightboxImage[];
};

type Project = {
  id: string;
  number: string;
  category: string;
  title: string;
  summary: string;
  role: string;
  problem: string;
  solution: string;
  outputs: string[];
  result: string;
  tags: string[];
  icon: LucideIcon;
  cover: string;
  color: string;
  evidence: Evidence[];
  gallery?: FolderGallery;
  reflection: string;
};

const resumeUrl = "/portfolio/resume/cai-yuyang-product-resume.pdf";

const navItems = [
  ["定位", "#positioning"],
  ["实习", "#experience"],
  ["项目", "#projects"],
  ["案例", "#case-studies"],
  ["简历", "#resume"],
];

const positioningPillars = [
  {
    title: "产品经理能力",
    text: "能从业务对象、页面规则和字段含义入手，把复杂 ToB 流程整理成 PRD、原型和可评审的需求说明。",
    proof: "实习中参与智能回款系统需求设计、业务流程梳理、字段映射配置和上线问题跟进。",
    icon: ClipboardList,
  },
  {
    title: "数据分析能力",
    text: "关注指标口径是否成立，而不是只做图表。能区分订单创建时间、扣款请求时间和扣款成功时间。",
    proof: "搭建 Excel / Quick BI 周期性分析模板，用 N 日累计回款口径减少账龄差异带来的误判。",
    icon: Database,
  },
  {
    title: "AI 产品潜力",
    text: "不把“加 AI”当成默认答案，能判断 AI、规则和界面导航分别适合解决什么问题。",
    proof: "完成 ChatTrace 插件 MVP 与 AIGC 非遗小程序测试版，保留清晰的产品边界和验收标准。",
    icon: BrainCircuit,
  },
];

const experienceItems = [
  {
    title: "需求设计与评审推进",
    text: "参与智能回款系统相关 PRD、字段说明、原型设计和需求评审，把业务规则转成可开发、可验收的产品说明。",
    icon: ClipboardList,
  },
  {
    title: "数据分析模板搭建",
    text: "基于扣款单与扣款明细数据，用 Excel 和 Quick BI 搭建周期性分析模板，跟踪 N 日回款与重点商户表现。",
    icon: BarChart3,
  },
  {
    title: "周/月度分析模板沉淀",
    text: "沉淀周度、月度分析模板，明确不同时间口径下的回款统计方式，支持周会复盘、商户对比和策略效果跟踪。",
    icon: Database,
  },
  {
    title: "策略复盘支持",
    text: "按扣款时间、扣款金额、失败后扣款梯度等维度分析，为业务侧调整策略提供数据依据。",
    icon: Target,
  },
];

const projects: Project[] = [
  {
    id: "repayment-product",
    number: "01",
    category: "ToB 产品需求",
    title: "回款宝｜智能回款系统需求与数据链路",
    summary:
      "围绕扣款单、扣款明细、商户字段映射等业务对象，参与 PRD、流程梳理、原型说明和需求推进。",
    role: "产品经理实习生",
    problem:
      "回款业务涉及商户、扣款单、扣款明细、协议和回调等多个对象。如果字段关系和页面规则不清晰，开发、运营和业务复盘都会出现理解偏差。",
    solution:
      "先梳理扣款单与扣款明细的数据关系，再把字段映射配置、页面规则和异常边界转成原型与 PRD 说明，降低需求评审和开发沟通成本。",
    outputs: [
      "扣款单与扣款明细关系梳理",
      "字段映射配置弹窗原型",
      "页面规则与字段含义说明",
      "需求评审、上线与问题跟进",
    ],
    result:
      "参与补充字段映射、动账通知配置等需求规则和原型说明，持续完善回款宝系统的配置能力和业务处理链路，让系统功能逐步更完整。",
    tags: ["PRD", "原型设计", "业务流程", "字段映射"],
    icon: BriefcaseBusiness,
    cover: "/portfolio/internship/data-relationship-safe.png",
    color: "#2F6F73",
    evidence: [
      {
        title: "原型展示",
        src: "/portfolio/internship/prototype-1.png",
        alt: "动账通知配置原型展示",
        caption: "动账通知配置原型展示。",
      },
      {
        title: "原型展示",
        src: "/portfolio/internship/field-mapping-modal-safe.png",
        alt: "裁剪后的字段映射配置弹窗原型",
        caption: "字段映射配置原型图。",
      },
      {
        title: "交互规则",
        src: "/portfolio/internship/interaction-rules.png",
        alt: "回款宝交互规则说明",
        caption: "梳理页面交互规则、字段含义和异常边界，将业务规则转化为可评审的需求说明。",
      },
      {
        title: "分析模板沉淀",
        src: "/portfolio/internship/weekly-document.png",
        alt: "周月度数据分析模板文档",
        caption: "沉淀周/月度分析模板，明确不同时间口径下的回款统计方式，支持周期复盘和策略跟踪。",
      },
    ],
    reflection:
      "ToB 产品的难点不只在页面，而在字段、流程和业务口径能否被不同角色共同理解。",
  },
  {
    id: "repayment-analysis",
    number: "02",
    category: "数据分析项目",
    title: "扣款策略复盘｜N 日累计回款分析模板",
    summary:
      "从 Excel 临时透视表过渡到 Quick BI 周期看板，跟踪重点商户 N 日回款表现和策略变化。",
    role: "产品经理实习生 / 数据分析参与者",
    problem:
      "直接比较不同统计周的回款率可能产生误判：本周新增扣款单还没经历完整回款周期，不能与成熟账龄批次直接对比。",
    solution:
      "将分析重点从单纯周环比调整为按扣款单创建日期和 N 日累计窗口观察，区分订单创建期、扣款执行期和回款成功期。",
    outputs: [
      "Excel 数据透视验证",
      "Quick BI N 日回款模板",
      "周度 / 月度数据分析文档",
      "重点商户策略复盘材料",
    ],
    result:
      "持续跟踪重点商户回款表现，观察到整体累计回款率由低个位数提升至约 10%。该变化受策略调整、扣款单成熟度、商户用户质量等多因素影响，不做单因果归因。",
    tags: ["Excel", "Quick BI", "指标口径", "策略复盘"],
    icon: BarChart3,
    cover: "/portfolio/internship/repayment-rate-trend.png",
    color: "#B7633D",
    evidence: [
      {
        title: "Before",
        src: "/portfolio/internship/before-excel.png",
        alt: "Excel 数据透视分析截图",
        caption: "早期使用 Excel 透视表验证扣款时间、扣款金额和 N 日回款方向。",
      },
      {
        title: "After",
        src: "/portfolio/internship/after-quickbi.png",
        alt: "Quick BI N 日回款分析模板截图",
        caption: "后期在 Quick BI 中沉淀 N 日累计回款模板，用于周期性追踪与复盘。",
      },
      {
        title: "方法修正",
        src: "/portfolio/internship/n-day-dashboard.png",
        alt: "扣款单 N 日回款情况看板",
        caption: "全量展示扣款单创建后每日扣款表现，适合对单批次、单商户做更细的问题追踪和异常定位。",
      },
      {
        title: "结果观察",
        src: "/portfolio/internship/repayment-rate-trend.png",
        alt: "重点商户累计回款率变化趋势",
        caption: "用于展示重点商户累计回款率的阶段性变化，页面中明确不做单一策略归因。",
      },
    ],
    reflection:
      "数据分析要先问清楚分子、分母、时间范围和样本成熟度，再讨论策略效果。",
  },
  {
    id: "aigc-culture",
    number: "03",
    category: "AIGC 产品原型",
    title: "惠裳海厝｜AIGC 非遗文旅小程序",
    summary:
      "以惠安女非遗文化为主题，设计 C 端文化体验与 B 端商户运营双端闭环，并完成可展示小程序测试版。",
    role: "项目负责人 / 产品设计 / AI 协同开发",
    problem:
      "非遗文化传播常停留在静态展示和线下讲解，年轻用户参与感较弱，线下商户也缺少把文化体验转化为消费场景的数字化工具。",
    solution:
      "设计“文化图鉴 → AI 对话导览 → AI 试衣原型 → 文创商城 → 商户工作台”的产品路径，用 AIGC 增强理解、互动和展示。",
    outputs: [
      "C/B 双端业务闭环",
      "小程序主要页面与交互",
      "DeepSeek API 对话导览",
      "BP 整合、任务拆解与路演统筹",
    ],
    result:
      "项目获第十六届全国大学生电子商务“三创赛”校级一等奖；AI 对话已接入真实 API，AI 试衣部分完成前端流程和接口预留，未接入真实换装模型。",
    tags: ["AIGC", "DeepSeek API", "小程序", "BP"],
    icon: BrainCircuit,
    cover: "/portfolio/aigc/overview.png",
    color: "#6F7E3F",
    evidence: [
      {
        title: "项目总览",
        src: "/portfolio/aigc/overview.png",
        alt: "惠裳海厝项目总览图",
        caption: "一页展示项目定位、核心功能、B/C 端页面和商业闭环。",
      },
      {
        title: "校赛一等奖",
        src: "/portfolio/aigc/extra-1.png",
        alt: "惠裳海厝三创赛校级一等奖截图",
        caption: "第十六届全国大学生电子商务“三创赛”校级一等奖截图。",
      },
    ],
    gallery: {
      title: "比赛过程与补充素材",
      description: "收纳未在主案例区展开的 BP、C 端页面、B 端页面和演示素材，用于补充展示项目完整度。",
      images: [
        {
          title: "BP 材料 01",
          src: "/portfolio/aigc/bp-1.png",
          alt: "惠裳海厝 BP 材料第一页",
          caption: "用于路演和项目介绍的 BP 材料。",
        },
        {
          title: "BP 材料 02",
          src: "/portfolio/aigc/bp-2.png",
          alt: "惠裳海厝 BP 材料第二页",
          caption: "用于说明产品方案、场景和商业闭环。",
        },
        {
          title: "BP 材料 03",
          src: "/portfolio/aigc/bp-3.png",
          alt: "惠裳海厝 BP 材料第三页",
          caption: "用于补充展示路演表达和项目包装。",
        },
        {
          title: "B 端页面 01",
          src: "/portfolio/aigc/merchant-workbench.jpg",
          alt: "惠裳海厝 B 端页面 01",
          caption: "商户工作台展示到店客流、AI 体验次数、订单和转化指标。",
        },
        {
          title: "B 端页面 02",
          src: "/portfolio/aigc/merchant-2.jpg",
          alt: "惠裳海厝 B 端页面 02",
          caption: "补充展示商户侧运营和体验转化相关页面。",
        },
        {
          title: "B 端页面 03",
          src: "/portfolio/aigc/merchant-3.jpg",
          alt: "惠裳海厝 B 端页面 03",
          caption: "补充展示商户侧管理和展示台页面。",
        },
        {
          title: "C 端照片 01",
          src: "/portfolio/aigc/consumer-home.jpg",
          alt: "惠裳海厝 C 端照片 01",
          caption: "面向游客的文化浏览、AI 互动和体验入口。",
        },
        {
          title: "C 端照片 02",
          src: "/portfolio/aigc/ai-tryon.jpg",
          alt: "惠裳海厝 C 端照片 02",
          caption: "完成上传照片、选择服饰、生成结果的前端交互流程。",
        },
        {
          title: "C 端照片 03",
          src: "/portfolio/aigc/extra-2.jpg",
          alt: "惠裳海厝 C 端照片 03",
          caption: "补充展示 C 端页面结构和视觉呈现。",
        },
        {
          title: "C 端照片 04",
          src: "/portfolio/aigc/consumer-2.jpg",
          alt: "惠裳海厝 C 端照片 04",
          caption: "补充展示用户侧文化体验流程。",
        },
        {
          title: "C 端照片 05",
          src: "/portfolio/aigc/consumer-3.jpg",
          alt: "惠裳海厝 C 端照片 05",
          caption: "补充展示用户侧互动和内容消费页面。",
        },
        {
          title: "C 端照片 06",
          src: "/portfolio/aigc/consumer-4.jpg",
          alt: "惠裳海厝 C 端照片 06",
          caption: "补充展示小程序页面结构和功能入口。",
        },
        {
          title: "C 端照片 07",
          src: "/portfolio/aigc/consumer-5.jpg",
          alt: "惠裳海厝 C 端照片 07",
          caption: "补充展示文化体验链路中的其他页面。",
        },
      ],
    },
    reflection:
      "AI 在这个项目里的价值是降低文化理解门槛和增强参与感，而不是简单堆叠功能名称。",
  },
  {
    id: "chattrace",
    number: "04",
    category: "AI 工具 / Chrome 插件",
    title: "ChatTrace｜ChatGPT 长对话导航插件",
    summary:
      "自动提取 ChatGPT 长对话中的用户问题，生成可搜索、可点击跳转的右侧目录，降低回看历史问题的成本。",
    role: "独立产品设计与开发，AI 编程工具辅助",
    problem:
      "在数据分析、题目整理和产品方案讨论等长对话中，用户经常需要回看前面的问题。反复滚动或浏览器搜索都依赖记忆，效率低且打断思路。",
    solution:
      "聚焦“提取用户问题 → 生成目录 → 搜索或浏览 → 点击跳回原位置”的 MVP 闭环，不加入不必要的 AI 总结，优先保障定位成功和用户控制权。",
    outputs: [
      "Chrome Extension Manifest V3",
      "右侧浮动问题目录",
      "搜索、收藏、重命名和手动扫描",
      "5 类扫描逻辑回归测试",
    ],
    result:
      "V0.1.0 MVP 已完成，可在 Chrome 中本地安装使用，并通过 top-lazy-load、virtual-list、recent-scan、sidebar-isolation、stop-scan 5 类回归测试。暂无可验证公开用户数量或节省时长数据。",
    tags: ["Chrome MV3", "MVP", "Content Script", "本地存储"],
    icon: Search,
    cover: "/portfolio/chattrace/sidebar-overview.png",
    color: "#7A5EA8",
    evidence: [
      {
        title: "右侧目录",
        src: "/portfolio/chattrace/sidebar-overview.png",
        alt: "ChatTrace 右侧问题目录截图",
        caption: "只提取用户问题并生成右侧目录，点击后跳回原始提问位置。",
      },
      {
        title: "收藏筛选",
        src: "/portfolio/chattrace/favorites-filter.png",
        alt: "ChatTrace 收藏筛选截图",
        caption: "支持收藏重要问题并切换到只看收藏，便于长对话复盘。",
      },
      {
        title: "重命名",
        src: "/portfolio/chattrace/rename-modal.png",
        alt: "ChatTrace 重命名问题弹窗",
        caption: "允许把复杂提示词改成题号或阶段标题，提高回看效率。",
      },
      {
        title: "插件演示",
        src: "/portfolio/chattrace/demo.mp4",
        alt: "ChatTrace 插件功能演示视频",
        caption: "演示扫描、搜索、收藏、重命名和跳转等核心交互。",
        kind: "video",
      },
    ],
    reflection:
      "这个项目强化了一个判断：能用清晰导航解决的问题，不一定需要用 AI 总结来增加复杂度。",
  },
];

const skills = [
  {
    title: "产品设计",
    icon: Layers3,
    points: ["需求分析", "PRD 撰写", "原型设计", "业务流程梳理"],
    proof: "对应实习中的字段映射、页面规则说明和需求评审推进。",
  },
  {
    title: "数据分析",
    icon: BarChart3,
    points: ["Excel", "Quick BI", "指标拆解", "N 日回款率分析"],
    proof: "重点不是做图表，而是确认统计口径、时间窗口和业务含义。",
  },
  {
    title: "AI 工具实践",
    icon: Sparkles,
    points: ["Codex", "Cursor", "Vibe Coding", "Agent 理解"],
    proof: "用 AI 工具辅助完成小程序测试版、Chrome 插件 MVP 和前端作品集。",
  },
  {
    title: "协同推进",
    icon: UsersRound,
    points: ["需求评审", "开发沟通", "上线跟进", "路演统筹"],
    proof: "能把项目从问题定义推进到可展示材料，而不是停留在想法阶段。",
  },
];

const resumeFacts = [
  "浙江理工大学应用物理学本科，2027 届",
  "电话：18605952822",
  "邮箱：yuyangcai521@foxmail.com",
  "杭州捷途安特科技有限公司产品经理实习，参与智能回款系统需求与数据分析",
  "多多买菜产品优化项目组长，围绕新人自提阻力、O2O 激励和次日留存设计优化方案",
  "阿里云 ACA 大模型认证，通过英语六级",
  "2023-2025 年度院级三等奖学金，浙江省大学生物理创新竞赛三等奖",
];

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.16 },
  transition: { duration: 0.5, ease: "easeOut" },
} as const;

function App() {
  const [activeImage, setActiveImage] = useState<LightboxImage | null>(null);

  useEffect(() => {
    if (!activeImage) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveImage(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImage]);

  return (
    <main className="min-h-screen bg-[#F4F6F4] text-[#171717]">
      <Header />
      <Hero />
      <Positioning />
      <Experience />
      <Projects onOpenImage={setActiveImage} />
      <CaseStudies onOpenImage={setActiveImage} />
      <Skills />
      <Resume />
      <ImageLightbox image={activeImage} onClose={() => setActiveImage(null)} />
    </main>
  );
}

function Positioning() {
  return (
    <section className="section-shell bg-[#F4F6F4]" id="positioning">
      <motion.div {...fadeUp}>
        <SectionTitle
          eyebrow="Positioning"
          title="作品集的核心叙事：ToB 业务经验 + 数据分析实践 + AI 工具落地"
          description="这个网站不把我包装成资深工程师，而是展示一个产品经理实习候选人如何发现问题、定义范围、推进方案，并用真实项目证明判断。"
        />
      </motion.div>

      <div className="mt-10 grid gap-px bg-[#D7DDD8] md:grid-cols-3">
        {positioningPillars.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
              className="bg-white p-6"
            >
              <Icon size={24} className="text-[#2F6F73]" />
              <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#4E4B45]">{item.text}</p>
              <p className="mt-5 border-t border-[#D7DDD8] pt-4 text-xs leading-6 text-[#5C5A54]">
                {item.proof}
              </p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#D7DDD8] bg-[#F4F6F4]/92 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#" className="flex min-w-0 items-center gap-3 font-semibold">
          <span className="flex size-9 items-center justify-center rounded-full bg-[#171717] text-sm text-white">
            CY
          </span>
          <span className="hidden sm:inline">蔡昱杨</span>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-[#5C5A54] md:flex">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} className="transition hover:text-[#171717]">
              {label}
            </a>
          ))}
        </nav>

        <a
          href="mailto:yuyangcai521@foxmail.com"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#2F6F73] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#255A5D]"
        >
          <Mail size={16} />
          联系
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#171717] text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-35"
        style={{ backgroundImage: "url('/portfolio/internship/n-day-dashboard.png')" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,23,23,0.96)_0%,rgba(23,23,23,0.86)_42%,rgba(23,23,23,0.45)_100%)]" />
      <div className="soft-grid absolute inset-0 opacity-25" aria-hidden="true" />

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="pointer-events-none relative z-10 mx-auto grid min-h-[680px] max-w-7xl content-center px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12"
      >
        <div className="pointer-events-auto min-w-0">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/8 px-3 py-2 text-sm text-white/82">
            <Sparkles size={16} />
            产品经理实习 / AI 产品经理方向
          </p>
          <h1 className="max-w-full break-words text-4xl font-semibold leading-[1.08] sm:max-w-4xl sm:text-5xl lg:text-6xl">
            用产品逻辑理解业务，
            <br />
            用数据和 AI 工具
            <br className="sm:hidden" />
            推进可验证方案。
          </h1>
          <p className="mt-6 max-w-full break-words text-base leading-8 text-white/72 sm:max-w-2xl sm:text-lg">
            我是蔡昱杨，浙江理工大学本科大三。具备 ToB 智能回款系统实习经验，做过业务流程梳理、PRD、原型、Quick BI
            数据分析，也独立完成过 ChatGPT 长对话导航插件和 AIGC 小程序原型。
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#171717] transition hover:bg-[#E8EFEA]"
            >
              查看重点项目
              <ArrowRight size={17} />
            </a>
            <a
              href={resumeUrl}
              download
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <Download size={17} />
              下载简历
            </a>
            <a
              href="mailto:yuyangcai521@foxmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <Mail size={17} />
              联系我
            </a>
          </div>
        </div>

        <div
          className="mt-12 grid min-w-0 gap-3 lg:mt-0"
          aria-label="核心能力证据"
        >
          {[
            ["求职岗位", "产品经理实习 / AI 产品经理实习。"],
            ["核心优势", "能把业务流程、字段口径和页面规则转成 PRD、原型和可评审材料，具备数据分析能力。"],
            ["作品证据", "回款宝需求与数据分析、AIGC 非遗小程序、ChatTrace 插件 MVP。"],
          ].map(([title, text]) => (
            <div key={title} className="border-l-4 border-[#D9A15F] bg-white/9 p-5 backdrop-blur">
              <p className="font-semibold text-white">{title}</p>
              <p className="mt-2 text-sm leading-6 text-white/66">{text}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section-shell bg-[#FAFBFA]" id="experience">
      <motion.div {...fadeUp}>
        <SectionTitle
          eyebrow="Experience"
          title="ToB 智能回款系统实习经历"
          description="实习内容围绕智能回款系统“回款宝”，重点展示需求设计、业务流程、数据分析和上线跟进能力。"
        />
      </motion.div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.article {...fadeUp} className="border border-[#D7DDD8] bg-white p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-[#2F6F73]">2026.01 - 2026.06</p>
              <h3 className="mt-3 text-2xl font-semibold">杭州捷途安特科技有限公司</h3>
              <p className="mt-2 text-[#5C5A54]">产品经理实习生｜智能回款系统“回款宝”</p>
            </div>
            <MapPin className="text-[#B7633D]" size={22} />
          </div>
          <p className="mt-6 leading-8 text-[#4E4B45]">
            参与智能回款系统相关需求设计与数据分析，围绕扣款成功率与回款效率，结合商户历史回款表现和策略执行数据进行持续跟踪。
          </p>
          <div className="mt-6 border-t border-[#D7DDD8] pt-5">
            <p className="text-sm font-semibold">阶段性结果</p>
            <p className="mt-2 text-sm leading-7 text-[#5C5A54]">
              持续跟踪重点商户回款表现，观察到整体累计回款率由低个位数提升至约 10%。该变化受策略调整、扣款单成熟度、商户用户质量等多因素影响，不直接归因为单一动作。
            </p>
          </div>
        </motion.article>

        <div className="grid gap-4 sm:grid-cols-2">
          {experienceItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
                className="border border-[#D7DDD8] bg-white p-5"
              >
                <Icon className="text-[#2F6F73]" size={22} />
                <h3 className="mt-5 font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5C5A54]">{item.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Projects({ onOpenImage }: { onOpenImage: (image: LightboxImage) => void }) {
  return (
    <section className="section-shell" id="projects">
      <motion.div {...fadeUp} className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionTitle
          eyebrow="Projects"
          title="四个项目，分别证明产品、数据和 AI 落地能力"
        />
        <a
          href="#case-studies"
          className="inline-flex w-fit items-center gap-2 rounded-full border border-[#171717] px-5 py-3 text-sm font-semibold transition hover:bg-[#171717] hover:text-white"
        >
          查看案例详情
          <ArrowRight size={17} />
        </a>
      </motion.div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} onOpenImage={onOpenImage} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  onOpenImage,
}: {
  project: Project;
  index: number;
  onOpenImage: (image: LightboxImage) => void;
}) {
  const Icon = project.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
      className="group flex min-h-[520px] flex-col overflow-hidden border border-[#D7DDD8] bg-white"
      style={{ borderTop: `4px solid ${project.color}` }}
    >
      <button
        type="button"
        className="group/image relative aspect-[16/10] overflow-hidden bg-[#E7ECE7] text-left"
        onClick={() =>
          onOpenImage({
            src: project.cover,
            alt: `${project.title} 项目封面`,
            title: project.title,
            caption: project.summary,
          })
        }
        aria-label={`展开${project.title}项目封面`}
      >
        <img
          src={project.cover}
          alt={`${project.title} 项目封面`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute right-3 top-3 flex size-9 items-center justify-center bg-white/90 text-[#171717] opacity-0 shadow-sm transition group-hover/image:opacity-100">
          <ZoomIn size={17} />
        </span>
      </button>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-[#5C5A54]">{project.number}</p>
            <p className="mt-1 text-sm text-[#2F6F73]">{project.category}</p>
          </div>
          <Icon size={22} style={{ color: project.color }} />
        </div>
        <h3 className="mt-5 text-xl font-semibold leading-7">{project.title}</h3>
        <p className="mt-4 text-sm leading-7 text-[#5C5A54]">{project.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="border border-[#D7DDD8] px-2.5 py-1 text-xs text-[#5C5A54]">
              {tag}
            </span>
          ))}
        </div>
        <a
          href={`#${project.id}`}
          className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-[#171717] transition hover:text-[#2F6F73]"
        >
          查看详情
          <ArrowRight size={16} />
        </a>
      </div>
    </motion.article>
  );
}

function CaseStudies({ onOpenImage }: { onOpenImage: (image: LightboxImage) => void }) {
  return (
    <section className="section-shell bg-[#FAFBFA]" id="case-studies">
      <motion.div {...fadeUp}>
        <SectionTitle
          eyebrow="Selected cases"
          title="从业务问题到可验证产出"
          description="围绕 ToB 回款、数据分析、AIGC 小程序和 AI 工具插件，展示我如何理解问题、做出取舍并推进落地。"
        />
      </motion.div>

      <div className="mt-10 space-y-12">
        {projects.map((project, index) => (
          <CaseStudy key={project.id} project={project} index={index} onOpenImage={onOpenImage} />
        ))}
      </div>
    </section>
  );
}

function CaseStudy({
  project,
  index,
  onOpenImage,
}: {
  project: Project;
  index: number;
  onOpenImage: (image: LightboxImage) => void;
}) {
  const Icon = project.icon;
  return (
    <motion.article
      {...fadeUp}
      id={project.id}
      className="scroll-mt-24 border border-[#D7DDD8] bg-white"
      style={{ borderTop: `5px solid ${project.color}` }}
    >
      <div className="grid gap-8 p-6 lg:grid-cols-[0.78fr_1.22fr] lg:p-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-[#5C5A54]">{project.number}</span>
            <span className="text-sm font-semibold" style={{ color: project.color }}>
              {project.category}
            </span>
          </div>
          <h3 className="mt-4 text-2xl font-semibold leading-8 sm:text-3xl">{project.title}</h3>
          <p className="mt-5 text-sm leading-7 text-[#5C5A54]">{project.summary}</p>

          <div className="mt-7 grid gap-4">
            <InfoBlock title="我的角色" text={project.role} icon={Icon} />
            <InfoBlock title="核心问题" text={project.problem} icon={Target} />
            <InfoBlock title="解决方案" text={project.solution} icon={MousePointerClick} />
          </div>
        </div>

        <div>
          <div className="grid gap-4 sm:grid-cols-2">
            {project.evidence.map((item) => (
              <EvidenceFigure key={item.src} evidence={item} onOpenImage={onOpenImage} />
            ))}
          </div>
          {project.gallery ? <ProjectFolderGallery gallery={project.gallery} color={project.color} onOpenImage={onOpenImage} /> : null}
        </div>
      </div>

      <div className="grid border-t border-[#D7DDD8] lg:grid-cols-[1fr_1fr_1fr]">
        <div className="p-6 lg:p-8">
          <h4 className="font-semibold">我的工作</h4>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-[#5C5A54]">
            {project.outputs.map((output) => (
              <li key={output} className="flex gap-2">
                <CheckCircle2 className="mt-1 shrink-0 text-[#2F6F73]" size={16} />
                <span>{output}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-y border-[#D7DDD8] p-6 lg:border-x lg:border-y-0 lg:p-8">
          <h4 className="font-semibold">项目结果 / 边界</h4>
          <p className="mt-4 text-sm leading-7 text-[#5C5A54]">{project.result}</p>
        </div>
        <div className="p-6 lg:p-8">
          <h4 className="font-semibold">反思</h4>
          <p className="mt-4 text-sm leading-7 text-[#5C5A54]">{project.reflection}</p>
          <a
            href="#projects"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#171717] transition hover:text-[#2F6F73]"
          >
            回到项目列表
            <ArrowRight size={15} />
          </a>
        </div>
      </div>

      <div className="border-t border-[#D7DDD8] px-6 py-4 text-sm text-[#5C5A54] lg:px-8">
        案例 {index + 1} / {projects.length}：{project.tags.join(" · ")}
      </div>
    </motion.article>
  );
}

function InfoBlock({
  title,
  text,
  icon: Icon,
}: {
  title: string;
  text: string;
  icon: LucideIcon;
}) {
  return (
    <div className="border border-[#D7DDD8] p-4">
      <div className="flex items-center gap-2 font-semibold">
        <Icon size={18} className="text-[#2F6F73]" />
        {title}
      </div>
      <p className="mt-3 text-sm leading-7 text-[#5C5A54]">{text}</p>
    </div>
  );
}

function EvidenceFigure({
  evidence,
  onOpenImage,
}: {
  evidence: Evidence;
  onOpenImage: (image: LightboxImage) => void;
}) {
  return (
    <figure className="border border-[#D7DDD8] bg-[#F7F8F5]">
      <div className="flex aspect-[16/10] items-center justify-center overflow-hidden bg-white">
        {evidence.kind === "video" ? (
          <video
            src={evidence.src}
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            aria-label={evidence.alt}
          />
        ) : (
          <button
            type="button"
            className="group/image relative h-full w-full cursor-zoom-in"
            onClick={() =>
              onOpenImage({
                src: evidence.src,
                alt: evidence.alt,
                title: evidence.title,
                caption: evidence.caption,
              })
            }
            aria-label={`展开图片：${evidence.title}`}
          >
            <img src={evidence.src} alt={evidence.alt} className="h-full w-full object-contain" loading="lazy" />
            <span className="absolute right-3 top-3 flex size-9 items-center justify-center bg-white/90 text-[#171717] opacity-0 shadow-sm transition group-hover/image:opacity-100">
              <ZoomIn size={17} />
            </span>
          </button>
        )}
      </div>
      <figcaption className="p-4">
        <p className="text-sm font-semibold">{evidence.title}</p>
        <p className="mt-2 text-xs leading-6 text-[#5C5A54]">{evidence.caption}</p>
      </figcaption>
    </figure>
  );
}

function ProjectFolderGallery({
  gallery,
  color,
  onOpenImage,
}: {
  gallery: FolderGallery;
  color: string;
  onOpenImage: (image: LightboxImage) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const previewItems = gallery.images.slice(0, 3).map((image) => (
    <div
      key={image.src}
      className="folder-paper-thumb"
      style={{ backgroundImage: `url('${image.src}')` }}
      aria-hidden="true"
    />
  ));

  const toggleExpanded = () => {
    setExpanded((current) => !current);
  };

  return (
    <div className="mt-6 border border-[#D7DDD8] bg-[#F7F8F5]">
      <div
        className="grid cursor-pointer gap-5 p-5 sm:grid-cols-[180px_1fr] sm:items-center"
        role="button"
        tabIndex={0}
        onClick={toggleExpanded}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleExpanded();
          }
        }}
        aria-expanded={expanded}
      >
        <div className="flex h-[132px] items-center justify-center overflow-visible">
          <Folder color={color} size={1.08} items={previewItems} className="origin-center" open={expanded} onOpenChange={setExpanded} />
        </div>
        <div>
          <p className="text-sm font-semibold" style={{ color }}>
            素材文件夹
          </p>
          <h4 className="mt-2 text-xl font-semibold">{gallery.title}</h4>
          <p className="mt-3 text-sm leading-7 text-[#5C5A54]">{gallery.description}</p>
          <p className="mt-4 text-sm font-semibold text-[#171717]">
            {expanded ? "收起补充素材" : `展开 ${gallery.images.length} 张补充素材`}
          </p>
        </div>
      </div>

      {expanded ? (
        <div className="grid gap-3 border-t border-[#D7DDD8] p-5 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.images.map((image) => (
            <button
              key={image.src}
              type="button"
              className="group/image border border-[#D7DDD8] bg-white text-left transition hover:border-[#2F6F73]"
              onClick={() => onOpenImage(image)}
              aria-label={`展开图片：${image.title}`}
            >
              <span className="relative block aspect-[4/3] overflow-hidden bg-[#F7F8F5]">
                <img src={image.src} alt={image.alt} className="h-full w-full object-cover transition duration-500 group-hover/image:scale-[1.03]" loading="lazy" />
                <span className="absolute right-2 top-2 flex size-8 items-center justify-center bg-white/90 text-[#171717] opacity-0 shadow-sm transition group-hover/image:opacity-100">
                  <ZoomIn size={15} />
                </span>
              </span>
              <span className="block p-3">
                <span className="block text-sm font-semibold">{image.title}</span>
                {image.caption ? <span className="mt-1 block text-xs leading-5 text-[#5C5A54]">{image.caption}</span> : null}
              </span>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function ImageLightbox({
  image,
  onClose,
}: {
  image: LightboxImage | null;
  onClose: () => void;
}) {
  if (!image) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/82 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={image.title}
      onClick={onClose}
    >
      <div className="relative flex max-h-[92vh] w-full max-w-6xl flex-col bg-white shadow-2xl" onClick={(event) => event.stopPropagation()}>
        <button
          type="button"
          className="absolute right-3 top-3 z-10 flex size-10 items-center justify-center bg-[#171717] text-white transition hover:bg-[#2F6F73]"
          onClick={onClose}
          aria-label="关闭图片预览"
        >
          <X size={20} />
        </button>
        <div className="flex min-h-0 flex-1 items-center justify-center bg-[#F7F8F5] p-3 sm:p-5">
          <img src={image.src} alt={image.alt} className="max-h-[72vh] w-auto max-w-full object-contain" />
        </div>
        <div className="border-t border-[#D7DDD8] p-4">
          <p className="pr-12 text-sm font-semibold">{image.title}</p>
          {image.caption ? <p className="mt-2 text-sm leading-6 text-[#5C5A54]">{image.caption}</p> : null}
        </div>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section className="section-shell" id="skills">
      <motion.div {...fadeUp}>
        <SectionTitle
          eyebrow="Skills"
          title="我的优势：能理解业务、校准指标，也能把想法推进成可展示结果"
          description="我不是只会罗列工具，而是能围绕真实业务场景拆问题、定口径、写需求、做原型，并用 AI 工具提升落地效率。"
        />
      </motion.div>

      <div className="mt-10 grid gap-px bg-[#D7DDD8] md:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.article
              key={skill.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.45, delay: index * 0.04, ease: "easeOut" }}
              className="bg-white p-6"
            >
              <Icon size={24} className="text-[#B7633D]" />
              <h3 className="mt-5 text-lg font-semibold">{skill.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {skill.points.map((point) => (
                  <li key={point} className="border border-[#D7DDD8] px-2.5 py-1 text-xs text-[#5C5A54]">
                    {point}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-7 text-[#5C5A54]">{skill.proof}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

function Resume() {
  return (
    <section className="section-shell bg-[#FAFBFA]" id="resume">
      <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <motion.div {...fadeUp}>
          <SectionTitle
            eyebrow="Resume"
            title="简历区域只展示摘要，完整内容通过 PDF 下载"
          />
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={resumeUrl}
              download
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#171717] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2F6F73]"
            >
              <Download size={17} />
              下载简历 PDF
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#171717] px-5 py-3 text-sm font-semibold transition hover:bg-[#171717] hover:text-white"
            >
              <ExternalLink size={17} />
              在线打开
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
            className="mt-10"
          >
            <div className="thanks-main-container" aria-label="感谢观看">
              <div className="thanks-tooltip-container" tabIndex={0}>
                <span className="thanks-tooltip" role="tooltip">
                  感谢观看
                </span>
                {"THANKS".split("").map((letter, index) => (
                  <span
                    key={letter + index}
                    className="thanks-text"
                    style={{ animationDelay: `${index * 0.08}s` }}
                  >
                    {letter}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div {...fadeUp} className="border border-[#D7DDD8] bg-white p-6">
          <h3 className="flex items-center gap-2 text-xl font-semibold">
            <FileText className="text-[#2F6F73]" size={22} />
            核心简历信息
          </h3>
          <ul className="mt-6 space-y-4">
            {resumeFacts.map((fact) => (
              <li key={fact} className="flex gap-3 text-sm leading-7 text-[#4E4B45]">
                <ShieldCheck className="mt-1 shrink-0 text-[#2F6F73]" size={17} />
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="mb-3 text-sm font-semibold text-[#2F6F73]">{eyebrow}</p>
      <h2 className="text-3xl font-semibold leading-[1.16] sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 max-w-2xl text-base leading-8 text-[#5C5A54]">{description}</p> : null}
    </div>
  );
}

export default App;
