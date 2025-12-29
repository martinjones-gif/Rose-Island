import Layout from "@/components/Layout";
import { motion } from "framer-motion";

export default function StoryBehind() {
  return (
    <Layout>
      <div className="bg-muted/30 py-12 border-b border-border">
        <div className="container text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">Behind the Pages</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body italic">
            "Uncovering the truth behind the legend."
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl font-bold text-primary mb-6">The Research Journey</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Just like the protagonist Martin, the journey to write <em>The Rose Island Story</em> began with a spark of curiosity. The real Rose Island was a place of wonder for thousands of Hoosiers and Kentuckians in the 1920s, but time and the Great Flood of 1937 washed much of its history away.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Extensive research was required to separate fact from fiction. The legend of David Rose dying "broke and alone" was a persistent myth that needed to be challenged. Through deep dives into census records, newspaper archives, and oral histories, a different picture emerged—one of a resilient community and a visionary leader.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square bg-muted p-4 rotate-2 shadow-xl border border-border"
            >
              <img 
                src="/rose-island-map.jpg" 
                alt="Vintage Map of Rose Island" 
                className="w-full h-full object-cover"
              />
              <p className="absolute bottom-2 right-4 font-accent text-xs text-muted-foreground bg-background/80 px-2 py-1">
                Archival Map Recreation
              </p>
            </motion.div>
          </div>

          <div className="prose prose-lg prose-headings:font-heading prose-headings:text-primary prose-p:text-muted-foreground mx-auto">
            <h3>The Trunk of Memories</h3>
            <p>
              A pivotal moment in the book—the discovery of the trunk—mirrors the real-life experience of uncovering forgotten history. Accessing personal letters, photographs, and business documents provided the intimate details that breathe life into the characters. It wasn't just about the roller coaster or the swimming pool; it was about the people who fell in love by the river and the families who worked tirelessly to keep the dream alive.
            </p>
            
            <h3>Why Historical Fiction?</h3>
            <p>
              While the setting and many events are historically accurate, fiction allows us to fill in the emotional gaps. We know <em>what</em> happened, but fiction lets us explore <em>how</em> it felt. By weaving the fictional narrative of Martin's discovery with the historical reality of the McKenna and Rose families, the book aims to honor the spirit of the place in a way that a textbook never could.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
