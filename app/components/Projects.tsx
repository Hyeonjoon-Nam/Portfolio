import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="mt-16">
      {/* 섹션 타이틀 */}
      <h2 className="text-2xl md:text-3xl font-bold text-center">Projects</h2>
      {/* 필요하면 한 줄 설명도: <p className="mt-2 text-center text-zinc-400">Selected works</p> */}

      {/* 카드 그리드 */}
      <div className="mt-8 grid md:grid-cols-2 gap-8 justify-center">
        {projects.map((p, i) => (
          <ProjectCard key={`${p.id}-${i}`} p={p} />
        ))}
      </div>
    </section>
  );
}
