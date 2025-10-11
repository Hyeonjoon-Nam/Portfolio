// app/tcas/page.tsx
import { projects } from "../data/projects";
import ProjectDetailPage from "../components/ProjectDetailPage";

const cover = "/projects/tcas/thumbs/thumb-1.webp";
const desc =
  "UE5 first-person horror puzzle. As Tech Lead, built AI behavior (Patrol→Chase→Prediction→Capture), integrated interaction/persistence, and stabilized performance.";

export const metadata = {
  title: "The Children Are Sleeping — Hyeonjoon Nam",
  description: desc,
  openGraph: {
    title: "The Children Are Sleeping — Hyeonjoon Nam",
    description: desc,
    images: [cover],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Children Are Sleeping — Hyeonjoon Nam",
    description: desc,
    images: [cover],
  },
};

export default function Page() {
  const p = projects.find((x) => x.id === "tcas");
  if (!p) return <main className="p-8">Project not found.</main>;
  return <ProjectDetailPage p={p} />;
}
