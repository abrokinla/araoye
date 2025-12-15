import type { Metadata } from 'next';
import { Header } from "@/components/header";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { webDevProjects, dataScienceProjects, dataAnalysisProjects } from "@/lib/projects-data";
import { CodeXml, BrainCircuit, ChartPie } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export const metadata: Metadata = {
  title: 'Projects | Araoye Abraham',
  description: 'A consolidated view of Araoye Abraham\'s projects across Web Development, Data Science, and Data Analysis.',
  alternates: { canonical: 'https://araoye.pro/projects' },
};

function ProjectsHero() {
  const aboutImage = PlaceHolderImages.find((p) => p.id === "about-me")!;

  return (
    <section id="hero-projects" className="w-full bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid min-h-[calc(100vh-4rem)] items-center gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <span className="font-semibold uppercase tracking-wider text-primary">Projects</span>
            <h1 className="font-headline text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl">
              Selected Work
            </h1>
            <p className="max-w-2xl text-lg text-foreground/80 md:text-xl">
              Browse projects across full-stack web development, data science, and data analysis. Click into demos and source links to learn more.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="/projects" className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-white hover:opacity-90">View all projects</a>
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2">
            <div className="relative h-[360px] w-[360px] lg:h-[480px] lg:w-[480px]">
               <div className="absolute inset-0 -m-4 rounded-full bg-secondary"></div>
               <Image
                 src={aboutImage.imageUrl}
                 alt={aboutImage.description}
                 data-ai-hint={aboutImage.imageHint}
                 fill
                 className="relative z-10 rounded-full object-cover shadow-2xl"
               />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <ProjectsHero />

        <ProjectsSection
          id="web-dev"
          title="Web Development Projects"
          description="From dynamic web applications to robust back-end systems, here are some of the projects I've brought to life."
          projects={webDevProjects}
          icon={<CodeXml className="h-8 w-8 text-primary" />}
        />

        <ProjectsSection
          id="data-science"
          title="Data Science & Machine Learning Projects"
          description="Leveraging Python and its ecosystem to build predictive models and uncover patterns in complex datasets."
          projects={dataScienceProjects}
          icon={<BrainCircuit className="h-8 w-8 text-primary" />}
        />

        <ProjectsSection
          id="data-analysis"
          title="Data Analysis & Dashboards"
          description="Reports, dashboards, and exploratory analyses across business and marketing domains."
          projects={dataAnalysisProjects}
          icon={<ChartPie className="h-8 w-8 text-primary" />}
        />

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row md:px-6">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Araoye Abraham. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/in/araoye-abraham-dev/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors">
            <svg className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
