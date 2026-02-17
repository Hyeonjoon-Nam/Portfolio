export interface Project {
  id: string;
  title: string;
  thumb: string;
  tagline: string;
  description: string;
  role: string;
  team: string;
  tools: string;
  roles: string[];
  links: { label: string; href: string }[];
  featured: boolean; // New field for filtering Main vs. Other projects
  
  // Optional fields for detail pages
  media?: { type: "youtube" | "video"; src: string }[];
  images?: string[];
  challenges?: string[];
}