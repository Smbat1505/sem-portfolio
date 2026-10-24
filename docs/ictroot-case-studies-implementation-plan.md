# Внедрение кейсов ICTROOT: пошаговый план

Этот документ описывает безопасное обновление портфолио двумя реальными командными
кейсами: `ICTROOT Social Platform` и `ICTROOT Super Admin`.

## Цель и границы

Нужно заменить обобщённые данные существующих кейсов, не меняя их URL:

- `/projects/social-platform` → `ICTROOT Social Platform`;
- `/projects/admin-console` → `ICTROOT Super Admin`.

Не публиковать секреты, внутренние URL, env-переменные, исходный код, приватные
документы, персональные данные и неподтверждённые метрики. Не использовать бренд
Instagram или создавать впечатление аффилиации с Meta.

Публичными внешними ссылками остаются только:

- `https://github.com/ictroot70/Ict`;
- `https://github.com/ictroot70/super-admin-ictroot`.

## Перед началом

1. Работать в ветке `feat/ictroot-portfolio-cases`.
2. Проверить состояние:

   ```bash
   git status --short
   git diff --check
   ```

3. Не использовать `git add .`: в рабочем дереве могут находиться локальные
   настройки `.idea/`, их не нужно коммитить.
4. Для полной проверки проекта нужен Node.js `22.13+`. Текущая версия Node 20 не
   запускает Vitest 4, хотя TypeScript и ESLint при ней работают.

## Шаг 1. Зафиксировать только проверяемые факты

Источники фактов — локальные репозитории, а не память или рекламные формулировки:

- Social Platform: `/Users/sem/develop/icubator/stz/instagramm`;
- Super Admin: `/Users/sem/develop/icubator/stz/super-admin-ictroot`.

Использовать можно следующее:

| Кейс | Подтверждаемые направления | Стек |
| --- | --- | --- |
| ICTROOT Social Platform | профиль, подписки, уведомления, публичный SSR, скелетоны, текстовые и голосовые сообщения, realtime-состояния | Next.js, React, TypeScript, Redux Toolkit/RTK Query, Socket.IO |
| ICTROOT Super Admin | управление пользователями, ban/unban/delete, управление постами, поиск, infinite scroll, realtime-обновления | Next.js, React, TypeScript, GraphQL, Apollo Client, Zustand, React Hook Form, Zod |

Перед публикацией новых формулировок проверять их через `git log`, конкретные
изменения и README исходных репозиториев. Не указывать скорость, проценты, число
пользователей, коммерческий статус или ownership всей системы без отдельного
доказательства.

## Шаг 2. Обновить типы данных

1. В `src/entities/project/project.model.ts` оставить опциональное поле `preview`:

   ```ts
   preview?: { src: string; alt: string };
   ```

2. В `src/entities/case-study/case-study.model.ts` оставить:

   ```ts
   repositoryUrl?: string;
   preview?: { src: string; alt: string };
   ```

3. Поля опциональны, поэтому существующие четыре кейса продолжат работать без
   новых изображений и ссылок.

## Шаг 3. Обновить локализованный контент

Единственный источник контента, который использует сайт, —
`src/shared/i18n/content.ts`.

1. В блоках `localizedContent.en.projects` и `localizedContent.ru.projects` заменить
   заголовки, краткое описание, стек и impact у slug `social-platform` и
   `admin-console`.
2. В блоках `localizedContent.en.caseStudies` и
   `localizedContent.ru.caseStudies` заменить полные страницы кейсов.
3. Для обоих кейсов указать `repositoryUrl` из списка выше.
4. Обновить названия в `capabilities[*].relatedProjects` в обеих локалях, иначе
   карта компетенций покажет прежние названия.
5. Обновить `resume.projectEvidence` в `src/shared/i18n/dictionaries.ts`, чтобы
   раздел резюме не расходился с карточками проектов.
6. Не менять значения `slug`, `id`, категорию или структуру секций кейса:
   они уже участвуют в маршрутах, sitemap и тестах.

Рекомендуемая структура каждого кейса:

