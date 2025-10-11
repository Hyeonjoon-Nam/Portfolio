// app/suspense-defense/page.tsx
import { projects } from "../data/projects";
import ProjectDetailPage from "../components/ProjectDetailPage";

const cover = "/projects/suspense-defense/thumbs/thumb-1.webp";
const desc =
  "Wave-based action defense on a custom C++ engine. As Tech Lead, built procedural map generation, A*-based movement, and a Mediator-pattern messaging hub.";

export const metadata = {
  title: "Suspense Defense — Hyeonjoon Nam",
  description: desc,
  openGraph: {
    title: "Suspense Defense — Hyeonjoon Nam",
    description: desc,
    images: [cover],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suspense Defense — Hyeonjoon Nam",
    description: desc,
    images: [cover],
  },
};

export default function SuspenseDefensePage() {
  const p = projects.find((x) => x.id === "suspense-defense");
  if (!p) return <main className="p-8">Project not found.</main>;
  return <ProjectDetailPage p={p} />;
}
