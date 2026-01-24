# Ads & Stuff

A modern, high-performance portfolio website for **Ads & Stuff**, a digital advertising agency specializing in visual storytelling and creative content. Built with **Next.js 15+**, **Ant Design**, and **Supabase**.

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI Component Library**: [Ant Design (v6)](https://ant.design/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Backend & Database**: [Supabase](https://supabase.com/)
- **State Management & Data Fetching**: [TanStack Query](https://tanstack.com/query/latest)
- **Animations**: [GSAP](https://gsap.com/) & CSS Animations
- **Email Service**: [EmailJS](https://www.emailjs.com/)

## 📂 Project Structure

```bash
├── app/
│   ├── _comp/sections/   # Main landing page sections (Hero, Skills, Projects, etc.)
│   ├── api/              # API hooks and queries
│   ├── layout.tsx        # Root layout with Providers and AntD Config
│   └── page.tsx          # Main entry point
├── components/           # Reusable UI components (NavBar, Footer, etc.)
├── constants/            # Static data and assets
├── lib/                  # Library configurations (e.g., AntdRegistry)
├── utils/                # Utility functions
│   └── supabase/         # Supabase client configuration
└── public/               # Static assets
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Yarn, npm, or pnpm

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/3250-omar/Ads-Stuff2.git
   cd web
   ```

2. **Install dependencies:**

   ```bash
   yarn install
   # or
   npm install
   ```

3. **Configure Environment Variables:**

   Create a `.env.local` file in the root directory and add the following keys:

   ```env
   # Supabase Configuration
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

   # EmailJS Configuration (Contact Form)
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   NEXT_PUBLIC_EMAILJS_TO_EMAIL=your_receiving_email
   ```

4. **Run the development server:**

   ```bash
   yarn dev
   # or
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## ✨ Features

- **Dynamic Content**: Projects, Feedbacks, and Customer data are fetched dynamically from Supabase.
- **Responsive Design**: Fully responsive layout optimized for all devices using Tailwind CSS and Ant Design Grid.
- **Contact Form**: Functional contact form powered by EmailJS.
- **Hero Section**: Dynamic media fetching (images/videos) from Supabase Storage.
- **Performance**: Optimized with React Query for caching and efficient data fetching.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.
