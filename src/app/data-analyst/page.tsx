import type { Metadata } from 'next';
import { Header } from "@/components/header";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { dataAnalysisProjects } from "@/lib/projects-data";
import { BarChart3 } from "lucide-react";
import { RoleHero } from "@/components/role-hero";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: 'Data Analysis Projects | Araoye Abraham',
  description: 'Explore Araoye Abraham\'s data analysis projects. Transforming raw data into compelling stories and actionable business insights using powerful visualization and analytical tools.',
  keywords: ['data analysis', 'data analyst', 'business intelligence', 'data visualization', 'Python', 'SQL', 'Tableau', 'Power BI', 'portfolio projects'],
  openGraph: {
    title: 'Data Analysis Projects | Araoye Abraham',
    description: 'Explore Araoye Abraham\'s data analysis projects. Transforming raw data into compelling stories and actionable business insights.',
    url: 'https://araoye.pro/data-analyst',
    siteName: 'Araoye Abraham Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Data Analysis Projects | Araoye Abraham',
    description: 'Explore Araoye Abraham\'s data analysis projects.',
  },
  alternates: {
    canonical: 'https://araoye.pro/data-analyst',
  },
};

export default function DataAnalystPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <RoleHero
          id="data-analyst"
          label="Data Analyst"
          title="Finding Stories in"
          highlight="Data"
          description="I uncover trends, patterns, and insights from complex datasets to drive informed business decisions. I transform raw data into clear, actionable, and visually compelling stories."
          icon={<BarChart3 className="h-20 w-20" />}
          gradientStyle={{ from: "#FF7043", to: "#1A237E" }}
        />
        <ProjectsSection 
          id="projects"
          title="Data Analysis Projects"
          description="Transforming raw data into compelling stories and actionable insights using powerful visualization tools."
          projects={dataAnalysisProjects}
          icon={<BarChart3 className="h-8 w-8 text-primary" />}
        />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
