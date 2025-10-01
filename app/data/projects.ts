// app/data/projects.ts
import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "tcas",
    title: "The Children Are Sleeping",
    tagline: "UE5 horror puzzle with weighted patrol AI and performance tuning.",
    thumb: "/projects/tcas/thumbs/thumb-1.webp",
    description: `The Children Are Sleeping is a 3D horror puzzle game built in Unreal Engine 5.
The player explores, collects clues, solves puzzles, and escapes while avoiding a monster.`,
    roles: [
      "Tech Lead (Tech team of 4; total 13 incl. Art/Design)",
      "Built weighted patrol to stabilize encounter pacing",
      "Profiling with Unreal Insights to improve frame stability"
    ],
    challenges: [
      "Initial patrol AI randomness led to uneven encounters.",
      "Designed weighted random patrol deprioritizing visited nodes to ensure coverage.",
      "Frame pacing improvements informed by Insights profiling."
    ],
    media: [{ type: "youtube", src: "C3MexPR3Eyc" }],
    images: [
      "/projects/tcas/images/shot-1.webp",
      "/projects/tcas/images/shot-2.webp",
      "/projects/tcas/images/shot-3.webp"
    ],
    links: [
      { label: "Trailer (YouTube)", href: "https://youtu.be/C3MexPR3Eyc" }
    ],
  },

  {
    id: "bastion",
    title: "Bastion",
    tagline: "Loop-route defense with summon & merge units, plus meta progression.",
    thumb: "/projects/bastion/thumbs/thumb-1.webp",
    description: `Bastion was built after They Are, pivoting to a new concept while retaining tower-defense DNA.
Enemies patrol a fixed loop; the player summons and merges units.
Stats and waves were externalized for fast iteration.`,
    roles: [
      "Tech Lead (5-person team) — core mechanics & merge system",
      "Bug fixing and integration"
    ],
    challenges: [
      "Conditional-heavy merge logic created frequent bugs.",
      "Introduced data-driven recipe mappings + state-based transitions.",
      "Externalized wave/enemy/unit stats via text-file parsing → faster balancing."
    ],
    media: [{ type: "video", src: "/projects/bastion/videos/clip-8s.mp4" }],
    images: [
      "/projects/bastion/images/shot-1.webp",
      "/projects/bastion/images/shot-2.webp",
      "/projects/bastion/images/shot-3.webp"
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Hyeonjoon-Nam/GAM250-Bastion" }
    ],
  },

  {
    id: "they-are",
    title: "They Are",
    tagline: "Top-down defense with massively optimized A* pathfinding.",
    thumb: "/projects/they-are/thumbs/thumb-1.webp",
    description: `They Are is a 2D top-down defense game with towers, obstacles, and preset waves.
A singleton path manager shared cached paths among enemies to slash CPU cost.`,
    roles: [
      "Tech Lead (5-person team) — core gameplay & systems",
      "Wave/Map systems, enemy patterns, text-file parsing"
    ],
    challenges: [
      "Per-frame, per-agent A* caused huge CPU/memory overhead.",
      "Singleton path manager recalculates only on map changes; enemies reference shared paths.",
      "99.9%+ reduction across scenarios; up to tens of thousands × faster in stress tests."
    ],
    media: [{ type: "video", src: "/projects/they-are/videos/clip-8s.mp4" }],
    images: [
      "/projects/they-are/images/shot-1.webp",
      "/projects/they-are/images/shot-2.webp",
      "/projects/they-are/images/shot-3.webp"
    ],
    links: [
      { label: "GitHub (tag: they-are-1.0)", href: "https://github.com/Hyeonjoon-Nam/GAM250-Bastion/tree/they-are-1.0" },
      { label: "Benchmarks", href: "https://github.com/Hyeonjoon-Nam/GAM250-Bastion/blob/main/bench_results.txt" }
    ],
  },

  {
    id: "suspense-defense",
    title: "Suspense Defense",
    tagline: "Roguelike defense with day/night cycles, procedural maps, and evolving colonies.",
    thumb: "/projects/suspense-defense/thumbs/thumb-1.webp",
    description: `Suspense Defense is a 2D roguelike defense with procedural maps and A* pursuit.
A Mediator class centralized interactions for maintainability.`,
    roles: [
      "Tech Lead (4-person team) — gameplay and systems",
      "Procedural map generation (cellular automata)",
      "A* enemy pursuit; Mediator for clean interactions"
    ],
    challenges: [
      "Engine module incompleteness made interactions brittle.",
      "Introduced a Mediator class to centralize communication and reduce duplication.",
      "Integrated A* without frame instability."
    ],
    media: [{ type: "youtube", src: "_2lPt6jRqoE" }],
    images: [
      "/projects/suspense-defense/images/shot-1.webp",
      "/projects/suspense-defense/images/shot-2.webp",
      "/projects/suspense-defense/images/shot-3.webp"
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Junhyeongkimm/Suspense_defense" },
      { label: "Demo Video", href: "https://youtu.be/_2lPt6jRqoE" }
    ],
  }
];
