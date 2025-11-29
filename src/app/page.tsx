import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { CodeXml, BarChart3, BrainCircuit, Linkedin, Github, Mail, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const roles = [
  {
    title: "Web Developer",
    description: "Building dynamic, responsive, and user-friendly web applications from front to back.",
    icon: <CodeXml className="h-8 w-8 text-primary" />,
    href: "/web-dev"
  },
  {
    title: "Data Analyst",
    description: "Transforming raw data into compelling stories and actionable business insights.",
    icon: <BarChart3 className="h-8 w-8 text-primary" />,
    href: "/data-analyst"
  },
  {
    title: "Data Scientist",
    description: "Using machine learning and statistical modeling to build predictive solutions.",
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    href: "/data-science"
  }
];


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <section id="roles" className="w-full bg-secondary/50 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto mb-12 max-w-2xl text-center">
               <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Explore My Roles</h2>
               <p className="mt-4 text-foreground/80">I wear multiple hats. Dive into the specific roles I play and the projects I've built for each.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {roles.map((role) => (
                <Card key={role.title} className="flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                  <CardHeader>
                    <div className="mb-4 flex justify-center">{role.icon}</div>
                    <CardTitle className="text-center font-headline text-2xl">{role.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardDescription className="text-center text-base">{role.description}</CardDescription>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Button asChild className="w-full">
                      <Link href={role.href}>
                        View Projects <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
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