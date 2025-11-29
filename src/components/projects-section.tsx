"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { ImagePlaceholder } from "@/lib/placeholder-images";
import { ExternalLink, Github, Video, FileText } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";

export type Project = {
  title: string;
  description: string;
  image: ImagePlaceholder;
  tags: string[];
  liveUrl?: string;
  sourceUrl?: string;
  sourceUrlFrontend?: string;
  sourceUrlBackend?: string;
  videoUrl?: string;
  insightsUrl?: string;
};

type ProjectsSectionProps = {
  id?: string;
  title: string;
  description: string;
  projects: Project[];
  icon: React.ReactNode;
};

function ProjectVideoDialog({ project }: { project: Project }) {
  if (!project.videoUrl) {
    return null;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <Video className="mr-2 h-4 w-4" /> Watch Demo
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl p-0">
        <DialogHeader className="p-4">
          <DialogTitle>{project.title} - Demo</DialogTitle>
          <DialogClose />
        </DialogHeader>
        <div className="aspect-video">
          <iframe
            className="h-full w-full"
            src={project.videoUrl}
            title={`${project.title} video player`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
}


export function ProjectsSection({ id, title, description, projects, icon }: ProjectsSectionProps) {
  
  return (
    <section id={id} className="w-full bg-secondary/50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-4 flex justify-center">{icon}</div>
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 text-foreground/80">{description}</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader className="p-0">
                <Image
                  src={project.image.imageUrl}
                  alt={project.image.description}
                  data-ai-hint={project.image.imageHint}
                  width={600}
                  height={300}
                  className="h-[300px] w-full object-cover"
                />
              </CardHeader>
              <CardContent className="flex-1 p-6">
                <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                <CardDescription className="mt-2 text-base text-foreground/70">{project.description}</CardDescription>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <div className="flex w-full flex-wrap justify-start gap-4">
                  {project.liveUrl && (
                    <Button asChild variant="outline" size="sm">
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </Link>
                    </Button>
                  )}
                  {project.insightsUrl && (
                    <Button asChild variant="outline" size="sm">
                      <Link href={project.insightsUrl} target="_blank" rel="noopener noreferrer">
                        <FileText className="mr-2 h-4 w-4" /> View Insights
                      </Link>
                    </Button>
                  )}
                  
                  <ProjectVideoDialog project={project} />

                  {project.sourceUrl && (
                     <Button asChild variant="ghost" size="sm">
                      <Link href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> Source Code
                      </Link>
                    </Button>
                  )}
                  {project.sourceUrlFrontend && (
                    <Button asChild variant="ghost" size="sm">
                      <Link href={project.sourceUrlFrontend} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> Frontend
                      </Link>
                    </Button>
                  )}
                   {project.sourceUrlBackend && (
                    <Button asChild variant="ghost" size="sm">
                      <Link href={project.sourceUrlBackend} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> Backend
                      </Link>
                    </Button>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
