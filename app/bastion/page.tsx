// app/bastion/page.tsx
import { projects } from "../data/projects";
import ProjectDetailPage from "../components/ProjectDetailPage";

const cover = "/projects/bastion/thumbs/thumb-1.webp";
const desc =
  "Custom C++ top-down defense. As Tech Lead, rebuilt architecture, implemented monster/boss state machines, a data-driven merge system, and file-parsing + ImGui live tuning.";

export const metadata = {
  title: "Bastion — Hyeonjoon Nam",
  description: desc,
  openGraph: {
    title: "Bastion — Hyeonjoon Nam",
    description: desc,
    images: [cover],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bastion — Hyeonjoon Nam",
    description: desc,
    images: [cover],
  },
};

export default function BastionPage() {
  const p = projects.find((x) => x.id === "bastion");
  if (!p) return <main className="p-8">Project not found.</main>;
  return <ProjectDetailPage p={p} />;
}
