'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

interface Artwork {
  id: number;
  title: string;
  src: string;
  width: number;
  height: number;
  blurDataURL?: string;
  category: 'paintings' | 'sketches' | 'photography' | 'textiles' | 'graphic design';
  medium: string;
  year: string;
  description?: string;
}

interface ArtGalleryProps {
  artworks: Artwork[];
}

const ArtGallery = ({ artworks }: ArtGalleryProps) => {
  const [selectedArt, setSelectedArt] = useState<Artwork | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'sketches', label: 'Sketches' },
    { id: 'paintings', label: 'Paintings' },
    { id: 'photography', label: 'Photography' },
    { id: 'textiles', label: 'Textiles' },
    { id: 'graphic design', label: 'Graphic Design' },
  ];

  const filteredArtworks = activeCategory === 'all' 
    ? artworks 
    : artworks.filter(art => art.category === activeCategory);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 border-r border-neutral-200 p-8 sticky top-20 h-[calc(100vh-5rem)]">
        <nav className="space-y-1">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                activeCategory === category.id
                  ? 'bg-neutral-900 text-white font-medium'
                  : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
              } ${category.id === 'all' ? 'text-base' : 'text-sm'}`}
            >
              {category.label}
              {category.id === 'all' && (
                <span className="ml-2 text-xs opacity-70">
                  ({artworks.length})
                </span>
              )}
              {category.id !== 'all' && (
                <span className="ml-2 text-xs opacity-70">
                  ({artworks.filter(a => a.category === category.id).length})
                </span>
              )}
            </button>
          ))}
        </nav>
      </aside>

      {/* Gallery Content */}
      <div className="flex-1 p-8">
        {/* Category Title */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-neutral-900">
            {categories.find(c => c.id === activeCategory)?.label}
          </h2>
          <p className="text-neutral-500 mt-2">
            {filteredArtworks.length} {filteredArtworks.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredArtworks.map((artwork, index) => (
              <motion.div
                key={artwork.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                className="break-inside-avoid group relative cursor-pointer"
                onClick={() => setSelectedArt(artwork)}
              >
                <div className="relative overflow-hidden rounded-lg bg-neutral-100">
                  <Image
                    src={artwork.src}
                    alt={artwork.title}
                    width={artwork.width}
                    height={artwork.height}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    placeholder={artwork.blurDataURL ? "blur" : "empty"}
                    blurDataURL={artwork.blurDataURL}
                    unoptimized={true}  // Add this line temporarily
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="font-medium text-sm mb-1">{artwork.title}</h3>
                      <p className="text-xs text-neutral-300">{artwork.medium} · {artwork.year}</p>
                    </div>
                    <div className="absolute top-3 right-3">
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredArtworks.length === 0 && (
          <div className="text-center py-24">
            <p className="text-neutral-400 text-lg">No artwork in this category yet.</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedArt && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedArt(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-neutral-300 transition-colors z-10"
              onClick={() => setSelectedArt(null)}
            >
              <X className="w-8 h-8" />
            </button>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-7xl w-full max-h-[90vh] flex flex-col md:flex-row gap-8 items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="flex-1 flex items-center justify-center">
                <div className="relative max-h-[80vh]">
                  <Image
                    src={selectedArt.src}
                    alt={selectedArt.title}
                    width={selectedArt.width}
                    height={selectedArt.height}
                    className="max-h-[80vh] w-auto object-contain"
                    quality={95}
                  />
                </div>
              </div>

              {/* Info Panel */}
              <div className="md:w-80 text-white bg-black/50 backdrop-blur-sm rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-2">{selectedArt.title}</h2>
                <p className="text-neutral-400 mb-4">{selectedArt.medium} · {selectedArt.year}</p>
                
                {selectedArt.description && (
                  <p className="text-sm leading-relaxed text-neutral-300">
                    {selectedArt.description}
                  </p>
                )}

                <div className="mt-6 pt-6 border-t border-neutral-700">
                  <p className="text-xs text-neutral-400 uppercase tracking-wider mb-2">Category</p>
                  <p className="text-sm text-neutral-200 capitalize">{selectedArt.category}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ArtGallery;