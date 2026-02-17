import React from "react";
import { projects } from "../data/projects";
import ProjectDetailPage from "../components/ProjectDetailPage";

const project = projects.find((p) => p.id === "bastion");

export default function Page() {
  if (!project) return <div>Project not found</div>;
  return <ProjectDetailPage project={project} />;
}