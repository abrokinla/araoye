import { Header } from "@/components/header";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { dataScienceProjects } from "@/lib/projects-data";
import { BrainCircuit, Linkedin, Github, Mail, ArrowDown } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";


function DataScienceHero() {
  const aboutImage = PlaceHolderImages.find((p) => p.id === "about-me")!;

  return (
    <section id="hero-data-science" className="w-full bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid min-h-[calc(100vh-4rem)] items-center gap-8 lg:grid-cols-2">
          <div className="order-2 space-y-6 lg:order-1">
            <div className="space-y-4">
              <span className="font-semibold uppercase tracking-wider text-primary">Data Scientist & ML Engineer</span>
              <h1 className="font-headline text-5xl font-extrabold tracking-tighter sm:text-6xl md:text-7xl">
                Predicting the Future with Data
              </h1>
              <p className="max-w-2xl text-lg text-foreground/80 md:text-xl">
                I build and deploy machine learning models that solve real-world problems. From credit risk assessment to customer segmentation, I use data to make intelligent predictions.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
          <div className="order-1 flex justify-center lg:order-2">
             <div className="relative h-[400px] w-[400px] lg:h-[500px] lg:w-[500px]">
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
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <Link href="#projects" aria-label="Scroll to projects section">
          <ArrowDown className="h-8 w-8 animate-bounce text-primary" />
        </Link>
      </div>
    </section>
  );
}

export default function DataSciencePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <DataScienceHero />
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

function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row md:px-6">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Araoye Abraham. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/in/araoye-abraham/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="https://github.com/abrokinla" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary transition-colors">
            <Github className="h-5 w-5" />
          </a>
          <a href="mailto:araoye.abraham@gmail.com" aria-label="Email" className="hover:text-primary transition-colors">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}