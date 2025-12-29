import Layout from "@/components/Layout";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronsLeftRight } from "lucide-react";

const locations = [
  {
    id: "pool",
    title: "The Swimming Pool",
    desc: "Once the first filtered pool in the Midwest, filled with laughter and clear blue water. Today, it lies silent, filled with gravel and reclaimed by the forest.",
    before: "/pool-1923.jpg",
    after: "/pool-ruins.jpg"
  },
  {
    id: "entrance",
    title: "The Grand Entrance",
    desc: "The stone pillars that once welcomed thousands of visitors from the steamboats now stand as lonely sentinels in the woods.",
    before: "/entrance-1923.jpg",
    after: "/entrance-ruins.jpg"
  }
];

const ImageSlider = ({ before, after, alt }: { before: string, after: string, alt: string }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
    
    let position = ((clientX - containerRect.left) / containerRect.width) * 100;
    position = Math.max(0, Math.min(100, position));
    
    setSliderPosition(position);
  };

  const handleMouseDown = () => { isDragging.current = true; };
  const handleMouseUp = () => { isDragging.current = false; };
  
  // Global mouse up handler to catch releases outside the component
  useEffect(() => {
    const handleGlobalMouseUp = () => { isDragging.current = false; };
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging.current && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        let position = ((e.clientX - containerRect.left) / containerRect.width) * 100;
        position = Math.max(0, Math.min(100, position));
        setSliderPosition(position);
      }
    };

    window.addEventListener('mouseup', handleGlobalMouseUp);
    window.addEventListener('mousemove', handleGlobalMouseMove);
    
    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-video overflow-hidden rounded-sm border border-border cursor-ew-resize select-none shadow-xl"
      onMouseMove={(e) => isDragging.current && handleMove(e)}
      onTouchMove={handleMove}
      onClick={handleMove}
    >
      {/* After Image (Background) */}
      <img 
        src={after} 
        alt={`Ruins of ${alt}`} 
        className="absolute inset-0 w-full h-full object-cover" 
      />
      <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 text-xs font-bold uppercase tracking-widest rounded backdrop-blur-sm">
        Today (Ruins)
      </div>

      {/* Before Image (Clipped) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <img 
          src={before} 
          alt={`1923 View of ${alt}`} 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute top-4 left-4 bg-primary/80 text-white px-3 py-1 text-xs font-bold uppercase tracking-widest rounded backdrop-blur-sm">
          1923 (Splendor)
        </div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-primary">
          <ChevronsLeftRight className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default function TimeTravel() {
  return (
    <Layout>
      <div className="bg-muted/30 py-12 border-b border-border">
        <div className="container text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">Time Travel</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body italic">
            "Drag the slider to reveal the ghosts of the past."
          </p>
        </div>
      </div>

      <section className="py-16 bg-background">
        <div className="container max-w-5xl space-y-24">
          {locations.map((loc, index) => (
            <motion.div 
              key={loc.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="text-center mb-8">
                <h2 className="font-heading text-3xl font-bold text-primary mb-3">{loc.title}</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">{loc.desc}</p>
              </div>
              
              <ImageSlider 
                before={loc.before} 
                after={loc.after} 
                alt={loc.title} 
              />
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
