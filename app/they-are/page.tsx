import { projects } from "../data/projects";
import ProjectDetailPage from "../components/ProjectDetailPage";

export const metadata = {
  title: "They Are — Hyeonjoon Nam",
  description: "Custom-engine gameplay showcase with ImGui tools and loop stability.",
  openGraph: {
    title: "They Are — Hyeonjoon Nam",
    description: "Custom-engine gameplay showcase with ImGui tools and loop stability.",
    images: ["/projects/they-are/thumbs/thumb-1.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "They Are — Hyeonjoon Nam",
    description: "Custom-engine gameplay showcase with ImGui tools and loop stability.",
    images: ["/projects/they-are/thumbs/thumb-1.webp"],
  },
};

export default function TheyArePage() {
  const p = projects.find((x) => x.id === "they-are")!;
  return <ProjectDetailPage p={p} />;
}
