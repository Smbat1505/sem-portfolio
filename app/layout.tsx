import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AppProviders } from "@/src/app/providers";
import { siteUrl } from "@/src/shared/config/seo";
import { Footer } from "@/src/widgets/footer";
import { Header } from "@/src/widgets/header";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

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
    <html lang="en" className={geistSans.variable + " " + geistMono.variable + " h-full antialiased"}>
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
