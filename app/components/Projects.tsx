import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="mt-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center">Projects</h2>

      {/* ⬇️ 모바일 1열을 명시하고, md 이상에서 2열 */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
        {projects.map((p, i) => (
          <ProjectCard key={`${p.id}-${i}`} p={p} />
        ))}
      </div>
    </section>
  );
}
