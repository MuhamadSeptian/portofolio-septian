"use client";
import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { categories } from "@/data/categories";
import type { Project } from "@/lib/types";

type Sort = "newest" | "oldest" | "featured" | "az";

export default function ProjectGallery({ projects }: { projects: Project[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState<Sort>("newest");

  // Mendukung tautan seperti /projects/?category=game
  useEffect(() => {
    const c = new URLSearchParams(window.location.search).get("category");
    if (c && c in categories) setCategory(c);
  }, []);

  const counts = useMemo(() => {
    const m: Record<string, number> = {};
    projects.forEach((p) => (m[p.category] = (m[p.category] ?? 0) + 1));
    return m;
  }, [projects]);

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = projects.filter(
      (p) =>
        (category === "all" || p.category === category) &&
        (!q || p.title.toLowerCase().includes(q) || p.technologies.some((x) => x.toLowerCase().includes(q)))
    );
    const by: Record<Sort, (a: Project, b: Project) => number> = {
      newest: (a, b) => b.year - a.year,
      oldest: (a, b) => a.year - b.year,
      featured: (a, b) => Number(!!b.featured) - Number(!!a.featured) || b.year - a.year,
      az: (a, b) => a.title.localeCompare(b.title),
    };
    return [...list].sort(by[sort]);
  }, [projects, query, category, sort]);

  const chip = (active: boolean) =>
    `rounded-md border px-3 py-1.5 text-sm transition-colors ${active ? "border-accent bg-accent text-bg" : "border-line text-muted hover:border-accent hover:text-accent"}`;

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row">
        <label className="relative flex-1">
          <span className="sr-only">Search projects</span>
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by name or technology"
            className="w-full rounded-md border border-line bg-card py-2.5 pl-9 pr-3 text-sm outline-none focus:border-accent" />
        </label>
        <label>
          <span className="sr-only">Sort projects</span>
          <select value={sort} onChange={(e) => setSort(e.target.value as Sort)}
            className="w-full rounded-md border border-line bg-card px-3 py-2.5 text-sm outline-none focus:border-accent sm:w-auto">
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
            <option value="featured">Featured first</option>
            <option value="az">Name A–Z</option>
          </select>
        </label>
      </div>

      <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
        <button className={chip(category === "all")} onClick={() => setCategory("all")}>All ({projects.length})</button>
        {Object.entries(categories).filter(([k]) => counts[k]).map(([k, label]) => (
          <button key={k} className={chip(category === k)} onClick={() => setCategory(k)}>{label} ({counts[k]})</button>
        ))}
      </div>

      <p className="mt-6 text-sm text-muted" aria-live="polite">{shown.length} project{shown.length === 1 ? "" : "s"}</p>

      {shown.length ? (
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p) => <ProjectCard key={p.slug} p={p} />)}
        </div>
      ) : (
        <div className="mt-4 rounded-lg border border-dashed border-line p-10 text-center text-muted">
          No project matches your search. Clear the search or choose another category.
        </div>
      )}
    </div>
  );
}
