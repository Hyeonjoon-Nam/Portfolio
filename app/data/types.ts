// app/data/types.ts

export type Media = {
  type: "youtube" | "video";
  src: string;
};

export type Link = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  title: string;
  tagline?: string;
  thumb: string;
  description: string;

  // content
  roles: string[];
  challenges: string[];

  // optional media & assets
  media?: Media[];
  images?: string[];
  links?: Link[];

  // NEW: Team Info (optional fields)
  role?: string;   // e.g., "Tech Lead"
  team?: string;   // e.g., "Tech 4 / Art 5 / Design 4 — 13 total"
  tools?: string;  // e.g., "Unreal Engine 5, Behavior Tree, Perforce"
};
