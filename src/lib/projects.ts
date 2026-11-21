import fs from "fs";
import path from "path";
import type { Project } from "./types";

const DIR = path.join(process.cwd(), "src", "data", "projects");

// Membaca semua file .json di src/data/projects (kecuali yang diawali "_").
// Inilah yang membuat proyek baru muncul otomatis tanpa mengedit komponen.
export function getAllProjects(): Project[] {
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".json") && !f.startsWith("_"))
    .map((f) => {
      const raw = JSON.parse(fs.readFileSync(path.join(DIR, f), "utf8"));
      return { ...raw, slug: f.replace(/\.json$/, "") } as Project;
    })
    .filter((p) => !p.draft)
    .sort((a, b) => b.year - a.year || a.title.localeCompare(b.title));
}

export const getProject = (slug: string) => getAllProjects().find((p) => p.slug === slug);
