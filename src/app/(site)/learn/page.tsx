import type { Metadata } from "next";
import { STAGES } from "@/lib/stages";
import { reader, youTubeId } from "@/lib/reader";
import VideoCard from "@/components/VideoCard";

export const metadata: Metadata = {
  title: "Watch & Learn — Laughing Wallet",
  description:
    "Short cartoon videos and plain-language guides for every money milestone.",
};

export default async function LearnPage() {
  // Pull every video the editor has published, newest first.
  const videos = await reader.collections.videos.all();
  const sorted = [...videos].sort((a, b) =>
    (b.entry.publishedAt ?? "").localeCompare(a.entry.publishedAt ?? "")
  );

  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <div className="mb-12 max-w-2xl">
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          Watch &amp; Learn
        </h1>
        <p className="mt-4 text-lg text-ink/70">
          Bite-sized cartoon videos, sorted by where you are in life. New
          episodes are published straight from the content dashboard.
        </p>
      </div>

      <div className="space-y-16">
        {STAGES.map((stage) => {
          const stageVideos = sorted.filter(
            (v) => v.entry.stage === stage.slug
          );
          return (
            <div key={stage.slug} id={stage.slug} className="scroll-mt-24">
              <div className="mb-5 flex items-center gap-3">
                <span className="text-2xl">{stage.emoji}</span>
                <h2 className="font-display text-2xl font-bold text-ink">
                  {stage.title}
                </h2>
              </div>

              {stageVideos.length === 0 ? (
                <p className="rounded-xl2 border border-dashed border-ink/15 bg-white/50 p-6 text-sm text-ink/50">
                  No videos here yet — new episodes are on the way.
                </p>
              ) : (
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {stageVideos.map((v) => {
                    const id = youTubeId(v.entry.youtubeUrl ?? "");
                    if (!id) return null;
                    return (
                      <VideoCard
                        key={v.slug}
                        videoId={id}
                        title={v.entry.title}
                        description={v.entry.description ?? ""}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
