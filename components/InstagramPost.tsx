"use client";

import { useEffect } from "react";

interface InstagramPostProps {
  embedHtml: string;
}

// Instagram's embed script needs to be called after the blockquote is in the DOM.
// We load it once and call instgrm.Embeds.process() on each render.
export default function InstagramPost({ embedHtml }: InstagramPostProps) {
  useEffect(() => {
    if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    } else {
      const script = document.createElement("script");
      script.src = "//www.instagram.com/embed.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, [embedHtml]);

  return (
    <div
      className="w-full"
      dangerouslySetInnerHTML={{ __html: embedHtml }}
    />
  );
}
