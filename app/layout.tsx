import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AppProviders } from "@/src/app/providers";
import { Footer } from "@/src/widgets/footer";
import { Header } from "@/src/widgets/header";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SemAntony — Frontend & Product Engineer",
  description:
    "Frontend developer portfolio with typed architecture, team project experience, product thinking, and delivery quality.",
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
