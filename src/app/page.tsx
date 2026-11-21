import Link from 'next/link';
import { Download, Mail } from 'lucide-react';
import { profile } from '@/data/profile';
import { categories } from '@/data/categories';
import { skillGroups } from '@/data/skills';
import { getAllProjects } from '@/lib/projects';
import { publicFileExists } from '@/lib/assets';
import { t } from '@/lib/i18n';
import T from "@/components/T";
import ProjectCard from '@/components/ProjectCard';
import { SocialLinks } from '@/components/Footer';

export default function Home() {
  const projects = getAllProjects();
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  const counts: Record<string, number> = {};
  projects.forEach((p) => (counts[p.category] = (counts[p.category] ?? 0) + 1));
  const hasPhoto = publicFileExists(profile.photo);
  const ed = profile.education;

  return (
    <>
      <section className="container-page grid gap-12 pb-20 pt-16 lg:grid-cols-[1fr_320px] lg:pt-24">
        <div className="hero-in">
          <p className="text-sm text-muted">
            {ed.degree}
            {ed.university ? `, ${ed.university}` : ''}
          </p>
          <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">{profile.name}</h1>
          <div>
            <p className="mt-6 max-w-xl text-xl leading-relaxed">
              <T text={profile.headline} />
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-muted">
              <T text={profile.intro} />
            </p>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/projects/" className="btn btn-primary">
              View projects
            </Link>
            {profile.cv && (
              <a href={profile.cv} download className="btn">
                <Download size={16} /> Download CV
              </a>
            )}
            {profile.email && (
              <a href={`mailto:${profile.email}`} className="btn">
                <Mail size={16} /> Contact
              </a>
            )}
            <span className="ml-1">
              <SocialLinks />
            </span>
          </div>
        </div>

        <aside className="hero-in">
          {hasPhoto && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={profile.photo} alt={`Portrait of ${profile.name}`} className="mb-6 aspect-square w-full max-w-[320px] rounded-lg border border-line object-cover" />
          )}
          <h2 className="mb-3 text-sm font-medium text-muted">Work by field</h2>
          <ul className="divide-y divide-line border-y border-line">
            {Object.entries(categories)
              .filter(([k]) => counts[k])
              .map(([k, label]) => (
                <li key={k}>
                  <Link href={`/projects/?category=${k}`} className="flex items-center justify-between py-2.5 text-sm transition-colors hover:text-accent">
                    <span>{label}</span>
                    <span className="font-mono text-muted">{counts[k]}</span>
                  </Link>
                </li>
              ))}
          </ul>
        </aside>
      </section>

      {featured.length > 0 && (
        <section className="container-page py-12">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="font-display text-3xl font-semibold tracking-tight">Featured projects</h2>
            <Link href="/projects/" className="text-sm text-accent">
              All projects
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <ProjectCard key={p.slug} p={p} />
            ))}
          </div>
        </section>
      )}

      <section className="container-page py-12">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-display text-3xl font-semibold tracking-tight">Skills</h2>
          <Link href="/skills/" className="text-sm text-accent">
            See all
          </Link>
        </div>
        <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
          {skillGroups.slice(0, 4).map((g) => (
            <div key={g.title} className="border-t border-line pt-4">
              <dt className="font-medium">{g.title}</dt>
              <dd className="mt-1 text-sm text-muted">{g.items.join(', ')}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
