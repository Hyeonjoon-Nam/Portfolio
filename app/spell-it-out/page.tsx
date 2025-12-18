// app/spell-it-out/page.tsx
import { projects } from "../data/projects";
import ProjectDetailPage from "../components/ProjectDetailPage";

const cover = "/projects/spell-it-out/thumbs/thumb-1.webp";
const desc =
  "Gesture-based spell casting prototype built in Unity, deployed as a public WebGL build on itch.io.";

export const metadata = {
  title: "Spell It Out — Hyeonjoon Nam",
  description: desc,
  openGraph: {
    title: "Spell It Out — Hyeonjoon Nam",
    description: desc,
    images: [cover],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spell It Out — Hyeonjoon Nam",
    description: desc,
    images: [cover],
  },
};

export default function SpellItOutPage() {
  const p = projects.find((x) => x.id === "spell-it-out");
  if (!p) return <main className="p-8">Project not found.</main>;
  return <ProjectDetailPage p={p} />;
}
