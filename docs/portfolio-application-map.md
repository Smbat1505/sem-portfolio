# Карта приложения портфолио

Этот файл — навигатор по проекту: где менять контент, внешний вид, маршруты,
метаданные и проверки.

## Быстрый выбор точки правки

| Нужно изменить                        | Основной путь                                    | Что важно помнить                                   |
| ------------------------------------- | ------------------------------------------------ | --------------------------------------------------- |
| Текст, проекты, кейсы, компетенции    | `src/shared/i18n/content.ts`                     | Главный источник локализованного контента EN/RU     |
| Резюме, меню, home, контактные тексты | `src/shared/i18n/dictionaries.ts`                | Всегда менять обе локали                            |
| Email, GitHub, LinkedIn, Telegram     | `src/entities/contact/contact.data.ts`           | Используется страницей контактов                    |
| Маршруты и SEO                        | `src/shared/config/seo.ts`                       | Менять после проверки canonical, sitemap и hreflang |
| Страница кейса                        | `src/screens/case-study/case-study-page.tsx`     | Общий шаблон для всех project slugs                 |
| Карточка проекта                      | `src/widgets/project-grid/project-card.tsx`      | Не вкладывать ссылку внутрь другой ссылки           |
| Проекты с фильтрами                   | `src/features/project-filter/project-filter.tsx` | Фильтрация выполняется на клиенте                   |
| Главная страница                      | `src/screens/home/home-page.tsx`                 | Показывает первые три проекта из контента           |
| Внешний вид/токены                    | `src/shared/design-system/` и `app/globals.css`  | Сначала использовать существующие CSS variables     |

## Маршруты

| URL                | Файл маршрута                  | Экран                                            |
| ------------------ | ------------------------------ | ------------------------------------------------ |
| `/`                | `app/page.tsx`                 | `src/screens/home/home-page.tsx`                 |
| `/projects`        | `app/projects/page.tsx`        | `src/screens/projects/projects-page.tsx`         |
| `/projects/[slug]` | `app/projects/[slug]/page.tsx` | `src/screens/case-study/case-study-page.tsx`     |
| `/capabilities`    | `app/capabilities/page.tsx`    | `src/screens/capabilities/capabilities-page.tsx` |
| `/resume`          | `app/resume/page.tsx`          | `src/screens/resume/resume-page.tsx`             |
| `/contact`         | `app/contact/page.tsx`         | `src/screens/contact/contact-page.tsx`           |
| `/ru/...`          | `app/[locale]/...`             | Те же экраны с locale `ru`                       |
| `/sitemap.xml`     | `app/sitemap.ts`               | Список URL из SEO-конфигурации                   |
| `/robots.txt`      | `app/robots.ts`                | Robots-конфигурация                              |

Английский язык является дефолтным: `/en/...` не должен существовать как отдельный
публичный URL, а перенаправляется на путь без префикса. Русский использует `/ru`.

## Контент и модели

### Проекты

- Модель: `src/entities/project/project.model.ts`.
- Реальный источник для страниц: `src/shared/i18n/content.ts` →
  `localizedContent.en.projects` и `localizedContent.ru.projects`.
- Поля `id` и `slug` должны быть стабильны. При переименовании проекта меняются
  `title`, `summary`, `role`, `stack`, `impact`, но не URL slug без отдельной
  стратегии редиректов.
- Категории должны совпадать с `projectCategorySchema`:
  `product-ui`, `architecture`, `testing-ci`, `automation`, `performance`.

### Кейсы

- Модель: `src/entities/case-study/case-study.model.ts`.
- Контент: `src/shared/i18n/content.ts` → `caseStudies` в каждой локали.
- Путь строится из `slug`; `getCaseStudySlugs()` автоматически добавляет все кейсы
  в static params и sitemap.
- Поля `repositoryUrl` и `preview` опциональны. Если их нет, кейс обязан
  отображаться как раньше.

### Компетенции

- Локализованные данные: `src/shared/i18n/content.ts` → `capabilities`.
- Визуализация: `src/widgets/capability-map/` и
  `src/widgets/home-skill-graph/`.
