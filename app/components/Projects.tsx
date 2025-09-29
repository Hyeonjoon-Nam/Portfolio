import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="max-w-5xl mx-auto px-6 pb-16">
      <h2 className="text-2xl sm:text-3xl font-bold mb-5">Projects</h2>
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.id} p={p} />
        ))}
      </div>
    </section>
  );
}
