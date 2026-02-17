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
    media: [{ type: "youtube", src: "https://youtu.be/WqSGCowUWgY" }],
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
      { label: "YouTube Demo", href: "https://youtu.be/o7JMrh1nwco" },
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
    team: "13-person studio (Tech 4 / Art 5 / Design 4)",
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
      { label: "GitHub", href: "https://github.com/Hyeonjoon-Nam/p4bot" },
      { label: "YouTube Demo", href: "https://youtu.be/kMe77iYMMTM" }
    ],
    featured: true,
    media: [{ type: "youtube", src: "https://youtu.be/kMe77iYMMTM" }],
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
    links: [
      { label: "GitHub", href: "https://github.com/Hyeonjoon-Nam/SpellItOut" },
      { label: "YouTube Demo", href: "https://youtu.be/9m7i7XsUOeg" }
    ],
    featured: false,
    media: [{ type: "youtube", src: "https://youtu.be/9m7i7XsUOeg" }],
    images: [
      "/projects/spell-it-out/images/shot-1.webp",
      "/projects/spell-it-out/images/shot-2.webp",
      "/projects/spell-it-out/images/shot-3.webp",
    ]
  },
  {
    id: "bastion",
    title: "Bastion Game Engine",
    thumb: "/projects/bastion/thumbs/thumb-1.webp",
    tagline: "Custom C++ Engine focused on iteration speed and data-driven architecture.",
    description: "A custom 2D game engine built from scratch using C++ and OpenGL. Focused on solving development bottlenecks by implementing a data-driven pipeline that allows designers to tweak game balance without recompilation.",
    role: "Engine Programmer & Tech Lead",
    team: "5-person Team (Reboot Project)",
    tools: "C++, OpenGL, ImGui, FMOD, Data-Driven Design",
    roles: [
      "Engineered a data-driven loading layer that parses wave configurations from external text files, reducing the iteration loop (Save-Build-Reload) from 62s to 15s (4x improvement).",
      "Led a technical reboot of the codebase, analyzing legacy systems to salvage reusable components while redesigning the core architecture for modularity.",
      "Developed an in-game editor using ImGui, enabling real-time unit placement and property tuning to streamline the design workflow.",
      "Implemented a base-class hierarchy for 24 upgradeable units, decoupling logic to ensure scalability and ease of maintenance."
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Hyeonjoon-Nam/GAM250-TheyAre-Bastion" }
    ],
    featured: false,
    media: [{ type: "video", src: "/projects/bastion/videos/clip-8s.mp4" }],
    images: [
      "/projects/bastion/images/shot-1.webp",
      "/projects/bastion/images/shot-2.webp",
      "/projects/bastion/images/shot-3.webp",
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
    tools: "Custom C++ Engine, C++",
    roles: [
      "Developed procedural wave generation algorithms.",
      "Balanced game difficulty through iterative testing."
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Junhyeongkimm/Suspense_defense" },
      { label: "YouTube Demo", href: "https://youtu.be/_2lPt6jRqoE" }
    ],
    featured: false,
    media: [{ type: "youtube", src: "https://youtu.be/_2lPt6jRqoE" }],
    images: [
      "/projects/suspense-defense/images/shot-1.webp",
      "/projects/suspense-defense/images/shot-2.webp",
      "/projects/suspense-defense/images/shot-3.webp",
    ]
  },
  {
    id: "that-game-jam",
    title: "Still Reaching",
    thumb: "/projects/that-game-jam/thumbs/thumb-1.webp",
    tagline: "Co-op puzzle platformer built in 48 hours using Godot.",
    description: "A rapid prototyping project created for a Game Jam (Dec 2025). Focused on cooperative mechanics where two players must swap skills and use portals to solve puzzles.",
    role: "Gameplay & Tools Programmer",
    team: "4-person Team (Game Jam)",
    tools: "Godot (GDScript), GitHub",
    roles: [
      "Developed a custom Level Editor with Save/Load functionality to enable rapid level design iterations for the team.",
      "Implemented core puzzle mechanics including Portals, Interactive Buttons/Doors, and a Skill-Swap system.",
      "Built the Audio Manager and UI navigation systems (Pause, Settings, Main Menu) to ensure a polished user experience within the jam timeframe."
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Hyeonjoon-Nam/thatgamejam_01" },
      { label: "YouTube Demo", href: "https://youtu.be/hB2F7u6Q99A" }
    ],
    media: [{ type: "youtube", src: "https://youtu.be/hB2F7u6Q99A" }],
    featured: false,
    images: [
      "/projects/that-game-jam/images/shot-1.webp",
      "/projects/that-game-jam/images/shot-2.webp"
    ]
  }
];