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
      pdfInNextVersion: "PDF in V1.1",
      viewProofThroughProjects: "View proof through projects",
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
    contact: {
      eyebrow: "Let's connect",
      title: "Let’s build something useful.",
      description:
        "Open to middle frontend roles, product interface work, and opportunities with room for technical growth.",
      availabilityEyebrow: "Availability",
      availabilityTitle: "Open to opportunities",
      availabilityItems: ["Remote / Hybrid", "GMT+4"],
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
        "Frontend developer with self-directed learning since 2019, structured training since 2023, and team internship experience. I build React and Next.js interfaces, work with API contracts and application state, and support delivery with tests, code review, and CI checks.",
      metrics: [
        { label: "Target role", value: "Middle Frontend Developer" },
        { label: "Project practice", value: "Personal and team products" },
        { label: "Location", value: "Armenia · GMT+4" },
      ],
      snapshotTitle: "Current snapshot",
      snapshotItems: ["Remote / Hybrid", "Relocation", "React", "Next.js", "TypeScript", "Team 3–5"],
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
          value: "3–5",
          label: "Team size",
          description: "Practical collaboration across changing internship teams and shared project ownership.",
        },
      ],
      skillGroups: [
        { title: "Frontend Core", items: ["React", "Next.js", "TypeScript", "State and data flow", "Responsive UI"] },
        {
          title: "UI Platform",
          items: ["Design systems", "Component APIs", "Accessibility", "CSS variables", "Storybook"],
        },
        { title: "Delivery Quality", items: ["Vitest", "Playwright", "ESLint", "Prettier", "Git", "CI/CD"] },
        {
          title: "Backend / Infra Path",
          items: ["REST", "GraphQL", "Prisma", "PostgreSQL", "NextAuth", "Socket.IO", "Docker", "Jenkins"],
        },
      ],
      languagesTitle: "Languages",
      languages: [
        { name: "Russian", level: "Fluent · written and spoken" },
        { name: "Armenian", level: "Native spoken proficiency" },
        { name: "English", level: "Conversational · basic written communication" },
      ],
      projectEvidenceEyebrow: "Project evidence",
      projectEvidenceTitle: "Where the resume is proven",
      projectEvidenceOutcomeLabel: "Outcome",
      projectEvidence: [
        {
          project: "Field Operations Dashboard",
          focus:
            "Private full-stack product for section workflows, phone-pool status data, worker assignments, analytics, and realtime communication.",
          outcome:
            "Designed the product architecture and implemented the application independently as an active personal project.",
          tags: ["Next.js", "Prisma", "PostgreSQL", "RBAC", "Socket.IO"],
        },
        {
          project: "Social Platform",
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
      experienceTitle: "Training and project experience",
      experience: [
        {
          period: "2025 — July 2026",
          role: "Frontend Developer Intern",
          company: "IT-Incubator · team projects",
          summary:
            "Collaborative development of a social platform, super-admin application, and shared UI kit in teams of three to five people.",
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
            "Developing Field Operations Dashboard as a private full-stack product.",
            "Maintaining an internal UI layer that can later migrate to a dedicated design system.",
          ],
        },
      ],
      principlesTitle: "How I position work",
      principles: [
        {
          title: "Architecture before scale",
          description:
            "Keep V1 simple, but make boundaries clear enough for i18n, backend data, PDF generation, and design-system migration.",
        },
        {
          title: "Proof over decoration",
          description:
            "Every visual section should point to projects, delivery evidence, capability depth, or a practical contact path.",
        },
        {
          title: "Migration-friendly UI",
          description:
            "Pages import through local shared UI adapters, so a future design system can replace internals without rewriting screens.",
        },
      ],
      workingModelTitle: "Working model",
      workingModel: [
        {
          title: "Clarify before building",
          description: "Define the user path, acceptance risk, data shape, and UI states before implementation.",
        },
        {
          title: "Ship with evidence",
          description: "Pair implementation with checks, screenshots, and clear notes about what changed.",
        },
        {
          title: "Keep migration paths open",
          description:
            "Prefer adapter boundaries and typed content so backend, PDF, and future design-system integration stay controlled.",
        },
      ],
      pdfReadyTitle: "PDF-ready resume foundation",
      pdfReadyDescription:
        "The resume stays as typed localized content instead of static page copy, so the web version and downloadable PDF can evolve from one reviewed source.",
      pdfReadyItems: [
        {
          title: "Structured sections",
          description:
            "Role, metrics, skills, experience, evidence, and principles are separated as predictable blocks.",
        },
        {
          title: "Localization-safe",
          description: "EN and RU content stay parallel, which keeps future PDF exports consistent across languages.",
        },
        {
          title: "Backend-ready",
          description: "The shape can move to an API or CMS later without changing the page composition.",
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
      emailMe: "Написать email",
      pdfInNextVersion: "PDF в V1.1",
      viewProofThroughProjects: "Смотреть доказательства в проектах",
    },
    home: {
      eyebrow: "Frontend-разработчик",
      title: "Production-grade интерфейсы с продуктовым мышлением.",
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
    contact: {
      eyebrow: "На связи",
      title: "Давайте построим полезный продукт.",
      description:
        "Открыт к позициям Middle Frontend Developer, работе над продуктовыми интерфейсами и возможностям для профессионального роста.",
      availabilityEyebrow: "Доступность",
      availabilityTitle: "Открыт к предложениям",
      availabilityItems: ["Remote / Hybrid", "GMT+4"],
      bestFitTitle: "Лучшее совпадение",
      bestFit: [
        {
          title: "Product frontend роли",
          description:
            "Подходит командам, которым нужна frontend ownership с продуктовым мышлением и дисциплиной delivery.",
        },
        {
          title: "UI platform задачи",
          description: "Полезно там, где важны дизайн-система, переиспользуемые компоненты и UI-контракты.",
        },
        {
          title: "Frontend архитектура",
          description:
            "Подходит проектам, где нужны typed boundaries, поддерживаемый state и предсказуемый поток данных.",
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
      headline: "React- и TypeScript-интерфейсы, командная практика, продуктовое мышление и дисциплина delivery.",
      description:
        "Frontend-разработчик: самостоятельно обучаюсь с 2019 года, прохожу структурированную подготовку с 2023 года и завершаю командную стажировку. Создаю интерфейсы на React и Next.js, работаю с API-контрактами и состоянием приложения, поддерживаю качество через тесты, code review и CI.",
      metrics: [
        { label: "Целевая позиция", value: "Middle Frontend Developer" },
        { label: "Практика", value: "Личные и командные продукты" },
        { label: "Локация", value: "Армения · GMT+4" },
      ],
      snapshotTitle: "Текущий срез",
      snapshotItems: ["Remote / Hybrid", "Relocation", "React", "Next.js", "TypeScript", "Команда 3–5"],
      impact: [
        {
          value: "2019",
          label: "Начало обучения",
          description: "Непрерывное самостоятельное обучение, затем структурированная подготовка и проектная практика.",
        },
        {
          value: "2023",
          label: "IT-Incubator",
          description: "Структурированное frontend-обучение с последующей командной разработкой продуктов.",
        },
        {
          value: "3–5",
          label: "Размер команды",
          description: "Практическая совместная работа в меняющихся командах стажировки.",
        },
      ],
      skillGroups: [
        { title: "Frontend Core", items: ["React", "Next.js", "TypeScript", "State and data flow", "Responsive UI"] },
        {
          title: "UI Platform",
          items: ["Design systems", "Component APIs", "Accessibility", "CSS variables", "Storybook"],
        },
        { title: "Delivery Quality", items: ["Vitest", "Playwright", "ESLint", "Prettier", "Git", "CI/CD"] },
        {
          title: "Backend / Infra Path",
          items: ["REST", "GraphQL", "Prisma", "PostgreSQL", "NextAuth", "Socket.IO", "Docker", "Jenkins"],
        },
      ],
      languagesTitle: "Языки",
      languages: [
        { name: "Русский", level: "Свободно · устно и письменно" },
        { name: "Армянский", level: "Родной разговорный · без чтения и письма" },
        { name: "Английский", level: "Разговорный · базовая письменная коммуникация" },
      ],
      projectEvidenceEyebrow: "Доказательства проектами",
      projectEvidenceTitle: "Где резюме подтверждается",
      projectEvidenceOutcomeLabel: "Результат",
      projectEvidence: [
        {
          project: "Field Operations Dashboard",
          focus:
            "Закрытый full-stack продукт для управления участками, статусами телефонных пулов, назначениями работников, аналитикой и realtime-коммуникацией.",
          outcome:
            "Самостоятельно спроектировал архитектуру продукта и реализую приложение как активный личный проект.",
          tags: ["Next.js", "Prisma", "PostgreSQL", "RBAC", "Socket.IO"],
        },
        {
          project: "Social Platform",
          focus:
            "Один из основных frontend-разработчиков: социальные взаимодействия, Feed и Profile, API-driven state, тестирование и стабилизация.",
          outcome:
            "Реализовывал и интегрировал сложные пользовательские сценарии, сохраняя общие контракты между командными фичами.",
          tags: ["React", "Next.js", "RTK Query", "Optimistic UI", "Testing"],
        },
        {
          project: "Super Admin и ICTROOT UI Kit",
          focus:
            "Командная работа над административными сценариями, GraphQL-интеграцией, shared UI primitives, адаптивностью и delivery tooling.",
          outcome:
            "Улучшал продуктовые экраны и контракты общих компонентов без привязки исправлений к одной странице.",
          tags: ["GraphQL", "Design system", "Radix UI", "CI/CD"],
        },
      ],
      experienceTitle: "Обучение и проектный опыт",
      experience: [
        {
          period: "2025 — июль 2026",
          role: "Frontend Developer Intern",
          company: "IT-Incubator · командные проекты",
          summary:
            "Командная разработка социальной платформы, super-admin приложения и общей UI-библиотеки в командах от трёх до пяти человек.",
          highlights: [
            "Отвечал за значимую часть frontend-функциональности и интеграцию сложных пользовательских сценариев.",
            "Работал с REST и GraphQL, client state, optimistic updates, SSR и переиспользуемым UI.",
            "Диагностировал регрессии, проводил code review и поддерживал delivery через тесты и CI.",
          ],
        },
        {
          period: "2023 — 2026",
          role: "Программа Frontend Development",
          company: "IT-Incubator",
          summary:
            "Структурированное frontend-обучение с последующей командной практикой, feature delivery, code review и проектной работой.",
          highlights: [
            "Углубил навыки React, Next.js, TypeScript, управления состоянием, интеграции API и тестирования.",
            "Практиковал декомпозицию задач, Git workflow, pull-request review и командную ответственность.",
            "Применял инженерные решения в production-oriented учебных проектах.",
          ],
        },
        {
          period: "2019 — настоящее время",
          role: "Самостоятельная frontend-разработка",
          company: "Самообучение и личные проекты",
          summary:
            "Непрерывное самостоятельное обучение и продуктовая практика с фокусом на современный frontend и поддерживаемую архитектуру приложений.",
          highlights: [
            "Создал двуязычное портфолио как типизированное и тестируемое Next.js-приложение.",
            "Разрабатываю Field Operations Dashboard как закрытый full-stack продукт.",
            "Поддерживаю внутренний UI-слой, который позже можно вынести или заменить полноценной дизайн-системой.",
          ],
        },
      ],
      principlesTitle: "Как я позиционирую работу",
      principles: [
        {
          title: "Архитектура до масштабирования",
          description:
            "V1 должен оставаться простым, но границы должны быть достаточно ясными для i18n, backend data, PDF generation и design-system migration.",
        },
        {
          title: "Доказательства вместо декора",
          description:
            "Каждая визуальная секция должна вести к проектам, delivery-доказательствам, глубине capabilities или понятному пути контакта.",
        },
        {
          title: "UI, готовый к миграции",
          description:
            "Страницы импортируют shared UI adapters, поэтому будущая дизайн-система сможет заменить внутренности без переписывания screens.",
        },
      ],
      workingModelTitle: "Рабочая модель",
      workingModel: [
        {
          title: "Уточнить до реализации",
          description: "Сначала определить путь пользователя, acceptance-риск, форму данных и UI-состояния.",
        },
        {
          title: "Показывать доказательства",
          description: "Сопровождать реализацию проверками, скриншотами и ясным описанием изменений.",
        },
        {
          title: "Оставлять путь к миграции",
          description:
            "Держать adapter boundaries и typed content, чтобы backend, PDF и будущая дизайн-система подключались контролируемо.",
        },
      ],
      pdfReadyTitle: "PDF-ready база резюме",
      pdfReadyDescription:
        "Резюме хранится как типизированный локализованный контент, чтобы web-версия и скачиваемый PDF развивались из одного проверенного источника.",
      pdfReadyItems: [
        {
          title: "Структурированные секции",
          description: "Роль, метрики, навыки, опыт, доказательства и принципы разделены на предсказуемые блоки.",
        },
        {
          title: "Готово к локализации",
          description:
            "EN и RU контент идут параллельно, поэтому будущий PDF можно держать консистентным на двух языках.",
        },
        {
          title: "Готово к backend",
          description: "Эту форму данных позже можно перенести в API или CMS без переписывания композиции страницы.",
        },
      ],
    },
  },
} as const;

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
