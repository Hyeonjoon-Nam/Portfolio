import type { Project } from "./types";

export const projects: Project[] = [
  // ───────────────────────────────────────────
  // FEATURED PROJECTS (Aligned with Resume)
  // ───────────────────────────────────────────
  {
    id: "hpc-simulation",
    title: "Heterogeneous HPC Simulation System",
    thumb: "/projects/hpc/thumbs/thumb-1.webp",
    tagline: "GPGPU Boids simulation with bare-metal MCU hardware integration.",
    description: "A real-time GPGPU simulation system bridging AVR-based hardware input with CUDA-accelerated kernels. Focused on maximizing throughput and decoupling I/O latency, successfully managing 1.04M particles at interactive framerates.",
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
    media: [{ type: "youtube", src: "https://youtu.be/o7JMrh1nwco" }],
    featured: true,
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
    media: [{ type: "youtube", src: "https://youtu.be/C3MexPR3Eyc" }],
    featured: true,
    images: [
      "/projects/tcas/images/shot-1.webp",
      "/projects/tcas/images/shot-2.webp",
      "/projects/tcas/images/shot-3.webp",
    ]
  },
  {
    id: "they-are",
    title: "They Are",
    thumb: "/projects/they-are/thumbs/thumb-1.webp",
    tagline: "Massive-scale RTS pathfinding on a custom C++ engine.",
    description: "A strategic defense game featuring 1,000+ units. Led technical development focusing on algorithm optimization and engine limits.",
    role: "Tech Lead / Gameplay Programmer",
    team: "5-person engineering team",
    tools: "C++, OpenGL, Custom Engine, A* Pathfinding",
    roles: [
      "Led a 5-person engineering team, prioritizing milestones and conducting rigorous code reviews.",
      "Achieved stable 60 FPS with 100+ active units by optimizing CPU pathfinding latency from 8.4s to 0.65ms using a Singleton-based shared path manager.",
      "Conducted system-wide stress tests at 1,000+ unit scales to define the engine’s theoretical performance ceiling."
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Hyeonjoon-Nam/GAM250-TheyAre-Bastion" }
    ],
    media: [{ type: "video", src: "/projects/they-are/videos/clip-8s.mp4" }],
    featured: true,
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
    media: [{ type: "youtube", src: "https://youtu.be/kMe77iYMMTM" }],
    featured: true,
    images: [
      "/projects/p4bot/images/shot-1.webp",
      "/projects/p4bot/images/shot-2.webp",
      "/projects/p4bot/images/shot-3.webp",
    ]
  },

  // ───────────────────────────────────────────
  // OTHER PROJECTS (Archive / Tech Demos)
  // ───────────────────────────────────────────
  
  {
    id: "spell-it-out",
    title: "Spell It Out",
    thumb: "/projects/spell-it-out/thumbs/thumb-1.webp",
    tagline: "Gesture Recognition Algorithm (Nintendo Switch Project).",
    description: "An action game originally developed using Unity and Nintendo Switch Dev Kits. Focused on translating raw gyro sensor data into complex 8-directional combat gestures. \n\n(Note: The public GitHub repository contains a PC-ported version; Nintendo-specific code has been removed for NDA compliance.)",
    role: "Gameplay Programmer (Input Systems)",
    team: "CS388 Student Project (Nintendo Dev)",
    tools: "Unity, C# (Nintendo SDK omitted), GitHub Actions",
    roles: [
      "Implemented a custom Motion-to-Stroke recognition algorithm, converting raw accelerometer/gyro data into quantized directional vectors for combat input.",
      "Developed a resilient stroke matching system using weighted edit distance to handle variability in player gestures.",
      "Engineered a CI/CD pipeline using GitHub Actions to automate WebGL builds and deployment to itch.io for rapid testing."
    ],
    links: [
      { label: "GitHub (Public)", href: "https://github.com/Hyeonjoon-Nam/SpellItOut" },
      { label: "YouTube Demo", href: "https://youtu.be/9m7i7XsUOeg" },
      { label: "Play on Itch.io", href: "https://hyeonjoon-nam.itch.io/spell-it-out" }
    ],
    media: [{ type: "youtube", src: "https://youtu.be/9m7i7XsUOeg" }],
    featured: false,
    images: [
      "/projects/spell-it-out/images/shot-1.webp",
      "/projects/spell-it-out/images/shot-2.webp",
      "/projects/spell-it-out/images/shot-3.webp",
    ]
  },
  {
    id: "bastion",
    title: "Bastion",
    thumb: "/projects/bastion/thumbs/thumb-1.webp",
    tagline: "Custom C++ Game Engine: Data-driven architecture overhaul.",
    description: "A strategic defense game built on a custom C++ engine. This project was a complete technical reboot of 'They Are', focusing on architectural refactoring and maximizing development efficiency.",
    role: "Engine Programmer & Tech Lead",
    team: "5-person Team (Engine Reboot)",
    tools: "C++, OpenGL, ImGui, FMOD, Data-Driven Design",
    roles: [
      "Led the technical reboot, analyzing legacy code to salvage reusable rendering/ECS cores while redesigning the gameplay layer for modularity.",
      "Engineered a data-driven loading system that parses external configuration files, reducing the 'Save-Build-Reload' iteration loop from 62s to 15s (4x faster).",
      "Developed an in-game editor using ImGui for real-time unit placement and balancing, decoupling design iteration from code compilation."
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Hyeonjoon-Nam/GAM250-TheyAre-Bastion" }
    ],
    media: [{ type: "video", src: "/projects/bastion/videos/clip-8s.mp4" }],
    featured: false,
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
    tagline: "Freshman Project: Procedural Maps & A* from scratch.",
    description: "A top-down tactical defense game built on a custom C++ engine during freshman year. Focused on implementing core algorithms like pathfinding and procedural generation.",
    role: "Gameplay Programmer",
    team: "Student Project (Freshman Year)",
    tools: "Custom C++ Engine, C++, Cellular Automata",
    roles: [
      "Implemented Random Map Generation using Cellular Automata algorithms to ensure varied gameplay layouts.",
      "Developed an A* pathfinding system from scratch for intelligent monster navigation within procedurally generated maps.",
      "Balanced game difficulty through iterative testing and wave system tuning."
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Junhyeongkimm/Suspense_defense" },
      { label: "YouTube Demo", href: "https://youtu.be/_2lPt6jRqoE" }
    ],
    media: [{ type: "youtube", src: "https://youtu.be/_2lPt6jRqoE" }],
    featured: false,
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
      { label: "YouTube Demo", href: "https://youtu.be/hB2F7u6Q99A" },
      { label: "Play on Itch.io", href: "https://hyeonjoon-nam.itch.io/still-reaching" }
    ],
    media: [{ type: "youtube", src: "https://youtu.be/hB2F7u6Q99A" }],
    featured: false,
    images: [
      "/projects/that-game-jam/images/shot-1.webp",
      "/projects/that-game-jam/images/shot-2.webp"
    ]
  }
];