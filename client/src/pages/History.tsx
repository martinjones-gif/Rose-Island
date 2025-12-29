import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function History() {
  return (
    <Layout>
      {/* Header Section */}
      <div className="bg-muted/30 pt-32 pb-16 border-b border-border relative overflow-hidden">
        {/* <div className="absolute inset-0 opacity-10 bg-[url('/pattern-vintage.png')] bg-repeat"></div> */}
        <div className="container text-center relative z-10">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary mb-6 drop-shadow-sm">David Rose: Founder and Visionary</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-accent tracking-widest uppercase">
            The Man Behind the Park
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
            {/* Introduction */}
            <p className="text-xl md:text-2xl font-body text-primary/90 leading-relaxed first-letter:float-left first-letter:text-7xl first-letter:font-heading first-letter:text-gold first-letter:mr-3 first-letter:mt-[-10px] mb-8">
              David B. G. Rose was born in Louisville, Kentucky, in the mid-1860s and established himself as a successful businessman and entrepreneur long before Rose Island opened its gates.
            </p>

            {/* Business Empire */}
            <h3 className="text-3xl mt-12 mb-6 text-primary border-b border-gold/30 pb-4 inline-block">Business Empire</h3>
            <p>
              By the early 1920s, Rose was a prominent figure in Louisville's business community. His primary enterprise was the Standard Printing Company, where he served as president. Beyond printing, Rose maintained documented business interests across multiple industries, with ties to twenty-six different corporations over the course of his career.
            </p>
            <p>
              His involvement with the Louisville & Jeffersonville Ferry Company proved instrumental to the creation of Rose Island. With a deep understanding of river transportation and regional tourism patterns, Rose recognized an opportunity others overlooked: building a destination resort that could succeed regardless of how visitors arrived.
            </p>

            {/* Vintage Collage: Portrait over Map */}
            <div className="my-16 relative max-w-2xl mx-auto">
              {/* Background Map */}
              <div className="relative z-0 shadow-lg border-4 border-white/10 rounded-sm overflow-hidden sepia-[0.2]">
                <img 
                  src="/images/rose-island-map.png" 
                  alt="Rose Island Park Map" 
                  className="w-full h-auto object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              {/* Foreground Portrait */}
              <div className="absolute -bottom-12 -right-4 md:-right-12 w-48 md:w-64 z-10 transform -rotate-2 shadow-2xl">
                <div className="bg-white p-2 pb-8 shadow-md rotate-1">
                  <div className="aspect-[3/4] relative overflow-hidden bg-gray-200">
                    <img 
                      src="/images/david-rose.png" 
                      alt="David B. G. Rose Portrait" 
                      className="w-full h-full object-cover sepia-[0.4] contrast-[1.1]"
                    />
                  </div>
                  <p className="text-xs text-center mt-2 font-handwriting text-gray-600">David B. G. Rose</p>
                </div>
              </div>
            </div>

            {/* The Rose Island Vision */}
            <h3 className="text-3xl mt-12 mb-6 text-primary border-b border-gold/30 pb-4 inline-block">The Rose Island Vision</h3>
            <p>
              In 1923, Rose and his wife of twenty-seven years, Esther, purchased the 118-acre Ohio River peninsula then known as Fern Grove from the Louisville & Jeffersonville Ferry Company for $30,000, with a $10,000 down payment and a $20,000 mortgage. The property had previously operated as a modest church camp and picnic grounds, but Rose envisioned something unprecedented for rural Indiana—a full-scale resort capable of competing with urban amusement parks.
            </p>
            <p>
              Rose began limited operations under the Rose Island name while initiating major construction in March 1924. Over the next fifteen months, he invested an additional $220,000 in development, bringing his total investment to approximately $250,000 (roughly $4.4 million in today's dollars). These funds financed modern infrastructure throughout the park, including upgrades to the existing hotel, a filtered swimming pool, twenty rental cottages, a large dining hall and dance pavilion, a complete electric lighting plant with an illuminated whiteway, and a range of amusement rides.
            </p>
            <p>
              Contemporary newspaper accounts document ferry steamers transporting workers, construction materials, and even a portable sawmill to the site.
            </p>
            <p>
              The grand reopening in June 1925 marked the completion of the resort as Rose had envisioned it.
            </p>
            
            <div className="bg-muted/30 p-6 border-l-4 border-gold my-8 italic text-muted-foreground">
              <p className="mb-0 text-sm">
                <strong>Note:</strong> Rose Island's opening date is often cited as 1923, 1924, or 1925. Contemporary newspaper evidence supports a phased development: land acquisition in 1923, major construction beginning in March 1924, and the formal reopening of the completed resort in June 1925.
              </p>
            </div>

            {/* Innovation and Marketing */}
            <h3 className="text-3xl mt-12 mb-6 text-primary border-b border-gold/30 pb-4 inline-block">Innovation and Marketing</h3>
            <p>
              Rose approached the park with theatrical flair matched by disciplined business strategy. He marketed Rose Island as a place of "exceptional purity," from its filtered swimming pool to a cold-water fountain supplied by the park's ice house and promoted as an underground aquifer. Practical infrastructure and promotional storytelling worked together, reinforcing the park's identity as a modern, wholesome destination.
            </p>
            <p>
              When the Municipal Bridge connecting Louisville to Indiana opened in 1929, threatening ferry-dependent amusement parks, Rose Island's destination-based model proved resilient. Visitors came for the experience, not merely convenience.
            </p>

            {/* Image Placeholder 2 */}
            <div className="my-12 bg-muted/20 border border-border p-2 rounded-sm shadow-sm">
              <div className="aspect-video bg-muted flex items-center justify-center text-muted-foreground italic">
                [Image Placeholder: Rose Island Marketing Material or Park View]
              </div>
              <p className="text-sm text-center mt-2 text-muted-foreground italic">Promotional material for Rose Island, highlighting its modern amenities.</p>
            </div>

            {/* The Great Depression Years */}
            <h3 className="text-3xl mt-12 mb-6 text-primary border-b border-gold/30 pb-4 inline-block">The Great Depression Years</h3>
            <p>
              Rose Island continued seasonal operations throughout the Great Depression, a period during which more than eighty percent of American amusement parks closed permanently. From 1923 through 1936, the park adapted to economic pressures while maintaining its identity as a regional resort.
            </p>

            {/* The 1937 Flood */}
            <h3 className="text-3xl mt-12 mb-6 text-primary border-b border-gold/30 pb-4 inline-block">The 1937 Flood</h3>
            <p>
              On January 27, 1937, the Ohio River crested at 85.4 feet, the highest level ever recorded. Rose Island was completely submerged, with floodwaters reaching as high as twenty-five feet in some areas. Virtually all structures, rides, and infrastructure were destroyed.
            </p>
            <p className="font-bold text-primary">
              Rose Island never reopened.
            </p>

            {/* Later Years */}
            <h3 className="text-3xl mt-12 mb-6 text-primary border-b border-gold/30 pb-4 inline-block">Later Years</h3>
            <p>
              United States Census records from 1930 and 1940 document Rose's continued residence in Louisville at a prestigious address, with household staff that included a live-in maid and butler. His occupation is consistently listed as president of Standard Printing Company.
            </p>
            <p>
              David B. G. Rose's obituary, published in <em>The Louisville Courier-Journal</em>, occupied nearly half a page and detailed his extensive business connections, civic involvement, and continued corporate leadership well into his eighties.
            </p>
            <p>
              David B. G. Rose died in Louisville in 1958, twenty-one years after the flood. His wife Esther had predeceased him in 1947, after more than fifty years of marriage.
            </p>

            {/* Divider */}
            <div className="flex justify-center my-12">
              <span className="text-gold text-2xl tracking-[1em]">✦ ✦ ✦</span>
            </div>

            {/* Primary Sources */}
            <div className="bg-muted/10 border border-border p-8 rounded-sm">
              <h4 className="font-heading text-xl text-primary mb-4 uppercase tracking-wider text-center">Primary Sources</h4>
              <p className="mb-4 text-sm italic text-center">The documented history of David Rose is drawn from:</p>
              <ul className="list-none space-y-2 text-sm text-muted-foreground text-center">
                <li>United States Census Records (1900, 1910, 1920, 1930, 1940)</li>
                <li>Property deeds and legal documents related to the Rose Island purchase (Jeffersonville, 1923)</li>
                <li><em>The Courier-Journal</em>, March 19, 1924, Page 5, "Amusement Park Started"</li>
                <li>Louisville city directories and business registries</li>
                <li>Louisville Courier-Journal archives and obituary records</li>
                <li>Historical records maintained by the Clark County Historical Society</li>
              </ul>
            </div>

            {/* Call to Action */}
            <div className="mt-12 text-center">
              <p className="text-lg italic text-primary/80 mb-6">
                The complete story of David Rose and Rose Island, including personal accounts from the families who built and operated the park, is told in <Link href="/about-book" className="text-gold hover:underline decoration-dotted underline-offset-4">The Rose Island Story</Link>.
              </p>
            </div>

          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
