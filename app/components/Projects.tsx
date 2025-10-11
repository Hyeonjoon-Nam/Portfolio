import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="mt-16">
      <div className="grid md:grid-cols-2 gap-8 justify-center">
        {projects.map((p, i) => (
          <ProjectCard key={`${p.id}-${i}`} p={p} />
        ))}
      </div>
    </section>
  );
}
