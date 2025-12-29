import { Link, useLocation } from "wouter";
import { useState, useEffect, useMemo } from "react";
import { cn } from "@/lib/utils";
import { useAudio } from "@/contexts/AudioContext";
import { Volume2, VolumeX, ChevronDown, Facebook, Twitter } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [showFullNav, setShowFullNav] = useState(true);
  const { isPlaying, toggleAudio } = useAudio();



  // Navigation Structure
  const navStructure = useMemo(() => [
    { href: "/", label: "Home" },
    { href: "/about-book", label: "Book" },
    { href: "/author", label: "Author" },
    {
      label: "About",
      children: [
        { href: "/faq", label: "FAQ" },
        { href: "/credits", label: "Credits" },
      ]
    },
    {
      label: "Explore",
      children: [
        { href: "/history", label: "History" },
        { href: "/artifacts", label: "Artifacts" },
        { href: "/galleries", label: "Galleries" },
        { href: "/stories", label: "Stories" },
      ]
    },
    { href: "/events", label: "Events" },
    {
      label: "Blog",
      children: [
        { href: "/updates", label: "Blog Feed" },
      ]
    },
    { href: "/contact", label: "Contact" },
  ], []);

  return (
    <div className="min-h-screen flex flex-col bg-background font-body">
      {/* Header */}
      <header className={cn(
        "absolute top-0 z-50 w-full transition-all duration-300",
        showFullNav ? "bg-black/80 backdrop-blur-sm py-4" : "bg-transparent pt-6"
      )}>
        <div className="container flex justify-between items-center">
          {/* Logo / Home Link */}
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer">
              {/* Only show text logo if full nav is enabled, otherwise keep it clean as requested */}
              {showFullNav && (
                <span className="font-heading text-xl md:text-2xl font-bold tracking-wider text-gold drop-shadow-md">
                  The Rose Island Story
                </span>
              )}
            </div>
          </Link>

          {/* Full Navigation (Hidden by default) */}
          {showFullNav && (
            <nav className="hidden md:flex items-center space-x-8">
              {navStructure.map((item, index) => {
                if (item.children) {
                  // Dropdown Menu
                  const isActive = item.children.some(child => child.href === location);
                  return (
                    <DropdownMenu key={index}>
                      <DropdownMenuTrigger className="outline-none">
                        <div className={cn(
                          "flex items-center gap-1 text-sm uppercase tracking-widest hover:text-gold transition-colors cursor-pointer",
                          isActive ? "text-gold font-bold" : "text-white/80"
                        )}>
                          {item.label}
                          <ChevronDown className="w-3 h-3 opacity-70" />
                        </div>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-black/90 border-gold/20 backdrop-blur-md p-2 min-w-[160px]">
                        {item.children.map((child) => (
                          <Link key={child.href} href={child.href}>
                            <DropdownMenuItem className={cn(
                              "text-sm uppercase tracking-widest cursor-pointer focus:bg-white/10 focus:text-gold py-2",
                              location === child.href ? "text-gold font-bold" : "text-white/80"
                            )}>
                              {child.label}
                            </DropdownMenuItem>
                          </Link>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  );
                } else {
                  // Standard Link
                  return (
                    <Link key={item.href} href={item.href!}>
                      <div className={cn(
                        "text-sm uppercase tracking-widest hover:text-gold transition-colors cursor-pointer",
                        location === item.href ? "text-gold font-bold" : "text-white/80"
                      )}>
                        {item.label}
                      </div>
                    </Link>
                  );
                }
              })}
            </nav>
          )}
        </div>
      </header>

      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full py-6 text-center text-white/60 text-xs z-10">
        <div className="container relative flex flex-col items-center gap-4">
          {/* Social Media Links */}
          <div className="flex items-center gap-6 mb-2">
            <a 
              href="https://www.facebook.com/roseislandstory" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-gold transition-colors duration-300"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="https://twitter.com/roseislandstory" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-gold transition-colors duration-300"
              aria-label="Follow us on X (Twitter)"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          <p>&copy; {new Date().getFullYear()} The Rose Island Story. All rights reserved.</p>
          <Link href="/credits">
            <span className="hover:text-gold transition-colors cursor-pointer">Image Credits / Copyright</span>
          </Link>
          
          {/* Audio Toggle */}
          <button
            onClick={toggleAudio}
            className="fixed bottom-6 right-6 z-[100] p-3 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm border border-gold/30 text-gold transition-all duration-300 hover:scale-110 group cursor-pointer"
            title={isPlaying ? "Mute Atmosphere" : "Play Atmosphere"}
          >
            {isPlaying ? (
              <Volume2 className="w-5 h-5 animate-pulse" />
            ) : (
              <VolumeX className="w-5 h-5 opacity-70 group-hover:opacity-100" />
            )}
          </button>


        </div>
      </footer>
    </div>
  );
}
