import type { Metadata } from 'next';
import PageHeading from '@/components/PageHeading';
import { experience } from '@/data/experience';
import T from "@/components/T";
import { t } from '@/lib/i18n';

export const metadata: Metadata = { title: 'Experience' };

export default function Experience() {
  return (
    <div className="container-page">
      <PageHeading title="Experience & activities" />
      {experience.length === 0 ? (
        <div className="max-w-xl rounded-lg border border-dashed border-line p-8 text-muted">
          Nothing here yet. Add internships, organizations, and academic activities in <code className="font-mono text-sm">src/data/experience.ts</code>.
        </div>
      ) : (
        <ol className="max-w-3xl space-y-8 border-l border-line pl-6">
          {experience.map((e, i) => (
            <li key={i} className="relative">
              <span className="absolute -left-[29px] top-2 h-2 w-2 rounded-full bg-accent" />
              <p className="font-mono text-sm text-muted">{e.period}</p>
              <h2 className="mt-1 font-display text-xl font-semibold">
                <T text={e.title} />
              </h2>
              <p className="text-muted">
                <T text={e.organization} />
              </p>
              {e.description && (
                <p className="mt-3 leading-relaxed">
                  <T text={e.description} />
                </p>
              )}
              {e.points && (
                <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-accent">
                  {e.points.map((x, j) => (
                    <li key={j}>
                      <T text={x} />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
