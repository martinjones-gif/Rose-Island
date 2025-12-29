import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Calendar, ShoppingCart, BookOpen } from "lucide-react";

export default function PreOrder() {
  const launchDate = new Date("2025-07-01T00:00:00");
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +launchDate - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const retailers = [
    { name: "Amazon", url: "#", price: "$24.99", type: "Hardcover & Kindle" },
    { name: "Barnes & Noble", url: "#", price: "$24.99", type: "Hardcover & Nook" },
    { name: "Bookshop.org", url: "#", price: "$24.99", type: "Support Local Bookstores" },
    { name: "IndieBound", url: "#", price: "$24.99", type: "Find a Local Store" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay" />
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 border border-secondary/50 text-secondary text-sm font-accent tracking-widest uppercase mb-6">
              Coming Summer 2025
            </span>
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6">
              Pre-Order Now
            </h1>
            <p className="font-body text-xl md:text-2xl max-w-2xl mx-auto mb-12 text-white/90 italic">
              Be among the first to return to Rose Island. Secure your copy today and receive exclusive digital bonuses.
            </p>

            {/* Countdown Timer */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                  <div className="font-heading text-4xl md:text-5xl font-bold text-secondary mb-1">
                    {String(value).padStart(2, '0')}
                  </div>
                  <div className="text-xs uppercase tracking-widest text-white/70">{unit}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Retailer Links */}
      <section className="py-20 bg-background">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Book Cover */}
            <div className="relative aspect-[2/3] md:aspect-auto md:h-[600px] rounded-lg overflow-hidden shadow-2xl border-4 border-white rotate-[-2deg]">
              <img 
                src="/book-cover-mockup.jpg" 
                alt="The Rose Island Story Book Cover" 
                className="object-cover w-full h-full"
              />
              <div className="absolute top-4 right-4 bg-secondary text-white w-20 h-20 rounded-full flex items-center justify-center font-heading font-bold text-xl shadow-lg rotate-12">
                New!
              </div>
            </div>

            {/* Purchase Options */}
            <div className="flex flex-col justify-center space-y-8">
              <div>
                <h2 className="font-heading text-3xl font-bold text-primary mb-4">Choose Your Retailer</h2>
                <p className="text-muted-foreground mb-8">
                  Pre-order from your favorite bookseller. All pre-orders include a digital map of 1923 Rose Island and a "Lost Recipes of the Resort" PDF booklet.
                </p>
              </div>

              <div className="space-y-4">
                {retailers.map((retailer) => (
                  <a 
                    key={retailer.name}
                    href={retailer.url}
                    className="group flex items-center justify-between p-4 bg-white border border-border rounded-lg hover:border-secondary hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-colors">
                        <ShoppingCart className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-primary group-hover:text-secondary transition-colors">{retailer.name}</h3>
                        <p className="text-xs text-muted-foreground">{retailer.type}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-bold text-primary">{retailer.price}</span>
                      <Button size="sm" variant="outline" className="group-hover:bg-secondary group-hover:text-white group-hover:border-secondary">
                        Buy
                      </Button>
                    </div>
                  </a>
                ))}
              </div>

              <div className="bg-muted/30 p-6 rounded-lg border border-border mt-8">
                <div className="flex items-start gap-4">
                  <BookOpen className="w-6 h-6 text-secondary mt-1" />
                  <div>
                    <h4 className="font-bold text-primary mb-2">Book Club Bulk Orders</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Ordering for a book club, library, or school? Contact us for special bulk pricing and discussion guides.
                    </p>
                    <Button variant="link" className="text-secondary p-0 h-auto font-bold">
                      Request Bulk Pricing →
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Launch Event Teaser */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <Calendar className="w-12 h-12 mx-auto mb-6 text-secondary" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Official Launch Party</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join us on July 1st, 2025 at the Charlestown State Park for a special launch event featuring guided tours of the Rose Island ruins.
          </p>
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-accent tracking-wider">
            Get Event Details
          </Button>
        </div>
      </section>
    </Layout>
  );
}
