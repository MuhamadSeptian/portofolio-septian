import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-page py-32">
      <h1 className="font-display text-4xl font-semibold">Page not found</h1>
      <p className="mt-3 text-muted">The page you are looking for does not exist or has been moved.</p>
      <Link href="/projects/" className="btn mt-6">Browse projects</Link>
    </div>
  );
}
