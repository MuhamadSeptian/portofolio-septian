import type { L } from "./types";

export type Locale = "en" | "id";

// Bahasa awal untuk pengunjung baru. Setelah memilih, pilihannya diingat browser.
export const DEFAULT_LOCALE: Locale = "en";

export function pick(text: L | undefined, locale: Locale): string {
  if (!text) return "";
  if (typeof text === "string") return text;
  return (locale === "id" ? text.id : undefined) ?? text.en;
}

// Versi string untuk tempat yang tidak bisa berganti bahasa (metadata SEO, atribut alt).
export const t = (text: L | undefined) => pick(text, DEFAULT_LOCALE);
