"use client";

import { VideoItem } from "@/data/videos";

export default function VideoCard({ video }: { video: VideoItem }) {
  if (video.type === "mp4") {
    return (
      <div className="flex flex-col gap-2">
        <div className="w-full aspect-[9/16] bg-brand-linen rounded overflow-hidden">
          <video
            src={video.src}
            controls
            preload="metadata"
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
        {video.caption && (
          <p className="text-sm text-brand-muted">{video.caption}</p>
        )}
      </div>
    );
  }

  // TikTok and Instagram embeds
  return (
    <div className="flex flex-col gap-2">
      <div
        className="w-full"
        dangerouslySetInnerHTML={{ __html: video.embedHtml ?? "" }}
      />
      {video.caption && (
        <p className="text-sm text-brand-muted">{video.caption}</p>
      )}
    </div>
  );
}
