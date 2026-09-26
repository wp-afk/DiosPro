import React from 'react';
import { DiosProLogo } from './DiosProLogo';
import { SOCIAL_VIDEOS } from '../data/portfolioData';
import { AutoplayVideoCard } from './AutoplayVideoCard';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';

interface HeroVideoTopProps {
  globalSound: boolean;
  onToggleSound: () => void;
}

export const HeroVideoTop: React.FC<HeroVideoTopProps> = ({
  globalSound,
  onToggleSound,
}) => {
  const primaryVideo = SOCIAL_VIDEOS[0]; // _CzqDfNtfOM

  return (
    <section id="video-principal" className="pt-24 pb-12 bg-black relative overflow-hidden">
      {/* Background ambient lighting in purple and green */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#6C2E7F]/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#58A472]/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Brand Header with User's Official Logo - No redundant text */}
        <div className="flex flex-col items-center justify-center mb-8">
          <DiosProLogo size="xl" className="mb-3" />
          <p className="text-xs uppercase tracking-[0.25em] text-[#8d3fa8] font-mono font-medium">
            Walter Pietrobon · @diospro
          </p>
        </div>

        {/* First Clip Seen: _CzqDfNtfOM (High Priority Autoplay on Load) */}
        <div className="relative mx-auto max-w-5xl rounded-2xl overflow-hidden shadow-2xl border-2 border-[#6C2E7F]/60 hover:border-[#58A472] transition-colors">
          <AutoplayVideoCard
            video={primaryVideo}
            globalSoundEnabled={globalSound}
            onToggleGlobalSound={onToggleSound}
            priority={true}
          />
        </div>

        {/* Minimal Audio Prompt Bar */}
        <div className="mt-4 flex items-center justify-center gap-3">
          <button
            onClick={onToggleSound}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-950 border border-zinc-800 hover:border-[#58A472] text-xs text-zinc-300 hover:text-white transition-all"
          >
            {globalSound ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#58A472]" />
                <span className="text-[#58A472] font-medium">Sonido Activado</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-zinc-400" />
                <span>Reproduciendo sin sonido · Clic para activar audio</span>
              </>
            )}
          </button>
        </div>

      </div>
    </section>
  );
};
