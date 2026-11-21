import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { categories, statusLabels } from '@/data/categories';
import { getAllProjects, getProject } from '@/lib/projects';
import { imgSrc } from '@/lib/project-assets';
import { t } from '@/lib/i18n';
import T from "@/components/T";
import ProjectDetail from '@/components/ProjectDetail';

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getProject(params.slug);
  return p ? { title: p.title, description: t(p.summary) } : {};
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const p = getProject(params.slug);
  if (!p) notFound();
  const thumb = imgSrc(p.slug, p.thumbnail);

  return (
    <article className="container-page pt-10">
      <Link href="/projects/" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent">
        <ArrowLeft size={15} /> All projects
      </Link>
      <header className="mb-10 mt-8 max-w-3xl">
        <p className="text-sm text-muted">
          {categories[p.category] ?? p.category} <span className="font-mono">({p.year})</span>, {statusLabels[p.status]}
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">{p.title}</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          <T text={p.summary} />
        </p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {p.technologies.map((x) => (
            <span key={x} className="tag">
              {x}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {p.github && (
            <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn">
              <Github size={16} /> Repository
            </a>
          )}
          {p.demo && (
            <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <ExternalLink size={16} /> Live demo
            </a>
          )}
        </div>
      </header>
      {thumb && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={thumb} alt={`${p.title} cover`} className="mb-10 w-full rounded-lg border border-line" />
      )}
      <ProjectDetail p={p} />
    </article>
  );
}
