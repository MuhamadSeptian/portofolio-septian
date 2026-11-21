import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export function SocialLinks({ size = 18 }: { size?: number }) {
  const items = [
    { href: profile.github, label: "GitHub", icon: <Github size={size} /> },
    { href: profile.linkedin, label: "LinkedIn", icon: <Linkedin size={size} /> },
    { href: profile.email && `mailto:${profile.email}`, label: "Email", icon: <Mail size={size} /> },
  ].filter((i) => i.href);
  return (
    <div className="flex items-center gap-4">
      {items.map((i) => (
        <a key={i.label} href={i.href} target="_blank" rel="noopener noreferrer" aria-label={i.label}
          className="text-muted transition-colors hover:text-accent">{i.icon}</a>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="container-page flex flex-col items-start justify-between gap-4 py-8 text-sm text-muted sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <SocialLinks />
      </div>
    </footer>
  );
}
