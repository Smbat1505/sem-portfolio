import { ContactPage } from "@/src/screens/contact";
import { createStaticPageMetadata } from "@/src/shared/config/seo";

export const metadata = createStaticPageMetadata("en", "contact");

export default function Page() {
  return <ContactPage />;
}
