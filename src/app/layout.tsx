import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { profile } from "@/data/profile";
import LocaleProvider from "@/components/LocaleProvider";
import { DEFAULT_LOCALE, t } from "@/lib/i18n";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display" });
const sans = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: { default: `${profile.name} – ${profile.role}`, template: `%s | ${profile.name}` },
  description: t(profile.headline),
  openGraph: { title: `${profile.name} – ${profile.role}`, description: t(profile.headline), type: "website" },
};

// Menerapkan tema dan bahasa tersimpan sebelum halaman tampil agar tidak berkedip.
const initScript = `try{var d=document.documentElement;var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))d.classList.add('dark');var l=localStorage.getItem('lang');if(l==='en'||l==='id')d.lang=l}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={DEFAULT_LOCALE} suppressHydrationWarning className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <head><script dangerouslySetInnerHTML={{ __html: initScript }} /></head>
      <body>
        <LocaleProvider>
          <Header name={profile.name} />
          <main>{children}</main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
