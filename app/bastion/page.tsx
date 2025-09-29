import { projects } from "../data/projects";
import ProjectDetailPage from "../components/ProjectDetailPage";

export const metadata = {
  title: "Bastion — Hyeonjoon Nam",
  description: "Student tower-defense showcase with data structuring and pathfinding.",
  openGraph: {
    title: "Bastion — Hyeonjoon Nam",
    description: "Student tower-defense showcase with data structuring and pathfinding.",
    images: ["/projects/bastion/thumbs/thumb-1.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bastion — Hyeonjoon Nam",
    description: "Student tower-defense showcase with data structuring and pathfinding.",
    images: ["/projects/bastion/thumbs/thumb-1.webp"],
  },
};

export default function BastionPage() {
  const p = projects.find((x) => x.id === "bastion")!;
  return <ProjectDetailPage p={p} />;
}
