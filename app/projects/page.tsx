import { ProjectsPage } from "@/src/screens/projects";
import { createStaticPageMetadata } from "@/src/shared/config/seo";

export const metadata = createStaticPageMetadata("en", "projects");

export default function Page() {
  return <ProjectsPage />;
}
