// Nama file gambar di JSON otomatis diarahkan ke public/images/projects/<slug>/.
export function imgSrc(slug: string, file?: string): string | undefined {
  if (!file) return undefined;
  if (file.startsWith("/") || file.startsWith("http")) return file;
  return `/images/projects/${slug}/${file}`;
}
