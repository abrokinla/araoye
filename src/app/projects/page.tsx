"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { webDevProjects, dataScienceProjects, dataAnalysisProjects } from "@/lib/projects-data";
import { CodeXml, BrainCircuit, ChartPie, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import type { Project } from "@/components/projects-section";

const tabs = [
  { id: "all", label: "All Projects", icon: <Layers className="h-4 w-4" /> },
  { id: "web-dev", label: "Web Dev", icon: <CodeXml className="h-4 w-4" /> },
  { id: "data-science", label: "Data Science", icon: <BrainCircuit className="h-4 w-4" /> },
  { id: "data-analysis", label: "Data Analysis", icon: <ChartPie className="h-4 w-4" /> },
] as const;

type TabId = (typeof tabs)[number]["id"];

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<TabId>("all");

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full bg-background py-24 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-primary">
                Projects
              </span>
              <h1 className="font-headline mt-4 text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl">
                Selected Work
              </h1>
              <p className="mt-4 text-lg text-foreground/80 md:text-xl">
                Browse projects across full-stack web development, data science, and data analysis.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveTab(tab.id)}
                className="flex items-center gap-2"
              >
                {tab.icon}
                {tab.label}
              </Button>
            ))}
          </div>
        </div>

        {(activeTab === "all" || activeTab === "web-dev") && (
          <ProjectsSection
            id="web-dev"
            title="Web Development Projects"
            description="From dynamic web applications to robust back-end systems, here are some of the projects I've brought to life."
            projects={webDevProjects}
            icon={<CodeXml className="h-8 w-8 text-primary" />}
          />
        )}

        {(activeTab === "all" || activeTab === "data-science") && (
          <ProjectsSection
            id="data-science"
            title="Data Science & Machine Learning Projects"
            description="Leveraging Python and its ecosystem to build predictive models and uncover patterns in complex datasets."
            projects={dataScienceProjects}
            icon={<BrainCircuit className="h-8 w-8 text-primary" />}
          />
        )}

        {(activeTab === "all" || activeTab === "data-analysis") && (
          <ProjectsSection
            id="data-analysis"
            title="Data Analysis & Dashboards"
            description="Reports, dashboards, and exploratory analyses across business and marketing domains."
            projects={dataAnalysisProjects}
            icon={<ChartPie className="h-8 w-8 text-primary" />}
          />
        )}

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
