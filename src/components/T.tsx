import type { L } from "@/lib/types";

export default function T({ text }: { text?: L }) {
  if (!text) return null;
  if (typeof text === "string") return <>{text}</>;
  if (!text.id || text.id === text.en) return <>{text.en}</>;
  return (
    <>
      <span className="l-en">{text.en}</span>
      <span className="l-id" lang="id">{text.id}</span>
    </>
  );
}