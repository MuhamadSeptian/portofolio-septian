// Teks boleh berupa string biasa, atau objek { en, id } untuk dua bahasa.
export type L = string | { en: string; id?: string };

export type ProjectStatus = "implemented" | "prototype" | "experiment" | "design";

export type Project = {
  slug: string; // otomatis dari nama file JSON
  title: string;
  summary: L;
  category: string; // salah satu key di src/data/categories.ts
  year: number;
  status: ProjectStatus;
  featured?: boolean;
  draft?: boolean; // true = disembunyikan dari website
  technologies: string[];
  thumbnail?: string;
  github?: string;
  demo?: string;
  // ---- Bagian detail (semua opsional) ----
  overview?: L;
  background?: L;
  objectives?: L[];
  features?: L[];
  architecture?: L;
  architectureImage?: string;
  role?: L;
  process?: L[];
  gallery?: { src: string; caption?: L }[];
  challenges?: { challenge: L; solution: L }[];
  results?: L;
  learnings?: L[];
  endpoints?: { method: string; path: string; description: L }[];
  extra?: { title: L; content: L; code?: string }[];
  downloads?: { label: L; file: string }[]; // file untuk diunduh (.pkt, .pdf, dst.)
};
