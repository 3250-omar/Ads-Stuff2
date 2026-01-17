import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "project-1",
    title: "Project 1",
    description: "Digital Marketing Campaign for a premium fashion brand.",
    fullDescription:
      "A comprehensive digital marketing campaign focused on brand awareness and conversion optimization. We utilized multi-channel advertising and data-driven insights to achieve record-breaking results.",
    image: "/imgs/1.jpeg",
    media: [
      { type: "image", url: "/imgs/1.jpeg" },
      { type: "image", url: "/imgs/2.jpeg" },
      { type: "image", url: "/imgs/3.jpeg" },
    ],
    link: "/projects/project-1",
    status: "finished",
    tags: ["Marketing", "Fashion", "Social Media"],
    challenges: [
      "Low brand awareness in the EMEA region.",
      "High customer acquisition costs on traditional platforms.",
      "Fragmented brand messaging across different social channels.",
    ],
    solutions: [
      "Implemented a hyper-targeted meta-advertising strategy.",
      "Created high-end visual content tailored for Instagram and TikTok.",
      "Developed a unified brand voice and messaging framework.",
    ],
    results: [
      "300% increase in brand mentions across social media.",
      "40% reduction in customer acquisition cost (CAC).",
      "Record-breaking sales during the summer collection launch.",
    ],
  },
  {
    id: "project-2",
    title: "Project 2",
    description:
      "Developing a modern E-commerce platform with GSAP animations.",
    fullDescription:
      "An interactive e-commerce platform designed to provide a seamless and engaging shopping experience. The project focused on high performance, responsive design, and smooth user interactions.",
    image: "/imgs/2.jpeg",
    media: [
      { type: "image", url: "/imgs/2.jpeg" },
      { type: "image", url: "/imgs/1.jpeg" },
      { type: "image", url: "/imgs/3.jpeg" },
    ],
    link: "/projects/project-2",
    status: "inprogress",
    tags: ["E-commerce", "Web Development", "GSAP"],
    challenges: [
      "Slow page load times on the existing platform.",
      "Poor mobile user experience leading to cart abandonment.",
      "Lack of interactive elements to showcase premium products.",
    ],
    solutions: [
      "Built a custom Next.js application for ultimate performance.",
      "Integrated GSAP for smooth page transitions and micro-interactions.",
      "Optimized the checkout flow for mobile-first users.",
    ],
    results: [
      "Currently in development with promising initial beta feedback.",
      "50% faster page loads compared to the previous system.",
    ],
  },
  {
    id: "project-3",
    title: "Project 3",
    description: "Social Media Strategy for an innovative tech startup.",
    fullDescription:
      "A strategic social media initiative designed to position the startup as a leader in its niche. We focused on community building and thought leadership content.",
    image: "/imgs/3.jpeg",
    media: [
      { type: "image", url: "/imgs/3.jpeg" },
      { type: "image", url: "/imgs/2.jpeg" },
      { type: "image", url: "/imgs/1.jpeg" },
    ],
    link: "/projects/project-3",
    status: "finished",
    tags: ["Social Media", "Tech", "Branding"],
    challenges: [
      "Highly competitive niche with established players.",
      "Limited budget for expensive ad campaigns.",
      "Need to build trust quickly with new users.",
    ],
    solutions: [
      "Focused on organic growth through high-value educational content.",
      "Leveraged community engagement strategies and influencer partnerships.",
      "Created a consistent and relatable brand personality.",
    ],
    results: [
      "Gained 10k+ organic followers in the first 3 months.",
      "Established as a top-3 influential voice in the niche.",
    ],
  },
  {
    id: "project-4",
    title: "Project 4",
    description: "Brand Identity Design for a new coffee chain.",
    fullDescription:
      "A complete visual identity package including logo design, color palette, and packaging for a modern specialty coffee brand.",
    image: "/imgs/1.jpeg",
    media: [
      { type: "image", url: "/imgs/1.jpeg" },
      { type: "image", url: "/imgs/2.jpeg" },
    ],
    link: "/projects/project-4",
    status: "inprogress",
    tags: ["Design", "Branding", "Identity"],
    challenges: [
      "Creating a unique look in a saturated coffee market.",
      "Ensuring the brand feels premium yet accessible.",
    ],
    solutions: [
      "Developed a minimalist and modern visual language.",
      "Chose a warm, earthy color palette to evoke comfort.",
    ],
    results: [
      "Brand identity finalized and ready for the first store opening.",
    ],
  },
  {
    id: "project-5",
    title: "Project 5",
    description: "Video Production for a major automotive brand.",
    fullDescription:
      "A series of high-quality promotional videos showcasing the features and lifestyle associated with a new electric vehicle model.",
    image: "/imgs/2.jpeg",
    media: [
      { type: "image", url: "/imgs/2.jpeg" },
      { type: "image", url: "/imgs/3.jpeg" },
    ],
    link: "/projects/project-5",
    status: "inprogress",
    tags: ["Video", "Automotive", "Content Creation"],
    challenges: [
      "Capturing the dynamic performance of the electric vehicle.",
      "Telling a compelling story about sustainability and luxury.",
    ],
    solutions: [
      "Utilized advanced drone cinematography and CGI.",
      "Focused on lifestyle-oriented storytelling.",
    ],
    results: [
      "Production is 80% complete, scheduled for global launch next month.",
    ],
  },
  {
    id: "project-6",
    title: "Project 6",
    description: "Mobile App UI/UX for a fitness tracking startup.",
    fullDescription:
      "A user-centric mobile application designed to simplify fitness tracking and provide personalized coaching insights.",
    image: "/imgs/3.jpeg",
    media: [
      { type: "image", url: "/imgs/3.jpeg" },
      { type: "image", url: "/imgs/1.jpeg" },
    ],
    link: "/projects/project-6",
    status: "finished",
    tags: ["UI/UX", "Fitness", "Mobile App"],
    challenges: [
      "Simplifying complex health data for everyday users.",
      "Creating a motivating and habitual user experience.",
    ],
    solutions: [
      "Designed a clean dashboard with gamified elements.",
      "Implemented smart notification systems based on user behavior.",
    ],
    results: [
      "Rated 4.8 stars on the App Store during initial launch.",
      "High user retention rate in the first 30 days.",
    ],
  },
];
