import { projects } from "../data/projects";
import ProjectDetailPage from "../components/ProjectDetailPage";

export const metadata = {
  title: "Suspense Defense — Hyeonjoon Nam",
  description: "Roguelike tower-defense in C++ with procedural maps, A* enemies, and a boss fight.",
  openGraph: {
    title: "Suspense Defense — Hyeonjoon Nam",
    description: "Roguelike tower-defense in C++ with procedural maps, A* enemies, and a boss fight.",
    images: ["/projects/suspense-defense/thumbs/thumb-1.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suspense Defense — Hyeonjoon Nam",
    description: "Roguelike tower-defense in C++ with procedural maps, A* enemies, and a boss fight.",
    images: ["/projects/suspense-defense/thumbs/thumb-1.webp"],
  },
};

export default function SuspenseDefensePage() {
  const p = projects.find((x) => x.id === "suspense-defense")!;
  return <ProjectDetailPage p={p} />;
}
