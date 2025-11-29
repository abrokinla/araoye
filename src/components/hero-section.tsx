import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  const aboutImage = PlaceHolderImages.find((p) => p.id === "about-me")!;
  
  return (
    <section id="hero" className="w-full bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid min-h-[calc(100vh-4rem)] items-center gap-8 lg:grid-cols-2">
          <div className="order-2 space-y-6 lg:order-1">
            <div className="space-y-4">
              <span className="font-semibold uppercase tracking-wider text-primary">Full-Stack Developer & Data Scientist</span>
              <h1 className="font-headline text-5xl font-extrabold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
                Araoye Abraham
              </h1>
              <p className="max-w-2xl text-lg text-foreground/80 md:text-xl">
                I design and build beautiful, responsive web applications and extract meaningful insights from data.
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
        <Link href="#about" aria-label="Scroll to about section">
          <ArrowDown className="h-8 w-8 animate-bounce text-primary" />
        </Link>
      </div>
    </section>
  );
}
