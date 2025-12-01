# Araoye - Portfolio Website

A modern, responsive portfolio website showcasing web development, data analysis, and data science projects. Built with cutting-edge technologies and deployed on Cloudflare Pages.

## 🚀 Live Demo

[View Live Site](https://araoye.pages.dev)

## ✨ Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Project Showcase**: Dedicated sections for web development, data analysis, and data science projects
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **Fast Performance**: Next.js static export for optimal loading speeds
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Icons**: Lucide React
- **Deployment**: Cloudflare Pages
- **Image Optimization**: Next.js Image component with external providers

## 📁 Project Structure

```
araoye/
├── src/
│   ├── app/                 # Next.js app router pages
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # shadcn/ui components
│   │   └── *-section.tsx   # Page sections
│   ├── hooks/              # Custom React hooks
│   └── lib/                # Utilities and data
├── public/                 # Static assets
└── wrangler.toml          # Cloudflare Pages config
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/abrokinla/araoye.git
   cd araoye
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:9002](http://localhost:9002)

### Build for Production

```bash
npm run build
```

The static files will be generated in the `out/` directory.

## 📦 Deployment

This project is configured for deployment on Cloudflare Pages:

### Automatic Deployment (Recommended)

1. Connect your GitHub repository to Cloudflare Pages
2. Set build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Root directory**: `/`
3. Deploy automatically on every push to `main` branch

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy to Cloudflare Pages
npx wrangler pages deploy out/
```

## 🎨 Customization

### Adding New Projects

Edit `src/lib/projects-data.ts` to add new projects:

```typescript
{
  title: "Your Project Name",
  description: "Project description",
  image: PlaceHolderImages.find(p => p.id === 'your-image-id'),
  tags: ["Technology 1", "Technology 2"],
  liveUrl: "https://your-project-url.com",
  sourceUrl: "https://github.com/your-repo"
}
```

### Modifying Theme

The theme is configured in `src/components/theme-provider.tsx`. Colors and styles can be customized in `tailwind.config.ts`.

### Adding Images

Add new images to `src/lib/placeholder-images.json` with the required format:

```json
{
  "id": "unique-image-id",
  "description": "Image description for accessibility",
  "imageUrl": "https://image-url.com/image.jpg",
  "imageHint": "ai-generated description"
}
```

## 📊 Project Sections

- **Home**: Hero section with introduction and navigation
- **Web Development**: Showcase of full-stack applications
- **Data Analysis**: Business intelligence and analytics projects
- **Data Science**: Machine learning and AI projects
- **About**: Personal background and skills
- **Contact**: Contact form and social links

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Araoye Abraham**
- GitHub: [@abrokinla](https://github.com/abrokinla)
- LinkedIn: www.linkedin.com/in/araoye-abraham-dev
- Email: abrokinla@example.com

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework used
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful UI components
- [Cloudflare Pages](https://pages.cloudflare.com/) - Hosting platform

---

⭐ **Star this repo** if you found it helpful!
