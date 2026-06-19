import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowDown, CodeXml, BarChart3, BrainCircuit } from "lucide-react";

export function HeroSection() {
  const aboutImage = PlaceHolderImages.find((p) => p.id === "about-me")!;

  return (
    <section id="hero" className="relative w-full overflow-hidden bg-background text-foreground">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 animate-pulse [animation-duration:8s]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

      {/* Floating decorative icons */}
      <div className="absolute right-[15%] top-20 hidden opacity-20 lg:block">
        <CodeXml className="h-16 w-16 text-primary animate-pulse [animation-duration:4s]" />
      </div>
      <div className="absolute bottom-32 left-[10%] hidden opacity-20 lg:block">
        <BarChart3 className="h-12 w-12 text-accent animate-pulse [animation-duration:5s]" />
      </div>
      <div className="absolute right-[20%] bottom-40 hidden opacity-20 lg:block">
        <BrainCircuit className="h-14 w-14 text-primary animate-pulse [animation-duration:6s]" />
      </div>

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid min-h-[calc(100vh-4rem)] items-center gap-8 lg:grid-cols-2">
          <div className="order-2 space-y-6 lg:order-1">
            <div className="space-y-4">
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-primary">
                Full-Stack Developer & Data Scientist
              </span>
              <h1 className="font-headline text-5xl font-extrabold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
                Araoye
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Abraham
                </span>
              </h1>
              <p className="max-w-2xl text-lg text-foreground/80 md:text-xl">
                I design and build beautiful, responsive web applications and extract meaningful insights from data.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="group">
                <Link href="/projects">
                  View My Work
                  <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
          <div className="order-1 flex justify-center lg:order-2">
            <div className="relative h-[350px] w-[350px] lg:h-[480px] lg:w-[480px]">
              <div className="absolute inset-0 -m-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20" />
              <div className="absolute inset-0 -m-2 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-3xl" />
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                data-ai-hint={aboutImage.imageHint}
                fill
                className="relative z-10 rounded-full object-cover shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <Link href="#about" aria-label="Scroll to about section">
          <ArrowDown className="h-8 w-8 animate-bounce text-primary" />
        </Link>
      </div>
    </section>
  );
}
