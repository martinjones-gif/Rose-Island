import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Twitter, Facebook, Instagram } from "lucide-react";

export default function Author() {
  return (
    <Layout>
      <div className="bg-muted/30 py-12 border-b border-border pt-32">
        <div className="container text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">About the Author</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body italic">
            "What makes some stories survive while others disappear?"
          </p>
        </div>
      </div>

      <section className="py-16 bg-background">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-1"
            >
              <div className="aspect-[3/4] bg-muted rounded-sm overflow-hidden border border-border shadow-lg relative rotate-[-2deg]">
                <img 
                  src="/images/martin.png" 
                  alt="Martin Jones" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="mt-8 flex justify-center gap-4">
                <a href="https://twitter.com/roseislandstory" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary">
                    <Twitter className="w-5 h-5" />
                  </Button>
                </a>
                <a href="https://facebook.com/roseislandstory" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary">
                    <Facebook className="w-5 h-5" />
                  </Button>
                </a>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary">
                  <Instagram className="w-5 h-5" />
                </Button>
                <a href="mailto:press@theroseislandstory.com">
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary">
                    <Mail className="w-5 h-5" />
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 prose prose-lg prose-headings:font-heading prose-headings:text-primary prose-p:text-muted-foreground"
            >
              <h3>The Storyteller</h3>
              <p className="mb-8">
                Martin Jones has spent 25 years asking one question: <strong>What makes some stories survive while others disappear?</strong>
              </p>
              <p className="mb-8">
                As a nationally recognized content strategist and keynote speaker with 300,000+ followers, Jones has built his career on understanding how narratives engage audiences and why certain stories endure. As Senior Corporate Marketing Manager at Cox Business, former futurist with IBM, and contributor to Forbes and Inc., he has led national storytelling initiatives and spoken at SXSW, Social Media Marketing World, and the Digital Marketing World Forum.
              </p>
              <p className="mb-8">
                His expertise extends to proprietary communication methodologies: Ground Signals™, a framework for forecasting micro-trends, and Micro-Personas™, a system for bridging communication gaps in niche audiences.
              </p>

              <h3 className="mt-12">The Personal Turning Point</h3>
              <p className="mb-8">
                But when his mother passed away, the professional became intensely personal. She left behind a trunk of family artifacts; letters, photographs, puzzles with missing pieces, but the stories she had tried to share in life were gone. Jones realized with sudden clarity that his family history could end with he and his siblings.
              </p>
              <p className="mb-8">
                The turning point came through two coincidences. First, his pregnant daughter gifted him a journal titled <em>Tell Me Your Life Story, Grandpa</em>, and he discovered he didn't know what to write. Second, during her visit, she asked to walk through a local park: Rose Island.
              </p>

              <h3 className="mt-12">Discovering Rose Island</h3>
              <p className="mb-8">
                Walking among the ruins, Jones was stunned. He found himself standing in the remnants of a magnificent 1920s amusement park, once called "the Disneyland of its day", that he had never heard of. Research revealed almost nothing: no books, no documentaries, only scattered myths and conflicting lore.
              </p>
              <p className="mb-8">
                Jones discovered that Rose Island and its visionary founder, David Rose, had been erased not by the 1937 flood that destroyed the structures, but by the forgetting that followed. Forgetting that made both a footnote in Indiana and Louisville history. The parallel was inescapable: If a place that mattered to hundreds of thousands can disappear without trace, what chance do any of us have of being remembered for more than a generation?
              </p>
              <p className="mb-8">
                He spent the next year reconstructing Rose Island's story from fragmentary evidence. <em>The Rose Island Story</em> is more than a historical novel, it is an act of resurrection, and a refusal to let “forgotten” be the footnote, or the last word.
              </p>
              
              <div className="not-prose mt-12 p-6 bg-muted/30 border border-border rounded-sm">
                <h4 className="font-heading text-xl font-bold text-primary mb-2">Legacy</h4>
                <p className="text-sm text-muted-foreground">
                  Jones believes that if you have breath, you can have legacy, if you're willing to fight for it. He is developing a companion workbook on legacy preservation and a talk titled "Networking Beyond the Grave." He lives in Phoenix, Arizona.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
