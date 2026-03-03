export type VideoType = "tiktok" | "instagram" | "mp4";

export interface VideoItem {
  id: string;
  type: VideoType;
  /** For tiktok/instagram: the raw embed HTML copied from the platform */
  embedHtml?: string;
  /** For mp4: path relative to /public, e.g. "/videos/reel.mp4" */
  src?: string;
  /** Thumbnail shown before the video plays — drop images in /public/thumbnails/ */
  poster?: string;
  /** Shown as a caption below the video */
  caption?: string;
}

/**
 * Add your videos here.
 *
 * TikTok: Go to a TikTok video → Share → Embed → copy the <blockquote> + <script> tags
 * Instagram: Go to a post → ··· → Embed → copy the <blockquote> + <script> tags
 * MP4: Drop the file in /public/videos/ and reference the path here
 */
export const videos: VideoItem[] = [
  // Example TikTok embed — replace with real embed HTML from TikTok
  // {
  //   id: "tiktok-1",
  //   type: "tiktok",
  //   embedHtml: `<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@username/video/123" data-video-id="123" style="max-width:605px;min-width:325px;"><section></section></blockquote><script async src="https://www.tiktok.com/embed.js"></script>`,
  //   caption: "Optional caption here",
  // },

  // Example Instagram Reel embed — replace with real embed HTML from Instagram
  // {
  //   id: "ig-reel-1",
  //   type: "instagram",
  //   embedHtml: `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/XXXX/" data-instgrm-version="14" style="..."></blockquote><script async defer src="//www.instagram.com/embed.js"></script>`,
  //   caption: "Optional caption",
  // },

  // Example raw MP4 — drop the file in /public/videos/
  // {
  //   id: "mp4-1",
  //   type: "mp4",
  //   src: "/videos/sample.mp4",
  //   caption: "Behind the scenes",
  // },

  {
    id: "video-1",
    type: "mp4",
    src: "/videos/mai1.mp4",
    poster: "/thumbnails/mai1.png",
  },
  {
    id: "video-2",
    type: "mp4",
    src: "/videos/mai2.mp4",
    poster: "/thumbnails/mai2.png",
  },
  {
    id: "video-3",
    type: "mp4",
    src: "/videos/mai3.mp4",
    poster: "/thumbnails/mai3.png",
  },

  
];
