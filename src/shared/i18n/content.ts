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
};

const localizedContent = {
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
        title: "Social Platform",
        summary: "Production-minded social experience with resilient UI states and typed interaction flows.",
        role: "Frontend Engineer",
        stack: ["React", "TypeScript", "RTK Query"],
        impact: "Improved interaction confidence and feedback loops",
        category: "architecture",
        capabilities: ["frontend-architecture", "api-contracts", "testing-ci"],
      },
      {
        id: "admin-console",
        slug: "admin-console",
        title: "Admin Console",
        summary: "Dense admin product surface with reliable tables, filters, and status-driven decisions.",
        role: "Frontend Engineer",
        stack: ["React", "TypeScript", "Radix UI"],
        impact: "Faster admin workflows with safer UI states",
        category: "product-ui",
        capabilities: ["ui-engineering", "frontend-architecture", "accessibility"],
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
        title: "Social Platform",
        eyebrow: "Case study / Frontend Architecture",
        summary:
          "A production-minded social interface with resilient UI states, typed interaction flows, and API boundary discipline.",
        role: "Frontend Engineer",
        stack: ["React", "TypeScript", "RTK Query"],
        impact: "Improved interaction confidence and feedback loops",
        timeline: "Product iteration",
        capabilities: ["Frontend Architecture", "API Contracts", "Testing & CI"],
        sections: {
          problem: {
            title: "Problem",
            body: "Social interfaces carry a lot of implicit state: optimistic reactions, profile transitions, comments, auth-adjacent flows, and backend contract changes. Without clear boundaries, each small interaction can create hidden regressions.",
          },
          constraints: {
            title: "Constraints",
            body: "The UI needed to stay responsive while still respecting API behavior, loading states, failure states, and route-level expectations. The implementation also had to remain readable for future product changes.",
          },
          solution: {
            title: "Solution",
            body: "The work centered on typed data boundaries, predictable async state, explicit UI states, and reviewable interaction flows. Product behavior was tied to concrete checks instead of relying on manual confidence.",
          },
          outcome: {
            title: "Outcome",
            body: "The interface became easier to reason about, safer to change, and better aligned with real user interactions across social flows.",
          },
        },
        decisions: [
          {
            title: "Typed interaction boundaries",
            description:
              "Keep API response adaptation close to the data edge so components render predictable product states.",
          },
          {
            title: "State-first UI review",
            description:
              "Review loading, empty, success, optimistic, and failure paths as product behavior, not decoration.",
          },
          {
            title: "Regression-aware checks",
            description:
              "Use focused tests and smoke flows around high-risk interactions before treating work as complete.",
          },
        ],
        proof: [
          "Typed RTK Query usage for API-driven UI flows.",
          "Explicit handling for interaction confidence and feedback loops.",
          "Architecture decisions mapped directly to Testing & CI and API Contracts capabilities.",
        ],
      },
      {
        slug: "admin-console",
        title: "Admin Console",
        eyebrow: "Case study / Product UI",
        summary:
          "A dense admin product surface built around tables, filters, status-driven decisions, and predictable repeated work.",
        role: "Frontend Engineer",
        stack: ["React", "TypeScript", "Radix UI"],
        impact: "Faster admin workflows with safer UI states",
        timeline: "Internal product delivery",
        capabilities: ["UI Engineering", "Frontend Architecture", "Accessibility"],
        sections: {
          problem: {
            title: "Problem",
            body: "Operational users need to scan, compare, filter, and act repeatedly. A visually pleasant admin screen still fails if status information, affordances, and error states are not immediately clear.",
          },
          constraints: {
            title: "Constraints",
            body: "The interface had to support dense information without turning into visual noise. Accessibility, keyboard flow, table behavior, and responsive layout all had to stay stable.",
          },
          solution: {
            title: "Solution",
            body: "The implementation prioritized compact hierarchy, stable controls, reusable UI patterns, and clear state language for filters, tables, actions, and status feedback.",
          },
          outcome: {
            title: "Outcome",
            body: "Admin workflows became easier to scan and repeat, while UI states stayed safer for future changes.",
          },
        },
        decisions: [
          {
            title: "Dense but calm layout",
            description: "Use restrained visual hierarchy so repeated operational work remains scannable.",
          },
          {
            title: "Accessible primitives",
            description: "Lean on Radix UI patterns for focus behavior, keyboard interactions, and state consistency.",
          },
          {
            title: "Reusable state patterns",
            description: "Keep filters, status labels, and action states predictable across the admin surface.",
          },
        ],
        proof: [
          "Reliable table and filter surface.",
          "Status-driven UI decisions instead of decorative cards.",
          "Direct relationship to UI Engineering and Accessibility capabilities.",
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
        relatedProjects: ["Social Platform", "Admin Console"],
        type: "core",
      },
      {
        id: "frontend-architecture",
        title: "Frontend Architecture",
        description: "Typed boundaries, reusable patterns, and predictable data flow.",
        evidence: "Defines scalable structure and regression-safe UI boundaries.",
        relatedProjects: ["Social Platform", "UI Kit Scroll Area"],
        type: "core",
      },
      {
        id: "ui-engineering",
        title: "UI Engineering",
        description: "Accessible, responsive interfaces with consistent states.",
        evidence: "Builds maintainable UI surfaces and component contracts.",
        relatedProjects: ["Admin Console", "UI Kit Scroll Area"],
        type: "core",
      },
      {
        id: "api-contracts",
        title: "API Contracts",
        description: "Stable client integration through typed and explicit contracts.",
        evidence: "Keeps API drift visible and adapts response data at boundaries.",
        relatedProjects: ["OAuth Flow", "Social Platform"],
        type: "core",
      },
      {
        id: "testing-ci",
        title: "Testing & CI",
        description: "Automated checks that protect product behavior and delivery flow.",
        evidence: "Covers critical paths with unit, smoke, and build gates.",
        relatedProjects: ["Automation Tool", "Social Platform"],
        type: "core",
      },
      {
        id: "performance",
        title: "Performance",
        description: "Rendering and interaction decisions that keep product surfaces fast.",
        evidence: "Balances UX quality with runtime and build constraints.",
        relatedProjects: ["Operations Console", "Admin Console"],
        type: "supporting",
      },
      {
        id: "accessibility",
        title: "Accessibility",
        description: "Keyboard, focus, semantic, and contrast-aware UI implementation.",
        evidence: "Uses accessible primitives and explicit interaction states.",
        relatedProjects: ["UI Kit Scroll Area", "Admin Console"],
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
        title: "Social Platform",
        summary:
          "Социальный продуктовый интерфейс с устойчивыми UI-состояниями и типизированными сценариями взаимодействия.",
        role: "Frontend-инженер",
        stack: ["React", "TypeScript", "RTK Query"],
        impact: "Повысил уверенность в интеракциях и улучшил циклы обратной связи",
        category: "architecture",
        capabilities: ["frontend-architecture", "api-contracts", "testing-ci"],
      },
      {
        id: "admin-console",
        slug: "admin-console",
        title: "Admin Console",
        summary: "Плотный административный интерфейс с надёжными таблицами, фильтрами и решениями на основе статусов.",
        role: "Frontend-инженер",
        stack: ["React", "TypeScript", "Radix UI"],
        impact: "Ускорил административные процессы и сделал UI-состояния безопаснее",
        category: "product-ui",
        capabilities: ["ui-engineering", "frontend-architecture", "accessibility"],
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
        title: "Social Platform",
        eyebrow: "Кейс / Frontend Architecture",
        summary:
          "Социальный продуктовый интерфейс с устойчивыми UI-состояниями, типизированными сценариями взаимодействия и дисциплиной API-границ.",
        role: "Frontend-инженер",
        stack: ["React", "TypeScript", "RTK Query"],
        impact: "Повысил уверенность в интеракциях и улучшил циклы обратной связи",
        timeline: "Продуктовая итерация",
        capabilities: ["Frontend Architecture", "API Contracts", "Testing & CI"],
        sections: {
          problem: {
            title: "Проблема",
            body: "Социальные интерфейсы несут много неявного состояния: оптимистичные реакции, переходы профиля, комментарии, сценарии авторизации и изменения backend-контрактов. Без ясных границ даже небольшая интеракция может создавать скрытые регрессии.",
          },
          constraints: {
            title: "Ограничения",
            body: "UI должен был оставаться отзывчивым и при этом учитывать поведение API, состояния загрузки и ошибок, а также ожидания на уровне маршрутов. Реализация также должна была оставаться читаемой для будущих продуктовых изменений.",
          },
          solution: {
            title: "Решение",
            body: "Работа строилась вокруг типизированных границ данных, предсказуемого асинхронного состояния, явных UI-состояний и проверяемых сценариев взаимодействия. Поведение продукта привязывалось к конкретным проверкам, а не к субъективной уверенности.",
          },
          outcome: {
            title: "Результат",
            body: "Интерфейс стало проще понимать, безопаснее менять и легче связывать с реальными пользовательскими сценариями.",
          },
        },
        decisions: [
          {
            title: "Типизированные границы взаимодействия",
            description:
              "Держать адаптацию API-ответов рядом с границей получения данных, чтобы компоненты отображали предсказуемые продуктовые состояния.",
          },
          {
            title: "Ревью UI через состояния",
            description:
              "Рассматривать состояния загрузки, пустого результата, успеха, оптимистичного обновления и ошибки как поведение продукта, а не как оформление.",
          },
          {
            title: "Проверки с учётом регрессий",
            description:
              "Использовать сфокусированные тесты и дымовые сценарии вокруг рискованных интеракций до завершения работы.",
          },
        ],
        proof: [
          "Типизированное использование RTK Query для UI-сценариев на основе API.",
          "Явная работа с надёжностью взаимодействий и циклами обратной связи.",
          "Архитектурные решения напрямую связаны с Testing & CI и API Contracts.",
        ],
      },
      {
        slug: "admin-console",
        title: "Admin Console",
        eyebrow: "Кейс / Продуктовый UI",
        summary:
          "Плотная административная поверхность вокруг таблиц, фильтров, решений по статусам и предсказуемой повторяющейся работы.",
        role: "Frontend-инженер",
        stack: ["React", "TypeScript", "Radix UI"],
        impact: "Ускорил административные процессы и сделал UI-состояния безопаснее",
        timeline: "Поставка внутреннего продукта",
        capabilities: ["UI Engineering", "Frontend Architecture", "Accessibility"],
        sections: {
          problem: {
            title: "Проблема",
            body: "Операционным пользователям нужно быстро просматривать, сравнивать, фильтровать и повторять действия. Даже визуально приятный административный экран не работает, если статусы, возможные действия и ошибки не считываются сразу.",
          },
          constraints: {
            title: "Ограничения",
            body: "Интерфейс должен был поддерживать плотную информацию без визуального шума. Доступность, клавиатурная навигация, поведение таблиц и адаптивная компоновка должны были оставаться стабильными.",
          },
          solution: {
            title: "Решение",
            body: "Реализация делала акцент на компактной иерархии, стабильных контролах, переиспользуемых UI-паттернах и ясном языке состояний для фильтров, таблиц, действий и статусов.",
          },
          outcome: {
            title: "Результат",
            body: "Административные процессы стало проще просматривать и повторять, а UI-состояния стали безопаснее для будущих изменений.",
          },
        },
        decisions: [
          {
            title: "Плотная, но спокойная компоновка",
            description:
              "Использовать сдержанную визуальную иерархию, чтобы повторяющаяся операционная работа читалась быстро.",
          },
          {
            title: "Доступные примитивы",
            description:
              "Опирался на паттерны Radix UI для управления фокусом, клавиатурных взаимодействий и согласованных состояний.",
          },
          {
            title: "Переиспользуемые паттерны состояний",
            description:
              "Держать фильтры, подписи статусов и состояния действий предсказуемыми во всей административной поверхности.",
          },
        ],
        proof: [
          "Надежная поверхность таблиц и фильтров.",
          "Решения UI на основе статусов вместо декоративных карточек.",
          "Прямая связь с компетенциями UI Engineering и Accessibility.",
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
        relatedProjects: ["Social Platform", "Admin Console"],
        type: "core",
      },
      {
        id: "frontend-architecture",
        title: "Frontend Architecture",
        description: "Типизированные границы, переиспользуемые паттерны и предсказуемый поток данных.",
        evidence: "Задает масштабируемую структуру и UI-границы, устойчивые к регрессиям.",
        relatedProjects: ["Social Platform", "UI Kit Scroll Area"],
        type: "core",
      },
      {
        id: "ui-engineering",
        title: "UI Engineering",
        description: "Доступные и адаптивные интерфейсы с согласованными состояниями.",
        evidence: "Строит поддерживаемые UI-поверхности и контракты компонентов.",
        relatedProjects: ["Admin Console", "UI Kit Scroll Area"],
        type: "core",
      },
      {
        id: "api-contracts",
        title: "API Contracts",
        description: "Стабильная клиентская интеграция через типизированные и явные контракты.",
        evidence: "Делает расхождения API видимыми и адаптирует данные ответа на границах системы.",
        relatedProjects: ["OAuth Flow", "Social Platform"],
        type: "core",
      },
      {
        id: "testing-ci",
        title: "Testing & CI",
        description: "Автоматические проверки, которые защищают поведение продукта и процесс поставки.",
        evidence: "Покрывает критические сценарии модульными, дымовыми и сборочными проверками.",
        relatedProjects: ["Automation Tool", "Social Platform"],
        type: "core",
      },
      {
        id: "performance",
        title: "Performance",
        description: "Решения по рендерингу и взаимодействию, которые сохраняют продуктовые поверхности быстрыми.",
        evidence: "Балансирует качество UX с ограничениями runtime и сборки.",
        relatedProjects: ["Operations Console", "Admin Console"],
        type: "supporting",
      },
      {
        id: "accessibility",
        title: "Accessibility",
        description: "Реализация UI с учётом клавиатуры, фокуса, семантики и контраста.",
        evidence: "Использует доступные примитивы и явные состояния взаимодействия.",
        relatedProjects: ["UI Kit Scroll Area", "Admin Console"],
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

export function getLocalizedCaseStudy(locale: Locale, slug: string) {
  return localizedContent[locale].caseStudies.find((caseStudy) => caseStudy.slug === slug);
}

export function getCaseStudySlugs() {
  return localizedContent.en.caseStudies.map((caseStudy) => caseStudy.slug);
}
