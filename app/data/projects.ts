// app/data/projects.ts
import type { Project } from "./types";

export const projects: Project[] = [
{
    id: "ToV",                       // <- /ToV 라우트와 일치 (지금 구조 유지)
    title: "Triad of Valor",
    thumb: undefined,                // no thumbnail yet; card will show a neutral block
    images: [],                      // empty until we have assets
    media: [],                       // (youtube/video) later
    tagline: "UE5 co-op action (server-authoritative)",
    description:
      "Co-op action prototype under a server-authoritative model; I led QA automation and core combat/AI stabilization.",
    role: "QA Lead",
    team: "6-person team",
    tools:
      "C++, Unreal Engine 5, Perforce (Helix Core), Client-Server/RPC, Behavior Trees, AI Perception, Discord Webhooks",
    roles: [
      "Implemented server-authoritative combat with AnimNotify-timed hit checks for deterministic results.",
      "Set up a Perforce→Discord QA pipeline with scheduled commit detection and CI-style notifications.",
      "Designed a user-mapped checkout monitor that posts opened-file reports to Discord, avoiding conflicts and tracking progress.",
      "Unified player/enemy targeting via Perception + proximity services for smooth state transitions.",
      "Validated multiplayer combat flow in PIE and dedicated-server tests.",
    ],
    challenges: [
      "Ensured deterministic hit resolution under replication/latency.",
      "Improved team visibility to reduce asset conflicts and speed up reviews.",
    ],
    links: [
      // Optional: replace or remove later
      { label: "LinkedIn Project", href: "https://www.linkedin.com/in/hyeonjoon-nam/" },
    ],
  },
  // ───────────────────────────────────────────
  // TCAS — The Children Are Sleeping
  // ───────────────────────────────────────────
  {
    id: "tcas",
    title: "The Children Are Sleeping",
    tagline: "UE5 first-person horror puzzle with weighted patrol AI.",
    thumb: "/projects/tcas/thumbs/thumb-1.webp",
    description:
      "A first-person horror puzzle game built with Unreal Engine 5. As Tech Lead, I designed and implemented the AI behavior system, integrated interaction/persistence across systems, stabilized performance, and coordinated task priorities and cross-department collaboration.",
    roles: [
      "AI Behavior System — four-phase monster AI (Patrol → Chase → Prediction → Capture) using Behavior Trees; Prediction continues pursuit after vision loss via last-known direction.",
      "Weighted Patrol System — replaced random patrols with weighted loop transitions for fairness and route consistency; supports multiple loops (A/B/…) meeting at shared nodes O.",
      "Interaction/Persistence Integration — applied persistent state to doors, puzzles, and interactables so states carry across level reloads.",
      "Blueprint Refactor — consolidated redundant events/functions into reusable utility blueprints; cleaned event flow.",
      "Cross-Team Collaboration — tuned behavior parameters with design; validated AI/FX timing with art; kept specs in sync.",
    ],
    challenges: [
      "Unpredictable encounters from random patrols → weighted transitions at shared nodes to stabilize encounter frequency.",
      "Abrupt chase drop after vision loss → added a Prediction phase for natural recovery to pursuit.",
      "Object states resetting on level reload → integrated persistence data to restore interaction states consistently.",
      "Gaps between design intent and AI movement → exposed BT parameters (FOV, wait time, loop weights) for designer-level tuning.",
    ],
    // YouTube: 전체 URL로 넣어도 동작 (컴포넌트에서 ID 추출)
    media: [{ type: "youtube", src: "https://youtu.be/C3MexPR3Eyc" }],
    images: [
      "/projects/tcas/images/shot-1.webp",
      "/projects/tcas/images/shot-2.webp",
      "/projects/tcas/images/shot-3.webp",
    ],
    links: [],
    role: "Tech Lead",
    team: "Tech 4 / Art 5 / Design 4 — 13 total",
    tools: "Unreal Engine 5, Behavior Tree, Perforce",
  },

  // ───────────────────────────────────────────
  // Bastion
  // ───────────────────────────────────────────
  {
    id: "bastion",
    title: "Bastion",
    tagline: "Custom C++ top-down defense with data-driven merge and boss states.",
    thumb: "/projects/bastion/thumbs/thumb-1.webp",
    description:
      "A top-down defense game on a custom C++ engine. As Tech Lead, I rebuilt the architecture mid-project, implemented monster/boss state machines, a unit merge system, and enabled data-driven iteration via a file parsing pipeline and in-engine tools.",
    roles: [
      "State Machines — monster & boss states (Idle, Walk, Attack, Hit, Death; boss-specific Summon/Stun) with clear feedback via floating damage-text effects.",
      "Unit & Merge System — defined melee/ranged/area/buff units as data; formalized merge rules, costs, and probabilities; live-tested with ImGui tools.",
      "File Parsing Pipeline — external text-file parsing with validation to accelerate iteration and runtime parameter changes.",
      "Refactor & Reboot — reorganized the codebase into modular, layer-based architecture; preserved stable core logic for safe reuse.",
    ],
    challenges: [
      "Unstable or unclear transitions → explicit triggers/cooldowns and modular state logic.",
      "Hard-coded balancing → moved tunables into files; iteration by editing tables instead of code.",
      "Slow parameter testing → ImGui-based live tuning for immediate in-game feedback.",
    ],
    // 로컬 mp4
    media: [{ type: "video", src: "/projects/bastion/videos/clip-8s.mp4" }],
    images: [
      "/projects/bastion/images/shot-1.webp",
      "/projects/bastion/images/shot-2.webp",
      "/projects/bastion/images/shot-3.webp",
    ],
    links: [],
    role: "Tech Lead",
    team: "5 members",
    tools: "C++17, OpenGL, ImGui, CMake",
  },

  // ───────────────────────────────────────────
  // They Are
  // ───────────────────────────────────────────
  {
    id: "they-are",
    title: "They Are",
    tagline: "2D strategic tower defense with dynamic A* and 99%+ singleton optimization.",
    thumb: "/projects/they-are/thumbs/thumb-1.webp",
    description:
      "A 2D strategic tower defense where players control routes with obstacles and towers. As Tech Lead, I implemented A* pathfinding, optimized it by sharing computations through a singleton, and built the core tower, monster, and wave systems.",
    roles: [
      "Pathfinding (A*) — real-time dynamic path updates that react to obstacle placement.",
      "Singleton Optimization — shared the A* graph/cache via a singleton, removing redundant work and achieving over 99% performance improvement.",
      "Core Systems — tower placement/removal/upgrade, wave scheduling, monster spawning/behavior.",
      "File Parsing & Debug — text-file parsing for fast iteration and a visual path debugger for testing.",
    ],
    challenges: [
      "Heavy per-frame recalculation → unified path data in a shared singleton/cache to eliminate duplicates and cut cost.",
      "Path blockage from obstacle placement → pre-placement validation to reject impossible or unfair placements.",
    ],
    // 로컬 mp4
    media: [{ type: "video", src: "/projects/they-are/videos/clip-8s.mp4" }],
    images: [
      "/projects/they-are/images/shot-1.webp",
      "/projects/they-are/images/shot-2.webp",
      "/projects/they-are/images/shot-3.webp",
    ],
    links: [],
    role: "Tech Lead",
    team: "5 members",
    tools: "C++, OpenGL, STL",
  },

  // ───────────────────────────────────────────
  // Suspense Defense
  // ───────────────────────────────────────────
  {
    id: "suspense-defense",
    title: "Suspense Defense",
    tagline: "Custom C++ wave-based defense with procedural maps and a Mediator messaging hub.",
    thumb: "/projects/suspense-defense/thumbs/thumb-1.webp",
    description:
      "A wave-based action defense built on a custom C++ engine. As Tech Lead, I designed procedural map generation, A*-based movement, monster/wave systems, and a Mediator-pattern messaging hub to decouple subsystems under engine constraints.",
    roles: [
      "Procedural Map Generation — seeded random maps with guaranteed start–end connectivity and difficulty-curve alignment.",
      "Pathfinding & Waves — A*-based routing and wave timing to control difficulty.",
      "Mediator Architecture — lightweight event hub that reduces coupling and centralizes communication.",
      "Tile-Based Physics — wall collision and projectile reflection with minimal overhead.",
      "Debug & Replay — seed/wave reproducibility and a simple replay path for quick scenario verification.",
    ],
    challenges: [
      "Tight subsystem coupling → applied Mediator pattern to isolate communication and unify routing.",
      "Randomness causing unstable difficulty → constrained generation with seed and curve parameters.",
      "Occasional blocked routes → regeneration/reroute rules to ensure valid paths.",
    ],
    media: [{ type: "youtube", src: "_2lPt6jRqoE" }],
    images: [
      "/projects/suspense-defense/images/shot-1.webp",
      "/projects/suspense-defense/images/shot-2.webp",
      "/projects/suspense-defense/images/shot-3.webp",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Junhyeongkimm/Suspense_defense" },
      { label: "Demo Video", href: "https://youtu.be/_2lPt6jRqoE" },
    ],
    role: "Tech Lead",
    team: "4 members",
    tools: "C++, Custom Engine, CMake",
  },
];
