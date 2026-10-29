import type { Capability } from "@/src/entities/capability";
import type { CaseStudy } from "@/src/entities/case-study";
import type { Project } from "@/src/entities/project";
import type { ProofSignal } from "@/src/entities/proof-signal";
import type { Locale } from "./config";

export type ProjectFilterItem = { id: "all" | Project["category"]; label: string };

export type ProjectPageContent = {
  title: string;
  description: string;
  proofTitle: string;
  stats: Array<{ value: string; label: string }>;
  cardLabels: {
    role: string;
    stack: string;
    impact: string;
    caseStudy: string;
  };
};

export type CapabilityPageContent = {
  title: string;
  description: string;
  tableHeaders: {
    capability: string;
    evidence: string;
    relatedWork: string;
  };
  graph: {
    previewEyebrow: string;
    previewTitle: string;
    previewBadge: string;
    interactiveEyebrow: string;
    interactiveBadge: string;
    selectedEyebrow: string;
    selectedChecklist: string[];
    exploreCaseStudies: string;
  };
};

export type CaseStudyPageContent = {
  backToProjects: string;
  overview: string;
  role: string;
  stack: string;
  impact: string;
  timeline: string;
  capabilities: string;
  decisions: string;
  proof: string;
  nextStepTitle: string;
  nextStepDescription: string;
  contact: string;
  sourceRepository: string;
  watchDemo: string;
  closeDemo: string;
};

