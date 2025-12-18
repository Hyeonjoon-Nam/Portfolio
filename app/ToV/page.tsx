// app/ToV/page.tsx
import { projects } from "../data/projects";
import ProjectDetailPage from "../components/ProjectDetailPage";

// Fallback cover until we have real screenshots
const cover = "/og.png";

const desc =
  "UE5 co-op action prototype under a server-authoritative model; QA Lead for a 6-person team. AnimNotify-timed hit checks and a Perforce→Discord QA pipeline with a user-mapped checkout monitor.";

export const metadata = {
  title: "Triad of Valor — Hyeonjoon Nam",
  description: desc,
  openGraph: {
    title: "Triad of Valor — Hyeonjoon Nam",
    description: desc,
    images: [cover],
  },
  twitter: {
    card: "summary_large_image",
    title: "Triad of Valor — Hyeonjoon Nam",
    description: desc,
    images: [cover],
  },
};

export default function TriadOfValorPage() {
  // NOTE: id must match the project's `id` in data/projects.ts
  const p = projects.find((x) => x.id === "ToV");
  if (!p) return <main className="p-8">Project not found.</main>;
  return <ProjectDetailPage p={p} />;
}
