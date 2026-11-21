import { t } from '@/lib/i18n';
import type { L } from '@/lib/types';
import T from "./T";

export default function PageHeading({ title, intro }: { title: string; intro?: L }) {
  return (
    <div className="mb-10 max-w-2xl pt-14">
      <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
      {intro && (
        <p className="mt-4 text-lg leading-relaxed text-muted">
          <T text={intro} />
        </p>
      )}
    </div>
  );
}
