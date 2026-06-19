"use client";

import React from "react";
import {
  CodeXml, BarChart3, BrainCircuit, Database, Wind,
  FileJson, Server, Cloud, GitBranch, Container,
  type LucideIcon
} from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";

type SkillCategory = {
  title: string;
  skills: { name: string; icon: LucideIcon; level: number }[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React / Next.js", icon: CodeXml, level: 95 },
      { name: "TypeScript", icon: FileJson, level: 90 },
      { name: "Tailwind CSS", icon: Wind, level: 95 },
      { name: "HTML / CSS", icon: CodeXml, level: 95 },
    ],
  },
  {
    title: "Backend & Data",
    skills: [
      { name: "Python", icon: Server, level: 95 },
      { name: "Django / FastAPI", icon: Server, level: 85 },
      { name: "PostgreSQL / SQL", icon: Database, level: 85 },
      { name: "REST APIs", icon: Cloud, level: 90 },
    ],
  },
  {
    title: "Data & ML",
    skills: [
      { name: "Power BI / Tableau", icon: BarChart3, level: 85 },
      { name: "Pandas / NumPy", icon: BrainCircuit, level: 80 },
      { name: "Scikit-learn", icon: BrainCircuit, level: 75 },
      { name: "NLP / EDA", icon: Database, level: 75 },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git / GitHub", icon: GitBranch, level: 90 },
      { name: "Docker", icon: Container, level: 70 },
      { name: "Cloudflare Workers", icon: Cloud, level: 75 },
      { name: "CI/CD", icon: GitBranch, level: 75 },
    ],
  },
];

function SkillBar({ name, Icon, level, delay }: { name: string; Icon: LucideIcon; level: number; delay: number }) {
  const { ref, isVisible } = { ref: React.useRef<HTMLDivElement>(null), isVisible: true };
  // Use a simpler approach for skill bars
  const [animated, setAnimated] = React.useState(false);
  const barRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setAnimated(true), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={barRef} className="space-y-1.5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-medium">
          <Icon className="h-4 w-4 text-primary" />
          <span>{name}</span>
        </div>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
          style={{ width: animated ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export function TechStackSection() {
  return (
    <section className="w-full bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Tech Stack</span>
            <h2 className="font-headline mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Tools & Technologies I Use
            </h2>
            <p className="mt-4 text-foreground/80">
              A curated overview of the technologies I work with daily to build and ship production-grade solutions.
            </p>
          </div>
        </AnimatedSection>
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {skillCategories.map((category, ci) => (
            <AnimatedSection key={category.title} delay={ci * 150}>
              <div className="rounded-xl border bg-card p-6 shadow-sm">
                <h3 className="font-headline mb-6 text-xl font-semibold">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, si) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      Icon={skill.icon}
                      level={skill.level}
                      delay={si * 100}
                    />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
