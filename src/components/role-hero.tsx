import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowDown, CodeXml, BarChart3, BrainCircuit, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type RoleHeroProps = {
  id: string;
  label: string;
  title: string;
  highlight: string;
  description: string;
  icon: ReactNode;
  gradientStyle: {
    from: string;
    to: string;
  };
};

export function RoleHero({
  id,
  label,
  title,
  highlight,
  description,
  icon,
  gradientStyle,
}: RoleHeroProps) {
  const aboutImage = PlaceHolderImages.find((p) => p.id === "about-me")!;

  return (
    <section id={`hero-${id}`} className="relative w-full overflow-hidden bg-background text-foreground">
      <div
        className="absolute inset-0 animate-pulse [animation-duration:8s]"
        style={{ background: `linear-gradient(to bottom right, ${gradientStyle.from}08, transparent, ${gradientStyle.to}08)` }}
      />
      <div
        className="absolute inset-0"
        style={{ background: `radial-gradient(ellipse at top right, ${gradientStyle.from}15, transparent 70%)` }}
      />

      <div className="absolute right-[15%] top-24 hidden opacity-10 lg:block">
        <div className="animate-pulse [animation-duration:4s]" style={{ color: gradientStyle.from }}>
          {icon}
        </div>
      </div>

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid min-h-[calc(100vh-4rem)] items-center gap-8 lg:grid-cols-2">
          <div className="order-2 space-y-6 lg:order-1">
            <div className="space-y-4">
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-primary">
                {label}
              </span>
              <h1 className="font-headline text-5xl font-extrabold tracking-tighter sm:text-6xl md:text-7xl">
                {title}{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: `linear-gradient(to right, ${gradientStyle.from}, ${gradientStyle.to})` }}
                >
                  {highlight}
                </span>
              </h1>
              <p className="max-w-2xl text-lg text-foreground/80 md:text-xl">
                {description}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="group">
                <Link href="#projects">
                  View My Work
                  <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/#contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
          <div className="order-1 flex justify-center lg:order-2">
            <div className="relative h-[350px] w-[350px] lg:h-[480px] lg:w-[480px]">
              <div
                className="absolute inset-0 -m-4 rounded-full"
                style={{ background: `linear-gradient(to bottom right, ${gradientStyle.from}30, ${gradientStyle.to}30)` }}
              />
              <div
                className="absolute inset-0 -m-2 rounded-full blur-3xl"
                style={{ background: `linear-gradient(to bottom right, ${gradientStyle.from}15, ${gradientStyle.to}15)` }}
              />
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
        <Link href="#projects" aria-label="Scroll to projects section">
          <ArrowDown className="h-8 w-8 animate-bounce text-primary" />
        </Link>
      </div>
    </section>
  );
}
