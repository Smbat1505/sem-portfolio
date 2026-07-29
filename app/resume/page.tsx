import { ResumePage } from "@/src/screens/resume";
import { createStaticPageMetadata } from "@/src/shared/config/seo";

export const metadata = createStaticPageMetadata("en", "resume");

export default function Page() {
  return <ResumePage />;
}
