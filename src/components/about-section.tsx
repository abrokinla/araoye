import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CodeXml, BarChart3, BrainCircuit, Database, Wind } from "lucide-react";

const skills = [
  { icon: CodeXml, text: "Full-Stack Development" },
  { icon: BarChart3, text: "Data Analysis & Visualization" },
  { icon: BrainCircuit, text: "Machine Learning" },
  { icon: Database, text: "Python & SQL" },
  { icon: Wind, text: "React & Tailwind CSS" },
];

export function AboutSection() {
  const aboutImage = PlaceHolderImages.find((p) => p.id === "about-me")!;
  
  return (
    <section id="about" className="w-full bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex justify-center">
            <Image
              src={aboutImage.imageUrl}
              alt={aboutImage.description}
              data-ai-hint={aboutImage.imageHint}
              width={500}
              height={500}
              className="rounded-lg object-cover shadow-2xl"
            />
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">About Me</span>
              <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                A Passion for Problem Solving
              </h2>
            </div>
            <div className="space-y-4 text-foreground/80">
              <p>
                As a versatile developer and data scientist, I thrive at the intersection of technology and data. My journey began with a curiosity for how things work, which evolved into a passion for building applications and uncovering hidden patterns in data. I specialize in the Python stack but am equally comfortable building beautiful, responsive front-ends with modern JavaScript frameworks.
              </p>
              <p>
                Whether it's developing a full-stack application, creating insightful dashboards with Power BI and Tableau, or training predictive models, I am driven by the challenge of creating solutions that are not only functional but also elegant and impactful.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4">
              {skills.map((skill) => (
                <div key={skill.text} className="flex items-center gap-3">
                  <skill.icon className="h-6 w-6 text-accent" />
                  <span className="font-medium">{skill.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
