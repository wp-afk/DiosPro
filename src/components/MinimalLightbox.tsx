import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ProjectPhoto, SOCIAL_PHOTOS } from '../data/portfolioData';

interface MinimalLightboxProps {
  photo: ProjectPhoto | null;
  videoUrl: string | null;
  onClose: () => void;
  onSelectPhoto: (photo: ProjectPhoto) => void;
}

export const MinimalLightbox: React.FC<MinimalLightboxProps> = ({
  photo,
  videoUrl,
  onClose,
  onSelectPhoto,
}) => {
  const currentIndex = photo ? SOCIAL_PHOTOS.findIndex((p) => p.id === photo.id) : -1;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (!photo) return;
      if (e.key === 'ArrowRight' && currentIndex >= 0) {
        onSelectPhoto(SOCIAL_PHOTOS[(currentIndex + 1) % SOCIAL_PHOTOS.length]);
      }
      if (e.key === 'ArrowLeft' && currentIndex >= 0) {
        onSelectPhoto(SOCIAL_PHOTOS[(currentIndex - 1 + SOCIAL_PHOTOS.length) % SOCIAL_PHOTOS.length]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [photo, currentIndex, onClose, onSelectPhoto]);

  if (!photo && !videoUrl) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-2 sm:p-6 animate-in fade-in duration-200">
      {/* Top Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-zinc-900/80 text-white hover:bg-zinc-800 transition-colors border border-zinc-800"
        title="Cerrar (ESC)"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Video Lightbox */}
      {videoUrl && (
        <div className="w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl border border-zinc-800 bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${videoUrl}?autoplay=1&mute=0&rel=0`}
            title="Video Player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Photo Lightbox */}
      {photo && (
        <div className="relative max-w-5xl max-h-[90vh] flex items-center justify-center">
          {currentIndex > 0 && (
            <button
              onClick={() => onSelectPhoto(SOCIAL_PHOTOS[(currentIndex - 1 + SOCIAL_PHOTOS.length) % SOCIAL_PHOTOS.length])}
              className="absolute left-2 z-10 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/10 hidden sm:flex"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          <img
            src={photo.imageUrl}
            alt={photo.title}
            referrerPolicy="no-referrer"
            className="max-h-[85vh] max-w-full object-contain rounded shadow-2xl"
          />

          {currentIndex < SOCIAL_PHOTOS.length - 1 && (
            <button
              onClick={() => onSelectPhoto(SOCIAL_PHOTOS[(currentIndex + 1) % SOCIAL_PHOTOS.length])}
              className="absolute right-2 z-10 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/10 hidden sm:flex"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>
      )}
    </div>
  );
};
