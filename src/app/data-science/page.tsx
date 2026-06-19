import type { Metadata } from 'next';
import { Header } from "@/components/header";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { dataScienceProjects } from "@/lib/projects-data";
import { BrainCircuit } from "lucide-react";
import { RoleHero } from "@/components/role-hero";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: 'Data Science & Machine Learning Projects | Araoye Abraham',
  description: 'Explore Araoye Abraham\'s data science and machine learning projects. Building predictive models and uncovering patterns in complex datasets using Python, scikit-learn, and advanced ML techniques.',
  keywords: ['data science', 'machine learning', 'artificial intelligence', 'Python', 'scikit-learn', 'predictive modeling', 'neural networks', 'portfolio projects'],
  openGraph: {
    title: 'Data Science & Machine Learning Projects | Araoye Abraham',
    description: 'Explore Araoye Abraham\'s data science and machine learning projects. Building predictive models and uncovering patterns in complex datasets.',
    url: 'https://araoye.pro/data-science',
    siteName: 'Araoye Abraham Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Data Science & Machine Learning Projects | Araoye Abraham',
    description: 'Explore Araoye Abraham\'s data science and machine learning projects.',
  },
  alternates: {
    canonical: 'https://araoye.pro/data-science',
  },
};

export default function DataSciencePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <RoleHero
          id="data-science"
          label="Data Scientist & ML Engineer"
          title="Predicting the Future with"
          highlight="Data"
          description="I build and deploy machine learning models that solve real-world problems. From credit risk assessment to customer segmentation, I use data to make intelligent predictions."
          icon={<BrainCircuit className="h-20 w-20" />}
          gradientStyle={{ from: "#1A237E", to: "#FF7043" }}
        />
        <ProjectsSection
          id="projects"
          title="Data Science & Machine Learning Projects"
          description="Leveraging Python and its ecosystem to build predictive models and uncover patterns in complex datasets."
          projects={dataScienceProjects}
          icon={<BrainCircuit className="h-8 w-8 text-primary" />}
        />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
