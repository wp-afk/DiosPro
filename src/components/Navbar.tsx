import React from 'react';
import { DiosProLogo } from './DiosProLogo';
import { Instagram, MessageCircle, Volume2, VolumeX, PartyPopper, LayoutGrid } from 'lucide-react';
import { STUDIO_INFO } from '../data/portfolioData';

interface NavbarProps {
  globalSound: boolean;
  onToggleSound: () => void;
  onNavigateTo: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  globalSound,
  onToggleSound,
  onNavigateTo,
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-md border-b border-[#733288]/30 py-3 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Official Brand Logo */}
          <button
            onClick={() => onNavigateTo('video-principal')}
            className="flex items-center gap-2.5 text-left focus:outline-none"
            title="Inicio"
          >
            <DiosProLogo size="sm" />
          </button>

          {/* Quick Minimal Nav */}
          <nav className="hidden sm:flex items-center gap-6 text-xs uppercase tracking-[0.18em] font-semibold">
            <button
              onClick={() => onNavigateTo('video-principal')}
              className="text-zinc-300 hover:text-[#58A472] transition-colors"
            >
              Clip Inicial
            </button>
            <button
              onClick={() => onNavigateTo('galeria')}
              className="text-zinc-300 hover:text-[#8d3fa8] transition-colors"
            >
              Galería Social
            </button>
            <button
              onClick={() => onNavigateTo('video-final')}
              className="text-zinc-300 hover:text-[#58A472] transition-colors"
            >
              Clip Final
            </button>
          </nav>

          {/* Actions & Social Links */}
          <div className="flex items-center gap-2.5">
            {/* Global Sound Authorization Button */}
            <button
              onClick={onToggleSound}
              className={`p-2 rounded-full border transition-all ${
                globalSound
                  ? 'bg-[#58A472] text-black border-[#58A472]'
                  : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white'
              }`}
              title={globalSound ? 'Silenciar videos' : 'Activar sonido de videos'}
            >
              {globalSound ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Instagram @diospro */}
            <a
              href={STUDIO_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 hover:bg-[#6C2E7F]/40 border border-zinc-800 hover:border-[#6C2E7F] text-zinc-300 hover:text-white transition-all text-xs font-semibold"
              title="Instagram @diospro"
            >
              <Instagram className="w-3.5 h-3.5 text-[#58A472]" />
              <span>@diospro</span>
            </a>

            {/* Contact Trigger */}
            <button
              onClick={() => onNavigateTo('contacto')}
              className="px-3.5 py-1.5 rounded-full bg-[#58A472] hover:bg-[#68B682] text-black text-xs font-bold uppercase tracking-wider transition-all"
            >
              Contacto
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
