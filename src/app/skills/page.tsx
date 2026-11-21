import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import { skillGroups } from "@/data/skills";

export const metadata: Metadata = { title: "Skills" };

export default function Skills() {
  return (
    <div className="container-page">
      <PageHeading title="Skills" intro="Grouped by field. Each item has been used in at least one of my projects." />
      <div className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
        {skillGroups.map((g) => (
          <section key={g.title} className="border-t border-line pt-5">
            <h2 className="font-display text-xl font-semibold">{g.title}</h2>
            <div className="mt-3 flex flex-wrap gap-2">{g.items.map((i) => <span key={i} className="tag">{i}</span>)}</div>
          </section>
        ))}
      </div>
    </div>
  );
}
