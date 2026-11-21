import { t } from '@/lib/i18n';
import { imgSrc } from '@/lib/project-assets';
import T from "./T";
import type { L, Project } from '@/lib/types';

// Setiap bagian hanya tampil jika datanya diisi di file JSON proyek.
function Block({ title, children }: { title: L; children: React.ReactNode }) {
  return (
    <section className="border-t border-line py-8 sm:grid sm:grid-cols-[200px_1fr] sm:gap-8">
      <h2 className="mb-3 font-display text-lg font-semibold sm:mb-0">
        <T text={title} />
      </h2>
      <div className="max-w-2xl leading-relaxed text-fg/90">{children}</div>
    </section>
  );
}
const List = ({ items }: { items: L[] }) => (
  <ul className="list-disc space-y-2 pl-5 marker:text-accent">
    {items.map((x, i) => (
      <li key={i}>
        <T text={x} />
      </li>
    ))}
  </ul>
);

export default function ProjectDetail({ p }: { p: Project }) {
  const arch = imgSrc(p.slug, p.architectureImage);
  return (
    <div>
      {p.overview && (
        <Block title="Overview">
          <p>
            <T text={p.overview} />
          </p>
        </Block>
      )}
      {p.background && (
        <Block title="Background & problem">
          <p>
            <T text={p.background} />
          </p>
        </Block>
      )}
      {p.objectives?.length ? (
        <Block title="Objectives">
          <List items={p.objectives} />
        </Block>
      ) : null}
      {p.features?.length ? (
        <Block title="Features">
          <List items={p.features} />
        </Block>
      ) : null}
      {(p.architecture || arch) && (
        <Block title="Architecture">
          {p.architecture && (
            <p>
              <T text={p.architecture} />
            </p>
          )}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {arch && <img src={arch} alt="System architecture" className="mt-4 w-full rounded-lg border border-line" />}
        </Block>
      )}
      {p.endpoints?.length ? (
        <Block title="API endpoints">
          <div className="overflow-x-auto rounded-lg border border-line">
            <table className="w-full text-left text-sm">
              <tbody>
                {p.endpoints.map((e, i) => (
                  <tr key={i} className="border-b border-line last:border-0">
                    <td className="px-3 py-2 font-mono text-accent">{e.method}</td>
                    <td className="px-3 py-2 font-mono">{e.path}</td>
                    <td className="px-3 py-2 text-muted">
                      <T text={e.description} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Block>
      ) : null}
      {p.role && (
        <Block title="My role">
          <p>
            <T text={p.role} />
          </p>
        </Block>
      )}
      {p.process?.length ? (
        <Block title="Process">
          <ol className="list-decimal space-y-2 pl-5 marker:text-accent">
            {p.process.map((x, i) => (
              <li key={i}>
                <T text={x} />
              </li>
            ))}
          </ol>
        </Block>
      ) : null}
      {p.extra?.map((x, i) => (
        <Block key={i} title={x.title}>
          <p>
            <T text={x.content} />
          </p>
          {x.code && <pre className="mt-4 overflow-x-auto rounded-lg border border-line bg-card p-4 font-mono text-xs leading-relaxed">{x.code}</pre>}
        </Block>
      ))}
      {p.gallery?.length ? (
        <section className="border-t border-line py-8">
          <h2 className="mb-5 font-display text-lg font-semibold">Screenshots & documentation</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {p.gallery.map((g, i) => (
              <figure key={i}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={imgSrc(p.slug, g.src)} alt={g.caption ? t(g.caption) : `${p.title} screenshot ${i + 1}`} loading="lazy" className="w-full rounded-lg border border-line" />
                {g.caption && (
                  <figcaption className="mt-2 text-sm text-muted">
                    <T text={g.caption} />
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </section>
      ) : null}
      {p.challenges?.length ? (
        <Block title="Challenges & solutions">
          <div className="space-y-5">
            {p.challenges.map((c, i) => (
              <div key={i}>
                <p className="font-medium">
                  <T text={c.challenge} />
                </p>
                <p className="mt-1 text-muted">
                  <T text={c.solution} />
                </p>
              </div>
            ))}
          </div>
        </Block>
      ) : null}
      {p.results && (
        <Block title="Results">
          <p>
            <T text={p.results} />
          </p>
        </Block>
      )}
      {p.learnings?.length ? (
        <Block title="What I learned">
          <List items={p.learnings} />
        </Block>
      ) : null}
    </div>
  );
}
