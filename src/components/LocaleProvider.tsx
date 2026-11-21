"use client";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n";

const Ctx = createContext<{ locale: Locale; setLocale: (l: Locale) => void }>({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
});
export const useLocale = () => useContext(Ctx);

export default function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setState] = useState<Locale>(DEFAULT_LOCALE);
  // Skrip kecil di layout sudah mengatur <html lang> dari pilihan tersimpan; di sini kita menyamakan state.
  useEffect(() => setState(document.documentElement.lang === "id" ? "id" : "en"), []);
  const setLocale = useCallback((l: Locale) => {
    setState(l);
    document.documentElement.lang = l;
    try { localStorage.setItem("lang", l); } catch {}
  }, []);
  return <Ctx.Provider value={{ locale, setLocale }}>{children}</Ctx.Provider>;
}