- **Problem** — продуктовая задача без внутренних деталей;
- **Constraints** — технические и командные ограничения;
- **Solution** — только ваш подтверждённый вклад;
- **Outcome** — качественный, проверяемый результат без выдуманных метрик;
- **Technical decisions** — три конкретных инженерных решения;
- **Proof** — стек, тип проекта и области вклада.

## Шаг 4. Добавить ссылку на исходный код

1. В `src/shared/i18n/content.ts` добавить в `CaseStudyPageContent` локализованную
   подпись, например `Source repository` / `Исходный репозиторий`.
2. В `src/screens/case-study/case-study-page.tsx` отрисовать ссылку только если
   `caseStudy.repositoryUrl` присутствует.
3. Использовать обычный `<a>`, а не вложенную ссылку внутри `Link`:

   ```tsx
   <a href={caseStudy.repositoryUrl} target="_blank" rel="noreferrer">
     {content.caseStudiesPage.sourceRepository}
   </a>
   ```

4. Разместить ссылку рядом с CTA в финальной карточке кейса. Так она доступна, но
   не конкурирует с основным действием «Contact».

## Шаг 5. Добавить preview-изображения после ручной проверки

Этот шаг выполнять только после получения двух очищенных изображений от владельца
портфолио.

1. Проверить каждое изображение: нет ли email, токенов, API URL, фото реальных
   пользователей, личных данных и закрытой информации.
2. Сохранить изображения в `public/projects/` с понятными именами:

   ```text
   public/projects/ictroot-social-platform.webp
   public/projects/ictroot-super-admin.webp
   ```

3. Добавить `preview` с локализованным `alt` в записи проектов и кейсов.
4. В `src/widgets/project-grid/project-card.tsx` заменить декоративный фон на
   `next/image` только при наличии `project.preview`; для остальных карточек
   сохранить существующий CSS-preview.
5. В `src/screens/case-study/case-study-page.tsx` отрисовать крупное изображение
   только при наличии `caseStudy.preview`. Использовать `fill`, контейнер с
   `relative` и `sizes`, чтобы не вызвать layout shift и не загрузить слишком
   большое изображение на мобильном устройстве.
6. Не брать `user_photo.jpg` или другие случайные файлы из исходных репозиториев
   в качестве preview.

## Шаг 6. Синхронизировать устаревшие данные

Файлы `src/entities/project/projects.data.ts` и
`src/entities/capability/capabilities.data.ts` сейчас не являются источником
контента для локализованных страниц, но содержат старые названия. Обновить их в
том же коммите или пометить для последующего удаления при рефакторинге. Это
исключит расхождение данных в тестах и будущих изменениях.

## Шаг 7. Проверить изменения

После каждого логического шага:

```bash
git diff --check
git diff -- src/shared/i18n/content.ts src/shared/i18n/dictionaries.ts
```

После установки Node 22.13+:

```bash
npm run typecheck
npm run lint
npm test
npm run build
npm run test:e2e
```

Ручная проверка:

1. Открыть обе карточки на `/projects` на английском и русском языках.
2. Проверить сохранённые URL, включая `/ru/projects/social-platform` и
   `/ru/projects/admin-console`.
3. Переключить светлую и тёмную темы, проверить мобильную ширину.
4. Убедиться, что GitHub-ссылки открываются в новой вкладке.
5. Проверить `/sitemap.xml`, canonical и language alternates для обоих кейсов.

## Коммиты и завершение

Делать коммиты по этапам, явно добавляя только нужные файлы:

```bash
git add src/entities/project/project.model.ts src/entities/case-study/case-study.model.ts src/shared/i18n/content.ts src/shared/i18n/dictionaries.ts src/entities/project/projects.data.ts src/entities/capability/capabilities.data.ts
git commit -m "feat(portfolio): add ICTROOT case study content"

git add src/screens/case-study/case-study-page.tsx src/widgets/project-grid/project-card.tsx public/projects
git commit -m "feat(portfolio): add case study previews and source links"
```

Второй коммит создаётся только после появления проверенных preview-файлов. Перед
PR убедиться, что `git status --short` не содержит `.idea/` в staged changes.
