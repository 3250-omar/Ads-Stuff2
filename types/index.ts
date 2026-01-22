export interface Project {
  id: number;
  title: string;
  description: string;
  // fullDescription?: string;
  // image: string; // Featured image
  // media?: {
  //   type: "image" | "video";
  //   url: string;
  // }[];
  // link: string;
  status: string;
  tags?: string[];
  project_challenges?: string[];
  solutions?: string[];
  project_results?: string[];
  project_media?:string[]
  overview?:string;
  social_media?:string[]
  behance_link?:string
}
