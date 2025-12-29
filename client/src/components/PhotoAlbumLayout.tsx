import React from "react";

interface PhotoAlbumLayoutProps {
  centerImage: string;
  centerAlt: string;
}

export default function PhotoAlbumLayout({ centerImage, centerAlt }: PhotoAlbumLayoutProps) {
  return (
    <div className="relative w-full mx-auto aspect-[4/3] bg-[#f0e6d2] shadow-2xl p-4 rounded-sm overflow-hidden border border-[#d4c5a5]">
      {/* Background Texture (Book Page Feel) */}
      <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] pointer-events-none"></div>
      
      {/* Handwritten Notes Background */}
      <div className="absolute top-4 left-4 font-handwriting text-gray-400 text-xs opacity-60 -rotate-2 w-32">
        "No man for things... I chair it was... A blur of the..."
      </div>
      <div className="absolute top-12 right-4 font-handwriting text-gray-400 text-xs opacity-60 rotate-1 w-24 text-right">
        "nit is oat many... the stay on..."
      </div>

      {/* Left Photo (Steamboat) - Tilted Left - Increased Size */}
      <div className="absolute top-8 -left-2 w-[42%] h-[85%] bg-white p-1 shadow-md transform -rotate-6 z-10 border border-gray-300">
        <div className="w-full h-full overflow-hidden bg-gray-200">
          <img 
            src="/images/album-dock-crowd.png" 
            alt="Steamboat Arrival" 
            className="w-full h-full object-cover sepia-[0.4] contrast-[1.1]"
          />
        </div>
      </div>

      {/* Right Photo (Fireworks) - Tilted Right - Increased Size */}
      <div className="absolute top-12 -right-2 w-[42%] h-[85%] bg-white p-1 shadow-md transform rotate-6 z-10 border border-gray-300">
        <div className="w-full h-full overflow-hidden bg-gray-200">
          <img 
            src="/images/fireworks-vintage.jpg" 
            alt="Fireworks Celebration" 
            className="w-full h-full object-cover sepia-[0.4] contrast-[1.1]"
          />
        </div>
      </div>

      {/* Center Photo (Character) - Prominent & Straight - Increased Size */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[55%] h-[90%] bg-white p-2 pb-8 shadow-xl z-20 transform rotate-0 border border-gray-300 rounded-sm">
        <div className="w-full h-full overflow-hidden bg-gray-200 relative">
          <img 
            src={centerImage} 
            alt={centerAlt} 
            className="w-full h-full object-cover sepia-[0.8] contrast-[1.1] brightness-[0.95]"
          />
          {/* Inner Shadow/Vignette */}
          <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.2)] pointer-events-none"></div>
        </div>
      </div>

      {/* Bottom Label (The Title) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#e8dec0] border border-[#c0b090] px-6 py-2 shadow-md z-30 w-[80%] text-center transform rotate-0">
        <div className="border-t border-b border-double border-gray-400 py-1">
          <h3 className="font-heading text-lg md:text-2xl font-bold text-[#3a2f26] uppercase tracking-wide leading-tight">
            Rose Island Photo Album - 1934
          </h3>
        </div>
      </div>
    </div>
  );
}
