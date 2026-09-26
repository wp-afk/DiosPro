import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, ExternalLink } from 'lucide-react';
import { VideoProject } from '../data/portfolioData';

interface AutoplayVideoCardProps {
  video: VideoProject;
  globalSoundEnabled?: boolean;
  onToggleGlobalSound?: () => void;
  priority?: boolean;
}

export const AutoplayVideoCard: React.FC<AutoplayVideoCardProps> = ({
  video,
  globalSoundEnabled,
  onToggleGlobalSound,
  priority = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(priority);
  const [isSoundAuthorized, setIsSoundAuthorized] = useState(false);
  const [hasStarted, setHasStarted] = useState(priority);

  // Sync with global sound setting if provided
  useEffect(() => {
    if (globalSoundEnabled !== undefined) {
      setIsSoundAuthorized(globalSoundEnabled);
    }
  }, [globalSoundEnabled]);

  // IntersectionObserver to detect when video scrolls into view
  useEffect(() => {
    if (priority) {
      setIsInView(true);
      setHasStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            setHasStarted(true);
          } else {
            setIsInView(false);
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: '100px 0px 100px 0px',
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [priority]);

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextSound = !isSoundAuthorized;
    setIsSoundAuthorized(nextSound);
    if (onToggleGlobalSound) {
      onToggleGlobalSound();
    }
  };

  const isShort = video.aspect === '9:16';
  const muteParam = isSoundAuthorized ? '0' : '1';
  const autoplayParam = isInView || hasStarted ? '1' : '0';

  // Optimized YouTube embed URL
  const embedUrl = `https://www.youtube.com/embed/${video.youtubeId}?autoplay=${autoplayParam}&mute=${muteParam}&loop=1&playlist=${video.youtubeId}&playsinline=1&enablejsapi=1&rel=0&modestbranding=1`;

  return (
    <div
      ref={containerRef}
      className={`group relative rounded-2xl overflow-hidden bg-black border border-[#733288]/40 hover:border-[#58A472] transition-all duration-300 shadow-2xl shadow-[#733288]/10 ${
        isShort ? 'max-w-sm mx-auto aspect-[9/16]' : 'aspect-video w-full'
      }`}
    >
      {/* If priority or scrolled into view, mount iframe */}
      {hasStarted ? (
        <iframe
          src={embedUrl}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full object-cover"
        />
      ) : (
        /* Poster Placeholder before scroll triggers */
        <div
          onClick={() => setHasStarted(true)}
          className="w-full h-full relative cursor-pointer flex items-center justify-center bg-zinc-950"
        >
          <img
            src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
            alt={video.title}
            onError={(e) => {
              e.currentTarget.src = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
            }}
            className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
          <div className="w-16 h-16 rounded-full bg-[#6C2E7F] text-white flex items-center justify-center shadow-xl border-2 border-[#58A472] group-hover:scale-110 transition-transform">
            <Play className="w-7 h-7 translate-x-0.5" />
          </div>
        </div>
      )}

      {/* Floating Sound Authorization Pill */}
      <div className="absolute top-3.5 right-3.5 z-20 flex items-center gap-2">
        <button
          onClick={toggleSound}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-md transition-all shadow-lg ${
            isSoundAuthorized
              ? 'bg-[#58A472] text-black hover:bg-[#68B682]'
              : 'bg-black/80 text-white hover:bg-black border border-white/20 hover:border-[#58A472]'
          }`}
          title={isSoundAuthorized ? 'Silenciar sonido' : 'Activar sonido del video'}
        >
          {isSoundAuthorized ? (
            <>
              <Volume2 className="w-3.5 h-3.5 text-black" />
              <span className="text-[11px] uppercase tracking-wider">Sonido Activo</span>
            </>
          ) : (
            <>
              <VolumeX className="w-3.5 h-3.5 text-zinc-300" />
              <span className="text-[11px] uppercase tracking-wider">Activar Sonido</span>
            </>
          )}
        </button>

        <a
          href={`https://youtu.be/${video.youtubeId}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="p-1.5 rounded-full bg-black/70 text-zinc-300 hover:text-white hover:bg-black transition-colors border border-white/10"
          title="Ver en YouTube"
        >
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Subtle Tag Overlay at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none flex items-center justify-between text-xs">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-300 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#58A472]" />
          <span>{video.tag}</span>
        </span>
        <span className="text-[10px] uppercase tracking-widest text-[#8d3fa8] font-mono">
          @diospro
        </span>
      </div>
    </div>
  );
};
