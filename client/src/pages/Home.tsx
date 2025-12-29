import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  // Mailchimp form logic handled via native form submission

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('/hero-bg-couple-v2.jpg')",
            filter: "brightness(0.7) sepia(0.2)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-0" />
        
        <div className="container relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-accent text-lg md:text-xl tracking-[0.3em] uppercase mb-4 text-gold">Coming in 2026</h2>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6 drop-shadow-lg">
              The Rose Island Story
            </h1>
            <p className="font-accent text-lg md:text-xl tracking-widest uppercase mb-6 text-white/80">
              A Novel by Martin Jones
            </p>
            <p className="font-body text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-white/90 italic">
              "The river runs swift, but history has a way of catching up."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="mailto:author@theroseislandstory.com">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-accent tracking-wider text-lg px-8 py-6">
                  Contact the Author
                </Button>
              </a>

            </div>

            {/* Waitlist Form */}
            <div className="mt-12 max-w-md mx-auto">
              <p className="font-accent text-sm tracking-widest uppercase mb-4 text-white/80">
                Join the Waitlist for Updates
              </p>
              <form 
                action="https://theroseislandstory.us7.list-manage.com/subscribe/post?u=34a331532c1864e5b9a5f59e4&amp;id=adbde52c4e&amp;f_id=0021b3e0f0" 
                method="post" 
                id="mc-embedded-subscribe-form" 
                name="mc-embedded-subscribe-form" 
                className="flex gap-2" 
                target="_blank"
              >
                <input 
                  type="email" 
                  name="EMAIL" 
                  id="mce-EMAIL"
                  placeholder="Enter your email address" 
                  className="flex-1 bg-white/10 border border-white/30 rounded px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-white/60 font-body transition-colors"
                  required
                />
                {/* Real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                  <input type="text" name="b_34a331532c1864e5b9a5f59e4_adbde52c4e" tabIndex={-1} defaultValue="" />
                </div>
                <Button type="submit" className="bg-white text-primary hover:bg-white/90 font-accent tracking-wider uppercase px-6">
                  Join
                </Button>
              </form>
              <p className="text-xs text-white/40 mt-2 italic">
                Be the first to know when the book launches.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
