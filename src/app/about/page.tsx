import type { Metadata } from 'next';
import Link from 'next/link';
import { Download, Mail } from 'lucide-react';
import PageHeading from '@/components/PageHeading';
import { SocialLinks } from '@/components/Footer';
import { profile } from '@/data/profile';
import { certifications } from '@/data/certifications';
import { publicFileExists } from '@/lib/assets';
import T from "@/components/T";
import { t } from '@/lib/i18n';

export const metadata: Metadata = { title: 'About' };

export default function About() {
  const ed = profile.education;
  const hasPhoto = publicFileExists(profile.photo);
  const facts = [
    { label: 'Education', value: ed.degree },
    { label: 'University', value: ed.university },
    { label: 'GPA', value: `${ed.gpa} / 4.00` },
    { label: 'Period', value: ed.period },
    { label: 'Location', value: profile.location },
    { label: 'Certifications', value: certifications.map((c) => `${c.issuer} ${c.name}`).join('; ') },
  ].filter((f) => f.value);

  return (
    <div className="container-page">
      <PageHeading title="About me" />
      <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
        <div className="max-w-2xl space-y-5 text-lg leading-relaxed">
          {profile.about.map((x, i) => (
            <p key={i}>
              <T text={x} />
            </p>
          ))}
          <div className="flex flex-wrap items-center gap-3 pt-4">
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
          </div>
        </div>

        <aside>
          {hasPhoto && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={profile.photo} alt={`Portrait of ${profile.name}`} className="mb-6 aspect-square w-full rounded-lg border border-line object-cover" />
          )}
          <dl className="divide-y divide-line border-y border-line text-sm">
            {facts.map((f) => (
              <div key={f.label} className="py-3">
                <dt className="text-muted">{f.label}</dt>
                <dd className="mt-0.5 font-medium">{f.value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-5">
            <SocialLinks />
          </div>
        </aside>
      </div>
    </div>
  );
}
