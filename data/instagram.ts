/**
 * Instagram feed posts.
 *
 * How to get an embed code:
 * 1. Open a post on Instagram in a browser
 * 2. Click ··· (three dots) → Embed
 * 3. Copy the embed code
 * 4. Paste it as a string in the array below
 *
 * The script tag (//www.instagram.com/embed.js) only needs to be included once —
 * InstagramPost.tsx handles loading it globally so you don't need it in each entry.
 * Just paste the <blockquote> part.
 */
export const instagramPosts: string[] = [
  // Paste Instagram <blockquote> embed HTML here, e.g.:
  // `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/XXXXX/" data-instgrm-version="14" style="background:#FFF;border:0;border-radius:3px;box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15);margin:1px;max-width:540px;min-width:326px;padding:0;width:99.375%;width:-webkit-calc(100% - 2px);width:calc(100% - 2px);"><div style="padding:16px;"></div></blockquote>`,
];
