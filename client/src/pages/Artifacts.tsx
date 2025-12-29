import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { RotateCw } from "lucide-react";
import Layout from "@/components/Layout";

// Artifact Data
const artifacts = [
  {
    id: "charm-bracelet",
    name: "The Silver Charm Bracelet",
    era: "1934",
    description: "A delicate sterling silver chain featuring a Tree of Life, a Cross, and a Hummingbird charm. Found on Tyler's nightstand, it serves as a tangible link to the memories of that fateful summer.",
    image: "/images/bracelet-nightstand.jpg",
    contextImage: "/images/sears-catalog-bracelet.jpg",
    contextCaption: "Featured in the 1936 Sears, Roebuck & Co. Catalog (Page 42)",
    details: "Sterling Silver. Price: $1.98. Shipping weight: 4 oz."
  },
  {
    id: "anniversary-coin",
    name: "10 Year Anniversary Coin",
    era: "1934",
    description: "A commemorative silver coin celebrating the 10th anniversary of Rose Island (1924-1934). One side features the iconic Ferris Wheel overlooking the river, while the reverse displays the grand Carousel.",
    image: "/images/coin-ferris-wheel.jpg",
    contextImage: "/images/coin-carousel.jpg",
    contextCaption: "Reverse side showing the Carousel",
    details: "Aluminum souvenir token. Diameter: 32mm."
  },
  {
    id: "marriage-license",
    name: "David & Esther Rose Marriage License",
    era: "1896",
    description: "The official marriage certificate of David B.G. Rose and Esther G. Goldnamer, dated April 25, 1896. This document marks the beginning of the family legacy that would eventually lead to the creation of Rose Island.",
    image: "/images/marriage-license-david-esther.png",
    contextImage: "/images/david-rose.png",
    contextCaption: "David B.G. Rose (Founder)",
    details: "Issued in Covington, Kentucky. Kenton County."
  },
  {
    id: "fern-grove-postcard",
    name: "Fern Grove Postcard",
    era: "1909",
    description: "A rare postcard from the 'Fern Grove' era, before it became Rose Island. It depicts the Fern Cliff Hotel, a popular summer resort destination. The message on the back is addressed to Mr. Walter Sullivan.",
    image: "/images/postcard-fern-grove-front.jpg",
    contextImage: "/images/postcard-fern-grove-back.jpg",
    contextCaption: "Postmarked Aug 2, 1909",
    details: "Sent to 519 Chestnut St., Burlington, Wis. 'We all took dinner here last Sunday...'"
  },
  {
    id: "fern-grove-deed",
    name: "Fern Grove Deed Filing",
    era: "1924",
    description: "A newspaper clipping from The Courier-Journal (March 4, 1924) announcing the filing of the deed transferring Fern Grove from David and Esther Rose to the Rose Island Company. This legal act officially birthed the amusement park.",
    image: "/images/fern-grove-deed-clipping.jpg",
    contextImage: "/images/rose-island-map-vintage.jpg",
    contextCaption: "The 118 acres that became Rose Island",
    details: "Transaction Value: $10,000 plus assumed mortgage. Location: Mouth of Fourteen-Mile Creek."
  },
  {
    id: "steamboat-ticket",
    name: "Steamboat Ticket Stub",
    era: "1923",
    description: "A faded ticket for the 'Island Queen', dated July 4th. The edges are worn, suggesting it was carried in a pocket for a long time.",
    image: "/images/steamboat-vintage.jpg", // Reusing existing asset as placeholder
    contextImage: null,
    details: "Admit One. Round Trip Fare: 25 cents."
  },
  {
    id: "park-map",
    name: "Rose Island Aerial View",
    era: "1928",
    description: "A detailed aerial illustration of the Rose Island Amusement Park and Resort. This panoramic view captures the full scale of the destination, from the grand Rose Island Hotel and Summer Cottages along the riverfront to the Pony Track, Carousel, and Dining Hall nestled in the grove.",
    image: "/images/rose-island-aerial-map.png",
    contextImage: "/images/rose-island-map-vintage.jpg",
    contextCaption: "Promotional Map Layout",
    details: "Source: Indiana Department of Natural Resources. Shows the 'Proposed Golf Course' and 'Devil's Backbone'."
  }
];

