import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "suspense-defense",
    title: "Suspense Defense",
    tagline: "Tower-defense loop with exploration, pathfinding AI, night defense, and a boss fight.",
    description:
  "Roguelike tower-defense built on a custom C++ engine. Procedural maps + A* pathfinding with a night-defense loop and a boss fight.",
roles: [
  "Tech Lead (5-person team)",
  "C++ gameplay & tools",
  "Pathfinding (A*), enemy behaviors",
  "Mediator pattern to decouple systems"
],
challenges: [
  "Per-enemy A* blew up memory → designed a Singleton path cache shared by enemies; stabilized frame and lowered memory.",
  "Hardcoded map/enemy data → text parsing pipeline; cut iteration/debug time significantly."
],
    media: [{ type: "youtube", src: "_2lPt6jRqoE" }],
    images: [
      "/projects/suspense-defense/images/shot-1.webp",
      "/projects/suspense-defense/images/shot-2.webp",
      "/projects/suspense-defense/images/shot-3.webp",
    ],
    thumb: "/projects/suspense-defense/thumbs/thumb-1.webp",
    links: [
      { label: "GitHub", href: "https://github.com/Junhyeongkimm/Suspense_defense" },
      { label: "Trailer", href: "https://youtu.be/_2lPt6jRqoE" },
    ],
  },
  {
    id: "tcas",
    title: "The Children Are Sleeping",
    tagline: "Team project focusing on gameplay systems and optimization.",
    description:
  "UE5 team project focused on gameplay systems and performance. Built dynamic patrol AI and addressed lighting bottlenecks to improve frame stability.",
roles: [
  "Unreal Engine 5 gameplay",
  "AI patrol with randomized points",
  "Profiling & lighting optimization",
],
challenges: [
  "Predictable patrol routes → randomized patrol points; increased unpredictability and realism.",
  "Lighting spikes from heavy scenes → profiling-driven tweaks; noticeably smoother frame pacing."
],

    media: [{ type: "youtube", src: "C3MexPR3Eyc" }],
    images: [
      "/projects/tcas/images/shot-1.webp",
      "/projects/tcas/images/shot-2.webp",
      "/projects/tcas/images/shot-3.webp",
    ],
    thumb: "/projects/tcas/thumbs/thumb-1.webp",
  },
  {
    id: "they-are",
    title: "They Are",
    tagline: "Custom engine gameplay with ImGui tools.",
    description:
  "Custom-engine gameplay showcase with ImGui debugging tools and a stable gameplay loop.",
roles: [
  "C++ gameplay",
  "ImGui-based editor & debug UIs",
  "Loop stability and instrumentation",
],
challenges: [
  "Limited observability → in-engine ImGui tools (stats/inspectors) to accelerate iteration.",
  "Inconsistent loop → timing/step fixes and guard rails; reduced hitches."
],

    media: [{ type: "video", src: "/projects/they-are/videos/clip-8s.mp4" }],
    images: [
      "/projects/they-are/images/shot-1.webp",
      "/projects/they-are/images/shot-2.webp",
      "/projects/they-are/images/shot-3.webp",
    ],
    thumb: "/projects/they-are/thumbs/thumb-1.webp",
  },
  {
    id: "bastion",
    title: "Bastion",
    tagline: "Tower-defense student project (showcase build).",
    description:
  "Student tower-defense showcase. Short clip + screenshots highlighting data flow and gameplay.",
roles: [
  "C++ gameplay",
  "Pathfinding & enemy control",
  "Team lead & task breakdown",
],
challenges: [
  "Scattered map/enemy data → structured data layout for faster authoring.",
  "Manual testing → lightweight checks and repeatable repro steps.",
],

    media: [{ type: "video", src: "/projects/bastion/videos/clip-8s.mp4" }],
    images: [
      "/projects/bastion/images/shot-1.webp",
      "/projects/bastion/images/shot-2.webp",
      "/projects/bastion/images/shot-3.webp",
    ],
    thumb: "/projects/bastion/thumbs/thumb-1.webp",
  },
];
