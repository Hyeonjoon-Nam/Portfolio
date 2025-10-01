// app/bastion/page.tsx
import { projects } from "../data/projects";
import ProjectDetailPage from "../components/ProjectDetailPage";

export const metadata = {
  title: "Bastion — Hyeonjoon Nam",
  description:
    "Loop-route defense in a custom C++ engine with data-driven merge and state-based transitions.",
  openGraph: {
    title: "Bastion — Hyeonjoon Nam",
    description:
      "Loop-route defense with data-driven merge and state-based transitions, plus text-file parsing.",
    images: ["/projects/bastion/thumbs/thumb-1.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bastion — Hyeonjoon Nam",
    description:
      "Custom C++ engine project with data-driven merge, state transitions, and externalized stats.",
    images: ["/projects/bastion/thumbs/thumb-1.webp"],
  },
};

export default function BastionPage() {
  const p = projects.find((x) => x.id === "bastion")!;
  return <ProjectDetailPage p={p} />;
}
