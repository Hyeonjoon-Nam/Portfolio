"use client";

import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      {/* 중앙 정렬 타이틀 */}
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
        Projects
      </h2>

      {/* 카드 그리드: 가운데 정렬 */}
      <div className="grid md:grid-cols-2 gap-8 justify-center">
        {projects.map((p, i) => (
          <ProjectCard key={`${p.slug ?? "no-slug"}-${i}`} p={p} />
        ))}
      </div>
    </section>
  );
}
