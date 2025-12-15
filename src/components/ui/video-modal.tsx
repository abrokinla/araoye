"use client";

import React, { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Video, X } from "lucide-react";

export type DemoVideo = { title: string; url: string };

function ensureAutoplay(url: string, opts?: { autoplay?: boolean; mute?: boolean }) {
  // opts.autoplay: whether to ensure autoplay=1 is present
  // opts.mute: whether to ensure mute=1 is present (useful for YouTube embeds)
  const { autoplay = false, mute = false } = opts ?? {};
  try {
    const u = new URL(url);
    if (autoplay && !u.searchParams.has("autoplay")) {
      u.searchParams.set("autoplay", "1");
    }
    if (mute && !u.searchParams.has("mute")) {
      u.searchParams.set("mute", "1");
    }
    return u.toString();
  } catch (e) {
    // Not a valid absolute URL (maybe relative). Append parameters conservatively.
    const parts = url.split("?");
    const base = parts[0];
    const query = new URLSearchParams(parts[1] ?? "");
    if (autoplay && !query.has("autoplay")) query.set("autoplay", "1");
    if (mute && !query.has("mute")) query.set("mute", "1");
    const q = query.toString();
    return q ? `${base}?${q}` : base;
  }
}

export function VideoModal({ projectTitle, videos }: { projectTitle: string; videos: DemoVideo[] }) {
  const [selected, setSelected] = useState(0);

  const selectedVideo = useMemo(() => videos[selected] ?? videos[0], [videos, selected]);

  // build src for iframe; prefer autoplay for the selected
  // Focused player should be muted by default to improve autoplay reliability
  const playerSrc = useMemo(() => {
    return ensureAutoplay(selectedVideo.url, { autoplay: true, mute: true });
  }, [selectedVideo]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <Video className="mr-2 h-4 w-4" /> Watch Demo
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-5xl p-0">
        <DialogHeader className="p-4">
          <div className="flex items-center justify-between gap-4">
            <DialogTitle className="flex-1">{projectTitle} - Demo</DialogTitle>
            {/* Explicit close button to ensure visible/accessible control */}
            <DialogClose asChild>
              <button
                aria-label="Close demo modal"
                className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-transparent text-foreground/80 hover:bg-foreground/10 focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <X className="h-4 w-4" />
              </button>
            </DialogClose>
          </div>
        </DialogHeader>

        <div className="p-4">
          <div className="mb-4 w-full overflow-hidden rounded-md bg-black">
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src={playerSrc}
                title={`${projectTitle} - ${selectedVideo.title}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          <div>
            <p className="mb-2 text-sm text-foreground/70">Other demos</p>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {videos.map((v, idx) => (
                <button
                  key={v.title + idx}
                  onClick={() => setSelected(idx)}
                  className={
                    "relative flex-shrink-0 transform-gpu transition-all duration-300 " +
                    (selected === idx
                      ? "scale-110 ring-2 ring-primary/40"
                      : "hover:scale-105")
                  }
                  aria-pressed={selected === idx}
                >
                  <div className="w-[160px]">
                    <div className="aspect-video w-full overflow-hidden rounded-md bg-zinc-900">
                      {/* small iframe thumbnail - keep it muted/autoplay if provider supports it */}
                      <iframe
                        className="h-full w-full"
                        src={ensureAutoplay(v.url, { autoplay: false })}
                        title={v.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                    <div className="mt-2 w-full text-left text-sm">
                      <div className="truncate font-medium">{v.title}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