- При смене названия проекта обновить `relatedProjects`, чтобы граф не показывал
  старые имена.

### Резюме и контакты

- Резюме: `src/shared/i18n/dictionaries.ts` → `resume`.
- Экран: `src/screens/resume/resume-page.tsx`.
- PDF: две версии в `public/resume/` (`smbat-antonian-cv-en.pdf`, `smbat-antonian-cv-ru.pdf`);
  нужная выбирается по локали функцией `resumePdfPath` из `src/shared/config/resume.ts`.
  Чтобы обновить резюме, заменить файл с тем же именем.
- Контактные ссылки: `src/entities/contact/contact.data.ts`.

## UI и стили

| Компонент     | Путь                                           | Назначение                             |
| ------------- | ---------------------------------------------- | -------------------------------------- |
| Header        | `src/widgets/header/header.tsx`                | Навигация, языки, мобильное меню, тема |
| Footer        | `src/widgets/footer/footer.tsx`                | Низ сайта                              |
| Button        | `src/shared/ui/button/button.tsx`              | Все кнопки и внутренние ссылки         |
| Card          | `src/shared/ui/card/card.tsx`                  | Базовая карточка                       |
| Project Card  | `src/widgets/project-grid/project-card.tsx`    | Карточка в списке проектов             |
| Case Study    | `src/screens/case-study/case-study-page.tsx`   | Полная страница кейса                  |
| Theme Switch  | `src/features/theme-switch/theme-switch.tsx`   | Светлая, тёмная, системная темы        |
| Locale Switch | `src/features/locale-switch/locale-switch.tsx` | Переключение EN/RU                     |

Стили проекта основаны на Tailwind utility classes и переменных из:

- `src/shared/design-system/tokens.css`;
- `src/shared/design-system/palette.css`;
- `src/shared/design-system/typography.css`;
- `src/shared/design-system/motion.css`;
- `app/globals.css`.

Для нового изображения в карточке использовать `next/image`, локальный путь из
`public/`, осмысленный `alt` и фиксированное соотношение сторон. Не использовать
непроверенные внешние URL без настройки Next Image.

## SEO и локализация

- `src/shared/config/seo.ts` создаёт metadata, canonical, hreflang, sitemap и
  robots.
- `siteUrl` здесь должен соответствовать production-домену.
- `src/shared/i18n/config.ts` определяет `en` и `ru`, default locale и правила
  построения путей.
- Для нового статического раздела нужно одновременно добавить маршрут,
  `staticPagePaths`, переводы и metadata. Для нового кейса достаточно добавить
  данные в `caseStudies`, если slug новый.

## Тесты и проверки

| Проверка           | Путь/команда                                             | Что покрывает                           |
| ------------------ | -------------------------------------------------------- | --------------------------------------- |
| Модели проектов    | `src/entities/project/projects.test.ts`                  | Структура и фильтрация данных           |
| Компетенции        | `src/entities/capability/capabilities.test.ts`           | Схема capability-данных                 |
| SEO                | `src/shared/config/seo.test.ts`                          | Canonical, hreflang, sitemap, robots    |
| Локализация        | `src/shared/i18n/config.test.ts`                         | Построение путей EN/RU                  |
| Интерактивный граф | `src/widgets/home-skill-graph/home-skill-graph.test.tsx` | Поведение графа навыков                 |
| E2E                | `tests/e2e/navigation.spec.ts`                           | Основная навигация                      |
| Полная проверка    | `npm run check`                                          | TypeScript, ESLint, Vitest              |
| Сборка             | `npm run build`                                          | Production-сборка для Cloudflare/Vinext |

## Что не менять без отдельной задачи

- `wrangler.jsonc` и `worker/index.ts`: Cloudflare Worker, домен и deployment.
- `app/[locale]/...`: только если меняется логика локализации или маршрутов.
- `next.config.ts`, `vite.config.ts`, `package.json`: только при технической
  необходимости и после чтения актуальной документации Next.js.
- `src/entities/*/*.data.ts`: сейчас это устаревшие нелокализованные наборы. Не
  добавлять туда новый контент как в единственный источник; либо синхронизировать
  их с `content.ts`, либо отдельной задачей удалить дублирование.
