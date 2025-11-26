// app/p4bot/page.tsx
import { projects } from "../data/projects";
import ProjectDetailPage from "../components/ProjectDetailPage";

// ✅ 썸네일 경로는 projects.ts에 적은 thumb랑 맞춰주면 됨
const cover = "/projects/_common/placeholder-16x9.webp";

const desc =
  "Self-hosted Perforce → Discord automation toolkit with a submit poller, opened-file watcher, and /canwork slash command that cuts 70–90 second manual lock checks down to a 1–3 second Discord glance.";

export const metadata = {
  title: "p4bot — Hyeonjoon Nam",
  description: desc,
  openGraph: {
    title: "p4bot — Hyeonjoon Nam",
    description: desc,
    images: [cover],
  },
  twitter: {
    card: "summary_large_image",
    title: "p4bot — Hyeonjoon Nam",
    description: desc,
    images: [cover],
  },
};

export default function P4BotPage() {
  const p = projects.find((x) => x.id === "p4bot");
  if (!p) return <main className="p-8">Project not found.</main>;
  return <ProjectDetailPage p={p} />;
}
