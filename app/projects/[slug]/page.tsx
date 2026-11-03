import { CaseStudyPage } from "@/src/screens/case-study";
import { createCaseStudyMetadata } from "@/src/shared/config/seo";
import { getCaseStudySlugs } from "@/src/shared/i18n";

export function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;

  return createCaseStudyMetadata("en", slug);
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  return <CaseStudyPage slug={slug} />;
}
