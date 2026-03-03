import { videos } from "@/data/videos";
import VideoCard from "@/components/VideoCard";

export default function VideosSection() {
  return (
    <section id="videos" className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-2">
            Content
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-brand-dark">
            Videos
          </h2>
        </div>

        {videos.length === 0 ? (
          <p className="text-brand-muted italic">
            No videos added yet — add embed codes or MP4 paths to{" "}
            <code className="text-brand-muted/70">data/videos.ts</code>
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
