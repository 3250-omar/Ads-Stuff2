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
  project_media?: string[];
  overview?: string;
  behance_link?: string;
}

export interface Article {
  id: number;
  created_at: string;
  title: string;
  
  title_ar?: string;
  description: string;
  description_ar?: string;
  description_en?: string;
  content: string; // Markdown or Rich Text
  content_ar?: string;
  content_en?: string;
  slug: string;
  image_url: string;
  published_at: string;
  author?: string;
  tags?: string[];
  meta_title?: string;
  meta_title_ar?: string;
  meta_description?: string;
  meta_description_ar?: string;
  meta_keywords?: string[];
}
