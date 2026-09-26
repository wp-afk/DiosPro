/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroVideoTop } from './components/HeroVideoTop';
import { SocialEventsSection } from './components/SocialEventsSection';
import { ContactSection } from './components/ContactSection';
import { MinimalLightbox } from './components/MinimalLightbox';
import { ProjectPhoto, STUDIO_INFO } from './data/portfolioData';
import { MessageCircle, Instagram } from 'lucide-react';

export default function App() {
  const [globalSound, setGlobalSound] = useState<boolean>(false);
  const [lightboxPhoto, setLightboxPhoto] = useState<ProjectPhoto | null>(null);
  const [lightboxVideoId, setLightboxVideoId] = useState<string | null>(null);

  const handleToggleSound = () => {
    setGlobalSound((prev) => !prev);
  };

  const handleNavigateTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-[#f4f4f5] selection:bg-[#6C2E7F]/40 selection:text-white font-sans-modern relative">
      
      {/* Top Navbar with Official Logo */}
      <Navbar
        globalSound={globalSound}
        onToggleSound={handleToggleSound}
        onNavigateTo={handleNavigateTo}
      />

      {/* Main Flow: Visuals First, Minimal Text */}
      <main className="pb-12">
        {/* 1. First Clip Seen at Top (_CzqDfNtfOM) with Official Logo & Autoplay */}
        <HeroVideoTop
          globalSound={globalSound}
          onToggleSound={handleToggleSound}
        />

        {/* 2. Social Events Photography Gallery (13 Photos with zero text description) + Final Clip (M3EDJFh2gjM) */}
        <SocialEventsSection
          onOpenPhoto={(photo) => setLightboxPhoto(photo)}
          globalSound={globalSound}
          onToggleSound={handleToggleSound}
        />

        {/* 3. Contact with @diospro, WhatsApp and Email */}
        <ContactSection />
      </main>

      {/* Minimal Lightbox Modal for Photo or Video */}
      <MinimalLightbox
        photo={lightboxPhoto}
        videoUrl={lightboxVideoId}
        onClose={() => {
          setLightboxPhoto(null);
          setLightboxVideoId(null);
        }}
        onSelectPhoto={(photo) => setLightboxPhoto(photo)}
      />

      {/* Floating Instagram and WhatsApp quick buttons */}
      <div className="fixed bottom-5 right-5 z-30 flex items-center gap-2">
        <a
          href={STUDIO_INFO.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-[#6C2E7F] hover:bg-[#8d3fa8] text-white shadow-xl transition-transform hover:scale-110"
          title="Instagram @diospro"
        >
          <Instagram className="w-5 h-5" />
        </a>

        <a
          href={STUDIO_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-[#58A472] hover:bg-[#68B682] text-black shadow-xl transition-transform hover:scale-110"
          title="WhatsApp Walter Pietrobon"
        >
          <MessageCircle className="w-5 h-5" />
        </a>
      </div>

    </div>
  );
}
