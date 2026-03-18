import ArtGallery from '@/components/ArtGallery';
import { artworks } from '@/data/artwork';

export default function StudioPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 pt-16 pb-8 border-b border-neutral-200">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold text-neutral-900 mb-6">
            Studio
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed">
            A collection of work spanning traditional and experimental media. 
            Each piece explores the relationship between form, color, and composition — 
            the same visual thinking that informs my technical work.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <ArtGallery artworks={artworks} />
    </main>
  );
}