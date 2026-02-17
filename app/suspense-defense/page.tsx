import React from "react";
import { projects } from "../data/projects";
import ProjectDetailPage from "../components/ProjectDetailPage";

// id must match the one in projects.ts
const project = projects.find((p) => p.id === "suspense-defense");

export default function Page() {
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white">
        Project not found
      </div>
    );
  }

  return <ProjectDetailPage project={project} />;
}