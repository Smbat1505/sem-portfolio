import { HomePage } from "@/src/screens/home";
import { createStaticPageMetadata } from "@/src/shared/config/seo";

export const metadata = createStaticPageMetadata("en", "home");

export default function Page() {
  return <HomePage />;
}
