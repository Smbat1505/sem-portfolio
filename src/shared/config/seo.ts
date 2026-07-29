import type { Metadata, MetadataRoute } from "next";
import {
  defaultLocale,
  getCaseStudySlugs,
  getDictionary,
  getLocalizedCaseStudy,
  getLocalizedContent,
  locales,
  type Locale,
} from "../i18n";

export const siteUrl = new URL("https://semantony.com");

export const staticPagePaths = {
  home: "/",
  projects: "/projects",
  capabilities: "/capabilities",
  resume: "/resume",
  contact: "/contact",
} as const;

export type StaticPage = keyof typeof staticPagePaths;

function normalizePath(pathname: string) {
  if (!pathname || pathname === "/") {
    return "";
  }

  return pathname.startsWith("/") ? pathname : `/${pathname}`;
}

export function getLocalizedPath(locale: Locale, pathname: string) {
  return `/${locale}${normalizePath(pathname)}`;
}

export function getAbsoluteUrl(pathname: string) {
  return new URL(pathname, siteUrl).toString();
}

export function getLanguageAlternates(pathname: string) {
  const englishUrl = getAbsoluteUrl(getLocalizedPath(defaultLocale, pathname));

  return {
    en: englishUrl,
    ru: getAbsoluteUrl(getLocalizedPath("ru", pathname)),
    "x-default": englishUrl,
  };
}

function createMetadata({
  locale,
  pathname,
  title,
  description,
}: {
  locale: Locale;
  pathname: string;
  title: string;
  description: string;
}): Metadata {
  const canonical = getAbsoluteUrl(getLocalizedPath(locale, pathname));

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: getLanguageAlternates(pathname),
    },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: "SemAntony",
      title,
      description,
      locale: locale === "ru" ? "ru_RU" : "en_US",
      alternateLocale: locale === "ru" ? ["en_US"] : ["ru_RU"],
    },
  };
}

export function createStaticPageMetadata(locale: Locale, page: StaticPage): Metadata {
  const dictionary = getDictionary(locale);
  const content = getLocalizedContent(locale);

  const pageContent = {
    home: {
      title: locale === "ru" ? "Frontend-разработчик и продуктовый инженер" : "Frontend & Product Engineer",
      description: dictionary.home.description,
    },
    projects: {
      title: content.projectsPage.title,
      description: content.projectsPage.description,
    },
    capabilities: {
      title: content.capabilitiesPage.title,
      description: content.capabilitiesPage.description,
    },
    resume: {
      title: dictionary.resume.title,
      description: dictionary.resume.description,
    },
    contact: {
      title: dictionary.contact.title,
      description: dictionary.contact.description,
    },
  } satisfies Record<StaticPage, { title: string; description: string }>;

  return createMetadata({
    locale,
    pathname: staticPagePaths[page],
    ...pageContent[page],
  });
}

export function createCaseStudyMetadata(locale: Locale, slug: string): Metadata {
  const caseStudy = getLocalizedCaseStudy(locale, slug);

  if (!caseStudy) {
    return {
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return createMetadata({
    locale,
    pathname: `/projects/${slug}`,
    title: caseStudy.title,
    description: caseStudy.summary,
  });
}

function createSitemapEntry({
  locale,
  pathname,
  changeFrequency,
  priority,
}: {
  locale: Locale;
  pathname: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  priority: number;
}): MetadataRoute.Sitemap[number] {
  return {
    url: getAbsoluteUrl(getLocalizedPath(locale, pathname)),
    changeFrequency,
    priority,
    alternates: {
      languages: getLanguageAlternates(pathname),
    },
  };
}

export function createSitemap(): MetadataRoute.Sitemap {
  const staticEntries = locales.flatMap((locale) =>
    (Object.entries(staticPagePaths) as Array<[StaticPage, string]>).map(([page, pathname]) =>
      createSitemapEntry({
        locale,
        pathname,
        changeFrequency: page === "home" ? "weekly" : "monthly",
        priority: page === "home" ? 1 : page === "projects" ? 0.9 : 0.8,
      }),
    ),
  );

  const caseStudyEntries = locales.flatMap((locale) =>
    getCaseStudySlugs().map((slug) =>
      createSitemapEntry({
        locale,
        pathname: `/projects/${slug}`,
        changeFrequency: "monthly",
        priority: 0.7,
      }),
    ),
  );

  return [...staticEntries, ...caseStudyEntries];
}

export function createRobots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: getAbsoluteUrl("/sitemap.xml"),
    host: siteUrl.origin,
  };
}
