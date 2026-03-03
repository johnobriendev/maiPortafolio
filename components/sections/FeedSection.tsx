import { instagramPosts } from "@/data/instagram";
import InstagramPost from "@/components/InstagramPost";

export default function FeedSection() {
  return (
    <section id="feed" className="bg-brand-linen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-2">
            Instagram
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-brand-dark">
            Latest Posts
          </h2>
        </div>

        {instagramPosts.length === 0 ? (
          <p className="text-brand-muted italic">
            No posts added yet — paste Instagram embed HTML into{" "}
            <code className="text-brand-muted/70">data/instagram.ts</code>
          </p>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {instagramPosts.map((html, i) => (
              <InstagramPost key={i} embedHtml={html} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
