import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import ProjectGallery from "@/components/ProjectGallery";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <div className="container-page">
      <PageHeading title="Projects" intro="Projects built during my Informatics Engineering studies, across web, data, machine learning, games, and networks." />
      <ProjectGallery projects={getAllProjects()} />
    </div>
  );
}
