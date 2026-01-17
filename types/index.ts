export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  image: string; // Featured image
  media?: {
    type: "image" | "video";
    url: string;
  }[];
  link: string;
  status: string;
  tags?: string[];
  challenges?: string[];
  solutions?: string[];
  results?: string[];
}
