// app/suspense-defense/page.tsx
import { projects } from "../data/projects";
import ProjectDetailPage from "../components/ProjectDetailPage";

export const metadata = {
  title: "Suspense Defense — Hyeonjoon Nam",
  description:
    "Roguelike tower-defense in C++ with procedural maps, Mediator pattern, and A* enemies.",
  openGraph: {
    title: "Suspense Defense — Hyeonjoon Nam",
    description:
      "Procedural maps (cellular automata), A* pursuit, and a Mediator for clean interactions.",
    images: ["/projects/suspense-defense/thumbs/thumb-1.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suspense Defense — Hyeonjoon Nam",
    description:
      "C++ roguelike defense with day/night cycles and scalable systems.",
    images: ["/projects/suspense-defense/thumbs/thumb-1.webp"],
  },
};

export default function SuspenseDefensePage() {
  const p = projects.find((x) => x.id === "suspense-defense")!;
  return <ProjectDetailPage p={p} />;
}