export const localizedContent = {
  en: {
    footer: "Prefer async first. Clear scope, fast feedback, shipped outcomes.",
    projectsPage: {
      title: "Selected product work",
      description: "A curated set of interfaces, systems, and delivery improvements with clear product context.",
      proofTitle: "Proof Signals",
      stats: [
        { value: "2019", label: "Learning path" },
        { value: "2023", label: "IT-Incubator" },
        { value: "3–5", label: "Team size" },
      ],
      cardLabels: {
        role: "Role",
        stack: "Stack",
        impact: "Impact",
        caseStudy: "View case study",
      },
    },
    capabilitiesPage: {
      title: "Capabilities",
      description: "A practical map of how product intent becomes shipped, reliable interfaces.",
      tableHeaders: {
        capability: "Capability",
        evidence: "Evidence",
        relatedWork: "Related work",
      },
      graph: {
        previewEyebrow: "System preview",
        previewTitle: "Capability Map",
        previewBadge: "Core capabilities",
        interactiveEyebrow: "Capability graph",
        interactiveBadge: "Interactive map",
        selectedEyebrow: "Selected capability",
        selectedChecklist: [
          "Typed boundaries",
          "Reusable UI patterns",
          "Predictable data flow",
          "Regression-safe delivery",
        ],
        exploreCaseStudies: "Explore case studies",
      },
    },
    projectFilters: [
      { id: "all", label: "All" },
      { id: "product-ui", label: "Product UI" },
      { id: "architecture", label: "Architecture" },
      { id: "testing-ci", label: "Testing & CI" },
      { id: "automation", label: "Automation" },
      { id: "performance", label: "Performance" },
    ],
    projects: [
      {
        id: "operations-console",
        slug: "operations-console",
        title: "Operations Console",
        summary: "Internal monitoring interface for triage, incident clarity, and operational workflows.",
        role: "Frontend Engineer",
        stack: ["React", "TypeScript", "Next.js"],
        impact: "Made operational workflows easier to scan and repeat",
        category: "product-ui",
        capabilities: ["product-delivery", "ui-engineering", "performance"],
      },
      {
        id: "social-platform",
        slug: "social-platform",
        title: "ICTROOT Social Platform",
        summary:
          "A team-built Instagram-style social network on Next.js 15 and RTK Query, where I worked across posts and profiles, auth and SSR, notifications, subscriptions, and the messenger.",
        role: "Frontend Engineer",
        stack: ["Next.js", "React", "TypeScript", "RTK Query", "WebSockets"],
        impact: "Delivered frontend features across posts, profiles, auth, notifications, subscriptions, and messaging",
        category: "architecture",
        capabilities: ["frontend-architecture", "api-contracts", "testing-ci"],
        preview: {
          src: "/projects/ictroot-social-platform.webp",
          alt: "ICTROOT messenger with a dialogue containing voice messages and delivery status",
        },
      },
      {
        id: "admin-console",
        slug: "admin-console",
        title: "ICTROOT Super Admin",
        summary:
          "An internal moderation panel on Next.js 16 and GraphQL, where I built the app shell and typed GraphQL foundation, user moderation flows, and the realtime posts list.",
        role: "Frontend Engineer",
        stack: ["Next.js", "TypeScript", "Apollo Client", "GraphQL", "Zustand"],
        impact: "Delivered user moderation and a searchable realtime posts view for admins",
        category: "product-ui",
        capabilities: ["ui-engineering", "frontend-architecture", "api-contracts"],
        preview: {
          src: "/projects/ictroot-super-admin.webp",
          alt: "ICTROOT Super Admin posts list with search and moderation actions",
        },
      },
      {
        id: "automation-tool",
        slug: "automation-tool",
        title: "Automation Tool",
        summary: "Workflow automation interface for repetitive delivery and review tasks.",
        role: "Product-minded Frontend Engineer",
        stack: ["TypeScript", "Node.js", "CI"],
        impact: "Less manual work and clearer release flow",
        category: "automation",
        capabilities: ["automation", "testing-ci", "product-delivery"],
      },
      {
        id: "oauth-flow",
        slug: "oauth-flow",
        title: "OAuth Flow",
        summary: "Auth experience review and callback-scope hardening around social sign-in flows.",
        role: "Frontend Engineer",
        stack: ["Next.js", "TypeScript", "OpenAPI"],
        impact: "Reduced auth ambiguity and integration risk",
        category: "testing-ci",
        capabilities: ["api-contracts", "testing-ci", "frontend-architecture"],
      },
      {
        id: "ui-kit-scroll-area",
        slug: "ui-kit-scroll-area",
        title: "UI Kit Scroll Area",
        summary: "Library-level scroll behavior improvement for layout stability and responsive admin pages.",
        role: "Frontend/UI Engineer",
        stack: ["React", "Radix UI", "TypeScript"],
        impact: "Improved layout stability across product pages",
        category: "architecture",
        capabilities: ["frontend-architecture", "accessibility", "ui-engineering"],
      },
    ],
    caseStudiesPage: {
      backToProjects: "Back to projects",
      overview: "Overview",
      role: "Role",
      stack: "Stack",
      impact: "Impact",
      timeline: "Timeline",
      capabilities: "Capabilities",
      decisions: "Technical decisions",
      proof: "Proof points",
      nextStepTitle: "Need this kind of frontend ownership?",
      nextStepDescription:
        "The strongest portfolio conversations start with a concrete product problem, not a generic introduction.",
      contact: "Contact",
      sourceRepository: "Source repository",
      watchDemo: "Watch demo",
      closeDemo: "Close demo",
    },
    caseStudies: [
      {
        slug: "operations-console",
        title: "Operations Console",
        eyebrow: "Case study / Operations UI",
        summary:
          "An internal monitoring interface focused on triage, incident clarity, and lower-friction operational workflows.",
        role: "Frontend Engineer",
        stack: ["React", "TypeScript", "Next.js"],
        impact: "Made operational workflows easier to scan and repeat",
        timeline: "Internal operations delivery",
        capabilities: ["Product Delivery", "UI Engineering", "Performance"],
        sections: {
          problem: {
            title: "Problem",
            body: "Operational screens often fail when they hide the signal behind visual noise. Users need to understand what changed, what is urgent, and what action is safe to take next.",
          },
          constraints: {
            title: "Constraints",
            body: "The interface needed to stay dense, responsive, and reliable while presenting status-heavy information in a way that supported repeated triage work.",
          },
          solution: {
            title: "Solution",
            body: "The UI focused on clear hierarchy, stable status language, compact cards, and predictable navigation between monitoring context and action context.",
          },
          outcome: {
            title: "Outcome",
            body: "The operational flow became easier to scan, reducing friction and making incident context clearer for repeated work.",
          },
        },
        decisions: [
          {
            title: "Signal-first hierarchy",
            description: "Prioritize status, severity, and next action before secondary metadata.",
          },
          {
            title: "Stable scan patterns",
            description: "Keep repeated layout regions predictable so users build operational rhythm.",
          },
          {
            title: "Performance-aware rendering",
            description: "Avoid unnecessary visual complexity on surfaces that users revisit under pressure.",
          },
        ],
        proof: [
          "Operational friction tracked as the main product outcome.",
          "UI density balanced with scan clarity.",
          "Mapped to Product Delivery, UI Engineering, and Performance capabilities.",
        ],
      },
      {
        slug: "social-platform",
        title: "ICTROOT Social Platform",
        eyebrow: "Case study / Frontend Architecture",
        summary:
          "A team-built Instagram-style social network where I worked across posts and profiles, auth and SSR, notifications, subscriptions, and the messenger.",
        role: "Frontend Engineer",
        stack: ["Next.js", "React", "TypeScript", "RTK Query", "WebSockets"],
        impact: "Delivered frontend features across posts, profiles, auth, notifications, subscriptions, and messaging",
        timeline: "Team project, 2025–2026",
        capabilities: ["Frontend Architecture", "API Contracts", "Testing & CI"],
        repositoryUrl: "https://github.com/ictroot70/Ict",
        preview: {
          src: "/projects/ictroot-social-platform.webp",
          alt: "ICTROOT messenger with a dialogue containing voice messages and delivery status",
        },
        demo: {
          src: "/projects/ictroot-social-platform-demo.mp4",
          caption:
            "Screen recording of the ICTROOT app: subscription and auto-renewal settings, payment history, and the messenger with voice messages",
        },
        sections: {
          problem: {
            title: "Problem",
            body: "A social product combines server-rendered pages, auth-dependent routes, realtime events, and media. Without clear boundaries, SSR, route guards, cached data, and API assumptions drift apart, and regressions surface late.",
          },
          constraints: {
            title: "Constraints",
            body: "A shared team codebase with fixed architecture rules, a shared UI kit, parallel feature work by several developers, and lint, typecheck, and build gates on every change.",
          },
          solution: {
            title: "Solution",
            body: "I worked across the product: post CRUD, likes, comments, and the post modal; profile management and settings; auth-aware SSR with guest and private route guards; WebSocket notifications; subscription and auto-renewal views with prices from the API; and the messenger with voice messages, cursor pagination, list virtualization, and delivery and unread indicators. Alongside features I worked on app-wide performance, including route-level code splitting and public cache policy, and on tests and quality gates around the riskiest flows.",
          },
          outcome: {
            title: "Outcome",
            body: "Core product flows (posts, profiles, auth, notifications, subscriptions, and messaging) were delivered on a shared frontend where API contracts, route guards, and loading states are handled explicitly.",
          },
        },
        decisions: [
          {
            title: "Contract-first API integration",
            description:
              "Align post CRUD, messenger media, and pricing data with the Swagger contract instead of mocks and hardcoded values.",
          },
          {
            title: "Auth-aware SSR and route guards",
            description:
              "Keep server rendering, public and private contracts, and guest route guards consistent so auth state does not leak into the wrong pages.",
          },
          {
            title: "Route-level performance work",
            description:
              "Split code by auth-based routes, reduce unnecessary no-store caching on public pages, and load fonts through next/font.",
          },
          {
            title: "Cursor pagination with virtualized lists",
            description:
              "Load long histories by cursor and virtualize dialogues so every message is not rendered at once.",
          },
        ],
        proof: [
          "Post CRUD, likes, comments, and the post modal across profile and feed (SCRUM-126, SCRUM-282, SCRUM-291).",
          "Profile management and API-driven pricing instead of hardcoded prices (SCRUM-119, SCRUM-205).",
          "Auth-aware SSR, guest route guards, and refresh and recovery flows (SCRUM-145).",
          "WebSocket notifications in the header (SCRUM-254).",
          "Current subscription and auto-renewal views in account management (SCRUM-199).",
          "Voice messages, cursor pagination, virtualization, and delivery and unread indicators in the messenger (SCRUM-307).",
          "Route-level code splitting, public cache policy, and font cleanup (SCRUM-149, SCRUM-151, SCRUM-152).",
        ],
      },
      {
        slug: "admin-console",
        title: "ICTROOT Super Admin",
        eyebrow: "Case study / Product UI",
        summary:
          "An internal moderation panel on Next.js 16 and GraphQL, where I built the app shell and typed GraphQL foundation, user moderation flows, and the realtime posts list.",
        role: "Frontend Engineer",
        stack: ["Next.js", "TypeScript", "Apollo Client", "GraphQL", "Zustand"],
        impact: "Delivered user moderation and a searchable realtime posts view for admins",
        timeline: "Sprint delivery, 2026",
        capabilities: ["UI Engineering", "Frontend Architecture", "API Contracts"],
        repositoryUrl: "https://github.com/ictroot70/super-admin-ictroot",
        preview: {
          src: "/projects/ictroot-super-admin.webp",
          alt: "ICTROOT Super Admin posts list with search and moderation actions",
        },
        sections: {
          problem: {
            title: "Problem",
            body: "A moderation panel exposes destructive actions and a fast-changing posts list. Neither should be easy to misuse or hard to scan.",
          },
          constraints: {
            title: "Constraints",
            body: "Evolving GraphQL contracts, sprint work split across several developers with handoff points, and CI gates on every merge.",
          },
          solution: {
            title: "Solution",
            body: "I set up the project structure and app shell (header, sidebar, and UI kit tokens), added a session-based auth guard, built the typed GraphQL foundation with admin mutations, implemented ban, unban, and delete flows with confirm modals, built the posts list with search and infinite scroll, and wrote a handoff contract for the realtime integration.",
          },
          outcome: {
            title: "Outcome",
            body: "Admins can moderate users and browse posts through search, infinite scroll, and realtime updates, and the next task had a written contract to build on.",
          },
        },
        decisions: [
          {
            title: "Typed GraphQL documents",
            description: "Use codegen-generated documents so query changes surface as type errors.",
          },
          {
            title: "Confirmed destructive actions",
            description: "Route ban, unban, and delete through explicit confirm modals with typed user ids.",
          },
          {
            title: "Written handoff contracts",
            description:
              "Document the boundary between the posts UI and the realtime integration so parallel sprint work does not collide.",
          },
        ],
        proof: [
          "Ban, unban, and delete user flows (SCRUM-259).",
          "Posts list with search, infinite scroll, and realtime updates (A6).",
          "Typed GraphQL foundation with admin mutation operations.",
          "Session-based auth guard, header, and sidebar shell on UI kit tokens.",
          "Shared Select and Carousel composites.",
          "Repository README, CONTRIBUTING, and sprint documentation.",
        ],
      },
      {
        slug: "automation-tool",
        title: "Automation Tool",
        eyebrow: "Case study / Automation",
        summary: "A workflow automation interface for repetitive delivery and review tasks.",
        role: "Product-minded Frontend Engineer",
        stack: ["TypeScript", "Node.js", "CI"],
        impact: "Less manual work and clearer release flow",
        timeline: "Developer workflow improvement",
        capabilities: ["Automation", "Testing & CI", "Product Delivery"],
        sections: {
          problem: {
            title: "Problem",
            body: "Repeated review and delivery tasks create slow feedback loops when every step depends on manual checks and scattered context.",
          },
          constraints: {
            title: "Constraints",
            body: "The flow needed to stay understandable, easy to repeat, and aligned with existing CI and review expectations.",
          },
          solution: {
            title: "Solution",
            body: "The implementation framed repetitive work as a clear interface with visible steps, outputs, and review signals.",
          },
          outcome: {
            title: "Outcome",
            body: "Manual work decreased and the release flow became easier to explain, repeat, and review.",
          },
        },
        decisions: [
          {
            title: "Make the process visible",
            description: "Represent repeated workflow steps as explicit UI states instead of hidden tribal knowledge.",
          },
          {
            title: "Keep checks close to delivery",
            description: "Tie automation output to the review signals teams already trust.",
          },
          {
            title: "Optimize for repeatability",
            description: "Favor clear repeatable paths over one-off scripts that only one person understands.",
          },
        ],
        proof: [
          "Delivery and review steps made visible.",
          "CI-adjacent signals connected to product workflow.",
          "Mapped to Automation and Testing & CI capabilities.",
        ],
      },
      {
        slug: "oauth-flow",
        title: "OAuth Flow",
        eyebrow: "Case study / API Contracts",
        summary: "Auth experience review and callback-scope hardening around social sign-in flows.",
        role: "Frontend Engineer",
        stack: ["Next.js", "TypeScript", "OpenAPI"],
        impact: "Reduced auth ambiguity and integration risk",
        timeline: "Auth flow review",
        capabilities: ["API Contracts", "Testing & CI", "Frontend Architecture"],
        sections: {
          problem: {
            title: "Problem",
            body: "Auth flows become risky when callback handling is too broad, route ownership is unclear, or frontend assumptions drift away from backend behavior.",
          },
          constraints: {
            title: "Constraints",
            body: "The review needed to respect existing app routing while making the auth boundary more explicit and easier to validate.",
          },
          solution: {
            title: "Solution",
            body: "The work focused on narrowing callback scope, clarifying auth route ownership, and tying frontend behavior back to API expectations.",
          },
          outcome: {
            title: "Outcome",
            body: "Auth ambiguity was reduced and integration risk became easier to see before shipping changes.",
          },
        },
        decisions: [
          {
            title: "Scope callback handling",
            description: "Avoid global assumptions when a sensitive auth callback belongs to a specific route.",
          },
          {
            title: "Make API drift visible",
            description: "Use typed contracts and OpenAPI context to reduce hidden frontend/backend mismatch.",
          },
          {
            title: "Review failure states",
            description: "Treat invalid, repeated, and unexpected auth states as product behavior.",
          },
        ],
        proof: [
          "Auth callback scope reviewed as a route-level risk.",
          "OpenAPI and TypeScript kept contract assumptions explicit.",
          "Mapped to API Contracts and Frontend Architecture capabilities.",
        ],
      },
      {
        slug: "ui-kit-scroll-area",
        title: "UI Kit Scroll Area",
        eyebrow: "Case study / UI Platform",
        summary:
          "A library-level improvement to scroll behavior, layout stability, and responsive admin surfaces without rewriting product screens.",
        role: "Frontend/UI Engineer",
        stack: ["React", "Radix UI", "TypeScript"],
        impact: "Improved layout stability across product pages",
        timeline: "Design-system adjacent fix",
        capabilities: ["Frontend Architecture", "Accessibility", "UI Engineering"],
        sections: {
          problem: {
            title: "Problem",
            body: "Scroll behavior issues were appearing at the product surface, but the durable fix belonged lower in the shared UI abstraction. Fixing only page-level CSS would leave the same risk in other screens.",
          },
          constraints: {
            title: "Constraints",
            body: "The fix needed to preserve existing usage while making axis behavior explicit, stable, and easier to reason about across responsive layouts.",
          },
          solution: {
            title: "Solution",
            body: "The shared scroll primitive was adjusted around clearer orientation behavior and layout boundaries, so consuming pages could stay focused on product composition.",
          },
          outcome: {
            title: "Outcome",
            body: "Responsive admin pages gained better layout stability through a library-level improvement instead of repeated local patches.",
          },
        },
        decisions: [
          {
            title: "Fix the owning abstraction",
            description: "Move durable scroll behavior into the shared primitive instead of patching individual pages.",
          },
          {
            title: "Preserve migration safety",
            description: "Keep component usage stable so product screens do not need broad rewrites.",
          },
          {
            title: "Verify responsive behavior",
            description: "Check narrow and desktop layouts where scroll and overflow bugs usually diverge.",
          },
        ],
        proof: [
          "Shared UI primitive improved at the library boundary.",
          "Responsive layout stability addressed without product rewrites.",
          "Supports a controlled future design-system migration.",
        ],
      },
    ],
    capabilities: [
      {
        id: "product-delivery",
        title: "Product Delivery",
        description: "End-to-end delivery from product intent to shipped interface.",
        evidence: "Ships with scope clarity, feedback loops, and measurable outcomes.",
        relatedProjects: ["ICTROOT Social Platform", "ICTROOT Super Admin"],
        type: "core",
      },
      {
        id: "frontend-architecture",
        title: "Frontend Architecture",
        description: "Typed boundaries, reusable patterns, and predictable data flow.",
        evidence: "Defines scalable structure and regression-safe UI boundaries.",
        relatedProjects: ["ICTROOT Social Platform", "UI Kit Scroll Area"],
        type: "core",
      },
      {
        id: "ui-engineering",
        title: "UI Engineering",
        description: "Accessible, responsive interfaces with consistent states.",
        evidence: "Builds maintainable UI surfaces and component contracts.",
        relatedProjects: ["ICTROOT Super Admin", "UI Kit Scroll Area"],
        type: "core",
      },
      {
        id: "api-contracts",
        title: "API Contracts",
        description: "Stable client integration through typed and explicit contracts.",
        evidence: "Keeps API drift visible and adapts response data at boundaries.",
        relatedProjects: ["OAuth Flow", "ICTROOT Social Platform"],
        type: "core",
      },
      {
        id: "testing-ci",
        title: "Testing & CI",
        description: "Automated checks that protect product behavior and delivery flow.",
        evidence: "Covers critical paths with unit, smoke, and build gates.",
        relatedProjects: ["Automation Tool", "ICTROOT Social Platform"],
        type: "core",
      },
      {
        id: "performance",
        title: "Performance",
        description: "Rendering and interaction decisions that keep product surfaces fast.",
        evidence: "Balances UX quality with runtime and build constraints.",
        relatedProjects: ["Operations Console", "ICTROOT Super Admin"],
        type: "supporting",
      },
      {
        id: "accessibility",
        title: "Accessibility",
        description: "Keyboard, focus, semantic, and contrast-aware UI implementation.",
        evidence: "Uses accessible primitives and explicit interaction states.",
        relatedProjects: ["UI Kit Scroll Area"],
        type: "supporting",
      },
      {
        id: "automation",
        title: "Automation",
        description: "Developer tooling and delivery automation for repeated workflows.",
        evidence: "Turns manual process into repeatable checks and feedback loops.",
        relatedProjects: ["Automation Tool"],
        type: "supporting",
      },
    ],
    proofSignals: [
      {
        id: "typed-systems",
        title: "Typed Systems",
        description: "TypeScript-first architecture for safer, scalable code.",
      },
      {
        id: "resilient",
        title: "Resilient by Default",
        description: "Defensive patterns, graceful states, and fault tolerance.",
      },
      {
        id: "product-thinking",
        title: "Product Thinking",
        description: "Focus on outcomes rather than outputs, tied to real user needs.",
      },
      {
        id: "ship-confidence",
        title: "Ship with Confidence",
        description: "Tested, documented, and ready for production.",
      },
    ],
    sidebarProofSignals: [
      { title: "Typed contracts", description: "Type safety across service boundaries and schema validation." },
      { title: "Optimistic UI", description: "Responsive interfaces with rollback and background reconciliation." },
      { title: "CI gates", description: "Quality enforced via automated tests, linting, and policy checks." },
      {
        title: "Runtime verification",
        description: "Critical flows protected with smoke checks and structured evidence.",
      },
    ],
  },
  ru: {
    footer: "Сначала асинхронно. Чёткий объём задачи, быстрая обратная связь и доведение работы до результата.",
    projectsPage: {
      title: "Избранные продуктовые проекты",
      description: "Подборка интерфейсов, систем и улучшений процесса поставки с понятным продуктовым контекстом.",
      proofTitle: "Сигналы надежности",
      stats: [
        { value: "2019", label: "Начало пути" },
        { value: "2023", label: "IT-Incubator" },
        { value: "3–5", label: "Команда" },
      ],
      cardLabels: {
        role: "Роль",
        stack: "Стек",
        impact: "Эффект",
        caseStudy: "Смотреть кейс",
      },
    },
    capabilitiesPage: {
      title: "Навыки",
      description: "Практическая карта того, как продуктовая идея превращается в надежный интерфейс.",
      tableHeaders: {
        capability: "Навык",
        evidence: "Доказательство",
        relatedWork: "Связанные проекты",
      },
      graph: {
        previewEyebrow: "Системный обзор",
        previewTitle: "Карта навыков",
        previewBadge: "Ключевые навыки",
        interactiveEyebrow: "Граф навыков",
        interactiveBadge: "Интерактивная карта",
        selectedEyebrow: "Выбранный навык",
        selectedChecklist: [
          "Типизированные границы",
          "Переиспользуемые UI-паттерны",
          "Предсказуемый поток данных",
          "Защита от регрессий",
        ],
        exploreCaseStudies: "Смотреть кейсы",
      },
    },
    projectFilters: [
      { id: "all", label: "Все" },
      { id: "product-ui", label: "Продуктовый UI" },
      { id: "architecture", label: "Архитектура" },
      { id: "testing-ci", label: "Тестирование и CI" },
      { id: "automation", label: "Автоматизация" },
      { id: "performance", label: "Производительность" },
    ],
    projects: [
      {
        id: "operations-console",
        slug: "operations-console",
        title: "Operations Console",
        summary: "Внутренний мониторинговый интерфейс для разбора инцидентов и управления операционными процессами.",
        role: "Frontend-инженер",
        stack: ["React", "TypeScript", "Next.js"],
        impact: "Сделал операционные сценарии понятнее и последовательнее",
        category: "product-ui",
        capabilities: ["product-delivery", "ui-engineering", "performance"],
      },
      {
        id: "social-platform",
        slug: "social-platform",
        title: "ICTROOT Social Platform",
        summary:
          "Командный Instagram-подобный соцсервис на Next.js 15 и RTK Query, где я работал над постами и профилями, авторизацией и SSR, уведомлениями, подписками и мессенджером.",
        role: "Frontend-инженер",
        stack: ["Next.js", "React", "TypeScript", "RTK Query", "WebSockets"],
        impact: "Реализовал frontend-функции для постов, профилей, авторизации, уведомлений, подписок и мессенджера",
        category: "architecture",
        capabilities: ["frontend-architecture", "api-contracts", "testing-ci"],
        preview: {
          src: "/projects/ictroot-social-platform.webp",
          alt: "Мессенджер ICTROOT: диалог с голосовыми сообщениями и статусами доставки",
        },
      },
      {
        id: "admin-console",
        slug: "admin-console",
        title: "ICTROOT Super Admin",
        summary:
          "Внутренняя панель модерации на Next.js 16 и GraphQL, где я сделал оболочку приложения и типизированный GraphQL-фундамент, сценарии модерации пользователей и realtime-список постов.",
        role: "Frontend-инженер",
        stack: ["Next.js", "TypeScript", "Apollo Client", "GraphQL", "Zustand"],
        impact: "Реализовал модерацию пользователей и realtime-список постов с поиском для администраторов",
        category: "product-ui",
        capabilities: ["ui-engineering", "frontend-architecture", "api-contracts"],
        preview: {
          src: "/projects/ictroot-super-admin.webp",
          alt: "Список постов ICTROOT Super Admin с поиском и действиями модерации",
        },
      },
      {
        id: "automation-tool",
        slug: "automation-tool",
        title: "Automation Tool",
        summary: "Интерфейс автоматизации повторяющихся задач поставки и ревью.",
        role: "Frontend-инженер с продуктовым мышлением",
        stack: ["TypeScript", "Node.js", "CI"],
        impact: "Меньше ручной работы и понятнее процесс релиза",
        category: "automation",
        capabilities: ["automation", "testing-ci", "product-delivery"],
      },
      {
        id: "oauth-flow",
        slug: "oauth-flow",
        title: "OAuth Flow",
        summary: "Аудит сценария авторизации и уточнение области обработки callback для входа через социальные сети.",
        role: "Frontend-инженер",
        stack: ["Next.js", "TypeScript", "OpenAPI"],
        impact: "Снизил неоднозначность сценария авторизации и интеграционные риски",
        category: "testing-ci",
        capabilities: ["api-contracts", "testing-ci", "frontend-architecture"],
      },
      {
        id: "ui-kit-scroll-area",
        slug: "ui-kit-scroll-area",
        title: "UI Kit Scroll Area",
        summary:
          "Улучшение прокрутки на уровне библиотеки для стабильной компоновки адаптивных административных страниц.",
        role: "Frontend/UI-инженер",
        stack: ["React", "Radix UI", "TypeScript"],
        impact: "Улучшил стабильность компоновки продуктовых страниц",
        category: "architecture",
        capabilities: ["frontend-architecture", "accessibility", "ui-engineering"],
      },
    ],
    caseStudiesPage: {
      backToProjects: "Назад к проектам",
      overview: "Обзор",
      role: "Роль",
      stack: "Стек",
      impact: "Эффект",
      timeline: "Контекст",
      capabilities: "Навыки",
      decisions: "Технические решения",
      proof: "Доказательства",
      nextStepTitle: "Нужен такой уровень ответственности за frontend?",
      nextStepDescription:
        "Самые сильные разговоры о портфолио начинаются с конкретной продуктовой проблемы, а не с общей презентации.",
      contact: "Связаться",
      sourceRepository: "Исходный репозиторий",
      watchDemo: "Смотреть демо",
      closeDemo: "Закрыть демо",
    },
    caseStudies: [
      {
        slug: "operations-console",
        title: "Operations Console",
        eyebrow: "Кейс / Операционный UI",
        summary:
          "Внутренний мониторинговый интерфейс для разбора инцидентов и снижения трения в операционных процессах.",
        role: "Frontend-инженер",
        stack: ["React", "TypeScript", "Next.js"],
        impact: "Сделал операционные сценарии понятнее и последовательнее",
        timeline: "Поставка внутреннего операционного продукта",
        capabilities: ["Product Delivery", "UI Engineering", "Performance"],
        sections: {
          problem: {
            title: "Проблема",
            body: "Операционные экраны часто теряют ценность, когда важный сигнал прячется за визуальным шумом. Пользователю нужно быстро понять, что изменилось, что срочно и какое действие безопасно сделать дальше.",
          },
          constraints: {
            title: "Ограничения",
            body: "Интерфейс должен был оставаться плотным, адаптивным и надёжным, при этом показывать насыщенную статусами информацию так, чтобы поддерживать повторяющийся разбор инцидентов.",
          },
          solution: {
            title: "Решение",
            body: "UI строился вокруг ясной иерархии, стабильного языка статусов, компактных карточек и предсказуемой навигации между контекстом мониторинга и контекстом действий.",
          },
          outcome: {
            title: "Результат",
            body: "Операционный сценарий стало проще просматривать, трения стало меньше, а контекст инцидентов стал понятнее для повторяющейся работы.",
          },
        },
        decisions: [
          {
            title: "Иерархия от главного сигнала",
            description:
              "Сначала показывать статус, критичность и следующее действие, а уже потом вторичную метаинформацию.",
          },
          {
            title: "Стабильные паттерны просмотра",
            description:
              "Держать повторяющиеся области компоновки предсказуемыми, чтобы пользователь быстрее считывал экран.",
          },
          {
            title: "Рендеринг с учётом производительности",
            description:
              "Не перегружать визуально поверхности, к которым пользователь возвращается в напряженном контексте.",
          },
        ],
        proof: [
          "Операционное трение выбрано главным продуктовым результатом.",
          "Плотность UI сбалансирована с ясностью просмотра.",
          "Кейс связан с Product Delivery, UI Engineering и Performance.",
        ],
      },
      {
        slug: "social-platform",
        title: "ICTROOT Social Platform",
        eyebrow: "Кейс / Frontend Architecture",
        summary:
          "Командный Instagram-подобный соцсервис, где я работал над постами и профилями, авторизацией и SSR, уведомлениями, подписками и мессенджером.",
        role: "Frontend-инженер",
        stack: ["Next.js", "React", "TypeScript", "RTK Query", "WebSockets"],
        impact: "Реализовал frontend-функции для постов, профилей, авторизации, уведомлений, подписок и мессенджера",
        timeline: "Командный проект, 2025–2026",
        capabilities: ["Frontend Architecture", "API Contracts", "Testing & CI"],
        repositoryUrl: "https://github.com/ictroot70/Ict",
        preview: {
          src: "/projects/ictroot-social-platform.webp",
          alt: "Мессенджер ICTROOT: диалог с голосовыми сообщениями и статусами доставки",
        },
        demo: {
          src: "/projects/ictroot-social-platform-demo.mp4",
          caption:
            "Запись экрана ICTROOT: подписка и автопродление, история платежей и мессенджер с голосовыми сообщениями",
        },
        sections: {
          problem: {
            title: "Проблема",
            body: "Соцсервис сочетает серверный рендеринг, маршруты, зависящие от авторизации, realtime-события и медиа. Без ясных границ SSR, guard-ы, кэшируемые данные и допущения об API расходятся, а регрессии проявляются поздно.",
          },
          constraints: {
            title: "Ограничения",
            body: "Общая командная кодовая база с зафиксированными архитектурными правилами, общий UI-кит, параллельная работа нескольких разработчиков и проверки lint, typecheck и build на каждое изменение.",
          },
          solution: {
            title: "Решение",
            body: "Я работал по всему продукту: CRUD постов, лайки, комментарии и модальное окно поста; управление профилем и настройки; auth-aware SSR с guard-ами гостевых и приватных маршрутов; уведомления через WebSocket; экраны подписок и автопродления с ценами из API; мессенджер с голосовыми сообщениями, cursor pagination, виртуализацией списка и индикаторами доставки и непрочитанных. Параллельно занимался производительностью всего приложения, включая разбиение кода по маршрутам и политику кэширования публичных страниц, а также тестами и quality gate вокруг самых рискованных сценариев.",
          },
          outcome: {
            title: "Результат",
            body: "Ключевые сценарии продукта (посты, профили, авторизация, уведомления, подписки и мессенджер) были реализованы на общем frontend, где API-контракты, guard-ы маршрутов и состояния загрузки обрабатываются явно.",
          },
        },
        decisions: [
          {
            title: "Интеграция с API по контракту",
            description:
              "Привести CRUD постов, медиа мессенджера и данные цен в соответствие со Swagger-контрактом вместо моков и захардкоженных значений.",
          },
          {
            title: "Auth-aware SSR и guard-ы маршрутов",
            description:
              "Держать серверный рендеринг, публичные и приватные контракты и guard-ы гостевых маршрутов согласованными, чтобы состояние авторизации не попадало на не те страницы.",
          },
          {
            title: "Производительность на уровне маршрутов",
            description:
              "Разбивать код по auth-маршрутам, убирать лишнее no-store-кэширование на публичных страницах и подключать шрифты через next/font.",
          },
          {
            title: "Cursor pagination и виртуализация",
            description:
              "Загружать длинную историю по курсору и виртуализировать диалоги, чтобы не рендерить все сообщения сразу.",
          },
        ],
        proof: [
          "CRUD постов, лайки, комментарии и модальное окно поста в профиле и ленте (SCRUM-126, SCRUM-282, SCRUM-291).",
          "Управление профилем и цены из API вместо захардкоженных (SCRUM-119, SCRUM-205).",
          "Auth-aware SSR, guard-ы гостевых маршрутов, сценарии refresh и восстановления (SCRUM-145).",
          "Уведомления через WebSocket в header (SCRUM-254).",
          "Экраны текущих подписок и автопродления в управлении аккаунтом (SCRUM-199).",
          "Голосовые сообщения, cursor pagination, виртуализация и индикаторы доставки и непрочитанных в мессенджере (SCRUM-307).",
          "Разбиение кода по маршрутам, политика кэширования публичных страниц и чистка шрифтов (SCRUM-149, SCRUM-151, SCRUM-152).",
        ],
      },
      {
        slug: "admin-console",
        title: "ICTROOT Super Admin",
        eyebrow: "Кейс / Продуктовый UI",
        summary:
          "Внутренняя панель модерации на Next.js 16 и GraphQL, где я сделал оболочку приложения и типизированный GraphQL-фундамент, сценарии модерации пользователей и realtime-список постов.",
        role: "Frontend-инженер",
        stack: ["Next.js", "TypeScript", "Apollo Client", "GraphQL", "Zustand"],
        impact: "Реализовал модерацию пользователей и realtime-список постов с поиском для администраторов",
        timeline: "Спринтовая поставка, 2026",
        capabilities: ["UI Engineering", "Frontend Architecture", "API Contracts"],
        repositoryUrl: "https://github.com/ictroot70/super-admin-ictroot",
        preview: {
          src: "/projects/ictroot-super-admin.webp",
          alt: "Список постов ICTROOT Super Admin с поиском и действиями модерации",
        },
        sections: {
          problem: {
            title: "Проблема",
            body: "Панель модерации даёт деструктивные действия и быстро меняющийся список постов. Ни то ни другое не должно быть лёгким для ошибки или трудным для просмотра.",
          },
          constraints: {
            title: "Ограничения",
            body: "Меняющиеся GraphQL-контракты, спринтовая работа нескольких разработчиков с точками передачи и CI-проверки на каждом merge.",
          },
          solution: {
            title: "Решение",
            body: "Я настроил структуру проекта и оболочку приложения (header, sidebar и токены UI-кита), добавил auth-guard по сессии, сделал типизированный GraphQL-фундамент с admin-мутациями, реализовал бан, разбан и удаление пользователей с модалками подтверждения, собрал список постов с поиском и infinite scroll и написал контракт передачи для realtime-интеграции.",
          },
          outcome: {
            title: "Результат",
            body: "Администраторы модерируют пользователей и просматривают посты через поиск, infinite scroll и realtime-обновления, а следующая задача получила письменный контракт, на который можно опереться.",
          },
        },
        decisions: [
          {
            title: "Типизированные GraphQL-документы",
            description:
              "Использовать документы, сгенерированные через codegen, чтобы изменения запросов проявлялись как ошибки типов.",
          },
          {
            title: "Подтверждение деструктивных действий",
            description:
              "Проводить бан, разбан и удаление через явные модалки подтверждения с типизированными id пользователей.",
          },
          {
            title: "Письменные контракты передачи",
            description:
              "Документировать границу между UI постов и realtime-интеграцией, чтобы параллельная спринтовая работа не конфликтовала.",
          },
        ],
        proof: [
          "Сценарии бана, разбана и удаления пользователей (SCRUM-259).",
          "Список постов с поиском, infinite scroll и realtime-обновлениями (A6).",
          "Типизированный GraphQL-фундамент с admin-мутациями.",
          "Auth-guard по сессии, header и sidebar на токенах UI-кита.",
          "Общие композиты Select и Carousel.",
          "README, CONTRIBUTING и спринтовая документация репозитория.",
        ],
      },
      {
        slug: "automation-tool",
        title: "Automation Tool",
        eyebrow: "Кейс / Автоматизация",
        summary: "Интерфейс автоматизации повторяющихся задач поставки и ревью.",
        role: "Frontend-инженер с продуктовым мышлением",
        stack: ["TypeScript", "Node.js", "CI"],
        impact: "Меньше ручной работы и понятнее процесс релиза",
        timeline: "Улучшение рабочего процесса разработчика",
        capabilities: ["Automation", "Testing & CI", "Product Delivery"],
        sections: {
          problem: {
            title: "Проблема",
            body: "Повторяющиеся задачи ревью и поставки замедляют циклы обратной связи, когда каждый шаг зависит от ручных проверок и разбросанного контекста.",
          },
          constraints: {
            title: "Ограничения",
            body: "Сценарий должен был оставаться понятным, повторяемым и совместимым с существующими ожиданиями от CI и ревью.",
          },
          solution: {
            title: "Решение",
            body: "Повторяющаяся работа была оформлена как понятный интерфейс с видимыми шагами, результатами и сигналами для ревью.",
          },
          outcome: {
            title: "Результат",
            body: "Ручной работы стало меньше, а процесс релиза стало проще объяснять, повторять и проверять.",
          },
        },
        decisions: [
          {
            title: "Сделать процесс видимым",
            description:
              "Показывать повторяющиеся шаги рабочего процесса как явные UI-состояния, а не как скрытое знание команды.",
          },
          {
            title: "Держать проверки рядом с поставкой",
            description: "Связывать результат автоматизации с сигналами ревью, которым команда уже доверяет.",
          },
          {
            title: "Оптимизировать повторяемость",
            description:
              "Выбирать понятные повторяемые пути вместо одноразовых скриптов, которые понимает только один человек.",
          },
        ],
        proof: [
          "Шаги поставки и ревью стали видимыми.",
          "Сигналы рядом с CI связаны с продуктовым процессом.",
          "Кейс связан с Automation и Testing & CI.",
        ],
      },
      {
        slug: "oauth-flow",
        title: "OAuth Flow",
        eyebrow: "Кейс / API Contracts",
        summary: "Аудит сценария авторизации и уточнение области обработки callback для входа через социальные сети.",
        role: "Frontend-инженер",
        stack: ["Next.js", "TypeScript", "OpenAPI"],
        impact: "Снизил неоднозначность сценария авторизации и интеграционные риски",
        timeline: "Ревью сценария авторизации",
        capabilities: ["API Contracts", "Testing & CI", "Frontend Architecture"],
        sections: {
          problem: {
            title: "Проблема",
            body: "Сценарии авторизации становятся рискованными, когда обработка callback слишком широка, ответственный маршрут неясен или предположения frontend расходятся с поведением backend.",
          },
          constraints: {
            title: "Ограничения",
            body: "Ревью должно было сохранить существующую маршрутизацию приложения, но сделать границу авторизации более явной и простой для проверки.",
          },
          solution: {
            title: "Решение",
            body: "Работа была сфокусирована на сужении области callback, уточнении ответственности маршрута авторизации и привязке поведения frontend к ожиданиям API.",
          },
          outcome: {
            title: "Результат",
            body: "Неоднозначность сценария авторизации снизилась, а интеграционные риски стало проще увидеть до релиза изменений.",
          },
        },
        decisions: [
          {
            title: "Ограничить обработку callback",
            description:
              "Не делать глобальных предположений, если чувствительный callback авторизации принадлежит конкретному маршруту.",
          },
          {
            title: "Сделать расхождения API видимыми",
            description:
              "Использовать типизированные контракты и контекст OpenAPI, чтобы снизить скрытые расхождения между frontend и backend.",
          },
          {
            title: "Проверять состояния ошибок",
            description:
              "Рассматривать недействительные, повторные и неожиданные состояния авторизации как поведение продукта.",
          },
        ],
        proof: [
          "Область callback авторизации проверена как риск на уровне маршрута.",
          "OpenAPI и TypeScript сохраняют предположения о контрактах явными.",
          "Кейс связан с API Contracts и Frontend Architecture.",
        ],
      },
      {
        slug: "ui-kit-scroll-area",
        title: "UI Kit Scroll Area",
        eyebrow: "Кейс / UI-платформа",
        summary:
          "Улучшение прокрутки, стабильности компоновки и адаптивных административных поверхностей на уровне библиотеки без переписывания продуктовых экранов.",
        role: "Frontend/UI-инженер",
        stack: ["React", "Radix UI", "TypeScript"],
        impact: "Улучшил стабильность компоновки продуктовых страниц",
        timeline: "Исправление на границе дизайн-системы",
        capabilities: ["Frontend Architecture", "Accessibility", "UI Engineering"],
        sections: {
          problem: {
            title: "Проблема",
            body: "Проблемы с прокруткой проявлялись на продуктовых страницах, но устойчивое решение находилось ниже — в общей UI-абстракции. CSS на уровне страницы оставил бы тот же риск на других экранах.",
          },
          constraints: {
            title: "Ограничения",
            body: "Исправление должно было сохранить существующее использование и сделать поведение осей явным, стабильным и понятным в адаптивной компоновке.",
          },
          solution: {
            title: "Решение",
            body: "Общий примитив прокрутки был усилен более ясным поведением ориентации и границами компоновки, чтобы использующие его страницы оставались сфокусированы на продуктовой композиции.",
          },
          outcome: {
            title: "Результат",
            body: "Адаптивные административные страницы получили более стабильную компоновку через библиотечное улучшение, а не через повторяющиеся локальные исправления.",
          },
        },
        decisions: [
          {
            title: "Исправить ответственную абстракцию",
            description:
              "Перенести устойчивое поведение прокрутки в общий примитив вместо исправления отдельных страниц.",
          },
          {
            title: "Сохранить безопасность миграции",
            description:
              "Сохранить стабильное использование компонента, чтобы продуктовые экраны не требовали широкого переписывания.",
          },
          {
            title: "Проверить адаптивное поведение",
            description:
              "Проверять узкую и desktop-компоновку, где ошибки прокрутки и переполнения обычно проявляются по-разному.",
          },
        ],
        proof: [
          "Общий UI-примитив улучшен на границе библиотеки.",
          "Стабильность адаптивной компоновки улучшена без переписывания продуктовых экранов.",
          "Поддерживает контролируемую будущую миграцию на дизайн-систему.",
        ],
      },
    ],
    capabilities: [
      {
        id: "product-delivery",
        title: "Product Delivery",
        description: "Поставка полного цикла: от продуктовой идеи до готового интерфейса.",
        evidence:
          "Помогает доводить работу до результата через ясный объем задачи, циклы обратной связи и измеримые результаты.",
        relatedProjects: ["ICTROOT Social Platform", "ICTROOT Super Admin"],
        type: "core",
      },
      {
        id: "frontend-architecture",
        title: "Frontend Architecture",
        description: "Типизированные границы, переиспользуемые паттерны и предсказуемый поток данных.",
        evidence: "Задает масштабируемую структуру и UI-границы, устойчивые к регрессиям.",
        relatedProjects: ["ICTROOT Social Platform", "UI Kit Scroll Area"],
        type: "core",
      },
      {
        id: "ui-engineering",
        title: "UI Engineering",
        description: "Доступные и адаптивные интерфейсы с согласованными состояниями.",
        evidence: "Строит поддерживаемые UI-поверхности и контракты компонентов.",
        relatedProjects: ["ICTROOT Super Admin", "UI Kit Scroll Area"],
        type: "core",
      },
      {
        id: "api-contracts",
        title: "API Contracts",
        description: "Стабильная клиентская интеграция через типизированные и явные контракты.",
        evidence: "Делает расхождения API видимыми и адаптирует данные ответа на границах системы.",
        relatedProjects: ["OAuth Flow", "ICTROOT Social Platform"],
        type: "core",
      },
      {
        id: "testing-ci",
        title: "Testing & CI",
        description: "Автоматические проверки, которые защищают поведение продукта и процесс поставки.",
        evidence: "Покрывает критические сценарии модульными, дымовыми и сборочными проверками.",
        relatedProjects: ["Automation Tool", "ICTROOT Social Platform"],
        type: "core",
      },
      {
        id: "performance",
        title: "Performance",
        description: "Решения по рендерингу и взаимодействию, которые сохраняют продуктовые поверхности быстрыми.",
        evidence: "Балансирует качество UX с ограничениями runtime и сборки.",
        relatedProjects: ["Operations Console", "ICTROOT Super Admin"],
        type: "supporting",
      },
      {
        id: "accessibility",
        title: "Accessibility",
        description: "Реализация UI с учётом клавиатуры, фокуса, семантики и контраста.",
        evidence: "Использует доступные примитивы и явные состояния взаимодействия.",
        relatedProjects: ["UI Kit Scroll Area"],
        type: "supporting",
      },
      {
        id: "automation",
        title: "Automation",
        description: "Инструменты разработчика и автоматизация поставки для повторяющихся процессов.",
        evidence: "Превращает ручной процесс в повторяемые проверки и циклы обратной связи.",
        relatedProjects: ["Automation Tool"],
        type: "supporting",
      },
    ],
    proofSignals: [
      {
        id: "typed-systems",
        title: "Типизированные системы",
        description: "Архитектура на основе TypeScript для более безопасного и масштабируемого кода.",
      },
      {
        id: "resilient",
        title: "Надёжность по умолчанию",
        description: "Защитные паттерны, корректные состояния и устойчивость к сбоям.",
      },
      {
        id: "product-thinking",
        title: "Продуктовое мышление",
        description:
          "Фокус на результатах, а не на объеме сделанного, с привязкой к реальным потребностям пользователей.",
      },
      {
        id: "ship-confidence",
        title: "Уверенная поставка",
        description: "Проверено, задокументировано и готово к production.",
      },
    ],
    sidebarProofSignals: [
      { title: "Типизированные контракты", description: "Типобезопасность на границах сервисов и проверка схем." },
      { title: "Оптимистичный UI", description: "Отзывчивые интерфейсы с откатом и фоновой синхронизацией." },
      {
        title: "Контрольные точки CI",
        description: "Качество поддерживается автоматическими тестами, линтингом и проверками политик.",
      },
      {
        title: "Проверка в runtime",
        description: "Критические сценарии защищены дымовыми проверками и структурированными доказательствами.",
      },
    ],
  },
} satisfies Record<
  Locale,
  {
    footer: string;
    projectsPage: ProjectPageContent;
    capabilitiesPage: CapabilityPageContent;
    caseStudiesPage: CaseStudyPageContent;
    projectFilters: ProjectFilterItem[];
    projects: Project[];
    caseStudies: CaseStudy[];
    capabilities: Capability[];
    proofSignals: ProofSignal[];
    sidebarProofSignals: Array<{ title: string; description: string }>;
  }
>;

export function getLocalizedContent(locale: Locale) {
  return localizedContent[locale];
}

export function filterLocalizedProjects(locale: Locale, category: string) {
  const projects = localizedContent[locale].projects;
  return category === "all" ? projects : projects.filter((project) => project.category === category);
}

export function getLocalizedCapability(locale: Locale, id: string) {
  return (
    localizedContent[locale].capabilities.find((capability) => capability.id === id) ??
    localizedContent[locale].capabilities[0]
  );
}

export function getLocalizedCaseStudies(locale: Locale) {
  return localizedContent[locale].caseStudies;
}

export function getLocalizedCaseStudy(locale: Locale, slug: string): CaseStudy | undefined {
  return localizedContent[locale].caseStudies.find((caseStudy) => caseStudy.slug === slug);
}

export function getCaseStudySlugs() {
  return localizedContent.en.caseStudies.map((caseStudy) => caseStudy.slug);
}
