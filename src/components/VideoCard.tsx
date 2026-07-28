"use client";

import { useState } from "react";

// A lightweight YouTube card: shows the thumbnail until clicked, then loads
// the player. Keeps the page fast when there are many videos.
export default function VideoCard({
  videoId,
  title,
  description,
}: {
  videoId: string;
  title: string;
  description: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <article className="overflow-hidden rounded-xl2 border border-ink/5 bg-white shadow-card">
      <div className="relative aspect-video bg-ink/5">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerated-content; autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 h-full w-full"
            aria-label={`Play ${title}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
              alt=""
              className="h-full w-full object-cover"
            />
            <span className="absolute inset-0 grid place-items-center">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-white/95 text-coral shadow-lift transition group-hover:scale-110">
                ▶
              </span>
            </span>
          </button>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-bold text-ink">{title}</h3>
        {description && (
          <p className="mt-2 text-sm leading-relaxed text-ink/60">
            {description}
          </p>
        )}
      </div>
    </article>
  );
}
