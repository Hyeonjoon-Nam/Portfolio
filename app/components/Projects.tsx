"use client";

import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  // Filter projects based on the 'featured' flag defined in Step 2
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-4 max-w-7xl mx-auto">
      
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: FEATURED PROJECTS (System Software / Optimization)
          Highlighting the Resume projects with a strong visual header.
      ───────────────────────────────────────────────────────────── */}
      <div className="mb-24">
        <div className="flex flex-col mb-10 pl-2 border-l-4 border-blue-500">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Featured Projects
          </h2>
          <p className="mt-2 text-lg text-gray-400 max-w-2xl">
            High-Performance Computing, Engine Optimization, and DevOps Infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {featuredProjects.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: OTHER WORKS (Game Logic / Archived)
          Secondary projects displayed in a slightly more compact grid.
      ───────────────────────────────────────────────────────────── */}
      {otherProjects.length > 0 && (
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-400 mb-8 pb-4 border-b border-zinc-800">
            Other Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((p) => (
              <ProjectCard key={p.id} p={p} />
            ))}
          </div>
        </div>
      )}

    </section>
  );
}