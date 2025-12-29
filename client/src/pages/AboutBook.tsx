import Layout from "@/components/Layout";
import { motion } from "framer-motion";

export default function AboutBook() {
  return (
    <Layout>
      {/* Header Section */}
      <div className="bg-muted/30 pt-32 pb-16 border-b border-border relative overflow-hidden">
        {/* <div className="absolute inset-0 opacity-10 bg-[url('/pattern-vintage.png')] bg-repeat"></div> */}
        <div className="container text-center relative z-10">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary mb-6 drop-shadow-sm">The Rose Island Story</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-accent tracking-widest uppercase">
            About the Book
          </p>
        </div>
      </div>

      <section className="py-20 bg-background">
        <div className="container max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg prose-headings:font-heading prose-headings:text-primary prose-p:text-muted-foreground prose-p:font-body prose-p:leading-relaxed prose-p:mb-8 mx-auto"
          >
            {/* Introduction with Drop Cap */}
            <div className="mb-8 space-y-8">
              <p className="text-xl md:text-2xl font-body text-primary/90 leading-relaxed first-letter:float-left first-letter:text-7xl first-letter:font-heading first-letter:text-gold first-letter:mr-3 first-letter:mt-[-10px] mb-8">
                History is often reduced to a single sentence, repeated long enough to become accepted truth.
              </p>
              <p className="mb-0">
                For nearly a century, the legacy of Rose Island, Indiana's premier amusement park of the 1920s and 1930s, has been summarized the same way: that its founder, David Rose, lost everything in the Great Flood of 1937 and died years later, alone and broke.
              </p>
            </div>

            {/* Main Narrative Body */}
            <div className="space-y-8">
              <p>
                <em>The Rose Island Story</em> begins by questioning that sentence.
              </p>
              <p>
                Located along the Ohio River near Charlestown, Indiana, Rose Island operated from 1923 to 1937 and drew thousands of visitors each summer.
              </p>
              
              {/* Inserted Image */}
              <figure className="my-12">
                <div className="relative p-2 bg-white shadow-lg  border border-border/40">
                  <img 
                    src="/images/RoseIslandDock.png" 
                    alt="Visitors arriving at the Rose Island entrance arch" 
                    className="w-full h-auto block sepia-[0.2]"
                  />
                </div>
                <figcaption className="text-center text-sm text-muted-foreground mt-4 italic font-body">
                  Visitors arriving at the iconic Rose Island entrance arch, circa 1920s.
                </figcaption>
              </figure>

              <p>
                Contemporary reporting and later journalism routinely described it as "the Disneyland of its day," a regional destination offering excursion steamers, a grand hotel, rental cottages, a dance hall, a 1600-seat food hall, picnic grounds, a Ferris wheel, a roller coaster, and a filtered swimming pool considered a modern marvel when it opened in 1924.
              </p>
              <p>
                During the peak of its annual season, from late May through August, as many as 4,000 people a day made the journey. Yet when the river reclaimed the peninsula in 1937, the park's story collapsed and slipped into folklore.
              </p>
              <p>
                This book reconstructs Rose Island's story; the years before, during, and after its 14-year existence.
              </p>
              <p>
                Framed by a present-day visit to the ruins, the narrative moves between past and present, drawing on census records, photographs, newspaper archives, legal deeds, letters, journals, oral histories, and family artifacts. Where the historical record holds, it guides the story. Where it falls silent, carefully constructed scenes and dialogue bridge the gaps without altering the facts.
              </p>
            </div>

            {/* Divider */}
            <div className="flex justify-center my-12">
              <span className="text-gold text-2xl tracking-[1em]">✦ ✦ ✦</span>
            </div>

            {/* Three Worlds Section */}
            <div className="bg-muted/20 p-8 md:p-10 rounded-sm border border-border/50 my-12 shadow-sm">
              <h3 className="text-2xl mb-6 mt-0 text-center">The Novel Unfolds Across Three Intersecting Worlds</h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="font-heading text-xl text-gold mb-2 uppercase tracking-wider">The Modern Ruins</h4>
                  <p className="mt-0 text-base">
                    A rain-soaked walk through moss-covered foundations and scattered stonework becomes an investigation into what survived the flood, what was lost, and what history failed to preserve.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-heading text-xl text-gold mb-2 uppercase tracking-wider">The Years Before the Flood</h4>
                  <p className="mt-0 text-base">
                    Rose Island's heyday is reconstructed through the lives of those who built it, worked its rides, and believed in its promise: Tyler, an apprentice chocolatier who carries a bracelet of silver charms like a guarded secret; Juanita, a classically trained pianist with a yellow scarf whose future is as bright as the White Way lights; a maintenance man and his wife whose future begins in a small-town general store; Rose Sullivan, an actress navigating ambition and reinvention; and a founder whose flair for spectacle was matched by unyielding business discipline.
                  </p>
                </div>

                <div>
                  <h4 className="font-heading text-xl text-gold mb-2 uppercase tracking-wider">A Community Facing Catastrophe</h4>
                  <p className="mt-0 text-base">
                    As economic pressure from the Great Depression and the forced modernization of public entertainment mount, the river rises. The flood that destroyed Rose Island alters lives in a single hour and sets in motion decades of silence, distortion, and mythmaking.
                  </p>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <p className="text-lg font-medium italic text-center my-10 text-primary/80">
              "The Rose Island Story is not a nostalgic portrait of a lost amusement park. It is an examination of how legacies are simplified for convenience, how myths replace records, and what it costs when no one remains to challenge the version that survives."
            </p>

            {/* Divider */}
            <div className="flex justify-center my-12">
              <span className="text-gold text-2xl tracking-[1em]">✦ ✦ ✦</span>
            </div>

            {/* Note on Sources */}
            <div className="text-sm text-muted-foreground bg-background border-t border-b border-border py-8 px-4">
              <h4 className="font-heading text-lg text-primary mb-3 uppercase tracking-widest text-center">A Note on Sources</h4>
              <p className="italic mb-4">
                This book is a work of historical reconstruction. While some scenes and dialogue are created to bridge gaps in the record, all major details are grounded in primary sources, including 1900–1940 census records documenting sustained success, property deeds for the 118-acre site, news photography, contemporaneous newspaper accounts, correspondence, journals, oral histories, and family-held artifacts.
              </p>
              <p className="italic mb-4">
                Special thanks to <a href="https://www.in.gov/dnr/state-parks/parks-lakes/charlestown-state-park/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-gold underline decoration-dotted underline-offset-4">Charlestown State Park</a> and the <a href="https://clarkcountyhistory.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-gold underline decoration-dotted underline-offset-4">Clark County Historical Society</a> for their ongoing preservation of the region's history.
              </p>
              <p className="font-heading text-center text-primary mt-6">
                Where the facts ended, the story listened. Where they held firm, it let them speak.
              </p>
            </div>

            {/* Book Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 text-sm">
              <div>
                <h5 className="font-bold text-primary uppercase tracking-wider mb-2">Setting</h5>
                <p>Southern Indiana and the Ohio River region, 1913–1937, with a present-day frame</p>
              </div>
              <div>
                <h5 className="font-bold text-primary uppercase tracking-wider mb-2">Themes</h5>
                <p>Legacy and memory | Myth versus record | Redemption and resilience | Family and belonging | The responsibility of preservation</p>
              </div>
            </div>

          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
