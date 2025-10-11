// app/they-are/page.tsx
import { projects } from "../data/projects";
import ProjectDetailPage from "../components/ProjectDetailPage";

const cover = "/projects/they-are/thumbs/thumb-1.webp";
const desc =
  "2D strategic tower defense. As Tech Lead, built dynamic A* pathfinding and a shared singleton cache (99%+ improvement), plus core tower/monster/wave systems.";

export const metadata = {
  title: "They Are — Hyeonjoon Nam",
  description: desc,
  openGraph: {
    title: "They Are — Hyeonjoon Nam",
    description: desc,
    images: [cover],
  },
  twitter: {
    card: "summary_large_image",
    title: "They Are — Hyeonjoon Nam",
    description: desc,
    images: [cover],
  },
};

export default function TheyArePage() {
  const p = projects.find((x) => x.id === "they-are");
  if (!p) return <main className="p-8">Project not found.</main>;
  return <ProjectDetailPage p={p} />;
}
