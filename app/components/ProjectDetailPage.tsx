"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Project } from "../data/types";
import YouTubeLite from "./YouTubeLite";

export default function ProjectDetailPage({ project }: { project: Project }) {
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link href="/#projects" className="text-blue-400 hover:underline">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-blue-500/30">
      
      {/* ─────────────────────────────────────────────────────────────
          HEADER SECTION
      ───────────────────────────────────────────────────────────── */}
      <div className="relative pt-32 pb-20 px-6 border-b border-zinc-800 bg-zinc-900/20">
        <div className="max-w-5xl mx-auto text-center">
          <Link 
            href="/#projects" 
            className="inline-flex items-center text-sm text-zinc-500 hover:text-blue-400 mb-8 transition-colors"
          >
            ← Back to Projects
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
            {project.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-3xl mx-auto">
            {project.tagline}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        {/* ─────────────────────────────────────────────────────────────
            LEFT COLUMN: Main Content
        ───────────────────────────────────────────────────────────── */}
        <div className="lg:col-span-2 space-y-16">
          
          {/* 1. MEDIA (YouTube or Main Image) */}
          <div className="rounded-2xl overflow-hidden border border-zinc-800 bg-black shadow-2xl">
             {project.media?.some(m => m.type === 'youtube') ? (
                <YouTubeLite id={project.media.find(m => m.type === 'youtube')!.src} title={project.title} />
             ) : (
                <div className="relative aspect-video">
                  <Image 
                    src={project.thumb || "/projects/_common/placeholder-16x9.webp"} 
                    alt={project.title} 
                    fill 
                    className="object-cover" 
                  />
                </div>
             )}
          </div>

          {/* 2. OVERVIEW */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-4">
              Overview
            </h2>
            <p className="text-lg text-zinc-300 leading-relaxed whitespace-pre-line">
              {project.description}
            </p>
          </section>

          {/* 3. KEY CONTRIBUTIONS */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-purple-500 pl-4">
              Key Engineering Contributions
            </h2>
            <ul className="space-y-4">
              {project.roles.map((role, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-zinc-900/50 p-4 rounded-xl border border-zinc-800/50 hover:border-zinc-700 transition-colors">
                  <span className="text-blue-400 mt-1 flex-shrink-0">▹</span>
                  <span className="text-zinc-300 leading-relaxed">{role}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 4. TECHNICAL CHALLENGES */}
          {project.challenges && project.challenges.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-red-500 pl-4">
                Technical Challenges
              </h2>
              <div className="space-y-6">
                {project.challenges.map((challenge, idx) => (
                  <div key={idx} className="bg-zinc-900/30 p-6 rounded-2xl border border-zinc-800">
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {challenge}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 5. IMAGE GALLERY */}
          {project.images && project.images.length > 0 && (
             <section>
               <h2 className="text-2xl font-bold text-white mb-6">Gallery</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {project.images.map((img, idx) => (
                   <div key={idx} className="relative aspect-video rounded-lg overflow-hidden border border-zinc-800 group">
                      <Image 
                        src={img} 
                        alt={`Screenshot ${idx + 1}`} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                   </div>
                 ))}
               </div>
             </section>
          )}

        </div>

        {/* ─────────────────────────────────────────────────────────────
            RIGHT COLUMN: Meta Info (Sticky Sidebar)
        ───────────────────────────────────────────────────────────── */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-8 p-6 bg-zinc-900/40 rounded-2xl border border-zinc-800 backdrop-blur-sm">
            
            <div>
              <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-2">Role</h3>
              <p className="text-white font-medium">{project.role}</p>
            </div>

            <div>
              <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-2">Team Size</h3>
              <p className="text-white font-medium">{project.team}</p>
            </div>

            <div>
              <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-2">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.split(',').map((tool) => (
                  <span 
                    key={tool} 
                    className="px-3 py-1 bg-blue-500/10 text-blue-300 text-xs font-semibold rounded-full border border-blue-500/20"
                  >
                    {tool.trim()}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}