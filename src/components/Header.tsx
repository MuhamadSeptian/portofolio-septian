"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useLocale } from "./LocaleProvider";

const links = [
  { href: "/projects/", label: "Projects" },
  { href: "/about/", label: "About" },
  { href: "/skills/", label: "Skills" },
  { href: "/certifications/", label: "Credentials" },
  { href: "/experience/", label: "Experience" },
];

function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => setDark(document.documentElement.classList.contains("dark")), []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch {}
  };
  return (
    <button onClick={toggle} aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="rounded-md p-2 text-muted transition-colors hover:text-accent">
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

function LanguageToggle() {
  const { locale, setLocale } = useLocale();
  return (
    <div role="group" aria-label="Language" className="mx-1 flex items-center rounded-md border border-line text-xs font-medium">
      {(["en", "id"] as const).map((l) => (
        <button key={l} onClick={() => setLocale(l)} aria-pressed={locale === l}
          className={`px-2 py-1 transition-colors ${l === "en" ? "rounded-l-[5px]" : "rounded-r-[5px]"} ${locale === l ? "bg-accent text-bg" : "text-muted hover:text-accent"}`}>
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default function Header({ name }: { name: string }) {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [path]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="font-display text-lg font-semibold tracking-tight">{name.split(" ")[0]}</Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {links.map((l) => {
            const active = path.startsWith(l.href.slice(0, -1));
            return (
              <Link key={l.href} href={l.href} aria-current={active ? "page" : undefined}
                className={`rounded-md px-3 py-2 text-sm transition-colors hover:text-accent ${active ? "text-accent" : "text-muted"}`}>
                {l.label}
              </Link>
            );
          })}
          <LanguageToggle />
          <ThemeToggle />
        </nav>
        <div className="flex items-center md:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open} className="rounded-md p-2">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="container-page flex flex-col border-t border-line pb-3 md:hidden" aria-label="Mobile">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="py-3 text-sm text-muted hover:text-accent">{l.label}</Link>
          ))}
        </nav>
      )}
    </header>
  );
}