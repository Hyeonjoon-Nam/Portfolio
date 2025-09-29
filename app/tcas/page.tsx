import { projects } from "../data/projects";
import ProjectDetailPage from "../components/ProjectDetailPage";

export const metadata = {
  title: "The Children Are Sleeping — Hyeonjoon Nam",
  description: "UE5 team project with patrol AI and performance optimization.",
  openGraph: {
    title: "The Children Are Sleeping — Hyeonjoon Nam",
    description: "UE5 team project with patrol AI and performance optimization.",
    images: ["/projects/tcas/thumbs/thumb-1.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Children Are Sleeping — Hyeonjoon Nam",
    description: "UE5 team project with patrol AI and performance optimization.",
    images: ["/projects/tcas/thumbs/thumb-1.webp"],
  },
};

export default function TCASPage() {
  const p = projects.find((x) => x.id === "tcas")!;
  return <ProjectDetailPage p={p} />;
}
