import React from 'react';
import { SOCIAL_PHOTOS, SOCIAL_VIDEOS, ProjectPhoto } from '../data/portfolioData';
import { AutoplayVideoCard } from './AutoplayVideoCard';

interface SocialEventsSectionProps {
  onOpenPhoto: (photo: ProjectPhoto) => void;
  globalSound: boolean;
  onToggleSound: () => void;
}

export const SocialEventsSection: React.FC<SocialEventsSectionProps> = ({
  onOpenPhoto,
  globalSound,
  onToggleSound,
}) => {
  const finalVideos = SOCIAL_VIDEOS.filter((v) => !v.isFirst);

  return (
    <section id="galeria" className="py-12 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Minimal Section Divider */}
        <div className="flex items-center gap-2.5 mb-8 pb-3 border-b border-zinc-900">
          <span className="w-2.5 h-2.5 rounded-full bg-[#6C2E7F]" />
          <h2 className="text-lg sm:text-xl font-bold tracking-tight text-white uppercase font-sans">
            Galería Social
          </h2>
        </div>

        {/* 20 Social Event Photos Grid - Pure Visuals, Zero Text Description */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {SOCIAL_PHOTOS.map((photo, index) => {
            const isLarge = index === 0 || index === 7 || index === 14;
            const spanClass = isLarge ? 'sm:col-span-2 sm:row-span-2' : 'col-span-1';

            return (
              <div
                key={photo.id}
                onClick={() => onOpenPhoto(photo)}
                className={`group relative rounded-xl overflow-hidden bg-zinc-950 border border-zinc-900 hover:border-[#6C2E7F] transition-all duration-300 cursor-pointer ${
                  isLarge ? 'aspect-[4/3] sm:aspect-auto' : 'aspect-square'
                } ${spanClass}`}
              >
                <img
                  src={photo.imageUrl}
                  alt="Fotografía Social Walter Pietrobon"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                  loading="lazy"
                />

                {/* Pure visual subtle border glow on hover - No text */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* Final Clips Section at the End */}
        {finalVideos.length > 0 && (
          <div id="video-final" className="my-16 pt-8 border-t border-zinc-900">
            <div className="space-y-8 max-w-5xl mx-auto">
              {finalVideos.map((video) => (
                <div
                  key={video.id}
                  className="rounded-2xl overflow-hidden border border-[#58A472]/40 shadow-2xl hover:border-[#58A472] transition-colors"
                >
                  <AutoplayVideoCard
                    video={video}
                    globalSoundEnabled={globalSound}
                    onToggleGlobalSound={onToggleSound}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
