import type { Metadata } from 'next';
import { Header } from "@/components/header";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { webDevProjects } from "@/lib/projects-data";
import { CodeXml } from "lucide-react";
import { RoleHero } from "@/components/role-hero";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: 'Web Development Projects | Araoye Abraham',
  description: 'Explore Araoye Abraham\'s full-stack web development projects. From dynamic web applications to robust back-end systems, see examples of modern web technologies in action.',
  keywords: ['web development', 'full-stack developer', 'React', 'Next.js', 'JavaScript', 'web applications', 'portfolio projects'],
  openGraph: {
    title: 'Web Development Projects | Araoye Abraham',
    description: 'Explore Araoye Abraham\'s full-stack web development projects. From dynamic web applications to robust back-end systems.',
    url: 'https://araoye.pro/web-dev',
    siteName: 'Araoye Abraham Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development Projects | Araoye Abraham',
    description: 'Explore Araoye Abraham\'s full-stack web development projects.',
  },
  alternates: {
    canonical: 'https://araoye.pro/web-dev',
  },
};

export default function WebDevPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <RoleHero
          id="web-dev"
          label="Full-Stack Web Developer"
          title="Building Digital"
          highlight="Experiences"
          description="I specialize in creating robust, scalable, and user-friendly web applications. From the server-side logic to the client-side interactivity, I bring ideas to life on the web."
          icon={<CodeXml className="h-20 w-20" />}
          gradientStyle={{ from: "#1A237E", to: "#FF7043" }}
        />
        <ProjectsSection 
          id="projects"
          title="Web Development Projects"
          description="From dynamic web applications to robust back-end systems, here are some of the projects I've brought to life."
          projects={webDevProjects}
          icon={<CodeXml className="h-8 w-8 text-primary" />}
        />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
