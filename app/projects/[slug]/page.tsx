import { CaseStudyPage } from "@/src/screens/case-study";
import { getCaseStudySlugs } from "@/src/shared/i18n";

export function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return <CaseStudyPage slug={slug} />;
}
