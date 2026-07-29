import { CapabilitiesPage } from "@/src/screens/capabilities";
import { createStaticPageMetadata } from "@/src/shared/config/seo";

export const metadata = createStaticPageMetadata("en", "capabilities");

export default function Page() {
  return <CapabilitiesPage />;
}
