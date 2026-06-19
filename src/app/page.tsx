import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { TechStackSection } from "@/components/tech-stack-section";
import { Footer } from "@/components/footer";
import { SectionDivider } from "@/components/section-divider";
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
        <SectionDivider />
        <section id="roles" className="w-full bg-secondary/50 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto mb-12 max-w-2xl text-center">
               <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Explore My Roles</h2>
               <p className="mt-4 text-foreground/80">I wear multiple hats. Dive into the specific roles I play and the projects I've built for each.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {roles.map((role) => (
                <Card key={role.title} className="flex flex-col overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                  <CardHeader>
                    <div className="mb-4 flex justify-center transition-transform duration-300 group-hover:scale-110">{role.icon}</div>
                    <CardTitle className="text-center font-headline text-2xl">{role.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardDescription className="text-center text-base">{role.description}</CardDescription>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Button asChild className="w-full group">
                      <Link href={role.href}>
                        View Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <SectionDivider />
        <TechStackSection />
        <SectionDivider />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
