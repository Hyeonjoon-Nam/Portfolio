import type { Project } from "./types";

export const projects: Project[] = [
  // --------------------------------------------------------------------------
  // FEATURED PROJECTS (System Software / C++ / Optimization)
  // --------------------------------------------------------------------------
  {
    id: "hpc-simulation",
    title: "Heterogeneous HPC Simulation System",
    thumb: "/projects/hpc/thumbs/thumb-1.webp", // Ensure asset exists
    tagline: "GPGPU Boids simulation with bare-metal MCU hardware integration.",
    description: "A real-time GPGPU simulation system bridging AVR-based hardware input with CUDA-accelerated kernels. Focused on maximizing throughput and decoupling I/O latency.",
    role: "Individual Developer",
    team: "Individual Project",
    tools: "C++, CUDA, AVR (ATmega328P), Win32 API, Nsight Compute",
    roles: [
      "Engineered a real-time Boids simulation for 1.04M particles (1024x1024) at 50 FPS, achieving 85.23% Compute Throughput on an RTX 3070 via CUDA Uniform Grid partitioning.",
      "Developed bare-metal firmware for ATmega328P by directly manipulating AVR registers (UBRR0, ADMUX, ADCSRA) for high-speed UART, bypassing standard library overhead.",
      "Implemented a lock-free synchronization pipeline using std::atomic and Win32 Serial API to decouple hardware I/O from the high-frequency GPU rendering loop."
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Hyeonjoon-Nam/Cuda-Study-Journey" },
      { label: "YouTube Demo", href: "https://youtu.be/WqSGCowUWgY" }
    ],
    featured: true
  },
  {
    id: "ToV",
    title: "Triad of Valor",
    thumb: "/projects/ToV/thumbs/thumb-1.webp",
    tagline: "High-fidelity UE5 MORPG optimized for performance.",
    description: "A 3D co-op MORPG in Unreal Engine 5. Focused on resolving critical rendering bottlenecks and automating designer workflows.",
    role: "QA Lead / Gameplay Programmer",
    team: "6-person multi-disciplinary team",
    tools: "C++, Unreal Engine 5, Unreal Insights, Lumen, VSM, p4bot",
    roles: [
      "Optimized GPU rendering time from 40ms to 23ms (42% reduction) by profiling via Unreal Insights and fine-tuning Lumen and Virtual Shadow Map (VSM) parameters.",
      "Architected a data-driven enemy variation system using DataTables and OnConstruction scripts, reducing manual blueprint iteration time by 90%.",
      "Integrated p4bot to provide real-time lock visibility, saving each member 15+ minutes of daily idle time.",
      "Resolved intermittent race condition crashes in event delegate binding through defensive coding and synchronized cleanup."
    ],
    links: [
      { label: "YouTube Demo", href: "https://youtu.be/o7JMrh1nwco" }
    ],
    featured: true,
    media: [{ type: "youtube", src: "https://youtu.be/o7JMrh1nwco" }],
    images: [
      "/projects/ToV/images/shot-1.webp",
      "/projects/ToV/images/shot-2.webp",
      "/projects/ToV/images/shot-3.webp",
    ]
  },
  {
    id: "tcas",
    title: "The Children Are Sleeping",
    thumb: "/projects/tcas/thumbs/thumb-1.webp",
    tagline: "Tech leadership for a UE5 horror project with stabilized AI systems.",
    description: "A first-person horror puzzle game. I managed the technical pipeline and optimized AI pacing to ensure consistent player tension.",
    role: "Tech Lead / Gameplay Programmer",
    team: "12-person studio (Tech 4 / Art 5 / Design 4)",
    tools: "Unreal Engine 5, Behavior Trees, Perforce, Excel",
    roles: [
      "Spearheaded a 4-person engineering team, managing technical roadmaps and cross-discipline coordination via Excel-based tracking.",
      "Facilitated weekly cross-discipline meetings with Art and Design to negotiate technical scopes and maintain development trajectory.",
      "Engineered a weighted patrol system via Behavior Trees, stabilizing first-encounter timing to a 12–48s window (improved from 30–100s)."
    ],
    links: [
      { label: "YouTube Demo", href: "https://youtu.be/C3MexPR3Eyc" }
    ],
    featured: true,
    media: [{ type: "youtube", src: "https://youtu.be/C3MexPR3Eyc" }],
    images: [
      "/projects/tcas/images/shot-1.webp",
      "/projects/tcas/images/shot-2.webp",
      "/projects/tcas/images/shot-3.webp",
    ]
  },
  {
    id: "they-are",
    title: "Exodia - They Are",
    thumb: "/projects/they-are/thumbs/thumb-1.webp",
    tagline: "Massive-scale RTS pathfinding on a custom C++ engine.",
    description: "A strategic defense game featuring 1,000+ units. Led technical development focusing on algorithm optimization and engine limits.",
    role: "Tech Lead / Gameplay Programmer",
    team: "5-person engineering team",
    tools: "C++, OpenGL, Custom Engine, A* Pathfinding",
    roles: [
      "Led a 5-person engineering team, prioritizing milestones and conducting rigorous code reviews.",
      "Achieved stable 60 FPS with 100+ active units by optimizing CPU pathfinding latency from 8.4s to 0.65ms.",
      "Conducted system-wide stress tests at 1,000+ unit scales to define the engine’s theoretical performance ceiling."
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Hyeonjoon-Nam/GAM250-TheyAre-Bastion" }
    ],
    featured: true,
    media: [{ type: "video", src: "/projects/they-are/videos/clip-8s.mp4" }],
    images: [
      "/projects/they-are/images/shot-1.webp",
      "/projects/they-are/images/shot-2.webp",
      "/projects/they-are/images/shot-3.webp",
    ]
  },
  {
    id: "p4bot",
    title: "p4bot — DevOps Infrastructure",
    thumb: "/projects/p4bot/thumbs/thumb-1.webp",
    tagline: "Containerized Perforce-Discord automation service.",
    description: "An infrastructure service bridging Perforce and Discord to streamline team communication and asset management.",
    role: "Individual Developer",
    team: "Infrastructure Tool",
    tools: "Python, Docker, Jenkins, Perforce CLI, Discord API",
    roles: [
      "Developed a real-time monitoring system for Perforce depot activity and exclusive-locks, featuring Slash Commands (/canwork).",
      "Architected a Jenkins CI/CD pipeline with automated session renewal to ensure 24/7 uptime without manual intervention.",
      "Containerized the service using Docker to provide an environment-agnostic, cross-platform execution layer."
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Hyeonjoon-Nam/p4bot" }
    ],
    featured: true,
    images: [
      "/projects/p4bot/images/shot-1.webp",
      "/projects/p4bot/images/shot-2.webp",
      "/projects/p4bot/images/shot-3.webp",
    ]
  },

  // --------------------------------------------------------------------------
  // OTHER PROJECTS (Archived / Game Logic Focus)
  // --------------------------------------------------------------------------
  {
    id: "spell-it-out",
    title: "Spell It Out",
    thumb: "/projects/spell-it-out/thumbs/thumb-1.webp",
    tagline: "Educational word game with polished UI/UX.",
    description: "A word-based educational game built to provide an engaging learning experience through interactive mechanics.",
    role: "Gameplay Programmer",
    team: "Student Project",
    tools: "Unity, C#",
    roles: [
      "Implemented core word-matching logic and score systems.",
      "Polished UI/UX transitions for better accessibility."
    ],
    links: [],
    featured: false,
    images: [
      "/projects/spell-it-out/images/shot-1.webp",
      "/projects/spell-it-out/images/shot-2.webp",
      "/projects/spell-it-out/images/shot-3.webp",
    ]
  },
  {
    id: "suspense-defense",
    title: "Suspense Defense",
    thumb: "/projects/suspense-defense/thumbs/thumb-1.webp",
    tagline: "Tactical defense game with procedural waves.",
    description: "A strategy game where players defend against waves of enemies using various tactical tools.",
    role: "Gameplay Programmer",
    team: "Student Project",
    tools: "Unity, C#",
    roles: [
      "Developed procedural wave generation algorithms.",
      "Balanced game difficulty through iterative testing."
    ],
    links: [],
    featured: false,
    images: [
      "/projects/suspense-defense/images/shot-1.webp",
      "/projects/suspense-defense/images/shot-2.webp",
      "/projects/suspense-defense/images/shot-3.webp",
    ]
  }
];