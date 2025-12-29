import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Play } from "lucide-react";
import { Helmet } from "react-helmet";

const winterGallery = [
  { 
    src: "/images/gallery/winter-2025/view-through-trees.jpg", 
    title: "View Through Trees", 
    desc: "A glimpse of the river through the winter forest.",
    alt: "Winter view of the Ohio River through bare trees at Rose Island, Indiana"
  },
  { 
    src: "/images/gallery/winter-2025/sunset-trees.jpg", 
    title: "Sunset Through Trees", 
    desc: "Golden hour light filtering through the bare branches.",
    alt: "Sunset light filtering through forest trees at Rose Island amusement park ruins"
  },
  { 
    src: "/images/gallery/winter-2025/bridge-structure.jpg", 
    title: "The Porterville Bridge over 14-Mile Creek", 
    desc: "Remnants of the old bridge infrastructure.",
    alt: "Ruins of the Porterville Bridge over 14-Mile Creek at Rose Island, Indiana"
  },
  { 
    src: "/images/gallery/winter-2025/winter-leaves.jpg", 
    title: "Winter Leaves", 
    desc: "Fallen leaves covering the historic grounds.",
    alt: "Fallen winter leaves covering the historic grounds of Rose Island State Park"
  },
  { 
    src: "/images/gallery/winter-2025/boat-landing-sign.jpg", 
    title: "Boat Landing Sign", 
    desc: "Sign marking the historic boat landing area.",
    alt: "Historical marker sign for the boat landing at Rose Island, Indiana"
  },
  { 
    src: "/images/gallery/winter-2025/concrete-structure.jpg", 
    title: "David Rose's Fresh 'Spring Water Aquifer' Dispenser", 
    desc: "Weathered concrete foundations from the park era.",
    alt: "Concrete ruins of David Rose's fresh spring water aquifer dispenser at Rose Island"
  },
  { 
    src: "/images/gallery/winter-2025/metal-ring-ruins.jpg", 
    title: "Metal Fire Ring Near Cabins Along the Ohio", 
    desc: "Rusted metal ring embedded in the ruins.",
    alt: "Rusted metal fire ring near the cabin ruins along the Ohio River at Rose Island"
  },
  { 
    src: "/images/gallery/winter-2025/stone-pillars.jpg", 
    title: "Stone Pillars", 
    desc: "Historic stone pillars standing guard.",
    alt: "Historic stone pillars from the 1920s amusement park at Rose Island, Indiana"
  },
  { 
    src: "/images/gallery/winter-2025/river-bank.jpg", 
    title: "River Bank", 
    desc: "The quiet Ohio River shoreline in winter.",
    alt: "Winter shoreline of the Ohio River at the former Rose Island amusement park"
  },
  { 
    src: "/images/gallery/winter-2025/flood-marker-pole.jpg", 
    title: "Blue Flood Marker at Cabin's Location", 
    desc: "Pole marking historic flood levels.",
    alt: "Blue flood marker pole showing historic flood levels at Rose Island cabin location"
  },
  { 
    src: "/images/gallery/winter-2025/river-view.jpg", 
    title: "River View", 
    desc: "Expansive view of the Ohio River.",
    alt: "Scenic view of the Ohio River from Rose Island, Indiana in winter"
  },
  { 
    src: "/images/gallery/winter-2025/forest-path.jpg", 
    title: "Forest Path", 
    desc: "A walking path winding through the woods.",
    alt: "Forest walking path winding through the ruins of Rose Island, Indiana"
  },
];

const historicalPhotos: { src: string; title: string; desc: string; alt: string }[] = [];

const videos: { title: string; duration: string; thumbnail: string; src: string }[] = [];

