import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AppProviders } from "@/src/app/providers";
import { siteUrl } from "@/src/shared/config/seo";
import { Footer } from "@/src/widgets/footer";
import { Header } from "@/src/widgets/header";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin", "cyrillic"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin", "cyrillic"] });

const documentInitializationScript = `
(function () {
  try {
    var firstSegment = window.location.pathname.split("/").filter(Boolean)[0];
    document.documentElement.lang = firstSegment === "ru" ? "ru" : "en";

    var key = "sem-portfolio:theme";
    var stored = localStorage.getItem(key);
    var preference = stored === "light" || stored === "dark" || stored === "system" ? stored : "system";
    var resolved = preference === "system"
      ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      : preference;
    var root = document.documentElement;
    root.dataset.theme = resolved;
    root.dataset.themePreference = preference;
    root.style.colorScheme = resolved;
  } catch (error) {}
})();
`;

export const metadata: Metadata = {
  metadataBase: siteUrl,
  applicationName: "SemAntony Portfolio",
  title: {
    default: "SemAntony — Frontend & Product Engineer",
    template: "%s | SemAntony",
  },
  description:
    "Frontend developer portfolio with typed architecture, team project experience, product thinking, and delivery quality.",
  creator: "SemAntony",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      data-theme-preference="system"
      suppressHydrationWarning
      className={geistSans.variable + " " + geistMono.variable + " h-full antialiased"}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: documentInitializationScript }} />
      </head>
      <body>
        <AppProviders>
          <Header />
          {children}
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
