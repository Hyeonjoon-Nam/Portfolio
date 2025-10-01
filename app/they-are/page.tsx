// app/they-are/page.tsx
import { projects } from "../data/projects";
import ProjectDetailPage from "../components/ProjectDetailPage";

export const metadata = {
  title: "They Are — Hyeonjoon Nam",
  description:
    "Custom-engine top-down defense showcasing a singleton path manager for A* optimization.",
  openGraph: {
    title: "They Are — Hyeonjoon Nam",
    description:
      "Massively optimized A* with a singleton path manager, plus wave/map systems.",
    images: ["/projects/they-are/thumbs/thumb-1.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "They Are — Hyeonjoon Nam",
    description:
      "Top-down defense with optimized A* and data-driven iteration.",
    images: ["/projects/they-are/thumbs/thumb-1.webp"],
  },
};

export default function TheyArePage() {
  const p = projects.find((x) => x.id === "they-are")!;
  return <ProjectDetailPage p={p} />;
}
