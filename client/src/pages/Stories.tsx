import Layout from "@/components/Layout";
import { motion } from "framer-motion";

export default function Stories() {
  return (
    <Layout>
      {/* Header Section */}
      <div className="bg-muted/30 pt-32 pb-16 border-b border-border relative overflow-hidden">
        {/* <div className="absolute inset-0 opacity-10 bg-[url('/pattern-vintage.png')] bg-repeat"></div> */}
        <div className="container text-center relative z-10">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary mb-6 drop-shadow-sm">Lost Stories</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-accent tracking-widest uppercase">
            Echoes from the Ohio River
          </p>
        </div>
      </div>

      <section className="py-20 bg-background">
        <div className="container max-w-4xl">
          
          {/* Article 1: The Swimming Pool */}
          <motion.article 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24 border-b border-border/50 pb-16"
          >
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                <div className="aspect-[3/4] bg-muted relative overflow-hidden rounded-sm border border-border shadow-sm group">
                  <img 
                    src="/images/rose-island-pool-1924-vintage.png" 
                    alt="Rose Island Swimming Pool 1924 - Vintage Teal" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="text-xs text-center mt-2 text-muted-foreground italic">The first filtered pool in the Midwest</p>
              </div>
              
              <div className="md:w-2/3">
                <h2 className="font-heading text-3xl text-primary mb-4">The 1924 Swimming Pool: A Marvel of its Day</h2>
                <p className="font-accent text-sm text-gold uppercase tracking-widest mb-6">Summer 1924 • Engineering Marvels</p>
                
                <div className="prose prose-p:font-body prose-p:text-muted-foreground prose-p:leading-relaxed">
                  <p>
                    In an era when "swimming" usually meant braving the muddy, unpredictable currents of the Ohio River, David Rose unveiled something that seemed like magic: crystal clear water.
                  </p>
                  <p>
                    The Rose Island swimming pool wasn't just a concrete basin; it was a technological triumph. Opened in 1924, it was reportedly the first filtered swimming pool in the entire Midwest. While other parks relied on "fill and draw" systems that grew murkier by the hour, Rose Island's filtration system kept the water sparkling blue—a stark contrast to the brown river flowing just yards away.
                  </p>
                  <p>
                    For the thousands of visitors who arrived by steamboat, the pool was the crown jewel. It represented safety, modernity, and a touch of luxury that was accessible to the common family. Today, the concrete shell of this marvel still sits in the forest at Charlestown State Park, filled not with water, but with leaves and the quiet passage of time.
                  </p>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Article 2: Steamboat Races */}
          <motion.article 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row-reverse gap-8 items-start">
              <div className="md:w-1/3">
                <div className="aspect-[3/4] bg-muted relative overflow-hidden rounded-sm border border-border shadow-sm group">
                  <img 
                    src="/images/belle-of-louisville-steamboat.jpg" 
                    alt="The Idlewild Steamboat at Rose Island Landing" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="text-xs text-center mt-2 text-muted-foreground italic">The Idlewild (now Belle of Louisville)</p>
              </div>
              
              <div className="md:w-2/3">
                <h2 className="font-heading text-3xl text-primary mb-4">"America Claims Victory": The Great Race of 1930</h2>
                <p className="font-accent text-sm text-gold uppercase tracking-widest mb-6">July 16, 1930 • River Legends</p>
                
                <div className="prose prose-p:font-body prose-p:text-muted-foreground prose-p:leading-relaxed">
                  <p>
                    On a Tuesday afternoon in July 1930, the Ohio River became a raceway. As reported by the <em>Courier-Journal</em>, an "impromptu" six-mile sprint erupted between two titans of the river: the steamer <em>America</em> and the <em>Cincinnati</em>.
                  </p>
                  <p>
                    It began at 3:00 PM as the <em>America</em>, piloted by Roy A. McBride, prepared to depart for Rose Island. When the <em>Cincinnati</em> pulled into the main channel alongside her, it was "accepted as a challenge." Word spread instantly to the shore, where "hundreds of persons followed in automobiles" along River Road to witness the spectacle.
                  </p>
                  <p>
                    The <em>America</em> ultimately defeated her rival by a quarter-mile, arriving triumphantly at the Rose Island landing. While the <em>Cincinnati</em> carried a private party, the <em>America</em> carried a group for an outing arranged by Levy Brothers—and the bragging rights of the river.
                  </p>
                  <p className="mt-4 text-xs">
                    <a 
                      href="https://www.newspapers.com/article/the-courier-journal-rose-island-steamboa/183867048/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gold hover:text-primary transition-colors border-b border-gold/30 hover:border-primary"
                    >
                      Read the original report in <em>The Courier-Journal</em> (July 16, 1930) →
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.article>

        </div>
      </section>
    </Layout>
  );
}
