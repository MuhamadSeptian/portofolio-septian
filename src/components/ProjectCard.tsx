import Link from 'next/link';
import { ArrowUpRight, Github } from 'lucide-react';
import { categories, statusLabels } from '@/data/categories';
import { t } from '@/lib/i18n';
import T from "./T";
import { imgSrc } from '@/lib/project-assets';
import type { Project } from '@/lib/types';

export default function ProjectCard({ p }: { p: Project }) {
  const thumb = imgSrc(p.slug, p.thumbnail);
  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-line bg-card transition-colors hover:border-accent">
      <Link href={`/projects/${p.slug}/`} className="block" aria-label={`View ${p.title}`}>
        <div className="aspect-[16/10] overflow-hidden border-b border-line bg-bg">
          {thumb ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={thumb} alt={`${p.title} thumbnail`} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
          ) : (
            <div className="flex h-full items-end p-4">
              <span className="font-display text-5xl font-semibold text-line">{p.title.charAt(0)}</span>
            </div>
          )}
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between text-xs text-muted">
          <span>{categories[p.category] ?? p.category}</span>
          <span className="font-mono">{p.year}</span>
        </div>
        <h3 className="mt-2 font-display text-xl font-semibold tracking-tight">
          <Link href={`/projects/${p.slug}/`}>{p.title}</Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          <T text={p.summary} />
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {p.technologies.slice(0, 5).map((x) => (
            <span key={x} className="tag">
              {x}
            </span>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-between border-t border-line pt-4 text-sm">
          <span className="text-muted">{statusLabels[p.status]}</span>
          <div className="flex items-center gap-4">
            {p.github && (
              <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted hover:text-accent">
                <Github size={16} />
              </a>
            )}
            {p.demo && (
              <a href={p.demo} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent">
                Demo
              </a>
            )}
            <Link href={`/projects/${p.slug}/`} className="inline-flex items-center gap-1 font-medium text-accent">
              Details <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
