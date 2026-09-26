import React, { useState } from 'react';
import { Instagram, MessageCircle, Mail, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { STUDIO_INFO } from '../data/portfolioData';
import { DiosProLogo } from './DiosProLogo';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const generateWhatsAppMessage = () => {
    const text = `Hola Walter (@diospro), te contacto desde tu porfolio para consultar sobre un Evento Social:
Nombre: ${formData.name || 'Cliente'}
Contacto: ${formData.contact}
Mensaje: ${formData.message || 'Sin mensaje adicional'}`;

    return encodeURIComponent(text);
  };

  return (
    <section id="contacto" className="py-20 bg-black border-t border-zinc-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Logo and Minimal Contact Header */}
        <div className="flex flex-col items-center justify-center mb-10">
          <DiosProLogo size="lg" className="mb-3" />
          <p className="text-xs uppercase tracking-[0.25em] text-[#8d3fa8] mt-1 font-mono font-medium">
            Walter Pietrobon · @diospro
          </p>
        </div>

        {/* 3 Direct Quick Action Cards (Instagram, WhatsApp, Email) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {/* Instagram @diospro */}
          <a
            href={STUDIO_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-zinc-950 border border-zinc-900 hover:border-[#8d3fa8] transition-all flex flex-col items-center group"
          >
            <div className="w-12 h-12 rounded-full bg-[#6C2E7F]/30 text-[#8d3fa8] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Instagram className="w-6 h-6" />
            </div>
            <span className="text-sm font-bold text-white uppercase tracking-wider">
              Instagram
            </span>
            <span className="text-xs text-[#58A472] font-mono mt-0.5">
              @diospro
            </span>
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/?text=${generateWhatsAppMessage()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-zinc-950 border border-zinc-900 hover:border-[#58A472] transition-all flex flex-col items-center group"
          >
            <div className="w-12 h-12 rounded-full bg-[#58A472]/20 text-[#58A472] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-6 h-6" />
            </div>
            <span className="text-sm font-bold text-white uppercase tracking-wider">
              WhatsApp
            </span>
            <span className="text-xs text-zinc-400 font-mono mt-0.5">
              Mensaje Directo
            </span>
          </a>

          {/* Email */}
          <a
            href={`mailto:${STUDIO_INFO.email}`}
            className="p-5 rounded-2xl bg-zinc-950 border border-zinc-900 hover:border-[#8d3fa8] transition-all flex flex-col items-center group"
          >
            <div className="w-12 h-12 rounded-full bg-[#6C2E7F]/30 text-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <span className="text-sm font-bold text-white uppercase tracking-wider">
              Email
            </span>
            <span className="text-xs text-zinc-400 font-mono mt-0.5">
              {STUDIO_INFO.email}
            </span>
          </a>
        </div>

        {/* Minimal Direct Form */}
        <div className="bg-zinc-950 p-6 sm:p-8 rounded-2xl border border-zinc-900 text-left max-w-xl mx-auto">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <CheckCircle2 className="w-12 h-12 text-[#58A472] mx-auto" />
              <p className="text-white font-bold text-base">¡Mensaje preparado!</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <a
                  href={`https://wa.me/?text=${generateWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full bg-[#58A472] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enviar por WhatsApp</span>
                </a>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 text-xs text-zinc-400 hover:text-white"
                >
                  Modificar
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Tu Nombre"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-black border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#58A472]"
                />

                <input
                  type="text"
                  required
                  placeholder="WhatsApp o Email"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-black border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#58A472]"
                />
              </div>

              <textarea
                rows={2}
                placeholder="Fecha, tipo de festejo (Boda / XV) o mensaje..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-black border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#58A472] resize-none"
              />

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-[#58A472] hover:bg-[#68B682] text-black font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2"
              >
                <span>Consultar por WhatsApp / Email</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

        {/* Minimal Footer Stamp */}
        <div className="mt-12 text-center text-[11px] text-zinc-500 uppercase tracking-widest font-mono">
          © {new Date().getFullYear()} WALTER PIETROBON · @DIOSPRO
        </div>

      </div>
    </section>
  );
};
