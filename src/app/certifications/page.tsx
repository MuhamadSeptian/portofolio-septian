import type { Metadata } from 'next';
import PageHeading from '@/components/PageHeading';
import { certifications } from '@/data/certifications';
import { profile } from '@/data/profile';
import { publicFileExists } from '@/lib/assets';
import T from "@/components/T";
import { t } from '@/lib/i18n';

export const metadata: Metadata = { title: 'Certifications & Education' };

export default function Credentials() {
  const ed = profile.education;
  return (
    <div className="container-page">
      <PageHeading title="Education & certifications" />

      <section className="mb-14">
        <h2 className="mb-4 font-display text-2xl font-semibold">Education</h2>
        <div className="max-w-2xl rounded-lg border border-line bg-card p-6">
          <p className="font-display text-xl font-semibold">{ed.degree}</p>
          <p className="mt-1 text-muted">{ed.university}</p>
          <p className="mt-4 text-sm">
            GPA <span className="font-mono">{ed.gpa}</span> / 4.00
          </p>
          <p className="mt-1 text-sm text-muted">{ed.period}</p>
          {ed.note && <p className="mt-3 text-sm">{ed.note}</p>}
        </div>
      </section>

      <section>
        <h2 className="mb-4 font-display text-2xl font-semibold">Certifications</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((c) => {
            // Gabungkan "image" dan "images", lalu buang file yang belum ada
            const files = [...(c.image ? [c.image] : []), ...(c.images ?? [])].filter(publicFileExists);
            return (
              <div key={c.name} className="overflow-hidden rounded-lg border border-line bg-card">
                {files.length > 0 && (
                  <div className={`grid border-b border-line ${files.length > 1 ? 'grid-cols-2 divide-x divide-line' : ''}`}>
                    {files.map((src, i) => (
                      <a key={src} href={src} target="_blank" rel="noopener noreferrer" aria-label={`Open ${c.name} certificate, image ${i + 1}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={src} alt={`${c.name} certificate, image ${i + 1}`} loading="lazy" className="h-full w-full object-cover" />
                      </a>
                    ))}
                  </div>
                )}
                <div className="p-6">
                  <p className="font-display text-xl font-semibold">{c.name}</p>
                  <p className="mt-1 text-muted">{c.issuer}</p>
                  {(c.issued || c.expires) && (
                    <p className="mt-3 text-sm text-muted">
                      {c.issued && <>Issued {c.issued}</>}
                      {c.issued && c.expires && ', '}
                      {c.expires && <>valid until {c.expires}</>}
                    </p>
                  )}
                  {c.description && (
                    <p className="mt-3 text-sm leading-relaxed">
                      <T text={c.description} />
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
