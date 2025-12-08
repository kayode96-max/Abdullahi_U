![site-banner](/public/static/images/twitter-card.png)

# Abdullahi Usman - Personal Portfolio & Blog

[![GitHub Repo stars](https://img.shields.io/github/stars/kayode96-max/Abdullahi_U?style=social)](https://github.com/kayode96-max/Abdullahi_U/stargazers/)
[![GitHub forks](https://img.shields.io/github/forks/kayode96-max/Abdullahi_U?style=social)](https://github.com/kayode96-max/Abdullahi_U/network/)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/kayode96-max/Abdullahi_U)

> A full-stack personal portfolio and blog built with Next.js 14, TypeScript, Tailwind CSS, and modern web technologies.

## 🚀 Overview

This is a production-ready personal portfolio and blog application featuring authentication, content management, real-time integrations, and a beautiful, responsive UI. Built on the Next.js App Router with React Server Components and powered by Contentlayer for seamless markdown/MDX content handling.

**Live Demo:** [https://abdullahi-u.vercel.app](https://abdullahi-u.vercel.app)

## ✨ Key Features

### 🎨 Frontend & UI
- **Next.js 14** with TypeScript and App Router
- **Tailwind CSS** for styling with custom design system
- **ShadCN UI** components for consistent, accessible UI
- **Framer Motion** for smooth animations
- **Dark/Light theme** with system preference detection
- **Responsive design** - mobile-first approach
- **Font optimization** with next/font
- Near-perfect **Lighthouse scores**

### 📝 Content Management
- **Contentlayer** for type-safe markdown/MDX content
- **MDX support** - write JSX in markdown documents
- **Server-side syntax highlighting** with line numbers via rehype-prism-plus
- **Math equations** support via KaTeX
- **Citation & bibliography** support via rehype-citation
- **GitHub-style alerts** via remark-github-blockquote-alert
- **Multiple blog layouts** and listing styles
- **Tag-based organization** with dedicated tag pages
- **Nested routing** for blog posts
- **Table of contents** auto-generation

### 🔐 Authentication & Database
- **NextAuth.js v5** (Auth.js) for authentication
- **Prisma ORM** with MongoDB
- **Email magic links** via Resend
- **OAuth providers**: GitHub, Google
- **Credentials authentication** with bcrypt
- **Protected routes** and middleware
- **User registration** and profile management

### 🎯 Features & Integrations
- **Spotify Integration** - Show now playing and top tracks
- **GitHub API** - Fetch and display repository data
- **Blog post likes** with optimistic UI updates
- **Page view tracking** for analytics
- **Newsletter subscription** via Resend
- **Comment system** via Giscus (GitHub Discussions)
- **Analytics** via Umami
- **RSS feed** generation
- **Sitemap** auto-generation
- **Search functionality** with tag filtering

### 🛠️ Developer Experience
- **TypeScript** for type safety
- **ESLint** and **Prettier** for code quality
- **Husky** for git hooks
- **Environment validation** with t3-oss/env-nextjs
- **SEO optimized** with proper meta tags
- **Security headers** preconfigured
- **Image optimization** via next/image
- **API routes** for backend functionality


## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and Yarn
- MongoDB database (local or Atlas)
- (Optional) GitHub OAuth app
- (Optional) Google OAuth app
- (Optional) Resend API key for email
- (Optional) Spotify API credentials
- (Optional) Umami Analytics account

### 1. Clone and Install

```bash
# Clone the repository
git clone https://github.com/kayode96-max/Abdullahi_U.git
cd Abdullahi_U

# Install dependencies
yarn install
```

### 2. Environment Setup

Create a `.env.local` file in the root directory:

```bash
# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development

# Authentication (Required)
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-here  # Generate with: openssl rand -base64 32

# Database (Required)
DATABASE_URL=mongodb://localhost:27017/myapp

# OAuth Providers (Optional)
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Email Authentication (Optional)
AUTH_RESEND_KEY=your-resend-api-key
AUTH_RESEND_EMAIL_FROM=noreply@yourdomain.com

# Spotify Integration (Optional)
SPOTIFY_CLIENT_ID=your-spotify-client-id
SPOTIFY_CLIENT_SECRET=your-spotify-client-secret
SPOTIFY_REFRESH_TOKEN=your-spotify-refresh-token

# GitHub API (Optional)
GITHUB_API_TOKEN=your-github-token

# Analytics (Optional)
NEXT_UMAMI_ID=your-umami-website-id

# Comments via Giscus (Optional)
NEXT_PUBLIC_GISCUS_REPO=your-username/your-repo
NEXT_PUBLIC_GISCUS_REPOSITORY_ID=your-repo-id
NEXT_PUBLIC_GISCUS_CATEGORY=Announcements
NEXT_PUBLIC_GISCUS_CATEGORY_ID=your-category-id
```

### 3. Prisma Setup

```bash
# Generate Prisma Client
yarn prisma generate

# (Optional) Push schema to database
yarn prisma db push
```

### 4. Personalize Content

- **Site metadata**: Edit `data/siteMetadata.js`
- **Author info**: Modify `data/authors/default.mdx`
- **Navigation**: Update `data/navLinks.ts`
- **Projects**: Edit `data/mainData.ts`
- **Blog posts**: Add MDX files to `data/blog/`

### 5. Run Development Server

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 6. Build for Production

```bash
yarn build
yarn serve
```

## 📦 Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/kayode96-max/Abdullahi_U)

### Deployment Steps

1. **Push your code to GitHub**

2. **Import to Vercel**
   - Go to [Vercel](https://vercel.com/new)
   - Import your repository
   - Configure environment variables

3. **Set Environment Variables**
   ```
   NEXTAUTH_URL=https://your-domain.vercel.app
   NEXTAUTH_SECRET=<your-generated-secret>
   NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
   NODE_ENV=production
   DATABASE_URL=<your-mongodb-connection-string>
   ```

4. **Deploy**
   - Click Deploy and wait for the build to complete

### Environment Variables on Vercel

Add all required environment variables in your Vercel project settings:
- Go to **Settings** → **Environment Variables**
- Add variables for **Production**, **Preview**, and **Development**
- Redeploy after adding variables

## 🎨 Customization Guide

### Site Configuration
- **`data/siteMetadata.js`** - Site title, description, author info, social links
- **`data/navLinks.ts`** - Navigation menu links
- **`data/mainData.ts`** - Projects, technologies, experience data
- **`data/authors/default.mdx`** - Author biography and info
- **`data/resume/default.mdx`** - Resume/CV content

### Styling
- **`tailwind.config.js`** - Tailwind configuration and theme
- **`css/tailwind.css`** - Custom Tailwind styles
- **`css/globals.css`** - Global styles and ShadCN theme variables
- **`css/prism.css`** - Code block syntax highlighting theme

### Content
- **`data/blog/`** - Add your blog posts as MDX files
- **`public/static/`** - Images, favicons, and other static assets
- **`public/static/site/`** - Logo variations

### Advanced
- **`contentlayer.config.ts`** - Content schema and MDX plugin configuration
- **`auth.config.ts`** - Authentication providers and callbacks
- **`middleware.ts`** - Route protection and middleware logic
- **`components/`** - React components for UI elements

## 🛠️ Tech Stack

### Core
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS
- **[ShadCN UI](https://ui.shadcn.com/)** - Component library

### Content & Data
- **[Contentlayer](https://contentlayer.dev/)** - Content SDK for type-safe MDX
- **[MDX](https://mdxjs.com/)** - Markdown with JSX components
- **[Prisma](https://www.prisma.io/)** - Database ORM
- **[MongoDB](https://www.mongodb.com/)** - NoSQL database

### Authentication
- **[NextAuth.js v5](https://authjs.dev/)** - Authentication solution
- OAuth providers: GitHub, Google
- Email authentication via Resend

### Integrations
- **[Spotify API](https://developer.spotify.com/)** - Now playing widget
- **[GitHub API](https://docs.github.com/en/rest)** - Repository data
- **[Resend](https://resend.com/)** - Email service
- **[Umami Analytics](https://umami.is/)** - Privacy-focused analytics
- **[Giscus](https://giscus.app/)** - Comments powered by GitHub Discussions

### Developer Tools
- **[Prettier](https://prettier.io/)** - Code formatting
- **[ESLint](https://eslint.org/)** - Code linting
- **[Husky](https://typicode.github.io/husky/)** - Git hooks

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── (landing)/         # Public pages (blog, projects, about)
│   ├── api/               # API routes
│   ├── bits/              # Code snippets/tools section
│   └── x/                 # Additional features
├── components/            # React components
│   ├── ui/               # ShadCN UI components
│   ├── landing/          # Landing page components
│   ├── auth/             # Authentication components
│   ├── mdx/              # MDX components
│   └── shared/           # Shared/common components
├── data/                 # Content and configuration
│   ├── blog/            # Blog posts (MDX)
│   ├── authors/         # Author profiles
│   ├── resume/          # Resume content
│   └── siteMetadata.js  # Site configuration
├── layouts/             # Page layouts
│   ├── PostLayout.tsx  # Default blog post layout
│   ├── PostSimple.tsx  # Simplified post layout
│   └── PostBanner.tsx  # Post layout with banner
├── lib/                  # Utility functions and configs
├── prisma/              # Database schema
├── public/              # Static assets
└── types/               # TypeScript type definitions
```

## 📝 Content Management

Content is powered by [Contentlayer](https://contentlayer.dev/), providing type-safe MDX content with automatic validation.

### Blog Post Layouts

Three layouts available:
- **`PostLayout`** - Default 2-column layout with metadata and author info
- **`PostSimple`** - Simplified single-column layout
- **`PostBanner`** - Layout with featured banner image

### Blog Listing Layouts

- **`ListLayout`** - Classic layout with search functionality
- **`ListLayoutWithTags`** - Modern layout with tag sidebar

### Frontmatter Schema

```yaml
---
title: 'Your Post Title'           # Required
date: '2024-01-15'                 # Required
tags: ['nextjs', 'react']          # Optional
lastmod: '2024-01-16'              # Optional
draft: false                       # Optional (true hides post)
summary: 'Brief description'       # Optional
images: ['/static/img.jpg']        # Optional
authors: ['default']               # Optional (defaults to 'default')
layout: PostLayout                 # Optional (PostLayout, PostSimple, PostBanner)
canonicalUrl: 'https://...'        # Optional (for SEO)
---
```

### Custom MDX Components

Add custom React components in `components/MDXComponents.tsx` and use them directly in MDX files. Built-in components:
- Custom `Link` component for internal navigation
- Optimized `Image` component via `next/image`
- Table of contents
- Newsletter subscription form

## 🔌 API Routes

- **`/api/auth/*`** - NextAuth.js authentication endpoints
- **`/api/blog/[slug]`** - Blog post view counter
- **`/api/email`** - Email sending via Resend
- **`/api/github/repo/[owner]/[repo]`** - Fetch GitHub repository data
- **`/api/newsletter`** - Newsletter subscription handler
- **`/api/spotify/now-playing`** - Currently playing Spotify track
- **`/api/views`** - Page view analytics

## 🐛 Troubleshooting

### Prisma Issues
```bash
# Clear Prisma cache and regenerate client
rm -rf node_modules/.prisma
yarn prisma generate
```

### Node.js Compatibility
Requires Node.js 18+. If you encounter `assert` syntax errors with Node.js 25, ensure the `postbuild` script is removed from `package.json`.

### Windows Path Issues
Scripts use `%CD%` for Windows compatibility. On Unix/Linux, change to `$PWD` in `package.json`.

### Build Errors
```bash
# Clean install and rebuild
rm -rf node_modules .next
yarn install
yarn build
```

### Database Connection
Ensure `DATABASE_URL` is set in `.env.local`. The app gracefully handles missing database connections for static content.

## 📚 Documentation

### Configuration Files
- **`next.config.js`** - Next.js configuration, CSP headers, redirects
- **`contentlayer.config.ts`** - Content schema and MDX plugin config
- **`tailwind.config.js`** - Tailwind theme and plugin configuration
- **`tsconfig.json`** - TypeScript compiler options

### Additional Resources
- [FAQ - Custom MDX Components](/faq/custom-mdx-component.md)
- [FAQ - Customize kbar Search](/faq/customize-kbar-search.md)
- [FAQ - GitHub Pages Deployment](/faq/github-pages-deployment.md)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

[MIT](https://github.com/kayode96-max/Abdullahi_U/blob/main/LICENSE) © [Abdullahi Usman](https://abdullahi-bfdhcrdhi-abdullahi-usmans-projects-58e45ce7.vercel.app/)

## 🙏 Acknowledgments

This project builds upon excellent open-source work:
- [timlrx/tailwind-nextjs-starter-blog](https://github.com/timlrx/tailwind-nextjs-starter-blog) - Base template
- [andrew-sameh/andrewsam.xyz](https://github.com/andrew-sameh/andrewsam.xyz) - Template inspiration
- [leohuynh.dev](https://www.leohuynh.dev/resume/) - Resume section design
- [tamminen](https://sketchfab.com/tamminen) - 3D GLB models

---

<div align="center">
  <strong>Built with ❤️ using Next.js 14, TypeScript, and Tailwind CSS</strong>
</div>
