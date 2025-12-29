import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Layout from "@/components/Layout";
import { Helmet } from "react-helmet";

export default function FAQ() {
  const faqs = [
    {
      question: "What was Rose Island?",
      answer: "Rose Island was a popular amusement park and summer resort located on a peninsula between the Ohio River and Fourteen Mile Creek in Southern Indiana. It operated from 1923 until the Great Flood of 1937."
    },
    {
      question: "Can I visit Rose Island today?",
      answer: "Yes! The site is now part of Charlestown State Park. While the original buildings are gone, you can hike the trails to see the foundations of the hotel, the swimming pool, and the stone pillars of the entrance."
    },
    {
      question: "Is there a ferry service to Rose Island?",
      answer: "No, the historic ferry service that once transported guests from Louisville is no longer in operation. Today, access is via the Portersville Bridge at Charlestown State Park, followed by a hike down to the river level."
    },
    {
      question: "Can I camp on Rose Island?",
      answer: "Camping is not permitted on the Rose Island peninsula itself to preserve the historic ruins. However, Charlestown State Park offers a full-service campground with electric sites nearby on the upper level of the park."
    },
    {
      question: "Are there guided tours of Rose Island?",
      answer: "Yes, Charlestown State Park occasionally offers interpretive history hikes led by naturalists. You can also explore the site on your own using the interpretive signage placed throughout the trail loop."
    },
    {
      question: "Is the book fiction or non-fiction?",
      answer: "The Rose Island Story is a historical novel. While the setting and many events are based on true history, the main characters and their personal journeys are fictionalized to bring the emotional story of the era to life."
    },
    {
      question: "When will the book be released?",
      answer: "The book is scheduled for release in 2026. You can join the waitlist on the Home page to be notified when pre-orders open."
    },
    {
      question: "How can I contact the author?",
      answer: "You can reach out via the Contact page on this website. Martin loves hearing from readers and history enthusiasts!"
    }
  ];

  // Generate FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <Layout>
      <Helmet>
        <title>FAQ - The Rose Island Story</title>
        <meta name="description" content="Frequently asked questions about Rose Island history, visiting the site today, and the upcoming historical novel." />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <div className="min-h-screen pt-24 pb-12 px-4 bg-background text-foreground">
        <div className="container max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="font-heading text-4xl md:text-5xl text-gold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground text-lg">
            Common questions about the book, the history, and the park.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-card/50 backdrop-blur-sm border border-gold/20 rounded-lg p-6 md:p-8"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-gold/20">
                <AccordionTrigger className="text-lg font-heading text-gold hover:text-gold/80 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
        </div>
      </div>
    </Layout>
  );
}
