import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "tcas",
    title: "The Children Are Sleeping",
    tagline: "UE5 horror puzzle with weighted patrol AI and large-scale collaboration.",
    thumb: "/projects/tcas/thumbs/thumb-1.webp",
    description: `The Children Are Sleeping is a 3D horror puzzle game built in Unreal Engine 5. 
The player explores, collects clues, solves puzzles, and escapes while avoiding a monster.`,
    roles: [
      "Tech Lead (Tech team of 4, total 13 members including Art and Design)",
      "Served as cross-department bridge while coding Monster AI and optimization",
      "Used UE5 profiling tools to identify bottlenecks and improve frame stability"
    ],
    challenges: [
      "Initial patrol AI was fully random, leading to huge encounter variance (sometimes none, sometimes overwhelming).",
      "Developed a weighted random patrol system where visited points were deprioritized, ensuring consistent coverage.",
      "Result: encounter frequency stabilized, improving fairness and tension pacing.",
      "Scaling challenge: prior projects let me own all code, but in a 13-person team I had to learn real collaboration — distributing tasks, asking for help, and integrating across departments.",
      "Result: bottlenecks were reduced, bugs resolved faster, and the project delivered on schedule."
    ],
    media: [
      { type: "youtube", src: "C3MexPR3Eyc" }
    ],
    images: [
      "/projects/tcas/images/shot-1.webp",
      "/projects/tcas/images/shot-2.webp",
      "/projects/tcas/images/shot-3.webp"
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Hyeonjoon-Nam/TCAS" }
    ]
  },

  {
    id: "bastion",
    title: "Bastion",
    tagline: "Loop-route defense with summon & merge units, plus meta progression.",
    thumb: "/projects/bastion/thumbs/thumb-1.webp",
    description: `Bastion was built the semester after They Are, pivoting to a new concept while retaining tower-defense DNA. 
Enemies continuously patrol a fixed loop instead of traveling from spawn to goal. The player loses if too many monsters accumulate in the loop. 
Players spend gold to summon units of three types, and can merge units to create stronger variants. 
After each map, players spend gold on meta upgrades such as reduced unit cost, increased starting gold, or higher monster limits.`,
    roles: [
      "Tech Lead — implemented core mechanics including new wave system, monster behaviors, unit summon & merge system",
      "Handled bug fixes and integration"
    ],
    challenges: [
      "Merge system complexity increased as more unit combinations were added, creating frequent bugs and unmaintainable conditionals.",
      "Introduced a recipe-table + state machine system to formalize merge logic. Merge rules defined in data tables, unit states managed cleanly.",
      "Result: bug frequency dropped significantly, and adding new units or rebalancing became straightforward."
    ],
    media: [
      { type: "video", src: "/projects/bastion/videos/clip-8s.mp4" }
    ],
    images: [
      "/projects/bastion/images/shot-1.webp",
      "/projects/bastion/images/shot-2.webp",
      "/projects/bastion/images/shot-3.webp"
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Hyeonjoon-Nam/Bastion" }
    ]
  },

  {
    id: "they-are",
    title: "They Are",
    tagline: "Top-down defense with towers, obstacles, and massively optimized A* pathfinding.",
    thumb: "/projects/they-are/thumbs/thumb-1.webp",
    description: `They Are is a 2D top-down defense game where players actively move and attack while also placing towers and obstacles. 
Obstacles cannot completely block paths, but strategic placement creates advantageous choke points. 
Towers can be upgraded or removed, and players must survive predetermined waves to win each map.`,
    roles: [
      "Tech Lead (5-person team) — implemented most core mechanics",
      "Developed wave/map systems with file parsing for iteration",
      "Improved A* pathfinding adapted to tower-defense dynamics",
      "Implemented diverse monster patterns",
      "Managed tasks/bugs in Asana, ran code reviews"
    ],
    challenges: [
      "Initial builds recalculated A* for every monster on every frame, causing massive CPU/memory overhead.",
      "Refactored into a singleton path manager — paths recalculated only when the map changed; monsters reference shared paths.",
      "Benchmarks: with 100 monsters × 240 frames, runtime dropped from 9.3s to 1.6ms (~5,900× faster, 99.98% reduction)."
    ],
    media: [
      { type: "video", src: "/projects/they-are/videos/clip-8s.mp4" }
    ],
    images: [
      "/projects/they-are/images/shot-1.webp",
      "/projects/they-are/images/shot-2.webp",
      "/projects/they-are/images/shot-3.webp"
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Hyeonjoon-Nam/They-Are" }
    ]
  },

  {
    id: "suspense-defense",
    title: "Suspense Defense",
    tagline: "Roguelike defense with day/night cycles, procedural maps, and evolving colonies.",
    thumb: "/projects/suspense-defense/thumbs/thumb-1.webp",
    description: `Suspense Defense is a 2D top-down roguelike defense game with procedurally generated maps each run. 
The game alternates between two phases: daytime exploration to gather resources, and nighttime defense to protect the base. 
Players can spend resources to upgrade both their character and their base, and defeating bosses unlocks new weapons. 
A key mechanic is the “colony”: nests scattered around the map that spawn monsters every night. Each morning, colonies multiply and scale depending on how many remain alive, creating a dynamic risk–reward dilemma — do you farm and grow stronger, or destroy colonies to prevent exponential monster growth? 
The ultimate victory condition is defeating all bosses.`,
    roles: [
      "Tech Lead (4-person team) — responsible for nearly all gameplay/system code",
      "Implemented procedural map generation (cellular automata)",
      "Developed A* pathfinding for enemy pursuit",
      "Designed Mediator class for clean object interactions",
      "Coordinated with Trello for task/bug tracking"
    ],
    challenges: [
      "Implementing A* pathfinding was considered too difficult; I built a plan with contingency, prototyped with TA guidance, and integrated it successfully into the game loop without frame drops.",
      "Engine module was incomplete, leading to brittle object interactions. I introduced a Mediator class to centralize communication, reducing duplicated code and improving maintainability."
    ],
    media: [
      { type: "youtube", src: "_2lPt6jRqoE" }
    ],
    images: [
      "/projects/suspense-defense/images/shot-1.webp",
      "/projects/suspense-defense/images/shot-2.webp",
      "/projects/suspense-defense/images/shot-3.webp"
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Hyeonjoon-Nam/Suspense-Defense" },
      { label: "Demo Video", href: "https://youtu.be/_2lPt6jRqoE" }
    ]
  }
];