export default function Galleries() {
  // JSON-LD Schema for ImageGallery
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Rose Island, Indiana Historical Archives",
    "description": "A collection of historical and contemporary photos of the abandoned Rose Island amusement park in Indiana.",
    "locationCreated": {
      "@type": "Place",
      "name": "Rose Island",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Charlestown",
        "addressRegion": "IN",
        "addressCountry": "US"
      }
    },
    "image": winterGallery.map(photo => ({
      "@type": "ImageObject",
      "contentUrl": `https://rose-island-book.manus.space${photo.src}`,
      "name": photo.title,
      "description": photo.alt,
      "caption": photo.desc
    }))
  };

  return (
    <Layout>
      <Helmet>
        <title>Visual Archives | Rose Island, Indiana Photos</title>
        <meta name="description" content="Explore historical photos and modern winter views of the abandoned Rose Island amusement park in Charlestown, Indiana. See the ruins of the Porterville Bridge, swimming pool, and more." />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className="bg-muted/30 pt-32 pb-12 border-b border-border">
        <div className="container text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">Visual Archives</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body italic">
            "Glimpses into a world long gone."
          </p>
        </div>
      </div>

      <section className="py-16 bg-background">
        <div className="container">
          <Tabs defaultValue="winter" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-muted/50 p-1 h-auto flex-wrap justify-center">
                <TabsTrigger value="winter" className="font-accent px-6 py-2 text-lg">Winter</TabsTrigger>
                <TabsTrigger value="historical" className="font-accent px-6 py-2 text-lg">Historical Photos</TabsTrigger>
                <TabsTrigger value="videos" className="font-accent px-6 py-2 text-lg">Videos</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="winter">
              <div className="mb-8 text-center">
                <h2 className="font-heading text-3xl font-bold text-primary mb-2">Winter at Rose Island</h2>
                <p className="text-muted-foreground">A contemporary look at the park's ruins and natural beauty.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {winterGallery.map((photo, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="group relative aspect-[4/3] overflow-hidden rounded-sm border border-border cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="w-full h-full relative">
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10" />
                          <img 
                            src={photo.src} 
                            alt={photo.alt} 
                            title={photo.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="font-heading font-bold text-lg">{photo.title}</h3>
                          </div>
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-5xl bg-background border-border p-0 overflow-hidden">
                        <div className="relative max-h-[80vh] overflow-auto flex flex-col">
                          <img 
                            src={photo.src} 
                            alt={photo.alt} 
                            title={photo.title}
                            className="w-full h-auto object-contain max-h-[70vh] bg-black/5" 
                          />
                          <div className="p-6 bg-background border-t border-border">
                            <h3 className="font-heading text-2xl font-bold text-primary">{photo.title}</h3>
                            <p className="text-muted-foreground mt-2 font-body text-lg">{photo.desc}</p>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="historical">
              <div className="mb-8 text-center">
                <h2 className="font-heading text-3xl font-bold text-primary mb-2">Historical Archives</h2>
                <p className="text-muted-foreground">Images from the golden age of Rose Island.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {historicalPhotos.map((photo, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative aspect-[4/3] overflow-hidden rounded-sm border border-border cursor-pointer"
                  >
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="w-full h-full relative">
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                          <img 
                            src={photo.src} 
                            alt={photo.alt} 
                            title={photo.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="font-heading font-bold">{photo.title}</h3>
                            <p className="text-xs opacity-80">{photo.desc}</p>
                          </div>
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl bg-background border-border p-0 overflow-hidden">
                        <img 
                          src={photo.src} 
                          alt={photo.alt} 
                          title={photo.title}
                          className="w-full h-auto" 
                        />
                        <div className="p-6 bg-background">
                          <h3 className="font-heading text-2xl font-bold text-primary">{photo.title}</h3>
                          <p className="text-muted-foreground mt-2">{photo.desc}</p>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="videos">
              <div className="mb-8 text-center">
                <h2 className="font-heading text-3xl font-bold text-primary mb-2">Video Library</h2>
                <p className="text-muted-foreground">Trailers, interviews, and historical footage.</p>
              </div>
              {videos.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {videos.map((video, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group cursor-pointer"
                    >
                      <Dialog>
                        <DialogTrigger asChild>
                          <div className="relative">
                            <div className="aspect-video relative rounded-sm overflow-hidden border border-border mb-4">
                              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10 flex items-center justify-center">
                                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform">
                                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                                </div>
                              </div>
                              <img 
                                src={video.thumbnail} 
                                alt={video.title} 
                                className="w-full h-full object-cover"
                              />
                              <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded font-mono z-20">
                                {video.duration}
                              </span>
                            </div>
                            <h3 className="font-heading text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                              {video.title}
                            </h3>
                          </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-5xl bg-black border-border p-0 overflow-hidden">
                          <div className="aspect-video w-full">
                            <video 
                              controls 
                              autoPlay 
                              className="w-full h-full"
                              src={video.src}
                            >
                              Your browser does not support the video tag.
                            </video>
                          </div>
                          <div className="p-4 bg-background">
                            <h3 className="font-heading text-xl font-bold text-primary">{video.title}</h3>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 border border-dashed border-border rounded-sm bg-muted/30">
                  <p className="text-xl text-muted-foreground font-body italic">Video content coming soon.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
}
