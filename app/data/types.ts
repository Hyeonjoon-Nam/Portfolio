export type Media = { type: "youtube" | "video"; src: string };

export type Project = {
  id: "suspense-defense" | "tcas" | "they-are" | "bastion";
  title: string;
  tagline: string;
  description: string;     // What is this game?
  roles: string[];         // My Role
  challenges: string[];    // Challenges & Solutions (요약)
  media: Media[];          // youtube id or /videos/clip-8s.mp4
  images: string[];        // /images/shot-*.webp
  thumb: string;           // /thumbs/thumb-1.webp
  links?: { label: string; href: string }[];
};