export default function Artifacts() {
  const [flippedArtifacts, setFlippedArtifacts] = useState<Record<string, boolean>>({});

  const toggleFlip = (id: string) => {
    setFlippedArtifacts(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <Layout>
      <div className="min-h-screen bg-[#1a1a1a] text-[#e0e0e0] font-body selection:bg-gold/30">
        {/* Hero Section */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/rose-island-bg-vintage.jpg" 
              alt="Background" 
              className="w-full h-full object-cover opacity-20 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-transparent to-[#1a1a1a]" />
          </div>
          
          <div className="relative z-10 text-center px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-heading text-5xl md:text-7xl text-gold mb-4 drop-shadow-lg"
            >
              Artifacts of the Story
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-white/80 italic font-light max-w-2xl mx-auto"
            >
              "Objects hold memories longer than people do."
            </motion.p>
          </div>
        </section>

        {/* Artifacts Grid */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {artifacts.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative"
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="cursor-pointer">
                      {/* Card Container */}
                      <div className="relative aspect-square bg-[#2a2a2a] p-4 shadow-2xl border border-white/10 transition-transform duration-500 group-hover:-translate-y-2">
                        {/* Image Frame */}
                        <div className="w-full h-full overflow-hidden relative border border-white/5">
                          <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover filter sepia-[0.3] contrast-110 group-hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                        
                        {/* Label */}
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#1a1a1a] border border-gold/30 px-6 py-2 shadow-lg">
                          <span className="font-heading text-gold text-lg tracking-widest whitespace-nowrap">
                            {item.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>

                  <DialogContent className="max-w-5xl bg-[#1a1a1a] border-gold/20 text-[#e0e0e0] p-0 overflow-hidden h-[90vh] md:h-[80vh] flex flex-col md:flex-row">
                    <VisuallyHidden>
                      <DialogTitle>{item.name}</DialogTitle>
                    </VisuallyHidden>
                    
                    {/* Left: Main Image (Interactive Flip) */}
                    <div className="relative h-1/2 md:h-full md:w-1/2 bg-black overflow-hidden group/image">
                      <AnimatePresence mode="wait">
                        <motion.img 
                          key={flippedArtifacts[item.id] ? "back" : "front"}
                          src={flippedArtifacts[item.id] && item.contextImage ? item.contextImage : item.image} 
                          alt={item.name}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.3 }}
                          className="w-full h-full object-contain p-4 md:p-8"
                        />
                      </AnimatePresence>
                      
                      {/* Flip Button Overlay */}
                      {item.contextImage && (
                        <button 
                          onClick={() => toggleFlip(item.id)}
                          className="absolute bottom-4 right-4 bg-black/60 hover:bg-gold/80 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 border border-white/10 hover:border-gold/50 group-hover/image:opacity-100 md:opacity-0 opacity-100"
                          title="Flip to see reverse/context"
                        >
                          <RotateCw className={`w-6 h-6 transition-transform duration-500 ${flippedArtifacts[item.id] ? 'rotate-180' : ''}`} />
                        </button>
                      )}
                    </div>

                    {/* Right: Details (Scrollable) */}
                    <div className="h-1/2 md:h-full md:w-1/2 flex flex-col relative bg-[#1a1a1a]">
                      <div className="flex-1 overflow-y-auto p-8 md:p-12 custom-scrollbar">
                        <div className="absolute top-0 right-0 p-4 opacity-20 font-heading text-9xl text-gold select-none pointer-events-none">
                          {item.era}
                        </div>
                        
                        <h2 className="font-heading text-3xl md:text-4xl text-gold mb-2 pr-12">{item.name}</h2>
                        <div className="h-1 w-20 bg-gold/50 mb-6" />
                        
                        <p className="text-lg leading-relaxed text-white/80 mb-8 font-light">
                          {item.description}
                        </p>

                        {item.contextImage && (
                          <div 
                            className="mt-8 bg-[#252525] p-4 border border-white/5 rounded-sm cursor-pointer hover:border-gold/30 transition-colors group/context"
                            onClick={() => toggleFlip(item.id)}
                          >
                            <div className="flex justify-between items-center mb-3">
                              <p className="text-xs uppercase tracking-widest text-gold opacity-70">
                                {flippedArtifacts[item.id] ? "Viewing: Context/Reverse" : "Historical Context"}
                              </p>
                              <span className="text-xs text-gold/50 group-hover/context:text-gold transition-colors flex items-center gap-1">
                                <RotateCw className="w-3 h-3" /> Click to View
                              </span>
                            </div>
                            
                            <div className="flex gap-4 items-start">
                              <div className="relative w-24 h-24 shrink-0 overflow-hidden border border-white/10">
                                <img 
                                  src={item.contextImage} 
                                  alt="Context" 
                                  className="w-full h-full object-cover opacity-60 group-hover/context:opacity-100 transition-opacity"
                                />
                              </div>
                              <div>
                                <p className="text-sm italic text-white/60 mb-2">{item.contextCaption}</p>
                                <p className="text-xs font-mono text-gold/80">{item.details}</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
