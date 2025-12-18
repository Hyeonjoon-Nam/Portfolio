// app/data/projects.ts
import type { Project } from "./types";

export const projects: Project[] = [
  // ───────────────────────────────────────────
  // Triad of Valor
  // ───────────────────────────────────────────
  {
    id: "ToV",
    title: "Triad of Valor",
    thumb: "/projects/ToV/thumbs/thumb-1.webp",
    images: [
      "/projects/ToV/images/shot-1.webp",
      "/projects/ToV/images/shot-2.webp",
      "/projects/ToV/images/shot-3.webp",
    ],
    media: [{ type: "youtube", src: "https://youtu.be/o7JMrh1nwco" }],
    tagline: "UE5 co-op MORPG with server-authoritative combat and QA automation.",
    description:
      "A 3D co-op MORPG prototype in Unreal Engine 5. As QA Lead and gameplay programmer, I built server-authoritative melee combat and integrated Perforce→Discord automation to keep the team in sync and reduce content conflicts.",
    role: "QA Lead & Gameplay Programmer",
    team: "6-person team",
    tools:
      "C++, Unreal Engine 5, Perforce (Helix Core), Client-Server/RPC, Behavior Trees, AI Perception, Discord Webhooks",
    roles: [
      "QA lead and gameplay programmer on a 6-person Unreal Engine 5 MORPG project.",
      "Implemented a server-authoritative melee combat system with AnimNotify-driven hit checks, performing overlap checks only on the server and multicasting results to clients.",
      "Integrated Perforce→Discord automation to surface changelists and checkouts in Discord, reducing content conflicts in an exclusive-lock workflow.",
      "Coordinated QA scenarios and regression passes around combat, lock-on, and AI behavior in both single-player and multiplayer test sessions.",
    ],
    challenges: [
      "Needed deterministic hit resolution under network latency while keeping melee combat responsive and readable.",
      "In an exclusive-lock Perforce setup, the team often stepped on each other’s work before we had better visibility into file activity.",
    ],
    links: [
      {
        label: "YouTube Demo",
        href: "https://youtu.be/o7JMrh1nwco",
      },
    ],
  },

  // ───────────────────────────────────────────
  // p4bot — Perforce→Discord Automation Toolkit
  // ───────────────────────────────────────────
  {
    id: "p4bot",
    title: "p4bot — Perforce→Discord Automation Toolkit",
    thumb: "/projects/p4bot/thumbs/thumb-1.webp",
    images: [
      "/projects/p4bot/images/shot-1.webp",
      "/projects/p4bot/images/shot-2.webp",
      "/projects/p4bot/images/shot-3.webp",
    ],
    media: [{ type: "youtube", src: "https://youtu.be/kMe77iYMMTM" }],
    tagline: "Self-hosted Perforce → Discord automation for lock checks and team awareness.",
    description:
      "A self-hosted automation toolkit that connects Perforce with Discord using the Perforce CLI, Python, PowerShell, and Windows Task Scheduler. It was built to reduce manual “who has this file?” overhead and make exclusive-lock workflows less painful for our Unreal Engine project.",
    role: "Solo Developer",
    team: "Used by a 6-person Triad of Valor team",
    tools: "Python, PowerShell, Perforce CLI, Windows Task Scheduler, Discord Bot API",
    roles: [
      "Built a Perforce→Discord automation toolkit composed of a submit poller, an opened-file watcher, and a /canwork slash command so teammates can see recent changelists and who has which files checked out without leaving Discord.",
      "Integrated with the Perforce CLI, Python, PowerShell, and Windows Task Scheduler so the toolkit can run unattended in the background on a self-hosted Windows machine.",
      "Cut manual lock-check and “who has this file?” overhead from roughly 70–90 seconds (and sometimes several minutes) to a 1–3 second Discord glance, saving our 6-person team about 10–20 minutes per day over the term.",
      "Designed a centralized JSON config so other teams can reuse or adapt the toolkit without hard-coded paths or secrets.",
    ],
    challenges: [
      "In an exclusive-lock Perforce setup, artists and designers frequently blocked each other because file activity was invisible until someone manually checked the Perforce client.",
      "Needed an automation solution that was reliable but simple enough to host on a student Windows machine without admin access or external services.",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Hyeonjoon-Nam/p4bot",
      },
      {
        label: "YouTube Demo",
        href: "https://youtu.be/kMe77iYMMTM",
      },
    ],
  },

  // ───────────────────────────────────────────
  // Spell It Out
  // ───────────────────────────────────────────
  {
    id: "spell-it-out",
    title: "Spell It Out",
    tagline: "Unity gesture-based spell casting prototype, deployed to WebGL on itch.io.",
    thumb: "/projects/spell-it-out/thumbs/thumb-1.webp",
    description:
      "Gesture-based spell casting prototype built in Unity. Originally developed for Nintendo Switch (Dev Kit) as a CS388 final project, then rebuilt as a public PC/Web version for touch & mouse-based gesture recognition and deployed to itch.io.",
    role: "Gameplay Programmer (Gesture Recognition & Deployment)",
    team: "CS388 Final Project",
    tools: "Unity, C#, Gesture Recognition, WebGL, GitHub Actions (GameCI), butler, itch.io",
    roles: [
      "Built a stroke capture pipeline (touch/mouse) and a recognition layer that normalizes and resamples strokes for stable matching.",
      "Implemented direction encoding + template matching so new spells can be added by updating templates instead of modifying C# logic.",
      "Set up CI/CD: GitHub Actions builds WebGL (GameCI unity-builder) and publishes to itch.io via butler on pushes to main.",
    ],
    challenges: [
      "Reduced noisy and inconsistent stroke input by normalizing and resampling to a stable representation before matching.",
      "Improved tuning speed with on-screen debug visualization (stroke rendering and match scores) to see why gestures failed.",
      "Shipped a public version without Nintendo Switch SDK dependencies while preserving the core gesture and gameplay loop.",
    ],
    media: [{ type: "youtube", src: "https://youtu.be/9m7i7XsUOeg" }],
    images: [
      "/projects/spell-it-out/images/shot-1.webp",
      "/projects/spell-it-out/images/shot-2.webp",
      "/projects/spell-it-out/images/shot-3.webp",
    ],
    links: [
      {
        label: "Play (itch.io)",
        href: "https://hyeonjoon-nam.itch.io/spell-it-out",
      },
      {
        label: "GitHub",
        href: "https://github.com/Hyeonjoon-Nam/SpellItOut",
      },
      {
        label: "YouTube Demo (YouTube)",
        href: "https://youtu.be/9m7i7XsUOeg",
      },
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
      "A first-person horror puzzle game built with Unreal Engine 5. As tech lead and AI/gameplay programmer, I designed the monster behavior system, replaced random patrols with weighted loops to stabilize encounters, and coordinated a 4-person engineering team in a 13-person production.",
    role: "Tech Lead & AI/Gameplay Programmer",
    team: "Tech 4 / Art 5 / Design 4 — 13 total",
    tools: "Unreal Engine 5, Behavior Trees, Perforce",
    roles: [
      "Tech lead and AI/gameplay programmer on a 13-person Unreal Engine 5 horror puzzle project.",
      "Designed a four-phase monster AI (Patrol → Chase → Prediction → Capture) in Behavior Trees; the Prediction phase continues pursuit along last-known direction after line-of-sight is broken.",
      "Replaced naive random navmesh patrols with a weighted patrol system; on one of our main levels this brought first-encounter timing into a 12–48 second window (previously 30–100 seconds+) and stabilized encounters at around 2 per 3–5 minute run.",
      "Exposed Behavior Tree parameters (FOV, wait times, loop weights) so designers could tune pacing directly without code changes.",
    ],
    challenges: [
      "Random patrols produced unfairly long droughts or back-to-back encounters; the weighted loop system redistributed probability at shared nodes to get more predictable encounter pacing.",
      "Early prototypes dropped chase immediately when vision broke; the Prediction phase preserves tension by continuing pursuit along the last known direction for a short window.",
      "Designers needed to own pacing and tension without relying on programmers, so we surfaced key knobs directly in Behavior Tree services and blackboard values.",
    ],
    media: [{ type: "youtube", src: "https://youtu.be/C3MexPR3Eyc" }],
    images: [
      "/projects/tcas/images/shot-1.webp",
      "/projects/tcas/images/shot-2.webp",
      "/projects/tcas/images/shot-3.webp",
    ],
    links: [
      {
        label: "Trailer (YouTube)",
        href: "https://youtu.be/C3MexPR3Eyc",
      },
    ],
  },

  // ───────────────────────────────────────────
  // Bastion
  // ───────────────────────────────────────────
  {
    id: "bastion",
    title: "Bastion",
    tagline: "Custom C++ tower defense with data-driven waves and merge states.",
    thumb: "/projects/bastion/thumbs/thumb-1.webp",
    description:
      "A top-down defense game on a custom C++/OpenGL engine. As tech lead, I rebooted the architecture mid-project, implemented monster and boss state machines plus a data-driven merge system, and built a file-parsing pipeline that made wave balancing roughly 4× faster.",
    role: "Tech Lead",
    team: "5 members",
    tools: "C++17, OpenGL, ImGui, CMake",
    roles: [
      "Implemented monster and boss state machines (Idle, Walk, Attack, Hit, Death; boss-only Summon/Stun) with clear feedback via floating damage-text effects.",
      "Built a unit and merge system defining melee, ranged, area, and buff units as data, formalizing merge rules, costs, and probabilities and live-testing them with ImGui tools.",
      "Moved wave configuration into external text files parsed at load, cutting the “save, build, and reload the level” loop from 62 seconds to 15–17 seconds (~4× faster) and making it much easier to retune wave timing and composition without touching C++ code.",
      "Rebooted the project’s architecture into a more modular, layer-based layout, preserving stable core logic while cleaning up dependencies so new features were safer to add.",
    ],
    challenges: [
      "Unstable or unclear state transitions made combat feel random; explicit triggers, cooldowns, and modular state logic made behavior understandable and debuggable.",
      "Hard-coded balance values made tuning slow and error-prone; moving tunables into external files let us iterate by editing tables instead of rebuilding code.",
      "Parameter testing was slow without tooling; ImGui-based live tuning provided immediate in-game feedback for designers and programmers.",
    ],
    media: [{ type: "video", src: "/projects/bastion/videos/clip-8s.mp4" }],
    images: [
      "/projects/bastion/images/shot-1.webp",
      "/projects/bastion/images/shot-2.webp",
      "/projects/bastion/images/shot-3.webp",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Hyeonjoon-Nam/GAM250-TheyAre-Bastion",
      },
    ],
  },

  // ───────────────────────────────────────────
  // They Are
  // ───────────────────────────────────────────
  {
    id: "they-are",
    title: "They Are",
    tagline: "2D strategic tower defense with A* pathfinding and 99%+ optimization.",
    thumb: "/projects/they-are/thumbs/thumb-1.webp",
    description:
      "A 2D strategic tower defense where players control routes with obstacles and towers. As tech lead, I implemented A* pathfinding, optimized it by sharing computations across enemies, and built the core tower, monster, and wave systems.",
    role: "Tech Lead",
    team: "5 members",
    tools: "C++, OpenGL, STL",
    roles: [
      "Implemented grid-based A* pathfinding with dynamic updates when the player placed or removed obstacles.",
      "Optimized enemy pathfinding by computing a single shared path for all enemies whenever the map changed, reducing A* calls from 24,000 to 1 in a 100-enemy benchmark and cutting total pathfinding CPU time from 8.4s to 0.65ms while keeping paths identical.",
      "Built core tower and wave systems (placement/removal/upgrade, wave scheduling, monster spawning) plus a text-file driven configuration system and an in-engine path visualizer for debugging.",
    ],
    challenges: [
      "Naive per-enemy per-frame pathfinding blew up CPU cost; caching and sharing the path eliminated redundant work while preserving behavior.",
      "Players could block all routes with obstacles, so we added pre-placement validation and fallback rules to prevent impossible or unfair maps.",
    ],
    media: [{ type: "video", src: "/projects/they-are/videos/clip-8s.mp4" }],
    images: [
      "/projects/they-are/images/shot-1.webp",
      "/projects/they-are/images/shot-2.webp",
      "/projects/they-are/images/shot-3.webp",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Hyeonjoon-Nam/GAM250-TheyAre-Bastion",
      },
      {
        label: "Release (they-are-1.0)",
        href: "https://github.com/Hyeonjoon-Nam/GAM250-TheyAre-Bastion/releases/tag/they-are-1.0",
      },
    ],
  },

  // ───────────────────────────────────────────
  // Suspense Defense
  // ───────────────────────────────────────────
  {
    id: "suspense-defense",
    title: "Suspense Defense",
    tagline: "Custom C++ wave-based defense with procedural maps and a Mediator hub.",
    thumb: "/projects/suspense-defense/thumbs/thumb-1.webp",
    description:
      "A wave-based action defense game built on a custom C++ engine. As tech lead, I designed procedural map generation, A*-based movement, monster and wave systems, and a Mediator-pattern messaging hub to decouple subsystems under tight engine constraints.",
    role: "Tech Lead",
    team: "4 members",
    tools: "C++, Custom Engine, CMake",
    roles: [
      "Built a custom C++ tower defense engine with a Mediator-style manager coordinating turrets, enemies, and projectiles.",
      "Added procedural level layouts using cellular automata with guaranteed start–end connectivity and difficulty-curve alignment.",
      "Implemented A*-based enemy routing and wave timing to control difficulty and keep encounters readable.",
      "Used a lightweight Mediator/event hub to reduce coupling between subsystems and centralize communication.",
    ],
    challenges: [
      "Tightly coupled subsystems made changes risky; applying a Mediator pattern isolated communication and simplified routing.",
      "Purely random generation caused unstable difficulty; we constrained generation with seed and curve parameters to keep runs fair.",
      "Occasional blocked routes required regeneration and validation rules to ensure there was always a valid path to the goal.",
    ],
    media: [{ type: "youtube", src: "_2lPt6jRqoE" }],
    images: [
      "/projects/suspense-defense/images/shot-1.webp",
      "/projects/suspense-defense/images/shot-2.webp",
      "/projects/suspense-defense/images/shot-3.webp",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Junhyeongkimm/Suspense_defense",
      },
      {
        label: "Demo Video",
        href: "https://youtu.be/_2lPt6jRqoE",
      },
    ],
  },
];
