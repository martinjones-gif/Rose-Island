import Layout from "@/components/Layout";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

const mapPoints = [
  {
    id: 1,
    x: 20, // Percentage from left
    y: 60, // Percentage from top
    title: "The Steamboat Landing",
    desc: "Where visitors first stepped onto the island. In the book, this is where Martin first feels the strange pull of the past.",
    image: "/hero-bg.jpg",
    audio: "/audio/steamboat-intro.wav",
    audioLabel: "Listen to Intro"
  },
  {
    id: 2,
    x: 45,
    y: 40,
    title: "The Dance Hall",
    desc: "The heart of the park's social life. Sarah describes the music drifting over the water on summer nights.",
    image: "/dance-hall.jpg",
    audio: "/audio/ragtime.mp3",
    audioLabel: "Hear the Music"
  },
  {
    id: 3,
    x: 70,
    y: 50,
    title: "The Swimming Pool",
    desc: "The scene of a pivotal conversation between Hudson and Martin about the flood of 1937.",
    image: "/pool-1923.jpg",
    audio: "/audio/splash.mp3",
    audioLabel: "Pool Sounds"
  },
  {
    id: 4,
    x: 50,
    y: 20,
    title: "The Hotel",
    desc: "Where the McKenna family worked and lived. The trunk of memories was found in the attic of a nearby cottage.",
    image: "/rose-island-map.jpg"
  }
];

export default function Map() {
  const [activePoint, setActivePoint] = useState<typeof mapPoints[0] | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Handle audio playback when active point changes
  useEffect(() => {
    // Stop any currently playing audio when switching points
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }

    // If the new point has audio, create a new audio instance
    if (activePoint?.audio) {
      audioRef.current = new Audio(activePoint.audio);
      audioRef.current.onended = () => setIsPlaying(false);
      
      // Optional: Auto-play could be enabled here, but user-initiated is better for UX
      // audioRef.current.play().catch(e => console.log("Auto-play prevented:", e));
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [activePoint]);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.error("Playback failed:", e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <Layout>
      <div className="bg-muted/30 py-12 border-b border-border">
        <div className="container text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">Explore the Island</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body italic">
            "Click the markers to discover the stories hidden in the landscape."
          </p>
        </div>
      </div>

      <section className="py-12 bg-background min-h-[80vh] flex items-center justify-center">
        <div className="container max-w-6xl">
          <div className="relative w-full aspect-[16/9] bg-[#e6dcc3] rounded-sm border-2 border-primary/20 shadow-2xl overflow-hidden group">
            {/* Map Background */}
            <img 
              src="/rose-island-map.jpg" 
              alt="Vintage Map of Rose Island" 
              className="w-full h-full object-cover sepia-[0.3] opacity-90"
            />
            
            {/* Map Overlay Texture */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] opacity-50 pointer-events-none mix-blend-multiply" />

            {/* Interactive Points */}
            {mapPoints.map((point) => (
              <button
                key={point.id}
                onClick={() => setActivePoint(point)}
                className="absolute w-8 h-8 -ml-4 -mt-4 z-10 group/pin focus:outline-none"
                style={{ left: `${point.x}%`, top: `${point.y}%` }}
              >
                <span className="absolute inset-0 rounded-full bg-secondary/30 animate-ping" />
                <div className="relative w-8 h-8 bg-secondary rounded-full flex items-center justify-center shadow-lg border-2 border-white text-white hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-4 h-4 fill-current" />
                </div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/pin:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {point.title}
                </div>
              </button>
            ))}

            {/* Info Popup */}
            <AnimatePresence>
              {activePoint && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  className="absolute bottom-8 left-8 right-8 md:left-auto md:right-8 md:w-96 bg-card border border-border shadow-2xl rounded-sm overflow-hidden z-20"
                >
                  <div className="relative h-48">
                    <img 
                      src={activePoint.image} 
                      alt={activePoint.title} 
                      className="w-full h-full object-cover"
                    />
                    <button 
                      onClick={() => setActivePoint(null)}
                      className="absolute top-2 right-2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-2xl font-bold text-primary mb-2">{activePoint.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {activePoint.desc}
                    </p>
                    
                    {activePoint.audio && (
                      <Button 
                        onClick={toggleAudio}
                        variant="outline" 
                        size="sm" 
                        className={`w-full flex items-center justify-center gap-2 ${isPlaying ? 'bg-secondary/10 border-secondary text-secondary' : ''}`}
                      >
                        {isPlaying ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                        {isPlaying ? "Stop Audio" : activePoint.audioLabel || "Play Audio"}
                      </Button>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </Layout>
  );
}
