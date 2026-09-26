import React from 'react';
import { LOGO_URL } from '../data/portfolioData';

interface DiosProLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const DiosProLogo: React.FC<DiosProLogoProps> = ({
  size = 'md',
  className = '',
}) => {
  const sizeMap = {
    sm: 'w-11 h-11',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32 sm:w-36 sm:h-36',
  };

  const imgSize = sizeMap[size];

  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      {/* Official Logo Image only - no redundant text */}
      <div className={`relative shrink-0 ${imgSize} rounded-full overflow-hidden border-2 border-[#58A472] shadow-xl shadow-[#6C2E7F]/30 bg-[#6C2E7F] transition-transform duration-300 hover:scale-105`}>
        <img
          src={LOGO_URL}
          alt="Logo DIOS PRO estudio"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = 'block';
          }}
        />
      </div>
    </div>
  );
};
