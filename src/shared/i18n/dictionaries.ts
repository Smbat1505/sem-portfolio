import type { Locale } from "./config";

export const dictionaries = {
  en: {
    navigation: {
      projects: "Projects",
      capabilities: "Capabilities",
      resume: "Resume",
      contact: "Contact",
    },
    locale: {
      en: "EN",
      ru: "RU",
    },
    preferences: {
      openMenu: "Open menu",
      closeMenu: "Close menu",
      mainNavigation: "Main navigation",
      mobileMenu: "Mobile navigation",
      language: "Language",
      theme: "Theme",
      system: "System",
      light: "Light",
      dark: "Dark",
    },
    common: {
      viewCaseStudies: "View case studies",
      viewResume: "View resume",
      viewAllProjects: "View all projects",
      contactMe: "Contact me",
      emailMe: "Email me",
      downloadResume: "Download CV (PDF)",
      viewProofThroughProjects: "View proof through projects",
      projectFiltersLabel: "Project filters",
    },
    home: {
      eyebrow: "Frontend Developer",
      title: "Production-grade interfaces with product thinking.",
      description: "I build typed, resilient frontend systems that turn product intent into shipped user experiences.",
      selectedWorkTitle: "Selected work",
      selectedWorkDescription: "A first look at the projects and systems behind the capability map.",
      contactEyebrow: "Start a conversation",
      contactTitle: "Let’s build something people can understand.",
      contactDescription:
        "Bring the product problem, constraints, and desired outcome. I’ll help turn them into a clear interface and an executable plan.",
      contactAction: "Discuss a project",
    },
    capabilityOverview: {
      eyebrow: "Delivery path",
      title: "Core capabilities work as one system",
      description: "The sequence stays readable here; project evidence below shows where each capability was applied.",
      supporting: "Supporting layer",
    },
    skillGraph: {
      eyebrow: "Interactive skill graph",
      hint: "Hover, focus, or tap a node to trace how the skills connect.",
      centerTitle: "Product outcome",
      centerMeta: "Clear under complexity",
      supporting: "Supporting",
      evidence: "Evidence",
      relatedWork: "Related work",
      explore: "Explore capabilities",
      idleTitle: "Choose a capability",
      idleMeta: "The system is ready — move through the orbit to reveal how each skill supports the outcome.",
    },
    contact: {
      eyebrow: "Let's connect",
      title: "Let’s build something useful.",
      description:
        "Open to frontend developer roles, product interface work, and opportunities with room for technical growth.",
      availabilityEyebrow: "Availability",
      availabilityTitle: "Open to opportunities",
      availabilityItems: ["Remote / Hybrid / On-site", "Open to relocation", "GMT+4"],
      bestFitTitle: "Best fit",
      bestFit: [
        {
          title: "Product frontend roles",
          description: "Best for teams that need frontend ownership with product judgment and delivery discipline.",
        },
        {
          title: "UI platform work",
          description: "Useful when design-system quality, reusable components, and UI contracts matter.",
        },
        {
          title: "Frontend architecture",
          description: "A fit for projects that need typed boundaries, maintainable state, and predictable data flow.",
        },
        {
          title: "Selected client work",
          description: "Available for focused product interfaces, audits, and implementation support.",
        },
      ],
    },
    resume: {
      role: "Frontend Developer",
      title: "Resume",
      headline: "React and TypeScript interfaces backed by team practice, product thinking, and delivery discipline.",
      description:
        "Frontend developer with self-directed learning since 2019, structured training since 2023, and team project experience. I build React and Next.js interfaces, work with API contracts and application state, and support delivery with tests, code review, and CI checks.",
      metrics: [
        { label: "Target role", value: "Frontend Developer" },
        { label: "Project practice", value: "Personal and team products" },
        { label: "Location", value: "Armenia · GMT+4" },
      ],
      snapshotTitle: "Current snapshot",
      snapshotItems: ["Remote / Hybrid / On-site", "Open to relocation", "React", "Next.js", "TypeScript"],
      impact: [
        {
          value: "2019",
          label: "Started learning",
          description: "Continuous self-directed frontend study followed by structured training and project practice.",
        },
        {
          value: "2023",
          label: "IT-Incubator",
          description: "Structured frontend training followed by collaborative product development.",
        },
        {
          value: "2",
          label: "Team products",
          description: "A social platform and a super-admin application built collaboratively with a team.",
        },
      ],
      skillGroups: [
        {
          title: "Frontend Core",
          items: ["JavaScript", "TypeScript", "React", "Next.js (App Router, SSR/ISR)"],
        },
        {
          title: "State and Data",
          items: [
            "Redux Toolkit",
            "RTK Query",
            "Zustand",
            "REST API",
            "GraphQL (Apollo Client)",
            "WebSocket",
            "React Hook Form",
            "Zod",
          ],
        },
        {
          title: "UI Platform",
          items: ["Sass/SCSS", "CSS Modules", "Tailwind", "Radix UI", "Storybook", "Feature-Sliced Design (FSD)"],
        },
        {
          title: "Delivery Quality",
          items: [
            "Vitest",
            "MSW",
            "Playwright",
            "Git",
            "GitHub Actions",
            "pnpm",
            "ESLint",
            "Prettier",
            "Stylelint",
            "Husky",
            "Figma",
            "Jira",
            "Vercel",
          ],
        },
      ],
      languagesTitle: "Languages",
      languages: [
        { name: "Russian", level: "Native" },
        { name: "Armenian", level: "Native" },
        { name: "English", level: "B1" },
      ],
      projectEvidenceEyebrow: "Project evidence",
      projectEvidenceTitle: "Where the resume is proven",
      projectEvidenceOutcomeLabel: "Outcome",
      projectEvidence: [
        {
          project: "ICTROOT Social Platform",
          focus:
            "One of the primary frontend contributors across social interactions, feed and profile behavior, API-driven state, testing, and stabilization.",
          outcome:
            "Delivered and integrated complex interaction flows while preserving shared contracts across team-owned features.",
          tags: ["React", "Next.js", "RTK Query", "Optimistic UI", "Testing"],
        },
        {
          project: "Super Admin & ICTROOT UI Kit",
          focus:
            "Team work on administrative workflows, GraphQL integration, shared UI primitives, responsive behavior, and delivery tooling.",
          outcome: "Improved product screens and shared component contracts without coupling fixes to one page.",
          tags: ["GraphQL", "Design system", "Radix UI", "CI/CD"],
        },
      ],
      inDevelopmentEyebrow: "In development",
      inDevelopmentTitle: "Currently building",
      inDevelopmentStatus: "In Development",
      inDevelopmentScopeLabel: "Planned scope",
      inDevelopmentStackLabel: "Planned stack",
      inDevelopment: [
        {
          project: "Field Operations Dashboard",
          description: "A private full-stack product in active development.",
          scope:
            "Section workflows, phone-pool status data, worker assignments, analytics, and realtime communication.",
          tags: ["Next.js", "Prisma", "PostgreSQL", "RBAC", "Socket.IO"],
        },
      ],
      experienceTitle: "Training and project experience",
      experience: [
        {
          period: "2025 — 2026",
          role: "Frontend Developer",
          company: "IT-Incubator · team projects",
          summary:
            "Collaborative development of a social platform, super-admin application, and shared UI kit as part of a team.",
          highlights: [
            "Owned substantial frontend scope across interactive product flows and integration work.",
            "Worked with REST and GraphQL contracts, client state, optimistic updates, SSR, and reusable UI.",
            "Diagnosed regressions, reviewed teammate work, and supported delivery through tests and CI checks.",
          ],
        },
        {
          period: "2023 — 2026",
          role: "Frontend Development Program",
          company: "IT-Incubator",
          summary:
            "Structured frontend training followed by practical teamwork, feature delivery, code review, and project-based learning.",
          highlights: [
            "Strengthened React, Next.js, TypeScript, state management, API integration, and testing skills.",
            "Practiced task decomposition, Git workflows, pull-request reviews, and team responsibility.",
            "Applied engineering decisions in production-oriented educational projects.",
          ],
        },
        {
          period: "2019 — Present",
          role: "Independent Frontend Development",
          company: "Self-directed learning and personal projects",
          summary:
            "Continuous independent study and product practice focused on modern frontend development and maintainable application architecture.",
          highlights: [
            "Built this bilingual portfolio as a typed, tested Next.js application.",
            "Building Field Operations Dashboard, a private full-stack product (in development).",
            "Maintaining an internal UI layer that can later migrate to a dedicated design system.",
          ],
        },
      ],
      principlesTitle: "How I work",
      principles: [
        {
          title: "Contracts before UI",
          description:
            "I align API contracts and types first, so screens are built on real data shapes instead of assumptions.",
        },
        {
          title: "States are part of the feature",
          description:
            "Loading, empty, error, and guarded-route states are designed together with the feature, not patched in later.",
        },
        {
          title: "Protect risky flows with tests",
          description:
            "I cover the flows that hurt users first, such as auth and data fetching, with Vitest, MSW, and CI checks.",
        },
      ],
    },
  },
  ru: {
    navigation: {
      projects: "Проекты",
      capabilities: "Навыки",
      resume: "Резюме",
      contact: "Контакты",
    },
    locale: {
      en: "EN",
      ru: "RU",
    },
    preferences: {
      openMenu: "Открыть меню",
      closeMenu: "Закрыть меню",
      mainNavigation: "Основная навигация",
      mobileMenu: "Мобильная навигация",
      language: "Язык",
      theme: "Тема",
      system: "Система",
      light: "Светлая",
      dark: "Тёмная",
    },
    common: {
      viewCaseStudies: "Смотреть кейсы",
      viewResume: "Смотреть резюме",
      viewAllProjects: "Все проекты",
      contactMe: "Связаться",
      emailMe: "Написать письмо",
      downloadResume: "Скачать резюме (PDF)",
      viewProofThroughProjects: "Смотреть доказательства в проектах",
      projectFiltersLabel: "Фильтры проектов",
    },
    home: {
      eyebrow: "Frontend-разработчик",
      title: "Надёжные интерфейсы с продуктовым мышлением.",
      description:
        "Я создаю типизированные и устойчивые frontend-системы, которые превращают продуктовую идею в готовый пользовательский опыт.",
      selectedWorkTitle: "Избранные проекты",
      selectedWorkDescription: "Первый взгляд на проекты и системы, которые подтверждают карту навыков.",
      contactEyebrow: "Начнем разговор",
      contactTitle: "Давайте создадим продукт, который легко понять.",
      contactDescription:
        "Расскажите о продуктовой задаче, ограничениях и желаемом результате. Я помогу превратить их в понятный интерфейс и выполнимый план.",
      contactAction: "Обсудить проект",
    },
    capabilityOverview: {
      eyebrow: "Путь к результату",
      title: "Ключевые навыки работают как единая система",
      description:
        "Здесь показана понятная последовательность, а ниже — проекты, подтверждающие применение каждого навыка.",
      supporting: "Поддерживающий слой",
    },
    skillGraph: {
      eyebrow: "Интерактивный граф компетенций",
      hint: "Наведите курсор, сфокусируйтесь или нажмите на узел, чтобы увидеть связи.",
      centerTitle: "Результат продукта",
      centerMeta: "Ясность в сложности",
      supporting: "Поддерживающий",
      evidence: "Доказательство",
      relatedWork: "Связанные проекты",
      explore: "Изучить компетенции",
      idleTitle: "Выберите компетенцию",
      idleMeta: "Система готова — двигайтесь по орбите, чтобы увидеть вклад каждого навыка в результат.",
    },
    contact: {
      eyebrow: "На связи",
      title: "Давайте построим полезный продукт.",
      description:
        "Открыт к позициям frontend-разработчика, работе над продуктовыми интерфейсами и возможностям для профессионального роста.",
      availabilityEyebrow: "Доступность",
      availabilityTitle: "Открыт к предложениям",
      availabilityItems: ["Удалённо / гибрид / офис", "Готов к переезду", "GMT+4"],
      bestFitTitle: "Лучшее совпадение",
      bestFit: [
        {
          title: "Продуктовая frontend-разработка",
          description:
            "Для команд, которым нужен ответственный за frontend с продуктовым мышлением и дисциплиной поставки.",
        },
        {
          title: "Задачи UI-платформы",
          description: "Полезно там, где важны дизайн-система, переиспользуемые компоненты и UI-контракты.",
        },
        {
          title: "Frontend-архитектура",
          description:
            "Для проектов, которым нужны типизированные границы, управляемое состояние и предсказуемый поток данных.",
        },
        {
          title: "Выбранная клиентская работа",
          description: "Доступен для сфокусированных интерфейсов, аудитов и поддержки реализации.",
        },
      ],
    },
    resume: {
      role: "Frontend-разработчик",
      title: "Резюме",
      headline: "Интерфейсы на React и TypeScript, командная практика, продуктовое мышление и дисциплина поставки.",
      description:
        "Frontend-разработчик: самостоятельно обучаюсь с 2019 года, прохожу структурированную подготовку с 2023 года и имею опыт командной разработки. Создаю интерфейсы на React и Next.js, работаю с API-контрактами и состоянием приложения, поддерживаю качество через тесты, ревью кода и CI.",
      metrics: [
        { label: "Целевая позиция", value: "Frontend-разработчик" },
        { label: "Практика", value: "Личные и командные продукты" },
        { label: "Локация", value: "Армения · GMT+4" },
      ],
      snapshotTitle: "Текущий срез",
      snapshotItems: ["Удалённо / гибрид / офис", "Готов к переезду", "React", "Next.js", "TypeScript"],
      impact: [
        {
          value: "2019",
          label: "Начало обучения",
          description: "Непрерывное самостоятельное обучение, затем структурированная подготовка и проектная практика.",
        },
        {
          value: "2023",
          label: "IT-Incubator",
          description: "Структурированное обучение frontend-разработке с последующей командной разработкой продуктов.",
        },
        {
          value: "2",
          label: "Командных продукта",
          description: "Социальная платформа и приложение суперадминистратора, созданные совместно с командой.",
        },
      ],
      skillGroups: [
        {
          title: "Основы frontend",
          items: ["JavaScript", "TypeScript", "React", "Next.js (App Router, SSR/ISR)"],
        },
        {
          title: "Состояние и данные",
          items: [
            "Redux Toolkit",
            "RTK Query",
            "Zustand",
            "REST API",
            "GraphQL (Apollo Client)",
            "WebSocket",
            "React Hook Form",
            "Zod",
          ],
        },
        {
          title: "UI-платформа",
          items: ["Sass/SCSS", "CSS Modules", "Tailwind", "Radix UI", "Storybook", "Feature-Sliced Design (FSD)"],
        },
        {
          title: "Качество поставки",
          items: [
            "Vitest",
            "MSW",
            "Playwright",
            "Git",
            "GitHub Actions",
            "pnpm",
            "ESLint",
            "Prettier",
            "Stylelint",
            "Husky",
            "Figma",
            "Jira",
            "Vercel",
          ],
        },
      ],
      languagesTitle: "Языки",
      languages: [
        { name: "Русский", level: "Родной" },
        { name: "Армянский", level: "Родной" },
        { name: "Английский", level: "B1" },
      ],
      projectEvidenceEyebrow: "Доказательства проектами",
      projectEvidenceTitle: "Где резюме подтверждается",
      projectEvidenceOutcomeLabel: "Результат",
      projectEvidence: [
        {
          project: "ICTROOT Social Platform",
          focus:
            "Один из основных frontend-разработчиков: социальные взаимодействия, лента и профиль, состояние на основе API, тестирование и стабилизация.",
          outcome:
            "Реализовывал и интегрировал сложные пользовательские сценарии, сохраняя общие контракты между командными фичами.",
          tags: ["React", "Next.js", "RTK Query", "Optimistic UI", "Testing"],
        },
        {
          project: "Super Admin и ICTROOT UI Kit",
          focus:
            "Командная работа над административными сценариями, GraphQL-интеграцией, общими UI-примитивами, адаптивностью и инструментами поставки.",
          outcome:
            "Улучшал продуктовые экраны и контракты общих компонентов без привязки исправлений к одной странице.",
          tags: ["GraphQL", "Design system", "Radix UI", "CI/CD"],
        },
      ],
      inDevelopmentEyebrow: "В разработке",
      inDevelopmentTitle: "Что я строю сейчас",
      inDevelopmentStatus: "В разработке",
      inDevelopmentScopeLabel: "Планируемый функционал",
      inDevelopmentStackLabel: "Планируемый стек",
      inDevelopment: [
        {
          project: "Field Operations Dashboard",
          description: "Закрытый full-stack продукт, который находится в активной разработке.",
          scope:
            "Управление участками, статусы телефонных пулов, назначения работников, аналитика и коммуникация в реальном времени.",
          tags: ["Next.js", "Prisma", "PostgreSQL", "RBAC", "Socket.IO"],
        },
      ],
      experienceTitle: "Обучение и проектный опыт",
      experience: [
        {
          period: "2025 — 2026",
          role: "Frontend-разработчик",
          company: "IT-Incubator · командные проекты",
          summary:
            "Командная разработка социальной платформы, приложения суперадминистратора и общей UI-библиотеки в составе команды.",
          highlights: [
            "Отвечал за значимую часть frontend-функциональности и интеграцию сложных пользовательских сценариев.",
            "Работал с REST и GraphQL, клиентским состоянием, оптимистичными обновлениями, SSR и переиспользуемым UI.",
            "Диагностировал регрессии, проводил ревью кода и поддерживал поставку через тесты и CI.",
          ],
        },
        {
          period: "2023 — 2026",
          role: "Программа frontend-разработки",
          company: "IT-Incubator",
          summary:
            "Структурированное обучение frontend-разработке с последующей командной практикой, поставкой функций, ревью кода и проектной работой.",
          highlights: [
            "Углубил навыки React, Next.js, TypeScript, управления состоянием, интеграции API и тестирования.",
            "Практиковал декомпозицию задач, процессы Git, ревью pull request и командную ответственность.",
            "Применял инженерные решения в учебных проектах, приближенных к production.",
          ],
        },
        {
          period: "2019 — настоящее время",
          role: "Самостоятельная frontend-разработка",
          company: "Самообучение и личные проекты",
          summary:
            "Непрерывное самостоятельное обучение и продуктовая практика с фокусом на современную frontend-разработку и поддерживаемую архитектуру приложений.",
          highlights: [
            "Создал двуязычное портфолио как типизированное и тестируемое Next.js-приложение.",
            "Разрабатываю Field Operations Dashboard — закрытый full-stack продукт (в разработке).",
            "Поддерживаю внутренний UI-слой, который позже можно вынести или заменить полноценной дизайн-системой.",
          ],
        },
      ],
      principlesTitle: "Как я работаю",
      principles: [
        {
          title: "Сначала контракты, потом UI",
          description:
            "Сначала согласую API-контракты и типы, чтобы экраны строились на реальных формах данных, а не на предположениях.",
        },
        {
          title: "Состояния — часть функциональности",
          description:
            "Загрузку, пустое состояние, ошибки и защищённые маршруты проектирую вместе с функцией, а не дорабатываю потом.",
        },
        {
          title: "Тесты на рискованных сценариях",
          description:
            "В первую очередь покрываю то, что ломает опыт пользователя, например авторизацию и загрузку данных, с помощью Vitest, MSW и CI-проверок.",
        },
      ],
    },
  },
} as const;

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
